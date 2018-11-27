---
layout: excel-tutorial-single_layout
title: How to Make a Graph with Error Bars with Chart Studio and Excel
subtitle: Error Bars with Chart Studio
permalink: /excel/graph-with-error-bars/
imageurl: https://images.plot.ly/excel/graph-with-error-bars/thum-graph-with-error-bars-with-excel.jpg
state: active
tags: excel
section: Statistical
meta_description: A tutorial on how to make a graph with error bars with Excel. Chart Studio is the easiest and fastest way to make and share graphs online.
popularity: featured
actioncall-url: https://plot.ly/804/~tarzzz/
download-url: https://www.dropbox.com/s/yv3k05g5yl0rc47/Data.xls?raw=1

similar:
 - title: Make a Time Series (with Error Bars)
   url: /excel/time-series
   imgurl: https://images.plot.ly/excel/time-series-with-error-bars/thumb-time-series-in-excel.jpg
 - title: Make a Bar Chart
   url: /excel/bar-chart
   imgurl: https://images.plot.ly/excel/bar-charts/thum-bar-chart-with-excel.png
 - title: Make a Histogram
   url: /excel/histogram
   imgurl: https://images.plot.ly/excel/histogram/thum-histogram-with-excel.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/error-bars/) or [R](https://plot.ly/r/error-bars/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/809.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [XLS format](https://www.dropbox.com/s/yv3k05g5yl0rc47/Data.xls?raw=1)"
      img: "![Excel view](https://images.plot.ly/excel/graph-with-error-bars/excel-data.jpg)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/graph-with-error-bars/import-data.jpg)"
 - title: Creating the Chart
   sub-steps:
    - copy: "After importing the data, select the 'Scatter plots' option from 'Choose Plot Type' dropdown. "
      img: "![Select bar chart from menu](https://images.plot.ly/excel/graph-with-error-bars/choose-scatter-plot-from-menu.jpg)"
    - copy: "Select the 'Error Bars' option from the left toolbar. Select the data shape as shown in figure, and click on 'Scatter Plot' button to create the chart."
      img: "![Create Chart](https://images.plot.ly/excel/graph-with-error-bars/create-chart.jpg)"
    - copy: "This will create a raw chart as shown below. Now we are going to style it to make it more presentable."
      img: "![Raw chart](https://images.plot.ly/excel/graph-with-error-bars/raw-chart.jpg)"
 - title: Styling of the Chart
   sub-steps:
    - copy: "From the Traces popover, select the Marker as 'line and markers' from the 'mode' tab."
      img: "![Select Marker](https://images.plot.ly/excel/graph-with-error-bars/select-marker.jpg)"
    - copy: "From the Traces popover, under 'style' tab, select the line type as 'dotted'."
      img: "![Selected dotted line](https://images.plot.ly/excel/graph-with-error-bars/select-dotted-line.jpg)"
    - copy: "In the Traces popover, under 'error bar' tab, set the line length to 1, and width to 6."
      img: "![Style Error Bars](https://images.plot.ly/excel/graph-with-error-bars/style-error-bar.jpg)"
    - copy: "To Change the background color, click on 'Layout' popover, and select suitable 'Plot Color' from the general tab."
      img: "![Edit Backgrond color](https://images.plot.ly/excel/graph-with-error-bars/change-background-color.jpg)"
    - copy: "From the Axes popover, set the grid lines color to white. The option is available under 'Lines' tab."
      img: "![Edit Backgrond color](https://images.plot.ly/excel/graph-with-error-bars/set-grid-lines.jpg)"
 - title: Export & Share
   sub-steps:
    - copy: "The final chart should look like the one below."
      img: "![Final Chart](https://images.plot.ly/excel/graph-with-error-bars/final-chart.jpg)"
    - copy: "Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/graph-with-error-bars/export-image.jpg)"
    - copy: "To add the chart inside an excel sheet, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Insert Plot in Excel](https://images.plot.ly/excel/graph-with-error-bars/insert-chart-in-excel.jpg)"
---
