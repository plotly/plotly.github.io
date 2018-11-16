---
layout: excel-tutorial-single_layout
title: Make a Dot Plot Online with Chart Studio and Excel
subtitle: Area Charts with Chart Studio
permalink: /excel/dot-plots/
imageurl: https://images.plot.ly/excel/dot-plots/thum-dot-plot-in-excel-2.jpg
state: active
tags: excel
section: BasicCharts
meta_description: A tutorial on how to make a dot plot online with Excel.
popularity: featured
actioncall-url: https://plot.ly/692/~tarzzz/
download-url: https://raw.githubusercontent.com/plotly/datasets/master/dot-plot-with-excel.csv

similar:
 - title: Make a Text Scatter Chart
   url: /excel/text-scatter-chart
   imgurl: https://images.plot.ly/excel/label-points-excel/thumb-label-points.png
 - title: Make a Bar Chart
   url: /excel/bar-chart
   imgurl: https://images.plot.ly/excel/bar-charts/thum-bar-chart-with-excel.png
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png

otherlang: Know how to program? See how to create this in [R](https://plot.ly/r/dot-plots/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/694.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/dot-plot-with-excel.csv)"
      img: "![Excel view](https://images.plot.ly/excel/dot-plots/excel-data-dot-plot.jpg)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/dot-plots/import-data-dot-plot.jpg)"
 - title: Creating the Chart
   sub-steps:
    - copy: "After importing the data, select the 'scatter plots' option from 'Choose Plot Type' dropdown. "
      img: "![Select heatmap from menu](https://images.plot.ly/excel/dot-plots/choose-from-menu.jpg)"
    - copy: "Select the x and y axis as shown in the figure below,, and then on the 'Scatter Plot' button to create the plot"
      img: "![Create raw chart](https://images.plot.ly/excel/dot-plots/select-data-shape.jpg)"
    - copy: "This will create a raw chart. Now we are going to style it to make it more presentable."
 - title: Styling of the Chart
   sub-steps:
    - copy: "Firstly, we are going to edit the legend, to be more informational. It can be done by simply clicking on the legend, and editing the text"
      img: "![Edit Legend](https://images.plot.ly/excel/dot-plots/edit-legend.jpg)"
    - copy: "Now we will change the marker size and colors. For this, in the 'Traces' popover, select the trace to edit, and then select the desired marker size, and color from the 'Marker' option, as shown in figure below."
      img: "![Edit Marker size and color](https://images.plot.ly/excel/dot-plots/change-marker.jpg)"
    - copy: "Now, we will re-size the axis to fit the plot more cleanly. From the 'Axis' popover, select the 'X Axis'. Set the 'auto-range' option to Off, and enter the range in the text box below."
      img: "![Edit Axis](https://images.plot.ly/excel/dot-plots/change-axis.jpg)"
    - copy: "We are almost done here. To add the axis title, simply click on the left side (for Y axis), and below the axis (for X Axis), to enter the respective axis titles."
      img: "![Add Axis title](https://images.plot.ly/excel/dot-plots/add-axis-title.jpg)"
 - title: Export & Share
   sub-steps:
    - copy: "The final chart should look like the one below."
      img: "![Final Chart](https://images.plot.ly/excel/dot-plots/thumb-dot-plot-in-excel.jpg)"
    - copy: "Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/dot-plots/export-image.jpg)"
    - copy: "To add the chart inside an excel sheet, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Insert Plot in Excel](https://images.plot.ly/excel/dot-plots/insert-dot-plot-in-excel.jpg)"
---
