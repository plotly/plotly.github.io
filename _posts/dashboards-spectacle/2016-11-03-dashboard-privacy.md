---
layout: tutorial-single_layout
title:  Chart Studio Dashboard Privacy
subtitle: Dashboard privacy using the Chart Studio data visualization tool
permalink: /dashboard-privacy/
imageurl: ../static/images/dashboards/dashboard privacy thumb.png
state: active
tags: dashboard
order: 2.5
meta_description: Learn how to set privacy settings to share dashboards using the Chart Studio dashboard tool.
popularity: featured
actioncall: Dashboard privacy

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/dashboard/) or [R](https://plot.ly/r/dashboard/).

steps:
 - title: Introduction
   sub-steps:
    - copy: "You may have noticed that although you shared your dashboard as 'Public' or by using a secret link, some of the plots were not appearing to viewers."
    - copy: "When you save and share your dashboard, not only is there a privacy setting for the dashboard, there's a privacy setting for individual plots too. You have to set the privacy of these plots so viewers can see your entire dashboard."
    - copy: "In this tutorial, we have dashboards with different privacy settings, and plots added to them with *their* own privacy settings. You'll see what they look like when they're shared."

 - title: Public Plot
   sub-steps:
    - copy: "We'll start by [adding a plot](http://help.plot.ly/create-a-dashboard/#step-3-add-a-plot) to our dashboard that was used in [this](http://help.plot.ly/make-a-2d-histogram-heatmap/) Chart Studio tutorial. It was saved as 'Public' so everyone can see it, not just Chart Studio users."
      img: "![Save pop-up](../static/images/make-a-histogram/save popup 2d hist.png)"

 - title: Private Plot
   sub-steps:
    - copy: "The [second plot](http://help.plot.ly/create-a-dashboard/#step-4-add-a-second-plot) we'll add to our dashboard was saved as 'Private'. See [this](http://help.plot.ly/how-sharing-works-in-plotly/#privacy-options) page to learn more about private plots."
      img: "![Add private plot](../static/images/dashboards/add private plot.png)"

 - title: Plot with Private Link
   sub-steps:
    - copy: "The last plot we'll add is one we've saved as ['Private Link'](http://help.plot.ly/how-sharing-works-in-plotly/#secret-links)."
      img: "![Add private link plot](../static/images/dashboards/add private link plot.png)"

 - title: Share the Dashboard
   sub-steps:
    - copy: "We'll [save](http://help.plot.ly/create-a-dashboard/#step-8-save-and-share-a-dashboard) our dashboard as 'Private Link', then click on 'Share' to find the shareable link."
      img: "![Save as private link](../static/images/dashboards/save as private link.png)"
    - copy: "Below is what the dashboard looks like to the viewer that was given this secret link. Remember, private links allow people with the link to view the dashboard, but it will not appear on your profile, nor is it searchable."
      img: "![Private link shared](../static/images/dashboards/private link shared.gif)"
    - copy: "The plot that was saved as 'Private' isn't displayed. In this case, we have to reset this graph's privacy setting, either as 'Public' or 'Private Link'. It's very important to note that the dashboard will not automatically update when it's changed to 'Private Link'. After you save it as 'Private Link', go back to your dashboard. Click on the plot, hit 'Edit', then select 'URL' to *enter the shareable link*. This is the only way to update your dashboard's plot from 'Private' to 'Private Link' and be viewable."
      img: "![Add private URL](../static/images/dashboards/add private url.png)"
    - copy: "Now all plots appear on the dashboard. Remember, this is a dashboard with a secret link."
      img: "![Private link dashboard](../static/images/dashboards/new private link viewed.gif)"

 - title: Dashboard Privacy Settings
   sub-steps:
    - copy: "You can also save your dashboard as 'Public' and 'Private'. To show the different dashboard privacy settings and how they appear to a viewer, we've used the following examples."
    - copy: "Below is a plot saved with a secret link, added to a public dashboard. As you can see, it's still viewable."
      img: "![Public dashboard private link plot](../static/images/dashboards/Public dashboard private link.png)"
    - copy: "The following is a private dashboard with a public plot. Even though the plot is public, the *dashboard* is private, so the viewer can't see it."
      img: "![Private dashboard public plot](../static/images/dashboards/Private dashboard public plot.png)"
    - copy: "Next is a public dashboard with a private plot. Again, because the plot was saved as *private*, it won't appear to another viewer."
      img: "![Public dashboard private plot](../static/images/dashboards/public dashboard private plot.png)"

 - title: Helpful Reminders
   sub-steps:
    - copy: "The best option is to add plots that are saved as 'Public' or 'Private Link', and set your dashboard privacy setting as 'Private' or 'Private Link'. Adding a plot that's been saved as 'Private' won't appear to the viewer."
    - copy: "For more information on how sharing works in Chart Studio, check out [this](http://help.plot.ly/how-sharing-works-in-plotly/) page."
---
