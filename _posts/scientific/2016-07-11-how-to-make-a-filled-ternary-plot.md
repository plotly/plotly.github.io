---
layout: tutorial-single_layout
title: Filled Ternary Plots in Chart Studio
subtitle: A type of plot that depicts depicts the ratio of 3 variables on a triangular grid.
permalink: /ternary-filled-plot/
imageurl: ../static/images/How-to-make-a-filled-ternary-plot/thum-filled-ternary.png
state: active
tags: scientific
meta_description: A tutorial on how to make a filled ternary plot in Chart Studio.
popularity: featured
order: 5
carouselimageurl:
actioncall: How to Make a Filled Ternary Plot in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:21

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/ternary-contour/),  [Javascript](https://plot.ly/javascript/ternary-contour/) and [Matlab](https://plot.ly/matlab/ternary-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/21.embed"></iframe>
live-graph-image:

steps:
 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Chart Studio’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"
    - copy: "Each data point on a ternary chart is plotted according to its relative composition with respects to the 3 main axes. For example, the data point (0.6, 0.2, 0.2) represents a data point that is made up of 60% of axis 1, 20% of axis 2, 20% of axis 3, this sums up to 100% of this point's composition with relation to axes A, B, and C."
    - copy: "To plot this data point, you will need to populate 3 columns on the grid, each column will then be mapped to one of the 3 axes. To add an additional data point to the graph, you will need to add an additional row to these 3 columns. In the example below, you can see how we would enter data to plot 3 data points onto our ternary plot."
      img: "![Add Data](../static/images/How-to-make-a-filled-ternary-plot/data-formatting.png)"
 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to the GRAPH section on the left-hand side menu of the workspace and select 'Ternary plot' from the 'Chart Type' dropdown menu."
      img: "![Choose chart main](../static/images/How-to-make-a-filled-ternary-plot/select-ternary.png)"
    - copy: "Now you can map your data columns to the axes that they will represent on the ternary graph. Once this mapping is complete, the data points you've entered into the grid will appear on the ternary plot."
      img: "![Plot Data](../static/images/How-to-make-a-filled-ternary-plot/data-plotting.png)"
    - copy: "To add another trace (layer), create 3 more columns and populate them with your data for the next trace. You can also reuse the same columns, if relevant, on multiple traces. Once your data for the second trace is added, you will have to map your columns to axes for the second trace, just like we did for the first trace. To do so, click on the '+Trace' button in the upper right corner of the GRAPH panel. Assign the columns you've created for the second trace to their respective A, B, C axes. You should now see two traces on your filled ternary plot."
    - copy: "Tip: if you have multiple traces to add, the 'Collapse All' button may be useful to easily get back to the specific trace that you want to work on."
      img: "![Add Trace](../static/images/How-to-make-a-filled-ternary-plot/second-trace.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "To style your ternary plot, click on STYLE on the left-hand side menu of the workspace and play around with the styling of your plot."
    - copy: "To change the styling related to the data on your plot, for example, add filling to the area we've delimited in our plot, go to ‘Traces’ under the STYLE tab, and change the Fill. A note with regards to filling, the styling option 'To next' will only work if there are multiple traces and one completely encloses the other, unless this is the case, this option should not be used and 'To Self' should be used instead. Also with regards to colours, certain colours and typefaces are available only with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Add Style](../static/images/How-to-make-a-filled-ternary-plot/filled-shape.png)"
    - copy: "To change the Title, Axes and Trace names, you can do so directly on the graph by double-clicking on the corresponding area. Further styling is also possible under the 'Layout' and 'Axes' sections of the STYLE menu. Note that to style trace names, the 'Legend' needs to be set to visible, if it is not the case, go to the 'Legend' section under the STYLE menu and select the option 'Show'."
      img: "![Type directly title](../static/images/How-to-make-a-filled-ternary-plot/titles.png)"

 - title: Save and Share
   sub-steps:
    - copy: "When your plot is done, click SAVE on the left-hand side menu, give your plot and grid a name, and identify them as 'Public' or 'Private'."
      img: "![Save main](../static/images/How-to-make-a-filled-ternary-plot/saving.png)"
    - copy: "For more information on how to save, export, and share, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page!"
---
