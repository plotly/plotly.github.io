---
permalink: /security-advisories/2016-11-24-plotly-xss-advisory/
title: Plotly Security Advisory - XSS in Plotly web interface
layout: single_new
support: true
---

## Summary of issue

Two separate Cross-Site Scripting (XSS) vulnerabilities have been fixed in the Plotly web interface.

1. By tricking an unsuspecting user into following a specially crafted link to [Plotly Cloud](https://plot.ly), an attacker could perform any action any action using the victim's
credentials on that site.

2. An attacker could trick an unsuspecting user into viewing a specially crafted dashboard on [Plotly Cloud](https://plot.ly) or a [Plotly On-Premise](https://plot.ly/product/enterprise/) server. The vulnerability would have allowed the attacker to perform any action using the victim’s credentials on that site.

Thanks to WIP - get permission

## Affected products and versions

* Plotly Cloud was vulnerable to both issues prior to 2016-11-04.
* Plotly On-Premise version 2.0.0 is vulnerable to the second issue.

## Resolution

* The issue has been fixed in Plotly On-Premise version 2.0.1, which is available as a free upgrade to all current Plotly
On-Premise customers.
* Both issues were fixed in Plotly Cloud on 2016-11-04.

## General notes regarding security reporting

Please send all security reports concerning Plotly security products to [security@plot.ly](mailto:security@plot.ly).

[Return to the main Plotly Security Advisories page](http://help.plot.ly/security-advisories/)
