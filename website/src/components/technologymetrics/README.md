Technology Metrics

2021
30 days
https://grafana.dub.prod.wgtwo.com/d/O7ZtvbWW2/telco-spammers?orgId=1&from=now-30d&to=now
SMS = 13mill = 156 mil
Voicecalls = 26.8mill = 321.6 mil
mms = 694k = 8.32 mil

https://grafana.dub.prod.wgtwo.com/d/SkQilwJZz/packet-gateway-service?viewPanel=4&orgId=1
Data Upload = 4.871tb (24 hours) = 1,753 petabyte
https://grafana.dub.prod.wgtwo.com/d/SkQilwJZz/packet-gateway-service?viewPanel=3&orgId=1
Data Download = 52.43 (24 hours) = 18,874 petabyte

https://grafana.dub.prod.wgtwo.com/d/5xQUPAMiz/voice-overview?viewPanel=15&orgId=1&from=now-7d&to=now
Most popular time of day to make a voice call = 16:10

https://prometheus.dub.prod.wgtwo.com/graph?g0.range_input=1h&g0.expr=sum(increase(pamp_invalid_dropped_msgs_total%5B24h%5D))&g0.tab=1 / https://wgtwo.slack.com/archives/CR1118J8L/p1643797616369639?thread_ts=1643733019.002679&cid=CR1118J8L
SS7 Firewall Blocked Traffic = 3670\*365 = 1.34 million blocked sigtran SS7 Traffic

Connectivity
https://grafana.dub.prod.wgtwo.com/d/mtXY4FUZk/hussar?editPanel=4&viewPanel=4&orgId=1&from=now-7d&to=now
201 at 8pm per second = 12060 per minute = 723600 per hour = 6,338,736,00 billion events

Voicemail
https://prometheus.dub.prod.wgtwo.com/graph?g0.range_input=1h&g0.expr=sum(increase(gdpr_officer_deleted_voicemail_from_db_total%5B24h%5D))&g0.tab=1
7016 \*365 = 2.56 million
