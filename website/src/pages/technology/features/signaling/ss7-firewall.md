---
slug: ss7-firewall
title: SS7 Firewall
tags: [4G, 5G]
techFeaturePage: true
---

# SS7 Firewall

The SS7 firewall is a 'signalling firewall' used to protect mobile operators from SS7 Attacks. The SS7 firewall protects legacy networks (SS7 based) specifically against potential attacks, unauthorized senders, malformed messages, stolen mobile identities and much more.

**wgtwo** has implemented an SS7 firewall that will block/reject SS7 signaling based on security best practices outlined by GSMA (FS.11 and FS.19). Some example rules include checks on:

- Cross-layer address consistency checks (e.g. SCCP <=> MAP)
- Screening verifies messages originate in subscriber’s VPLMN
- MAP operations that return actual subscriber’s IMSI, cell-location, and MSC are not implemented (SMS Home-Routing by default)
- Message filtering is based on several criteria such as the time and location of the last update
  - SS7 Protocol (SCCP CgPA/CdPA, OpCode, ACN, TCAP message type, IMSI, ...)
  - Diameter protocol (Origin-/Destination-Host/-Realm, Command Code, Application Id, IMSI, ...)
  - Diameter Application ID / Command Code filtering and consistency check
  - Verify address fields consistency, limit message length / grouped AVPs nesting depth
  - Validate protocol consistency through input validation (e.g. doubled address AVPs, wrong AVP address, AVP Type, and format checks)
