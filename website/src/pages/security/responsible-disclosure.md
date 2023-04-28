---
title: Responsible Disclosure
---

# Responsible Disclosure

<div class="pill">Updated November 14, 2022</div>

If you believe you have discovered a vulnerability in a Working Group Two product please report it. Visit https://www.wgtwo.com/.well-known/security.txt for contact information.

## Services in scope

In principle, any Working Group Two owned web service that handles reasonably sensitive user data is intended to be in scope. This includes virtually all the content in the following domains:

- `*.wgtwo.com`

On the flip side, the program has the following important exclusions to keep in mind:

- `*.dev.wgtwo.com`
- `\*.sandbox.*.wgtwo.com`

## Qualifying vulnerabilities

Any design or implementation issue that substantially affects the confidentiality or integrity of user data is likely to be in scope for the program. Common examples include:

- Cross-site scripting
- Cross-site request forgery
- Authentication or authorization flaws
- Server-side code execution bugs

## Responsible Disclosure Policy

Safety and data security is of utmost priority for Working Group Two. If you are a security researcher and have discovered a security vulnerability in our code base, application, or API, we appreciate your help in disclosing it to us in a responsible manner.

- Please refrain from requesting compensation for reporting vulnerabilities.
- We will acknowledge receipt of your vulnerability report and send you regular updates about our progress.
- If your report is reproducible as an exploit and results in a change to the code base or documentation of a Working Group Two product, we will, at your option, publicly acknowledge your responsible disclosure in our [Hall of Fame](https://www.wgtwo.com/security/bugbounty#security-research-hall-of-fame) after a fix is applied.
- After the fix, we ask security researchers to wait 30 days after a release before announcing the specific details of a vulnerability and to provide Working Group Two with a link to any such announcements.

Many thanks to the security researchers who have responsibly contributed their findings to make the Working Group Two products and services more secure.

## Security Research Hall of Fame

- Rajat Waghade (2023)
- Druvash Jani (2023)
