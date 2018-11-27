---
layout: tutorial-single_layout
title: How to Make Subplots with a Shared Y-Axis in Chart Studio
subtitle: Create a subplot with a shared y-axis using the Chart Studio data visualization tool
permalink: /shared-y-axis-subplots/
imageurl: ../static/images/graph-with-multiple-axes-with-excel/shared y thumbnail.png
state: active
tags: subplot
order: 3.5
meta_description: Learn how to create subplots with a shared y-axes online using Chart Studio graphing software.
popularity: featured
carouselimageurl:
actioncall: Subplots with a shared y-axis in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:223

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/subplots/#subplots-with-shared-xaxes) and [R](https://plot.ly/r/subplots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/223.embed"></iframe>
live-graph-image:

steps:
 - title: Introduction
   sub-steps:
    - copy:  "This feature allows you to plot graphs that share the same y-axis."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "The first step is to head to Chart Studio’s new online [workspace](https://plot.ly/create) and [add your data](http://help.plot.ly/add-data-to-the-plotly-grid/). It's also a good idea to name your columns beforehand (either by [adding your data](http://help.plot.ly/plotly1/add-data-to-the-plotly1-grid/#how-to-enter-data-in-the-grid) using [Chart Studio](https://plot.ly/plot), or naming them in the CSV or Excel file that you're uploading), and [label your axes](http://help.plot.ly/style-your-plots/#step-6-axes). This will make selecting specific traces easier."
      img: "![Import data](../static/images/graph-with-multiple-axes-with-excel/shared y import.png)"

 - title: Create a Plot
   sub-steps:
    - copy: "After adding your data, go to GRAPH on the left-hand side, then 'Create'. Choose your 'Chart type', and add your traces using the X and Y dropdown (this section is different depending on the [chart type]((http://help.plot.ly/tutorials/#basic)). We'll use the [bar chart](http://help.plot.ly/grouped-bar-chart/) for the first trace."
      img: "![Subplot Trace](../static/images/graph-with-multiple-axes-with-excel/shared y first trace.png)"

 - title: Select a Subplot
   sub-steps:
   - copy: "For the second trace, we'll click the blue '+Trace' button on the right-hand side of the panel, change the chart type to ['Scatter plot'](http://help.plot.ly/how-to-make-a-scatter-plot/), select our x and y values, then click on 'Subplot and Multiple Axes'."
     img: "![Second trace](../static/images/graph-with-multiple-axes-with-excel/shared y second trace.png)"
   - copy: "This will open a section where you can select an arrangement for your subplot."
     img: "![Subplot arrangement](../static/images/graph-with-multiple-axes-with-excel/arrangements.png)"
   - copy: "We'll select the 'Side by Side X-Axis' arrangement for this trace and select CONFIRM. This will add a subplot to the right of your original plot with a unique x-axis. The y-axis will remain shared. Notice when you zoom in on one subplot, the zoom will be applied vertically to the other subplot as well."
   - copy: "If you select an arrangement and then change your mind, the 'Undo' button will cancel the last arrangement selection *only*. This is very important to remember."
     img: "![Undo button](../static/images/graph-with-multiple-axes-with-excel/general undo button.png)"
   - copy: "We'll label the x-axis for that last plot by double-clicking the area and typing it directly."
     img: "![Axis label](../static/images/graph-with-multiple-axes-with-excel/shared y axis label.png)"

 - title: Style a Plot
   sub-steps:
    - copy: "We've styled this plot by playing with the [colors](http://help.plot.ly/style-your-plots/#step-3-traces), and adding [grid lines](http://help.plot.ly/style-your-plots/#step-6-axes). For more styling tips, consult [this](http://help.plot.ly/style-your-plots/) page."
      img: "![Final plot](../static/images/graph-with-multiple-axes-with-excel/shared y final.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your plot is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/graph-with-multiple-axes-with-excel/shared y save main.png)"
    - copy: "Give your PLOT and DATA a filename and select the privacy setting. For more information on how sharing works, including the difference between private, public, and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/graph-with-multiple-axes-with-excel/shared y save popup.png)"
---
