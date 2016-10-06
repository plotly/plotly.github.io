---
layout: tutorial-single_layout
title: How to Make a Scatter Ternary Plot using Plotly 2.0 Data Visualization Software
subtitle: Learn to create a scatter ternary plot to depict the ratio of 3 variables on a triangular grid
permalink: /ternary-scatter-plot/
imageurl: ../static/images/How-to-make-a-scatter-ternary-plot/thum-scatter-ternary.png
state: active
tags: scientific
meta_description: Follow this tutorial to make a scatter ternary plot online in Plotly 2.0.
popularity: featured
order: 4
carouselimageurl:
actioncall: How to Make a Scatter Ternary Plot in Plotly 2.0
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:29

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/ternary-plots/),  [Javascript](https://plot.ly/javascript/ternary-plots/) and [Matlab](https://plot.ly/matlab/ternary-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/29.embed"></iframe>
live-graph-image:

steps:
 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online data visualization [workspace](https://plot.ly/alpha/workspace/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering the URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It will open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"
    - copy: "Each data point on a ternary chart is plotted according to its relative composition with respect to the three main axes. For example, the data point (1, 2, 1) represents a data point that is made up of 25% of axis 1, 50% of axis 2, 25% of axis 3. This sums up to 100% of this point's composition with relation to axes A, B, and C."
    - copy: "To plot this data point, you will need to populate three columns on the grid. Each column will then be mapped to one of the three axes. To add an additional data point to the graph, you will need to add an additional row to these three columns. In the example below, you can see how we would enter data to plot four data points onto our ternary plot."
      img: "![Data Format](../static/images/How-to-make-a-scatter-ternary-plot/data-formatting.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to the GRAPH section on the left-hand side menu of the workspace and select 'Ternary plot' from the 'Chart Type' dropdown menu."
      img: "![Choose chart main](../static/images/How-to-make-a-scatter-ternary-plot/select-ternary.png)"
    - copy: "Now you can map your data columns to the axes that they will represent on the ternary graph. Once this mapping is complete, the data points you've entered into the grid will appear on the ternary plot."
      img: "![Plot Data](../static/images/How-to-make-a-scatter-ternary-plot/data-plotting.png)"
    - copy: "To add another trace (layer), create three more columns and populate them with your data for the next trace. You can also reuse the same columns, if relevant, on multiple traces. Once your data for the second trace is added, you will have to map your columns to axes for the second trace, just like we did for the first trace. To do so, click on the '+Trace' button in the upper right corner of the GRAPH panel. Assign the columns you've created for the second trace to their respective A, B, C axes. You should now see two traces on your scatter ternary plot."
    - copy: "Tip: if you have multiple traces to add, the 'Collapse All' button may be useful to easily get back to the specific trace that you want to work on."
      img: "![Second trace](../static/images/How-to-make-a-scatter-ternary-plot/second-trace.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "To style your ternary plot, click on STYLE on the left-hand side menu of the workspace and adjust the styling of your plot."
    - copy: "For example, to change the symbol depicting your traces or any other styling related to the data that you plotted, go to ‘Traces’ under the STYLE tab, and change the symbol associated to the points that you graphed. The 'Display' needs to be set to 'Points' in order to do so. Also, please note that certain colors and typefaces are available only with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Styling traces](../static/images/How-to-make-a-scatter-ternary-plot/styling.png)"
    - copy: "To change the Title, Axes and Trace names, you can do so directly on the graph by double-clicking on the corresponding area. Further styling is also possible under the 'Layout' and 'Axes' sections of the STYLE menu. Note that to style trace names, the 'Legend' needs to be set to visible. If the 'Legend' is not visible, go to the 'Legend' section under the STYLE menu and select the option 'Show'."
      img: "![Type directly title](../static/images/How-to-make-a-scatter-ternary-plot/titles.png)"

 - title: Save and Share
   sub-steps:
    - copy: "When your plot is done, click SAVE on the left-hand side menu, give your plot and grid a name, and identify it as 'Public' or 'Private'."
      img: "![Save main](../static/images/How-to-make-a-scatter-ternary-plot/save.png)"
    - copy: "For more information on how to save, export, and share, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page!"
---
