---
layout: tutorial-single_layout
title: Filled Ternary Plot
subtitle: A type of plot that depicts the ratio of 3 variables on a triangular grid.
permalink: /ternary-filled-plot/
imageurl: ../static/images/ternary-filled-plot/thum-filled-ternary.png
state: active
tags: scientific
meta_description: A tutorial on how to make a filled ternary plot in Chart Studio.
popularity: featured
order: 3
carouselimageurl:
actioncall: How to make a filled ternary plot in Plotly's Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:455

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/ternary-contour/),  [Javascript](https://plot.ly/javascript/ternary-contour/) and [Matlab](https://plot.ly/matlab/ternary-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/455.embed"></iframe>
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
      img: "![Choose chart](../static/images/ternary-filled-plot/violin-choose-chart.png)"
    - copy: "Next, select the 'X'and 'Y' values from the dropdown menus. This will add a violin trace to the chart as seen below."
      img: "![Adding X Y Z values](../static/images/ternary-filled-plot/violin-fill-x-y-z.png)"
    - copy: "Each data point on a ternary plot is plotted according to its relative composition with respects to the 3 main axes. For example, the data point (0.6, 0.2, 0.2) represents a data point that is made up of 60% of axis 1, 20% of axis 2, 20% of axis 3, this sums up to 100% of this point's composition with relation to axes A, B, and C."
    - copy: "To plot this data point, you will need to populate 3 columns on the grid, each column will then be mapped to one of the 3 axes. To add an additional data point to the graph, you will need to add an additional row to these 3 columns. In the example below, you can see how we would enter data to plot 3 data points onto our ternary plot."
      img: "![Add Data](../static/images/ternary-filled-plot/data-formatting.png)"
    - copy: "To add more traces to the chart, click on the '+ Trace' button at the top right corner of the panel in the 'Traces' section under the 'Structure' menu. Add as many traces as needed, until the plot is complete! This is what the plot looks like after adding all the traces."
      img: "![Add All](../static/images/ternary-filled-plot/violin-add-trace.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "To style your ternary plot, click on STYLE on the left-hand side menu of the workspace and play around with the styling of your plot."
    - copy: "To change the styling related to the data on your plot, for example, add filling to the area we've delimited in our plot, go to ‘Traces’ under the STYLE tab, and change the Fill. A note with regards to filling, the styling option 'To next' will only work if there are multiple traces and one completely encloses the other, unless this is the case, this option should not be used and 'To Self' should be used instead. Also with regards to colours, certain colours and typefaces are available only with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Add Style](../static/images/ternary-filled-plot/filled-shape.png)"
    - copy: "To change the Title, Axes and Trace names, you can do so directly on the graph by double-clicking on the corresponding area. Further styling is also possible under the 'Layout' and 'Axes' sections of the STYLE menu. Note that to style trace names, the 'Legend' needs to be set to visible, if it is not the case, go to the 'Legend' section under the STYLE menu and select the option 'Show'."
      img: "![Type directly title](../static/images/ternary-filled-plot/titles.png)"

 - title: Save and Share
   sub-steps:
    - copy: "When your plot is done, click SAVE on the left-hand side menu, give your plot and grid a name, and identify them as 'Public' or 'Private'."
      img: "![Save main](../static/images/ternary-filled-plot/saving.png)"
    - copy: "For more information on how to save, export, and share, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page!"
---
