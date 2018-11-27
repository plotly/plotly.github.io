---
layout: excel-tutorial-single_layout
title: How to Make a Graph with Multiple Axes with Excel
subtitle: A Step by Step Guide to Making a Graph with Multiple Y Axes with Chart Studio
permalink: /excel/graph-with-multiple-axes/
imageurl: https://images.plot.ly/excel/multiple-axes-excel/double-axes-chart-thumb.png
state: active
tags: excel
meta_description: Create a graph with 2 or more traces, with a separate y-axis for each trace with Chart Studio and Excel. Follow our step-by-step tutorial to make a multiple axes graph for free and online with Chart Studio.
popularity: featured
section: Layouts
actioncall: Make a Graph with Mulitple Y Axes
actioncall-url: https://plot.ly/6816/~Dreamshot?plot_type=Line%20plot
download-url: https://raw.githubusercontent.com/plotly/datasets/master/multiple_y_axis.csv.zip

similar:
 - title: Make a Graph with Three Y Axes
   url: /excel/3-y-axes
   imgurl: https://images.plot.ly/excel/3-y-axes-excel/three-axes-thumb.png
 - title: Make a Chart with an Inset Plot
   url: /excel/insets
   imgurl: https://images.plot.ly/excel/inset-plot-excel/inset-thumb.png
 - title: Add Maps to a Dashboard
   url: /excel/dashboard/
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](url) or [R](url).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~Dreamshot/4437.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/multiple_y_axis.csv)"
      img: "![Excel view](https://images.plot.ly/excel/multiple-axes-excel/excel-view-multiple-y-axes.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import,' click 'Upload a file,' then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/multiple-axes-excel/import-data-multiple-y-axes.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Label your columns like we did below. You'll have three y-axis columns (male number, female number, male:female ratio) and one x-axis column (age). Select 'Line plots' from the MAKE A PLOT menu and then click line plot in the bottom left."
      img: "![Labeling](https://images.plot.ly/excel/multiple-axes-excel/labeling-multiple-y-axes.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](https://images.plot.ly/excel/multiple-axes-excel/original-multiple-y-axes.png)"
    - copy: "Head to the TRACES popover and access Col1 and Col3 from the dropdown menu. For 'Type' you'll want these traces to be bar. For 'Mode' you'll want these traces to be stack. These two traces apply to the first y-axis (the one on the left)."
      img: "![Editing](https://images.plot.ly/excel/multiple-axes-excel/editing-multiple-y-axes.png)"
    - copy: "Now, access your third trace (Col4) and prepare to add the second y-axis. Click 'New Axis/Subplot...'"
      img: "![New Axis](https://images.plot.ly/excel/multiple-axes-excel/new-axis-multiple-y-axes.png)"
    - copy: "You'll want to apply your new y-axis to the right side of the graph."
      img: "![Right](https://images.plot.ly/excel/multiple-axes-excel/right-multiple-y-axes.png)"
    - copy: "Your graph should now look something like this:"
      img: "![Progress](https://images.plot.ly/excel/multiple-axes-excel/progress-multiple-y-axes.png)"
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "You might notice that the y-axis is busy with grid lines. Open the AXES popover in the toolbar to clean this up. Select the y-axis and turn grid lines 'off.'"
      img: "![Grid lines](https://images.plot.ly/excel/multiple-axes-excel/grid-lines-multilple-y-axes.png)"
    - copy: "You can adjust the coloring of the traces to your liking or roll with Chart Studio's defaults. Within the legend on the right side of the graph, you can label your 'line' trace 'Ratio male/female,' Col3 'female,' and Col1 'male.'"
    - copy: "We’ve titled our chart. And we’ve linked to our source data in the x-axis label area."
      img: "![Final](https://images.plot.ly/excel/multiple-axes-excel/final-multiple-y-axes.png)"
    - copy: "You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the 'Share' button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel](https://images.plot.ly/excel/multiple-axes-excel/excel-multiple-y-axes.png)"
---
