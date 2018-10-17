---
layout: tutorial-single_layout
title: Contour Plots in Chart Studio
subtitle: A plot that represents a 3-dimensional surface by plotting on a 2-dimensional grid.
permalink: /make-a-contour-plot/
imageurl: ../static/images/create-contour-plot.md/contour-thumb.png
state: active
tags: basic
order: 11
meta_description: A tutorial on how to make a contour plot in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a contour plot in Plotly's Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:13

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/contour-plots/) or [R](https://plot.ly/r/contour-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/13.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "If you want to make a chart with multiple line and scatter traces, this tutorial is for you!"
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Plotly users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Contour' under 'Simple' chart type."
      img: "![Choose chart](../static/images/create-contour-plot.md/contour-choose-chart.png)"
    - copy: "Click on GRAPH on the left-hand side to add your axes to your contour. After selecting 'Contour', you should then fill out the Z, X, and Y dropdown to create the plot. For our plot, we'll add all columns of our data set in the 'Z' matrix."
      img: "![Adding axes](../static/images/create-contour-plot.md/contour-values.png)"
    - copy: "This will create a raw contour plot, as seen below."
      img: "![Raw contour](../static/images/create-contour-plot.md/raw-contour-plot.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "You can choose your colorscale, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your chart."
    - copy: "To change the color gradients of your contour plot, select ‘Traces’ under the same STYLE tab, and choose the colorscale you want."
      img: "![Colourscale](../static/images/create-contour-plot.md/contour-colourscale-panel.png)"
    - copy: "You can also change the thickness and color of your contour lines in the THICKNESS bar. We've also played around with the number of contours of our plot."
      img: "![Contour lines](../static/images/create-contour-plot.md/contour-lines.png)"
    - copy: "To add a title to your plot, you can type it directly on the title by double-clicking it."
      img: "![Type directly title](../static/images/create-contour-plot.md/contour-type-title.png)"
    - copy: "The same can be done for the axis labels and legend."
      img: "![Type directly axis](../static/images/create-contour-plot.md/contour-axis-title.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below. Note that certain typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Type in layout panel](../static/images/create-contour-plot.md/contour-title-panel.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your contour plot is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/create-contour-plot.md/contour-save-main.png)"
    - copy: "Give your file a name, then select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/create-contour-plot.md/contour-save-popup.png)"
---


