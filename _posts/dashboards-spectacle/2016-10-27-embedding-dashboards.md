---
layout: tutorial-single_layout
title: Embed Plotly Dashboards in a Website
subtitle: How to Embed Plotly Dashboards
permalink: /embed-dashboards/
imageurl: '../static/images/embed-plotly-graphs/embed thumb.png'
state: active
tags: dashboard
order: 5
meta_description: A tutorial on embedding Plotly dashboards in a website.
popularity: featured
carouselimageurl:
actioncall: Embed Plotly Dashboards

otherlang:

steps:
 - title: Create a Dashboard
   sub-steps:
    - copy: "In addition to [embedding Plotly charts in a website](https://help.plot.ly/embed-graphs-in-websites/), users can embed [Plotly dashboards](https://plot.ly/dashboards-and-reports/) as well! First, create and save your dashboard at [https://plot.ly/dashboard/create/](https://plot.ly/dashboard/create/). For more information about getting started with dashboards, see: [https://help.plot.ly/create-a-dashboard/](https://help.plot.ly/create-a-dashboard/)."
    - img: "![Create a dashboard](../static/images/dashboards/create.png)"

 - title: Embed Dashboard
   sub-steps:
    - copy: "Dashboards can be embedded as iframes in a website. After completing and saving your dashboard, copy the url to add as the src of your iframe. You must replace the trailing /edit with /embed at the end of the URL so the format is as follows: https://plot.ly/dashboard/YOUR-USERNAME:FILE-ID/embed. For example: [https://plot.ly/dashboard/chelsea_lyn:17322/embed](https://plot.ly/dashboard/chelsea_lyn:17322/embed)"
    - img: "![Dashboard URL](../static/images/dashboards/url.png)"
    - copy: "Create an iframe and set the src to your embed url as shown below:"
    - img: "![Create an iframe](../static/images/dashboards/iframe.png)"
---
