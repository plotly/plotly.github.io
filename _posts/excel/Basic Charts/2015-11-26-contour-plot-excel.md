---
layout: excel-tutorial-single_layout
title: Make a Contour Plot Online with Chart Studio and Excel
subtitle: Contour Plots with Chart Studio
permalink: /excel/contour-plots/
imageurl: https://images.plot.ly/excel/contour-plots/thumb-contour-plot-in-excel.jpg
state: active
tags: excel
section: Scientific
meta_description: A tutorial on how to make a contour plot online with Excel.
popularity: featured
actioncall-url: https://plot.ly/673/~tarzzz
download-url: https://raw.githubusercontent.com/plotly/datasets/master/volcano.csv

similar:
 - title: Make a Heatmap
   url: /excel/heatmap
   imgurl: /static/images/heat-map-with-excel/thum-heat-map-with-excel.png
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png
 - title: Make a Bubble Chart
   url: /excel/bubble-chart
   imgurl: https://images.plot.ly/excel/bubble-charts/bubble-chart-thumb.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/contour-plots/) or [R](https://plot.ly/r/contour-plots/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/680.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/volcano.csv)"
      img: "![Excel view](https://images.plot.ly/excel/contour-plots/excel-data-contour-plot.jpg)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/contour-plots/import-data-contour-plot.jpg)"
 - title: Creating the Chart
   sub-steps:
    - copy: "After importing the data, select the 'heatmaps' option from 'Choose Plot Type' dropdown. "
      img: "![Select heatmap from menu](https://images.plot.ly/excel/contour-plots/choose-from-menu.jpg)"
    - copy: "Select 'Z Matrix' as the data shape, click on 'Select all columns', and then on the 'Make Heatmap' button to create the plot."
      img: "![Select data shape](https://images.plot.ly/excel/contour-plots/select-data-shape.jpg)"
    - copy: "This will create a heatmap chart using the data. To convert the heatmap to a contour plot, we need to select 'Contour map' from the TRACE popover, as shown in the figure below."
      img: "![ Change heatmap to contour plot](https://images.plot.ly/excel/contour-plots/select-contour-plot-from-popover.jpg)"
 - title: Optional styling of the plot
   sub-steps:
    - copy: "We should have a contour plot created like the one below. Now we are going to style it to make it more presentable."
      img: "![ Raw Plot](https://images.plot.ly/excel/contour-plots/raw-plot.jpg)"
    - copy: "In the 'Traces' popover, under the 'style' tab, toggle 'auto-color' to off, and then select one of the styles from the list below."
      img: "![Change Colorway](https://images.plot.ly/excel/contour-plots/select-colorways.jpg)"
    - copy: "This is how the final chart looks like!"
      img: "![Final Plot](https://images.plot.ly/excel/contour-plots/thumb-contour-plot-in-excel.jpg)"
 - title: Export & Share
   sub-steps:
    - copy: "You can also export a static image of your plotly graph. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/contour-plots/export-image.jpg)"
    - copy: "To add the chart inside an excel sheet, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it."
      img: "![Plot in Excel](https://images.plot.ly/excel/contour-plots/excel-contour-plot.jpg)"
---
