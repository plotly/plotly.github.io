---
permalink: /security-advisories/2017-01-27-plotly-dashboard-creator-xss-advisory
title: Plotly Security Advisory - XSS in Chart Studio Dashboard Creator
layout: single_new
support: true
---

## Summary of issue

A Cross-Site Scripting (XSS) vulnerability has been fixed in the Chart Studio Dashboard Creator.

An attacker can trick an unsuspecting user into viewing a specially crafted dashboard, then clicking a certain link.  The vulnerability would have allowed the attacker to perform any action using the victim's
credentials on that site.

Thanks to Lucky Sen and Mahmoud Gamal for reporting variations of this issue.

## Affected products and versions

* Chart Studio On-Premise version 2.0.0 through 2.1.0.

## Resolution

* This issue has been fixed in Chart Studio On-Premise version 2.1.1, which is available as a free upgrade to all Chart Studio
On-Premise customers.
* The issue was fixed in Chart Studio Cloud on 2017-01-18.

## General notes regarding security reporting

Please send all security reports concerning Plotly products to [security@plot.ly](mailto:security@plot.ly).

[Return to the main Plotly Security Advisories page](http://help.plot.ly/security-advisories/)
