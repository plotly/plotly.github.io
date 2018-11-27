---
layout: tutorial-single_layout
title: How to Make Multiple X-Axes Plots in Chart Studio
subtitle: Create a plot with multiple x-axes using the Chart Studio data visualization tool
permalink: /multiple-x-axes/
imageurl: ../static/images/graph-with-multiple-axes-with-excel/stackedxthumbnail.png
state: active
tags: subplot
order: 4
meta_description: Learn how to create plots with multiple x-axes online using Chart Studio graphing software.
popularity: featured
carouselimageurl:
actioncall: Multiple x-axes plots in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:221

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/subplots/#subplots-with-shared-xaxes).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/221.embed"></iframe>
live-graph-image:

steps:
 - title: Introduction
   sub-steps:
    - copy:  "This second horizontal axis will be set on top on your graph, making it a cool feature to use when you have mixed types of data or varying ranges."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "The first step is to head to Chart Studio’s new online [workspace](https://plot.ly/create) and [add your data](http://help.plot.ly/add-data-to-the-plotly-grid/). It's also a good idea to name your columns beforehand (either by [adding your data](http://help.plot.ly/plotly1/add-data-to-the-plotly1-grid/#how-to-enter-data-in-the-grid) using [Chart Studio](https://plot.ly/plot), or naming them in the CSV or Excel file that you're uploading), and [label your axes](http://help.plot.ly/style-your-plots/#step-6-axes). This will make selecting specific traces easier."
      img: "![Import data](../static/images/graph-with-multiple-axes-with-excel/import stacked x.png)"

 - title: Create a Plot
   sub-steps:
    - copy: "After adding your data, go to GRAPH on the left-hand side, then 'Create'. Choose your 'Chart type', and add your traces using the X and Y dropdown (this section is different depending on the [chart type]((http://help.plot.ly/tutorials/#basic)). We'll use the [scatter plot](http://help.plot.ly/how-to-make-a-scatter-plot/) for this tutorial."
      img: "![Subplot Trace](../static/images/graph-with-multiple-axes-with-excel/stacked first trace.png)"

 - title: Select a Subplot
   sub-steps:
   - copy: "The next trace is where we'll introduce the multiple x-axes feature. We'll click the blue '+Trace' button on the right-hand side of the panel to add the second trace, select our x and y values, then click on 'Subplot and Multiple Axes'."
     img: "![Second trace](../static/images/graph-with-multiple-axes-with-excel/stacked second trace.png)"
   - copy: "This will open a section where you can select an arrangement for your subplot."
     img: "![Subplot arrangement](../static/images/graph-with-multiple-axes-with-excel/arrangements.png)"
   - copy: "We'll select the 'Top X-Axis' arrangement for this trace. This will add a second x-axis on the top of the plot, but the traces will still be displayed in the same space with the same y-axis. We'll also label our axes right away. This will make it easier as we select the position using the 'Current Subplot' dropdown menu. The plot you select from this dropdown will act as the base for the subplot we're adding. Finally, select CONFIRM."
     img: "![Current subplot](../static/images/graph-with-multiple-axes-with-excel/stacked current subplot.png)"
   - copy: "If you select an arrangement and then change your mind, the 'Undo' button will cancel the last arrangement selection *only*. This is very important to remember."
     img: "![Undo button](../static/images/graph-with-multiple-axes-with-excel/general undo button.png)"

 - title: Style a Plot
   sub-steps:
    - copy: "We've styled this plot by playing with the [colors](http://help.plot.ly/style-your-plots/#step-3-traces), adding [grid lines](http://help.plot.ly/style-your-plots/#step-6-axes) and adjusting the [margins](http://help.plot.ly/style-your-plots/#step-4-layout) of our plot. We also removed the x-axes labels since we don't need them anymore. For more styling tips, consult [this](http://help.plot.ly/style-your-plots/) page."
      img: "![Final plot](../static/images/graph-with-multiple-axes-with-excel/final stacked x.png)"
    - copy: "If you like the way we've styled our plot, see [this](http://help.plot.ly/style-your-plots/) great tutorial."

 - title: Save and Share
   sub-steps:
    - copy: "Your plot is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/graph-with-multiple-axes-with-excel/save main stacked x.png)"
    - copy: "Give your PLOT and DATA a filename and select the privacy setting. For more information on how sharing works, including the difference between private, public, and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/graph-with-multiple-axes-with-excel/stacked x save popup.png)"

 - title: Tips and Tricks
   sub-steps:
    - copy: "As you're creating a plot with multiple axes, you may notice that the grid doesn't quite align. If you want the axes mapped to one another so the grid overlaps, you can [edit the range](http://help.plot.ly/style-your-plots/#step-6-axes) of both x-axes."
    - copy: "If you *do* want to keep the x-axes labels (we removed ours, if you recall), you may have to adjust the [margins and padding](http://help.plot.ly/style-your-plots/#step-4-layout) so the top x-axis label doesn't hide behind the main plot's title or subtitle."
---
