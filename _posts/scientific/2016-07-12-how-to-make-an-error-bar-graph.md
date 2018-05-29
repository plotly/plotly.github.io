---
layout: tutorial-single_layout
title: Error bars in Chart Studio
subtitle: A graphical representation of the variability of data used on graphs to indicate the error, or uncertainty in a reported measurement.
permalink: /make-a-graph-with-error-bars/
redirect_from: /plotly1/make-a-graph-with-error-bars/
imageurl: ../static/images/graph-with-error-bars/error-bar-thumb.png
state: active
tags: scientific
order: 1
meta_description: A tutorial on how to make a graph with error bars in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to Make a Graph with Error Bars in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:27

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/error-bars/) or [R](https://plot.ly/r/error-bars/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/27.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Error bars give a general idea of how precise a measurement is, or how far from the reported value the true (error free) value might be."
    - copy: "After selecting 'Error Bars' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what values and style attributes were selected for this specific chart, as well as the end result. This is an example of error bars in a scatter chart."
      img: "![Example Scatter](../static/images/graph-with-error-bars/error-bar-example-scatter.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/graph-with-error-bars/error-bar-import.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Error Bars' under 'Chart type'."
      img: "![Choose chart main](../static/images/graph-with-error-bars/error-bar-choose-chart.png)"
    - copy: "Click on GRAPH on the left-hand side to add your values to your error bar. After selecting ‘Error Bars', you should then fill out the X, Y, and error bar dropdown to create the plot."
      img: "![Values dropdown](../static/images/graph-with-error-bars/error-bar-x-and-y.png)"
    - copy: "This will create a raw scatter graph with error bars, as seen below."
      img: "![Raw plot](../static/images/graph-with-error-bars/error-bar-raw-chart.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "You can choose your colours, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your chart."
    - copy: "To change the color of the points, click on ‘Traces’ under the same STYLE tab. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Colour main](../static/images/graph-with-error-bars/error-bar-colour.png)"
    - copy: "Additionally, this section allows you to change the diameter of the points and also the symbol."
      img: "![Error bar points](../static/images/graph-with-error-bars/error-bars-points.gif)"
    - copy: "To add a title to your plot, you can type it directly on the title by double-clicking it."
      img: "![Type directly title](../static/images/graph-with-error-bars/error-bar-title.png)"
    - copy: "The same can be done for the axis labels, and legend."
      img: "![Type directly axis](../static/images/graph-with-error-bars/error-bar-axis-title.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/graph-with-error-bars/error-bar-title-panel.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/graph-with-error-bars/error-bar-save-main.png)"
    - copy: "Give your file a name, then select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/graph-with-error-bars/error-bar-save-popop.png)"
---
