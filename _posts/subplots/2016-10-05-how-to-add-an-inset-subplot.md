---
layout: tutorial-single_layout
title: How to Add an Inset in Chart Studio
subtitle: Add an inset using the Chart Studio data visualization tool
permalink: /inset-subplots/
imageurl: ../static/images/graph-with-multiple-axes-with-excel/inset thumb.png
state: active
tags: subplot
order: 2
meta_description: Learn how to add an inset online using Chart Studio graphing software.
popularity: featured
carouselimageurl:
actioncall: Inset Subplot in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:210

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/insets/) or [R](https://plot.ly/r/insets/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/210.embed"></iframe>
live-graph-image:

steps:
 - title: Introduction
   sub-steps:
    - copy: "This feature allows you to add an inset plot to a main plot. This is great if you'd like to display related data, or highlight a portion of the main plot."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "The first step is to head to Chart Studio’s new online [workspace](https://plot.ly/create) and [add your data](http://help.plot.ly/add-data-to-the-plotly-grid/). It's also a good idea to name your columns beforehand (either by [adding your data](http://help.plot.ly/plotly1/add-data-to-the-plotly1-grid/#how-to-enter-data-in-the-grid) using [Chart Studio](https://plot.ly/plot), or naming them in the CSV or Excel file that you're uploading), and [label your axes](http://help.plot.ly/style-your-plots/#step-6-axes). This will make selections for a specific trace easier."
      img: "![Import data](../static/images/graph-with-multiple-axes-with-excel/inset import.png)"

 - title: Create a Plot
   sub-steps:
    - copy: "After adding your data, go to GRAPH on the left-hand side, then 'Create'. Choose your 'Chart type', and add your traces using the X and Y dropdown (this section is different depending on the [chart type]((http://help.plot.ly/tutorials/#basic)))."
      img: "![Subplot Trace](../static/images/graph-with-multiple-axes-with-excel/inset values.png)"

 - title: Select a Subplot
   sub-steps:
    - copy: "We need two traces in our main plot, so we'll repeat the above steps by clicking the blue '+Trace' button on the right-hand side of the panel to add the second trace."
      img: "![Second trace](../static/images/graph-with-multiple-axes-with-excel/inset second trace.png)"
    - copy: "We'll do the same for our third trace, but after we select our x and y values, we'll click on 'Subplot and Multiple Axes'."
      img: "![Third trace](../static/images/graph-with-multiple-axes-with-excel/inset third trace.png)"
    - copy: "This will open a section where you can select an arrangement for your subplot."
      img: "![Subplot arrangement](../static/images/graph-with-multiple-axes-with-excel/arrangements.png)"
    - copy: "We'll select the 'Inset' arrangement for this trace, and click CONFIRM."
      img: "![Inset](../static/images/graph-with-multiple-axes-with-excel/inset confirm.png)"
    - copy: "If you select an arrangement and then change your mind, the 'Undo' button will cancel the last arrangement selection *only*. This is very important to remember."
      img: "![Undo button](../static/images/graph-with-multiple-axes-with-excel/general undo button.png)"
    - copy: "You can also add more than one inset. Just add another trace, click on the 'Subplot and Multiple Axes', and select the same 'Inset' arrangement. It's not necessary for our plot, so now we'll get to the fun part."

 - title: Style a Plot
   sub-steps:
    - copy: "We've styled this plot quite a bit, which includes [adding lines](http://help.plot.ly/style-your-plots/#step-6-axes) around both plots, customizing our [tick labels and markers](http://help.plot.ly/style-your-plots/#step-6-axes), and playing with [colors and typefaces](http://help.plot.ly/style-your-plots/#step-3-traces)."
      img: "![Final plot](../static/images/graph-with-multiple-axes-with-excel/inset final plot.png)"
    - copy: "If you like the way we've styled our plot, see [this](http://help.plot.ly/style-your-plots/) tutorial for more styling tips."

 - title: Save and Share
   sub-steps:
    - copy: "Your plot is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/graph-with-multiple-axes-with-excel/inset save main.png)"
    - copy: "Give your PLOT and DATA a filename and select the privacy setting. For more information on how sharing works, including the difference between private, public, and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/graph-with-multiple-axes-with-excel/inset save popup.png)"
---
