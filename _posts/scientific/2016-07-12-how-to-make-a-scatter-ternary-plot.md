---
layout: tutorial-single_layout
title: Scatter Ternary Plot
subtitle: A type of plot that depicts the ratio of 3 variables on a triangular grid.
permalink: /ternary-scatter-plot/
imageurl: ../static/images/ternary-scatter-plot/ternary-scatter-thumbnail.png
state: active
tags: scientific
meta_description: A tutorial on how to make a scatter ternary plot in Chart Studio.
popularity: featured
order: 2
carouselimageurl:
actioncall: How to make a scatter ternary plot in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:453

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/ternary-plots/),  [JavaScript](https://plot.ly/javascript/ternary-plots/) and [Matlab](https://plot.ly/matlab/ternary-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/453.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Plotly users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Ternary Scatter' under 'Specialized' chart type."
      img: "![Choose chart](../static/images/ternary-scatter-plot/ternary-scatter-type.png)"
    - copy: "Note that each data point on a ternary plot is plotted according to its relative composition with respects to the 3 main axes. For example, the row (75, 20, 5) represents a data point that is made up of 75% of axis A, 20% of axis B and 5% of axis C, this sums up to 100% of this data point's composition with relation to the three axes."
      img: "![Data Format](../static/images/ternary-scatter-plot/ternary-scatter-data-format.png)"
    - copy: "In addition, each column represents an axis for the data points. To plot all your data points on the ternary graph, you will need to map the data columns on the grid to the axes by specifying the values for the attributes 'A', 'B' and 'C' from their respective dropdown menus. Once this mapping is complete, the data points you've entered into the grid will appear on the ternary plot."
      img: "![Plot Data](../static/images/ternary-scatter-plot/ternary-scatter-add-values.png)"
    - copy: "To add more traces to the chart, click on the '+ Trace' button at the top right corner of the panel in the 'Traces' section under the 'Structure' menu. Repeat the above steps to map the data columns of the second trace on the grid to the respective axes. Add as many traces as needed, until the plot is complete! This is what the plot looks like after adding all the traces."
      img: "![Add Trace](../static/images/ternary-scatter-plot/ternary-scatter-add-trace.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to change the general style properties such as plot background color, margin color and font sytlings, the layout properties, the modebar and interactive settings."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property in the 'General' section."
      img: "![Plot Title](../static/images/ternary-scatter-plot/ternary-scatter-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface."
      img: "![Type directly title](../static/images/ternary-scatter-plot/ternary-scatter-title-direct.png)"
    - copy: "Use the 'Traces' section under the 'Style' menu to change the properties specific to the traces in the plot such as trace's name, color, show/hide legend, marker size, marker symbol, etc."
      img: "![Trace Properties](../static/images/ternary-scatter-plot/ternary-scatter-trace-properties.png)"
    - copy: "Use the 'Axes' section under the 'Style' to change the axes-specific properties such as axes' title, range, and line properties."
    - copy: "To set the axes title, type in the axis title within the textbox provided under 'Title' for each axis or simply click and then enter the axis title directly on the plot interface.."
      img: "![Axes Title](../static/images/ternary-scatter-plot/ternary-scatter-axes-title.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/ternary-scatter-plot/ternary-scatter-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
