---
layout: tutorial-single_layout
title: 2D Histogram
subtitle: A type of plot that visualizes a bivariate distribution.
permalink: /make-a-2d-histogram-heatmap/
imageurl: ../static/images/2d-histogram-plot/2d-hist-thumb.png
state: active
tags: statistical
order: 1.5
meta_description: A tutorial on how to make a 2D Histogram in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a 2D histogram in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:419

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/2D-Histogram/) or [R](https://plot.ly/r/2D-Histogram/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/419.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Chart Studio users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose '2D Histogram' under 'Distributions' chart type."
      img: "![Choose chart](../static/images/2d-histogram-plot/2d-histogram-choose-chart.png)"
    - copy: "Next, select the 'X', 'Y' and 'Z' values from the dropdown menus. This will create a 2D histogram as seen below. Note that specifying 'Z' is optional. If specified, the histogram function can be configured based on 'Z' values. If omitted, the histogram function defaults to 'Count'."
      img: "![Adding X Y Z values](../static/images/2d-histogram-plot/2d-histogram-fill-x-y-z.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to change the general style properties such as plot background color, margin color and font sytlings, the layout properties, the modebar and interactive settings."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property."
      img: "![Plot Title](../static/images/2d-histogram-plot/2d-histogram-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](../static/images/2d-histogram-plot/2d-histogram-title-direct.png)"
    - copy: "To change the properties of the histogram such as the histogram function and normalization, binning and other trace properties, go to the 'Traces' section under the 'Style' menu."
      img: "![Properties](../static/images/2d-histogram-plot/2d-histogram-properties.png)"
    - copy: "Use the attibute 'Colorscale' to define the colorscale range for the 2D histogram. Additionally, to hide/show the colorbar, click the desired option next to the attribute 'Color Bar' under the same panel."
      img: "![Colorscale](../static/images/2d-histogram-plot/2d-histogram-colorscale.gif)"
    - copy: "To set the size and positioning of the color bar, navigate to the 'Color Bars' section under the 'Style' menu. Then define the values for the corresponding attributes under the 'Size abd Positioning' property, as seen below."
      img: "![Color Bar](../static/images/2d-histogram-plot/2d-histogram-colorbar.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/2d-histogram-plot/2d-histogram-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
