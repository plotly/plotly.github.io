---
permalink: /security-advisories/2017-01-27-plotlyjs-xss-advisory/
title: Plotly Security Advisory - XSS in plotly.js
layout: single_new
support: true
---

## Summary of issue

A Cross-Site Scripting (XSS) vulnerability has been fixed in the plotly.js library.

An attacker can trick an unsuspecting user into viewing a specially crafted plot, then moving the mouse over a certain
part of the plot, on a site that uses plotly.js (including the cloud version
of [Chart Studio](https://plot.ly)).  The vulnerability would have allowed the attacker to perform any action using the victim's
credentials on that site.

Thanks to Lucky Sen for reporting this issue.

## Affected products and versions

* plotly.js versions prior to 1.22.0.
* Chart Studio On-Premise version 2.0.1 and older.

## Resolution

* This issue is fixed in plotly.js version 1.22.0.
* This issue has been fixed in Chart Studio On-Premise version 2.0.1, which is available as a free upgrade to all Chart Studio
On-Premise customers.
* The issue was fixed in Chart Studio Cloud on 2017-01-11.

## General notes regarding security reporting

Please send all security reports concerning Plotly products to [security@plot.ly](mailto:security@plot.ly).

[Return to the main Plotly Security Advisories page](http://help.plot.ly/security-advisories/)
