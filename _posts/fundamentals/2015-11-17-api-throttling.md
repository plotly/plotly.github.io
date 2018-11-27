---
layout: single
title: Chart Studio API rate limits
permalink: /api-rate-limits/
state: active
meta_description: Details on Chart Studio API rate limits and throttling.
---

# Chart Studio API rate limits

Updated August 01, 2017

### Introduction

Chart Studio throttles the number of requests made to its servers. This keeps server traffic and costs manageable while still providing a useful experience. If you exceed the number of allowed requests for your plan, you will receive a message and have to wait 1 to 24 hours to make additional requests.

Chart Studio uses the <a href="https://api.plot.ly/v2/">V2</a> version of the Plotly API. While the popular API libraries (Python, R, MATLAB) use both the <a href="https://plot.ly/rest/">V1</a> and <a href="https://api.plot.ly/v2/">V2</a> versions of the Plotly API.


### Limits on Requests to Chart Studio Servers

While many functions use the API, The API limits are as follows:

<table>
  <thead>
    <th>API client</th>
    <th>Exceptions</th>
    <th>Per Day</th>
    <th>Per Hour</th>
    <th>API Version</th>
  </thead>
  <tbody>
    <tr>
      <td>Python, Arduino, R, MATLAB</td>
      <td>None</td>
      <td>50</td>
      <td>30</td>
      <td><a href="https://plot.ly/rest/">V1</a></td>
    </tr>
    <tr>
      <td>Chart Studio (<a href="https://plot.ly/plot">plot.ly</a>)</td>
      <td>GET requests are not limited</td>
      <td>1000</td>
      <td>None</td>
      <td><a href="https://api.plot.ly/v2/">V2</a></td>
    </tr>
  </tbody>
</table>

### Upgrading

To avoid limits in requests to Chart Studio servers, you have the option to upgrade to a <a href="https://plot.ly/products/cloud/">Professional Plan</a>.
