---
layout: tutorial-single_layout
title: Error bars
subtitle: A graphical representation of the variability of data used on graphs to indicate the error, or uncertainty in a reported measurement.
permalink: /make-a-graph-with-error-bars/
redirect_from: /plotly1/make-a-graph-with-error-bars/
imageurl: ../static/images/error-bars/error-bar-thumb.png
state: active
tags: scientific
order: 1
meta_description: A tutorial on how to make a graph with error bars in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a graph with error bars in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:417

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/error-bars/) or [R](https://plot.ly/r/error-bars/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/417.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Error bars give a general idea of how precise a measurement is, or how far from the reported value the true (error free) value might be."
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon, will display three options: 1) Charts like this by Chart Studio users, 2) View tutorials on this chart type and 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in your workspace."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Scatter' under 'Simple' chart type."
      img: "![Choose chart main](../static/images/line-graph-and-scatter-plot-with-excel/scatter-choose-chart.png)"
    - copy: "Next, select 'X' and 'Y' values from the dropdown menus."
      img: "![Adding x and y axis](../static/images/line-graph-and-scatter-plot-with-excel/scatter-import-data.png)"
    - copy: "To add more traces to the plot, click on '+ Trace' button at the top right corner of the panel in the 'Traces' section under the 'Structure' menu. Add as many traces as needed, until the plot is complete! This will create a raw scatter plot as seen below."
      img: "![Raw Plot](../static/images/error-bars/error-bar-raw-plot.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "To add error bars to the trace, go to the 'Traces' section under the 'Style' menu, and select either 'Symmetric' or 'Assymmetric' option under the desired axis, as seen below, to generate error bars associated with that axis."
      img: "![Properties](../static/images/error-bars/error-bar-properties.png)"
    - copy: "Additionally, this section allows to change the trace properties such as, trace name, color, marker or line properties. To display a line that connects the markers in the trace, click the checkbox corresponding to 'Lines' under the 'Display' option."
      img: "![Trace Properties](../static/images/error-bars/error-bar-trace-properties.png)"
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot Title](../static/images/error-bars/error-bar-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](../static/images/error-bars/error-bar-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/error-bars/error-bar-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
