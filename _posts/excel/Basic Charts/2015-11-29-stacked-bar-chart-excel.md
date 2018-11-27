---
layout: excel-tutorial-single_layout
title: Make a Stacked Bar Chart Online with Chart Studio and Excel
subtitle: Bar Charts with Chart Studio
permalink: /excel/stacked-bar-chart/
imageurl: https://images.plot.ly/excel/stacked-bar-chart/thum-stacked-bar-chart-2.jpg
state: active
tags: excel
section: BasicCharts
meta_description: A tutorial on how to make a bar chart online with Excel.
popularity: featured
actioncall-url: https://plot.ly/~tarzzz/749
download-url: https://raw.githubusercontent.com/plotly/datasets/master/bar-charts-with-excel.csv

similar:
 - title: Make a Heatmap
   url: /excel/heatmap
   imgurl: /static/images/heat-map-with-excel/thum-heat-map-with-excel.png
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png
 - title: Make a Bar Chart
   url: /excel/bar-chart
   imgurl: https://images.plot.ly/excel/bar-charts/thum-bar-chart-with-excel.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bar-charts/) or [R](https://plot.ly/r/bar-charts/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/762.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/bar-charts-with-excel.csv)"
      img: "![Excel view](https://images.plot.ly/excel/stacked-bar-chart/excel-data-stacked-bar-chart.jpg)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/stacked-bar-chart/import-data-stacked-bar-chart.jpg)"
 - title: Creating the Chart
   sub-steps:
    - copy: "After importing the data, select the 'bar charts' option from 'Choose Plot Type' dropdown. "
      img: "![Select bar chart from menu](https://images.plot.ly/excel/stacked-bar-chart/choose-bar-chart-from-menu.jpg)"
    - copy: "Select the x and y axis as shown in the figure below, and then click on the 'Bar Chart' button to create the plot"
      img: "![Select data shape](https://images.plot.ly/excel/stacked-bar-chart/select-data-shape.jpg)"
    - copy: "This will create a raw chart as shown below."
      img: "![Raw chart](https://images.plot.ly/excel/stacked-bar-chart/raw-chart.jpg)"
    - copy: "To create a stacked bar chart, from the 'Traces' popover, go to 'mode' tab, and select 'stack', as shown in figure."
      img: "![Raw chart](https://images.plot.ly/excel/stacked-bar-chart/raw-chart-stacked.jpg)"
 - title: Styling of the Chart
   sub-steps:
    - copy: "First, we will edit the bar colors. For this, go to 'Traces' popover, and select the trace you wish to edit. Then, in the 'style' tab, select the suitable marker color."
      img: "![Edit Bar color](https://images.plot.ly/excel/stacked-bar-chart/edit-bar-color.jpg)"
    - copy: "To Change the background color, click on 'Layout' popover, and select suitable 'Plot Color' from the general tab."
      img: "![Edit Backgrond color](https://images.plot.ly/excel/stacked-bar-chart/change-background-color.jpg)"
 - title: Export & Share
   sub-steps:
    - copy: "The final chart should look like the one below."
      img: "![Final Chart](https://images.plot.ly/excel/stacked-bar-chart/final-chart.jpg)"
    - copy: "Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/stacked-bar-chart/export-image.jpg)"
    - copy: "To add the chart inside an excel sheet, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Insert Plot in Excel](https://images.plot.ly/excel/stacked-bar-chart/insert-stacked-bar-chart-in-excel.jpg)"
---
