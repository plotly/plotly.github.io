---
layout: tutorial-single_layout
title: Scatter Ternary Plot
subtitle: A type of plot that depicts the ratio of 3 variables on a triangular grid.
permalink: /ternary-scatter-plot/
imageurl: ../static/images/ternary-scatter-plot/thum-scatter-ternary.png
state: active
tags: scientific
meta_description: A tutorial on how to make a scatter ternary plot in Chart Studio.
popularity: featured
order: 2
carouselimageurl:
actioncall: How to make a scatter ternary plot in Plotly's Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:453

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/ternary-plots/),  [Javascript](https://plot.ly/javascript/ternary-plots/) and [Matlab](https://plot.ly/matlab/ternary-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/453.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Plotly users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Violin' under 'Distributions' chart type."
      img: "![Choose chart](../static/images/ternary-scatter-plot/select-ternary.png)"
    - copy: "Each data point on a ternary plot is plotted according to its relative composition with respects to the 3 main axes. For example, the data point (1, 2, 1) represents a data point that is made up of 25% of axis 1, 50% of axis 2, 25% of axis 3, this sums up to 100% of this point's composition with relation to axes A, B, and C."
    - copy: "To plot this data point, you will need to populate 3 columns on the grid, each column will then be mapped to one of the 3 axes. To add an additional data point to the graph, you will need to add an additional row to these 3 columns. In the example below, you can see how we would enter data to plot 4 data points onto our ternary plot."
      img: "![Data Format](../static/images/ternary-scatter-plot/data-formatting.png)"
    - copy: "Now you can map your data columns to the axes that they will represent on the ternary graph. Once this mapping is complete, the data points you've entered into the grid will appear on the ternary plot."
      img: "![Plot Data](../static/images/ternary-scatter-plot/data-plotting.png)"
    - copy: "To add another trace (layer), create 3 more columns and populate them with your data for the next trace. You can also reuse the same columns, if relevant, on multiple traces. Once your data for the second trace is added, you will have to map your columns to axes for the second trace, just like we did for the first trace. To do so, click on the '+Trace' button in the upper right corner of the GRAPH panel. Assign the columns you've created for the second trace to their respective A, B, C axes. You should now see two traces on your scatter ternary plot."

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to change the general style properties such as plot background color, margin color and font sytlings, the layout properties, the modebar and interactive settings."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property in the 'General' section."
      img: "![Plot Title](../static/images/ternary-scatter-plot/violin-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](../static/images/ternary-scatter-plot/violin-title-direct.png)"
    - copy: "To change the properties specific to the traces in the plot such trace name, color, etc., go to the 'Traces' section under the 'Style' menu."
      img: "![Trace Properties](../static/images/ternary-scatter-plot/violin-trace-properties.gif)"
    - copy: "Use the 'Points' property to show/hide/modify the marker points associated with the violins."
      img: "![Violin Points](../static/images/ternary-scatter-plot/violin-points.gif)"
    - copy: "To set the size and positioning of the violins, use the 'Violin Size and Spacing' property."
    - copy: "To display only the positive side of the violins, set the attribute 'Visible Sides' to 'Positive' and similarly choose 'Negative' to display the negative side of the violins."
      img: "![Violin Sides](../static/images/ternary-scatter-plot/violin-side.png)"
    - copy: "To display box traces within the violins, click 'Show' under the 'Box' property."
      img: "![Box trace](../static/images/ternary-scatter-plot/violin-box-trace.png)"
    - copy: "Use the 'Axis' section under the 'Style' menu to change the axis properties such as axes title, lines and tick properties."
    - copy: "To set custom range for the axes click on the 'Custom' button under the 'Range' property."
      img: "![Axis Range](../static/images/ternary-scatter-plot/violin-axis-range.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/ternary-scatter-plot/violin-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Plotly's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
