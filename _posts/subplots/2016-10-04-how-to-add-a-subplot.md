---
layout: tutorial-single_layout
title: How to Make Subplots in Chart Studio
subtitle: Create subplots using the Chart Studio data visualization tool
permalink: /subplots/
imageurl: ../static/images/graph-with-multiple-axes-with-excel/subplotthumbnail.png
state: active
tags: subplot
order: 1
meta_description: Learn how to create subplots online using Chart Studio graphing software.
popularity: featured
carouselimageurl:
actioncall: Subplots in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:208

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/subplots/) or [R](https://plot.ly/r/subplots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/208.embed"></iframe>
live-graph-image:

steps:
 - title: Introduction
   sub-steps:
    - copy: "The Subplot feature allows you to display multiple plots in a single figure. They can be placed vertically, horizontally, or in a grid."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "The first step is to head to Chart Studio’s new online [workspace](https://plot.ly/create) and [add your data](http://help.plot.ly/add-data-to-the-plotly-grid/). It's also a good idea to name your columns beforehand (either by [adding your data](http://help.plot.ly/plotly1/add-data-to-the-plotly1-grid/#how-to-enter-data-in-the-grid) using [Chart Studio](https://plot.ly/plot), or naming them in the CSV or Excel file that you're uploading), and [label your axes](http://help.plot.ly/style-your-plots/#step-6-axes). This will make selecting specific traces easier."
      img: "![Import data](../static/images/graph-with-multiple-axes-with-excel/subplot import.png)"

 - title: Create a Plot
   sub-steps:
    - copy: "After adding your data go to GRAPH on the left-hand side, then 'Create'. Choose your 'Chart type', and add your traces using the X and Y dropdown (this section is different depending on the [chart type]((http://help.plot.ly/tutorials/#basic)))."
      img: "![Subplot Trace](../static/images/graph-with-multiple-axes-with-excel/subplot xy values.png)"

 - title: Select a Subplot
   sub-steps:
    - copy: "Once you've added your first trace, click the blue '+Trace' button on the right-hand side of the panel to add another. Once that new trace tab opens, click on 'Subplot and Multiple Axes'."
      img: "![Subplot button](../static/images/graph-with-multiple-axes-with-excel/two buttons.png)"
    - copy: "This will open a section where you can select an arrangement for your subplot. As mentioned earlier, you can set them up as stacked or side-by-side."
      img: "![Subplot arrangement](../static/images/graph-with-multiple-axes-with-excel/arrangements.png)"
    - copy: "We want to display four different charts, and we'll start by adding values to our second trace and select the 'Side By Side' arrangement for it, then click CONFIRM. We'll also label the axes right away by clicking and typing directly on them."
      img: "![Second trace](../static/images/graph-with-multiple-axes-with-excel/secondtrace.png)"
    - copy: "Before we move on, it's important to mention the 'Undo' button. If you select an arrangement and you change your mind, 'Undo' will cancel the last arrangement selection *only*."
      img: "![Undo button](../static/images/graph-with-multiple-axes-with-excel/undobutton.png)"
    - copy: "Back to adding another trace! We'll repeat the same step as above by hitting the '+Trace' button, adding our traces, then clicking 'Subplot and Multiple Axes'. For our third trace, we'll select the 'Stacked' arrangement."
      img: "![Third trace](../static/images/graph-with-multiple-axes-with-excel/thirdtrace.png)"
    - copy: "For our last trace, we'll select the 'Stacked Y-Axis' arrangement. We can select the position by using the 'Current Subplot' dropdown menu. The plot you select from this dropdown will act as the base for the subplot we're adding. Finally, select CONFIRM."
      img: "![Forth trace](../static/images/graph-with-multiple-axes-with-excel/forthtrace.gif)"
    - copy: "Now each of the four traces has its own plot."
      img: "![Subplot](../static/images/graph-with-multiple-axes-with-excel/alltracessubplot.png)"

 - title: Style a Plot
   sub-steps:
    - copy: "We've styled this plot quite a bit, which includes removing the axes labels (we don't need them anymore), and adding subtitles for each plot with the [annotations](http://help.plot.ly/how-to-add-annotations/#step-7-add-a-subtitle) feature."
      img: "![Final plot](../static/images/graph-with-multiple-axes-with-excel/finalplot.png)"
    - copy: "If you like the way we've styled our plot, see [this](http://help.plot.ly/style-your-plots/) great tutorial."

 - title: Save and Share
   sub-steps:
    - copy: "Your plot is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/graph-with-multiple-axes-with-excel/savemainsubplot.png)"
    - copy: "Give your PLOT and DATA a filename and select the privacy setting. For more information on how sharing works, including the difference between private, public, and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/graph-with-multiple-axes-with-excel/savepopup.png)"
---
