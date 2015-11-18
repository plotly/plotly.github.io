---
layout: two_column_layout
title: Plotly API rate limits
permalink: /api-rate limits
state: active
meta_description: Details on Plotly API rate limits and throttling.
---

# Plotly API rate limits

Updated November 18, 2015

### Introduction

For free users, Plotly throttles the number of requests made to its servers. This keeps server traffic and costs maneagable while still providing a useful experience.

### API Rate Limits

The API limits are as follows:

<table>
  <thead>
    <th>API version</th>
    <th>Use Case</th>
    <th>Per day requests limit</th>
    <th>Per hour requests limit</th>
    <th>Exceptions</th>
  </thead>
  <tbody>
    <tr>
      <td><a href="https://plot.ly/rest/">V1</a></td>
      <td>Python, Arduino, R, MATLAB</td>
      <td>50</td>
      <td>30</td>
    </tr>
    <tr>
      <td><a href="https://api.plot.ly/v2/">V2</a></td>
      <td>Plot.ly Web App</td>
      <td>50</td>
      <td>30</td>    
    </tr>
  </tbody>
</table>

### Upgrading

To avoid rate limit in requests to Plotly's servers, you have the option to upgrade to a <a href="https://plot.ly/products/cloud/">Professional Plan</a>.
