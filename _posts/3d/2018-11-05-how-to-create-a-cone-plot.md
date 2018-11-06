---
layout: tutorial-single_layout
title: 3D Cone Plots
subtitle: Create 3D Cone Vortex using cone plots.
permalink: /make-a-cone-plot/
imageurl: ../static/images/create-cone-plot/3d-cone-thumbnail.png
state: active
tags: graph3d
order: 4
meta_description: A tutorial on how to make a cone plot in Chart Studio.
popularity: featured
carouselimageurl: ../static/images/create-cone-plot/3d-cone-thumbnail.png
actioncall: How to make 3D cone plots in Plotly's Chart Studio.
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:395

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/cone-plot/) or [R](https://plot.ly/r/cone-plot/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/395.embed"></iframe>
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
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Cone' under '3D' chart type."
      img: "![Chart type cone](../static/images/create-cone-plot/chart-type-cone.png)"
    - copy: Next, fill the 'X', 'Y', 'Z', 'U', 'V' and 'W' values from the dropdown to create the plot. This will create a raw trace for the vortex data, as seen below."
      img: "![Axes data](../static/images/create-cone-plot/select-axes-data.gif)"

 - title: Style Trace
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "To change the properties of the trace, go to the 'Traces' section under the 'Style' menu."
      img: "![Trace Properties](../static/images/create-cone-plot/3d-cone-trace-properties.png)"
    - copy: "To change the color of the trace, click on the color panel on the right-side of the `Colorscale` property and choose the scale type from the dropdown, followed by the desired colorscale as seen below."
      img: "![Colour main](../static/images/create-cone-plot/3d-cone-colourscale.gif)"
    - copy: "Use the 'Color Bars' section under the 'Style' menu to change the properties of the color bar."
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot Title](../static/images/create-cone-plot/3d-cone-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the colorscale title."
      img: "![Type directly title](../static/images/create-cone-plot/3d-cone-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/create-cone-plot/3d-cone-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Plotly's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
