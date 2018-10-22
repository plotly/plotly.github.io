---
layout: tutorial-single_layout
title: Contour Plots in Chart Studio
subtitle: A plot that represents a 3-dimensional surface by plotting on a 2-dimensional grid.
permalink: /make-a-contour-plot/
imageurl: ../static/images/create-contour-plot/contour-thumb.png
state: active
tags: basic
order: 11
meta_description: A tutorial on how to make a contour plot in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a contour plot in Plotly's Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:411

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/contour-plots/) or [R](https://plot.ly/r/contour-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/411.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon, will display three options: 1) Charts like this by Plotly users, 2) View tutorials on this chart type and 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Contour' under 'Simple' chart type."
      img: "![Choose chart](../static/images/create-contour-plot/contour-choose-chart.png)"
    - copy: "Next, fill out the necessary 'X', 'Y' and 'Z' values from their respective dropdown menus. This will create a contour, as seen below. In this example plot, we'll add all columns of our dataset in the 'Z' matrix, since there is no 'X' and 'Y' data."
      img: "![Adding axes](../static/images/create-contour-plot/contour-values.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'Traces' section under the 'Style' menu to change the properties of the traces, such as color gradients, contours, or line attributes."
      img: "![Colourscale](../static/images/create-contour-plot/contour-properties.png)"
    - copy: "Use the 'General' section under the 'Style' menu to change the layout background and margin color, set the plot title, and change the font styles."
    - copy: "To set the plot title, type in the plot title within the textbox provided under 'Title'."
      img: "![Type title](../static/images/create-contour-plot/contour-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type Direct](../static/images/create-contour-plot/contour-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/create-contour-plot/contour-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Plotly's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---