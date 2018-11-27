---
layout: tutorial-single_layout
title: Box Plots
subtitle: A convenient way of graphically depicting groups of numerical data through their quartiles.
permalink: /make-a-box-plot/
redirect_from: /plotly1/make-a-box-plot/
imageurl: ../static/images/box-plot/box-plot-thumbnail.png
state: active
tags: statistical
order: 2.5
meta_description: A tutorial on how to make a box plot in Chart Studio.
popularity: featured
actioncall: How to make a box plot in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:108

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/box-plots/) or [R](https://plot.ly/r/box-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/108.embed"></iframe>

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Box plots may have lines extending vertically from the boxes, or whiskers, indicating variability outside the upper and lower quartiles. This type of plot is also known as a box-and-whisker plot or box-and-whisker diagram."
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon, will display three options: 1) Charts like this by Chart Studio users, 2) View tutorials on this chart type and 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Box' under 'Distributions' chart type."
      img: "![Choose chart](../static/images/box-plot/box-choose-chart.png)"
    - copy: "Next, select 'X' and 'Y' values from the dropdown menus. This will create a raw box plot, as seen below."
      img: "![Values](../static/images/box-plot/box-raw.png)"
    - copy: "To add more traces to the plot, click on '+ Trace' button at the top right corner of the panel in the 'Traces' section under the 'Structure' menu."
      img: "![Trace open](../static/images/box-plot/box-traces.gif)"
    - copy: "Add as many traces as needed, until the plot is complete! This is what the plot looks like after adding them all."
      img: "![Finished traces](../static/images/box-plot/box-finish-traces.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'Traces' section under the 'Style' menu, to change the properties of the traces. To set the trace names, type the name in the textbox provided under 'Name' property for each trace. Note that updating the trace name will update the legends as well."
      img: "![Trace Name](../static/images/box-plot/box-trace-name.png)"
    - copy: "To display the outlier data points corresponding to the box plots, select 'Outliers' under the 'Points' attribute. To display all the points, then select 'Show All'."
      img: "![Display Points](../static/images/box-plot/box-display-points.png)"
    - copy: "To change the color of the trace components for each trace, click on the respective color palettes as seen below. "
      img: "![Colour main](../static/images/box-plot/box-colour-panel.gif)"
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot Title](../static/images/box-plot/box-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](../static/images/box-plot/box-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/box-plot/box-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
