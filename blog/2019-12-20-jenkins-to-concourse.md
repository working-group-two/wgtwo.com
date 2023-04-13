---
slug: replacing-jenkins-with-concourse
title: "We killed the butler: Replacing Jenkins with Concourse"
date: 2019-12-20
tags: [infrastructure, CICD, devops]
authors: anna-kennedy
---

At **WG2**, we try to use CI/CD pipelines to automate all of our repetitive tasks when it comes to code and infrastructure deployment and testing, such as:

<!--truncate-->

* running unit tests on each pull request
* building and running integration tests with bazel on every merge to the monorepo
* building container images and upload them to the registry
* scanning all images for security flaws
* running acceptance tests in the staging environment
* syncing secrets between different sources
* notifying slack if changes are made in Kubernetes

We had been using [Jenkins](https://jenkins.io/) to run such pipelines, but having to configure it by navigating a web GUI made it difficult to maintain, redeploy, and upgrade, so we decided to look for alternatives.

![Jenkins](/img/blog/jenkins-to-concourse/jenkins.png)

The majority of our code lives in a monorepo, and we use Bazel to manage builds and tests.
We try to do all of our infrastructure configuration via [gitops](https://www.gitops.tech/) so it was important that a continuous integration and deployment system not only play nicely with our existing structures, but be itself configurable from code.

We spent time investigating other options, and eventually settled on **[Concourse](https://concourse-ci.org/), a cloud-native CI/CD server where tasks are deployed in containers, and config is stored as yaml**.


## Infrastructure as code

We run Concourse in Kubernetes, so the setup and configuration itself is all done with yaml files and kubectl. It's fast and easy to upgrade and redeploy.

Within Concourse, the pipeline configuration is entirely yaml-based; there are no buttons in the UI except for an abort/re-run button.

```
jobs:
- name: run-acceptance-tests-staging
  plan:
  - task: run-tests
    config:
      inputs:
      - name: monorepo
      run:
        path: /bin/bash -c runtests.sh
    on_failure:
      put: notify-slack-ci
```

![Concourse task](/img/blog/jenkins-to-concourse/concourse_task.png)

Pipelines are made up of jobs that run in series or parallel; jobs consist of tasks.
Pipelines, jobs and tasks are described in code and automatically visualised in the UI.
Changes to pipelines are applied by updating the yaml file and running Concourse's [fly cli](https://concourse-ci.org/fly.html) tool.


## Containerised deployment

Concourse runs every job in its own container, which means that every job uses an entirely clean, reproducible environment. Any dependencies required for a task can be pre-installed in the image.
This is a huge improvement for us over Jenkins, where dependencies were installed to the entire worker node, and artifacts from previous builds were left lying about on the server.

We use docker containers, and we also run Concourse itself as a container, which means a bit of docker-in-docker magic.
It look a little work to build an image we were happy with, but beyond that it went surprisingly smoothly for us on the whole.
The only drawback is that we have to run images in privileged mode, but in our self-managed Kubernetes cluster this isn't really too much of an issue.

There were some challenges in figuring out what resources needed to be allocated; we settled on three worker nodes and a maximum of 2 active tasks per worker. We see a little bit of slowness some afternoons when the pull-requests are coming thick and fast, but the cluster remains stable. It would be nice to set some autoscaling here to cope with short-term peaks in load.

![Concourse pipeline](/img/blog/jenkins-to-concourse/concourse_pipeline.png)


## Debugging

Since the tasks all run in containers, it's easy to debug issues locally by running the same image on the laptop as is running in Concourse.
Alternatively, the [fly execute](https://concourse-ci.org/tasks.html#running-tasks) cli tool runs a local project in a container in Concourse, a nice interim step when trying to get a deploy working.

The [fly intercept](https://concourse-ci.org/builds.html#fly-intercept) tool offers a way to log into a running container in concourse to troubleshoot:

```
$ fly intercept -j ecs-services
1: build #27, step: monorepo, type: get
2: build #27, step: notify-slack-ci, type: get
3: build #27, step: notify-slack-ci, type: put
4: build #27, step: run-acceptance-tests-staging, type: task
choose a container: 4
root@02f69d15-b7be-4f2e-43f7-24f549071bb1:/tmp/build/3a58ea39#

```

## Resource types and extending Concourse

There are a large number of [resource types](https://github.com/concourse/concourse/wiki/Resource-Types) available for Concourse, making it fairly straightforwards to configure pipelines.

As resource types in Concourse are all based on containers, extending Concourse means introducing a new container that can be called from Concourse.

A resource type needs to implement the following executables/scripts:

* check (checking new versions of the resource, eg. is there a new pull request)
* in (pulling a new version of the resource down, eg. download code from a pull request)
* out (pushing a new version of the resource up, eg. push a build result to Github)

These binaries need to be placed under /opt/resource in the docker container.
Concourse calls these binaries with JSON payload and optional parameters that can all be found [here](https://concourse-ci.org/implementing-resource-types.html).
What is done in those executables/scripts is up to the implementer, but it is really easy to extend concourse using this mechanism.


## Learning curve

The move from Jenkins to Concourse has overall been a very positive step for us. If there has been any drawback it's that implementing any brand new system usually means something of a learning curve, and Concourse is no exception.

The documentation is sometimes a bit minimal, but now that we have a number of pipelines up and running we're finding it easier and easier to add more.
Similarly, it took some time to settle on how to allocate resources such that we cope with load but aren't wasteful at quiet times.


## Summary

The biggest improvements of Concourse over Jenkins have been:

* clean UI, no clicky clicky
* every build uses its own container - no shared dependencies or artifacts
* configuration of Concourse in code (in Kubernetes) - easy to upgrade and redeploy Concourse
* configuration of pipelines in code - good visibility into running tasks
* wide range of resource types
* ability to extend resources
* easy to troubleshoot and debug

Overall, we're pretty pleased with Concourse. There are a few features we're eagerly awaiting in future releases, such as re-running targeted builds, but for the most part it has been relatively straightforwards to import all our existing jobs from Jenkins and add more.


## References

* <https://github.com/concourse>
* <https://content.pivotal.io/blog/the-making-of-a-cloud-native-ci-cd-tool-the-concourse-journey>
* <https://github.com/karlkfi/concourse-dcind>
* <https://github.com/concourse/docker-image-resource/blob/master/assets/common.sh>
* <https://concoursetutorial.com>
