---
slug: telenorconnexion
title: Showcase - Telenor Connexion
description: Telenor finds the scalability of VoLTE of high essence. With a cloud-based solution delivered to Telenor as a service, WG2 is able to fulfil the global scalability needs of Telenor, while also complying to the high expectations of security and availability at Telenor.
advancedPage: true
---

import styles from "./components/util.module.css";

import TwoColumnSection from "./components/twocolumnsection";
import Column from "./components/column";

import GridSection from "./components/gridsection";
import Metric from "./components/metric";

import ResourcesSection from "./components/resourcessection";
import Resource from "./components/resource";

import Section from "./components/section";
import Quote from "./components/quote";

import BigTitle from "./components/bigTitle";
import Cards from "./components/cardContainer";
import Card from "./components/card";

<TwoColumnSection>

  <Column sticky>
    <h2 className={styles.mb20}>Telenor Connexion</h2>
    <BigTitle logoUrl="/img/telenorconnexion-showcase.jpg">
    </BigTitle>
  </Column>

  <Column>
    <Cards>
      <Card title="CHALLENGE">
        <p>Telenor manages international IoT deployments for global customers in some 200 countries and today operates more than 20 million connected devices to enterprises such as Volvo, Scania, Hitachi, Verisure Securitas Direct and Husqvarna.</p>
        <p>The gradual shutdown of legacy 2G/3G networks across the world makes VoLTE (Voice over LTE/4G) mandatory to provide voice services for critical use cases such as assistance calls for smart elevators, elderly monitoring, and car emergency/helpline calls.</p>
      </Card>
      <Card title="SOLUTION">
        <p>WG2 was selected to provide the VoLTE technology to Telenor Connexion’s subscribers, wherever in the world they have 4G network coverage only, delivered as-a-service. WG2’s VoLTE-as-a-service has been integrated with Telenor Connexion’s internal systems, as well as to relevant service partners platforms including the Aeris IoTA (Internet of Things Accelerator), to jointly operate for subscriber network access, authentication, and services profile. It has also been integrated to handle calls outside VoLTE domain (legacy mobile circuit switching / public switched telephone network). VoLTE from WG2 is built on IMS (IP Multimedia Subsystem) infrastructure, which enables voice and messaging over IP.</p>
        <p>VoLTE-as-a-service provides benefits such as reduced infrastructure investment, rapid deployment, scalability, expertise and support, continuous upgrades and innovation, geographic reach, interconnectivity, and cost optimization.</p>
      </Card>
    </Cards>
  </Column>
  
</TwoColumnSection>

<GridSection bgColor="#232e33">
  <Metric title="20 million">connected devices in the Telenor IoT network</Metric>
</GridSection>

<ResourcesSection>
  <Resource title="Visit Telenor" link="https://iot.telenor.com">Visit the official page of Mobi</Resource>
  <Resource title="Press release from wgtwo" link="https://www.wgtwo.com/blog/wg2-volte-for-iot/"><em>Published 2023-06-22</em></Resource>
</ResourcesSection>

<Section bgColor="#f6f6f6">
  <Quote by="Martin Whitlock, CTO, Telenor Connexion">
    For us, the scalability of VoLTE is of high essence. With a cloud-based solution delivered to us as a service we find that WG2 can fulfil our global scalability needs, while also complying to our high expectations of security and availability.
  </Quote>
</Section>
