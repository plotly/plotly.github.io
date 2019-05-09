---
layout: tutorial-single_layout
title: Line and Scatter Plots
subtitle: Create a plot with multiple traces.
permalink: /make-a-line-and-scatter-plot/
redirect_from: /plotly1/make-a-line-graph-and-scatter-plot/
imageurl: ../static/images/line-graph-and-scatter-plot-with-excel/scatter-line-thumb.png
state: active
tags: basic
order: 3
meta_description: A tutorial on how to make a line and scatter plot in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to create a line and scatter plot in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:400

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/line-and-scatter/) or [R](https://plot.ly/r/line-and-scatter/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/400.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "If you want to make a chart with multiple line and scatter traces, this tutorial is for you!"
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 

    1) Charts like this by Chart Studio users
    2) View tutorials on this chart type
    3) See a basic example."

    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Data
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Line' under 'Simple' chart type."
      img: "![Choose chart](../static/images/line-graph-and-scatter-plot-with-excel/line-choose-chart.png)"
    - copy: "Next, select 'X' and 'Y' values from the dropdown menus."
      img: "![Adding x and y axis](../static/images/line-graph-and-scatter-plot-with-excel/line-import-data.png)"
    - copy: "This will create a line trace as seen below."
      img: "![Raw chart](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-raw.png)"
    - copy: "To add more traces to the plot, click on '+ Trace' button at the top right corner of the panel in the 'Traces' section under the 'Structure' menu."
      img: "![Trace open](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-trace.gif)"
    - copy: "Add as many traces as needed, until the plot is complete! For this particular graph, we compare the average high and low temperatures in New York for the years 2000, 2007 and 2014. We'll need six traces, and this is what the plot looks like after adding them all."
      img: "![Finished traces](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-traces-finished.png)"
    - copy: "To mix it up a bit, we'll display the average high temperature traces as scatter plots, and the average low temperature traces as line plots. To do this, first go to the 'Traces' section under the 'Structure' and click 'Collapse All' on the top left corner of that panel. Now open the traces that need to be switched to 'Scatter' trace type -- in this case, the average high temperature traces (trace 0, trace 2 and trace 4). Choose 'Scatter' under 'Simple' chart type in the 'Type' option."
      img: "![Finished plot](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-scatter-sd.gif)"

 - title: Style Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "To change the properties of the traces, go to the 'Traces' section under the 'Style' menu."
    - copy: "To set the trace names, type the name in the textbox provided under 'Name' property for each trace. Note that updating the trace name will update the legends as well."
      img: "![Trace Name](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-trace-name.gif)"
    - copy: "To display a line that connects the markers in a scatter trace, click the checkbox corresponding to 'Lines' under the 'Display' option."
      img: "![Display Lines](../static/images/line-graph-and-scatter-plot-with-excel/add-lines-to-scatter.png)"
    - copy: "Similarly, to display markers along the line, click the checkbox corresponding to 'Points' under the 'Display' option."
      img: "![Display Points](../static/images/line-graph-and-scatter-plot-with-excel/add-points-to-line.png)"
    - copy: "To change the color of the traces, click on the color palette as seen below. "
      img: "![Colour main](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-colour-panel.png)"
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot Title](../static/images/line-graph-and-scatter-plot-with-excel/linescattter-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/line-graph-and-scatter-plot-with-excel/linescattter-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
