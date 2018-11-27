---
layout: excel-tutorial-single_layout
title: Make a Time Series (with Error Bars) Online with Chart Studio and Excel
subtitle: Time Series Charts with Chart Studio
permalink: /excel/time-series/
imageurl: https://images.plot.ly/excel/time-series-with-error-bars/thumb-time-series-in-excel-2.jpg
state: active
tags: excel
section: Statistical
meta_description: A tutorial on how to make a time series chart online with Excel.
popularity: featured
actioncall-url: https://plot.ly/731/~tarzzz/
download-url: https://raw.githubusercontent.com/plotly/datasets/master/time-series-with-error-bars-excel.csv

similar:
 - title: Make a Graph with Error Bars
   url: /excel/graph-with-error-bars
   imgurl: https://images.plot.ly/excel/graph-with-error-bars/thum-graph-with-error-bars-with-excel.jpg
 - title: Make a Bar Chart
   url: /excel/bar-chart
   imgurl: https://images.plot.ly/excel/bar-charts/thum-bar-chart-with-excel.png
 - title: Make a Histogram
   url: /excel/histogram
   imgurl: https://images.plot.ly/excel/histogram/thum-histogram-with-excel.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/time-series/) or [R](https://plot.ly/r/time-series/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/736.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/time-series-with-error-bars-excel.csv)"
      img: "![Excel view](https://images.plot.ly/excel/time-series-with-error-bars/excel-data-time-series-with-error-bars.jpg)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/time-series-with-error-bars/import-data-time-series.jpg)"
 - title: Creating the Chart
   sub-steps:
    - copy: "After importing the data, select the 'scatter plots' option from 'Choose Plot Type' dropdown. "
      img: "![Select scatter plot from menu](https://images.plot.ly/excel/time-series-with-error-bars/choose-from-menu.jpg)"
    - copy: "From the left plot menu, choose the 'Asymmetric Errors' option, and then select the data shape as shown in the figure. Finally click on the 'Scatter Plot' button to generate the chart."
      img: "![Create raw chart](https://images.plot.ly/excel/time-series-with-error-bars/select-data-shape.jpg)"
    - copy: "This will create a scatter plot along with the error bars. We will also add some styling to make it more presentable."
 - title: Styling the Chart
   sub-steps:
    - copy: "In the Traces popover, select the mode to 'lines' from the 'mode' tab."
      img: "![Edit Marker](https://images.plot.ly/excel/time-series-with-error-bars/select-trace-marker.jpg)"
    - copy: "Now, we will modify the error bars. In the 'Traces' popover, select the 'error-bars' tab. Set the line to '1', and to a suitable colour. Also, set the line width to zero."
      img: "![Edit Error Bars](https://images.plot.ly/excel/time-series-with-error-bars/change-error-bars.jpg)"
 - title: Export & Share
   sub-steps:
    - copy: "The final chart should look like the one below."
      img: "![Final Chart](https://images.plot.ly/excel/time-series-with-error-bars/final-plot.jpg)"
    - copy: "Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/time-series-with-error-bars/export-image.jpg)"
    - copy: "To add the chart inside an excel sheet, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Insert Plot in Excel](https://images.plot.ly/excel/time-series-with-error-bars/insert-time-series-plot-in-excel.jpg)"
---
