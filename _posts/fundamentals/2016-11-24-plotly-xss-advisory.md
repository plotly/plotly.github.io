---
permalink: /security-advisories/2016-11-24-plotly-xss-advisory/
title: Plotly Security Advisory - XSS in Chart Studio web interface
layout: single_new
support: true
---

## Summary of issue

Two separate Cross-Site Scripting (XSS) vulnerabilities have been fixed in the Chart Studio web interface.

1. By tricking an unsuspecting user into following a specially crafted link to [Chart Studio Cloud](https://plot.ly), an attacker could perform any action any action using the victim's
credentials on that site.

2. An attacker could trick an unsuspecting user into viewing a specially crafted dashboard on [Chart Studio Cloud](https://plot.ly) or a [Chart Studio On-Premise](https://plot.ly/product/enterprise/) server. The vulnerability would have allowed the attacker to perform any action using the victim’s credentials on that site.

Thanks to Nassim Bouali and Mahmoud G. for reporting these issues.

## Affected products and versions

* Chart Studio Cloud was vulnerable to both issues prior to 2016-11-04.
* Chart Studio On-Premise version 2.0.0 is vulnerable to the second issue.

## Resolution

* Both issues were fixed in Chart Studio Cloud on 2016-11-04.
* The second issue issue has been fixed in Chart Studio On-Premise version 2.0.1, which is available as a free upgrade to all current Chart Studio On-Premise customers. (The first issue has never affected Chart Studio On-Premise.)

## General notes regarding security reporting

Please send all security reports concerning Plotly products to [security@plot.ly](mailto:security@plot.ly).

[Return to the main Plotly Security Advisories page](http://help.plot.ly/security-advisories/)
