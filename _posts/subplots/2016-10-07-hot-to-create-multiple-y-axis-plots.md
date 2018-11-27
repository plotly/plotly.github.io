---
layout: tutorial-single_layout
title: How to Make Multiple Y-Axes Plots in Chart Studio
subtitle: Create a plot with multiple y-axes using the Chart Studio data visualization tool
permalink: /multiple-y-axes/
redirect_from: /make-a-graph-with-multiple-axes/
imageurl: ../static/images/multiple-y-axes/multiple y thumb.png
state: active
tags: subplot
order: 3
meta_description: Learn how to create plots with multiple y-axes online using Chart Studio graphing software.
popularity: featured
carouselimageurl:
actioncall: Multiple y-axes plots in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:219

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/multiple-axes/#multiple-yaxes) or [R](https://plot.ly/r/multiple-axes/#multiple-y-axes).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/219.embed"></iframe>
live-graph-image:

steps:
 - title: Introduction
   sub-steps:
    - copy: "An additional y-axis can be placed on the right-hand side of your graph, and it's really simple to create. This feature is useful if you'd like to compare datasets with vastly different ranges or types of data."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "The first step is to head to Chart Studio’s new online [workspace](https://plot.ly/create) and [add your data](http://help.plot.ly/add-data-to-the-plotly-grid/). It's also a good idea to name your columns beforehand (either by [adding your data](http://help.plot.ly/plotly1/add-data-to-the-plotly1-grid/#how-to-enter-data-in-the-grid) using [Chart Studio](https://plot.ly/plot), or naming them in the CSV or Excel file that you're uploading), and [label your axes](http://help.plot.ly/style-your-plots/#step-6-axes). This will make selecting specific traces easier."
      img: "![Import data](../static/images/multiple-y-axes/mult y import.png)"

 - title: Create a Plot
   sub-steps:
    - copy: "After adding your data, go to GRAPH on the left-hand side, then 'Create'. Choose your 'Chart type', and add your traces using the X and Y dropdown (this section is different depending on the [chart type]((http://help.plot.ly/tutorials/#basic)). We'll use the [grouped bar](http://help.plot.ly/grouped-bar-chart/) chart type for this tutorial."
      img: "![Subplot Trace](../static/images/multiple-y-axes/values.png)"

 - title: Select a Subplot
   sub-steps:
   - copy: "We need two traces before we introduce the multiple y-axes feature, so we'll click the blue '+Trace' button on the right-hand side of the panel to add the second trace."
     img: "![Second trace](../static/images/multiple-y-axes/second trace.png)"
   - copy: "We'll do the same for our third trace, but after we choose the [line graph](http://help.plot.ly/make-a-line-graph/) chart type for this trace and select our x and y values, we'll click on 'Subplot and Multiple Axes'."
     img: "![Third trace](../static/images/multiple-y-axes/subplot button.png)"
   - copy: "This will open a section where you can select an arrangement for your subplot."
     img: "![Subplot arrangement](../static/images/graph-with-multiple-axes-with-excel/arrangements.png)"
   - copy: "We'll select the 'Right Y-Axis' arrangement for this trace, and click CONFIRM."
     img: "![Inset](../static/images/multiple-y-axes/select arrangement.png)"
   - copy: "If you select an arrangement and then change your mind, the 'Undo' button will cancel the last arrangement selection *only*. This is very important to remember."
     img: "![Undo button](../static/images/graph-with-multiple-axes-with-excel/general undo button.png)"

 - title: Style a Plot
   sub-steps:
    - copy: "We've styled this plot by selecting our [colors](http://help.plot.ly/style-your-plots/#step-3-traces), dressing up our [legend](http://help.plot.ly/style-your-plots/#step-7-legend), adding [tick markers](http://help.plot.ly/style-your-plots/#step-6-axes), and playing with the [grid lines](http://help.plot.ly/style-your-plots/#step-6-axes). For more styling tips, consult [this](http://help.plot.ly/style-your-plots/) page."
      img: "![Final plot](../static/images/multiple-y-axes/final plot.png)"
    - copy: "If you like the way we've styled our plot, see [this](http://help.plot.ly/style-your-plots/) great tutorial."

 - title: Save and Share
   sub-steps:
    - copy: "Your plot is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/multiple-y-axes/save main.png)"
    - copy: "Give your PLOT and DATA a filename and select the privacy setting. For more information on how sharing works, including the difference between private, public, and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/multiple-y-axes/save popup.png)"
---
