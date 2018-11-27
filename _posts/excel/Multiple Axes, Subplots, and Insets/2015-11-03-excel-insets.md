---
layout: excel-tutorial-single_layout
title: Make a Chart with an Inset Plot with Chart Studio and Excel
subtitle: Chart with an Inset Plot with Chart Studio
permalink: /excel/insets/
imageurl: https://images.plot.ly/excel/inset-plot-excel/inset-thumb.png
state: active
tags: excel
meta_description: A tutorial on how to make an inset chart online with Excel. Follow our step-by-step tutorial to make an inset chart for free and online with Chart Studio.
popularity: featured
section: Layouts
actioncall: Make this Chart with an Inset Plot with Chart Studio
actioncall-url: https://plot.ly/6805/~Dreamshot/?plot_type=Line%20plot
download-url: https://raw.githubusercontent.com/plotly/datasets/master/subplot.csv.zip

similar:
 - title: Make a Graph with Three Y Axes
   url: /excel/3-y-axes
   imgurl: https://images.plot.ly/excel/3-y-axes-excel/three-axes-thumb.png
 - title: Make a Graph with Mulitple Y Axes
   url: /excel/multiple-axes/
   imgurl: https://images.plot.ly/excel/multiple-axes-excel/double-axes-chart-thumb.png
 - title: Add Maps to a Dashboard
   url: /excel/dashboard/
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/insets/) or [R](https://plot.ly/r/insets/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~jackp/15148.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/inset.csv)"
      img: "![Excel view](https://images.plot.ly/excel/inset-plot-excel/excel-view-insets.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import,' click 'Upload a file,' then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](help.plot.ly/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/inset-plot-excel/import-data-inset-plot.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Label your columns like we did below. You'll have three different x-y datasets (margin of error, photon density/energy, electron energy/density). Select 'Line plots' from the MAKE A PLOT menu and then click line plot in the bottom left."
      img: "![Grid](https://images.plot.ly/excel/inset-plot-excel/grid-inset-plot.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](https://images.plot.ly/excel/inset-plot-excel/original-inset-plot.png)"
    - copy: "Head to the TRACES popover and access Col5 from the dropdown menu. From 'Axes' you'll want to click New Axis/Subplot bar. From New Axis/Subplot you'll want to click 'Inset' under New Subplot."
      img: "![Create Inset](https://images.plot.ly/excel/inset-plot-excel/create-inset-inset-plot.png)"
    - copy: "Your plot would then look something like this."
      img: "![Plotting](https://images.plot.ly/excel/inset-plot-excel/plotting-inset-plot.png)"
    - copy: "Take a moment to resize your plot to something less wide. A width of 800 and a height of 600 seems reasonable. Head to the layout menu to do this."
      img: "![Resize](https://images.plot.ly/excel/inset-plot-excel/resize-inset-plot.png)"
    - copy: "Now, head to the TRACES popover again and access Col1 from the dropdown menu. For these data points, you'll want to remove the line from the marker. This will get you a plot closer to our version."
      img: "![Data Points](https://images.plot.ly/excel/inset-plot-excel/data-inset-plot.png)"
    - copy: "Then, within the same popover and column, head to the error bar menu. Show both the x and y error bars. You'll immediately notice the change on your graph."
      img: "![Error Bars](https://images.plot.ly/excel/inset-plot-excel/error-bars-inset-plot.png)"
    - copy: "You can play with the 'Value' option within the error bar menu to get the bars to a length of your liking."
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "Adding titles to the x and y axis of your original plot and inset plot are important, as is an overall title for your plot. After titling your plot, it should look something like this."
      img: "![Titles](https://images.plot.ly/plotly-tutorials/excel/inset-plot-excel/title-inset-plot.png)"
    - copy: "Head to the LEGEND popover. From there, you can hide your legend; it isn't really an important part of this graph."
      img: "![Legend](https://images.plot.ly/excel/inset-plot-excel/legend-inset-plot.png)"
    - copy: "You might notice that the grid lines on the inset plot clash with the grid lines of your original plot. Head to the AXES popover, then select X Axis 2 (Y Axis 2) from the drop down menu. Head to 'lines' and turn the grid lines off."
      img: "![Grid Lines off X](https://images.plot.ly/excel/inset-plot-excel/grid-lines-x-inset-plot.png)"
      img: "![Grid Lines off Y](https://images.plot.ly/excel/inset-plot-excel/grid-lines-y-inset-plot.png)"
    - copy: "In order to get a distinguished inset 'boxed-in' look, you can turn the Axis line and Mirror on in the case of X Axis 2 (Y Axis 2) and also turn the Zero line off in both cases."
      img: "![Axis Line/Mirror X](https://images.plot.ly/excel/inset-plot-excel/mirror-x-inset-plot.png)"
      img: "![Axis Line/Mirror Y](https://images.plot.ly/excel/inset-plot-excel/mirror-y-inset-plot.png)"
 - title: Finalizing your Graph
   sub-steps:
    - copy: "Your plot should now look something like this. In order to get the graph at the top of the tutorial, you’ll need to style it a little more."
      img: "![Final](https://images.plot.ly/excel/inset-plot-excel/final-inset-plot.png)"
    - copy: "We used a note to link to our source data. You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the 'Share' button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel workbook](https://images.plot.ly/excel/inset-plot-excel/excel-inset-plot.png)"
---
