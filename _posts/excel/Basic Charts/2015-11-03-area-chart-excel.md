---
layout: excel-tutorial-single_layout
title: Make a Area Chart Online with Chart Studio and Excel
subtitle: Area Charts with Chart Studio
permalink: /excel/area-chart/
redirect_from: /excel/area-charts/
imageurl: https://images.plot.ly/excel/area-charts/thum-area-charts-in-excel-with-plotly.png
state: active
tags: excel
section: BasicCharts
meta_description: A tutorial on how to make an area chart online with Excel.
popularity: featured
actioncall-url: https://plot.ly/15084/~jackp/?plot_type=Area%20plot
download-url: https://plot.ly/~Dreamshot/564/nyc-vs-la-population-1900-2010.csv

similar:
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png
 - title: Make a Bar Chart
   url: /excel/bar-chart
   imgurl: https://images.plot.ly/excel/bar-charts/thum-bar-chart-with-excel.png
 - title: Make a Heatmap
   url: /excel/heatmap
   imgurl: /static/images/heat-map-with-excel/thum-heat-map-with-excel.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/filled-area-plots/) or [R](https://plot.ly/r/filled-area-plots/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~Dreamshot/564/nyc-vs-la-population-1900-2010.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://plot.ly/~Dreamshot/564/nyc-vs-la-population-1900-2010.csv)"
      img: "![Excel view](/static/images/area-charts-in-excel-with-plotly/excel-data.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/area-charts/import-data-area-chart.png)"
 - title: Adding Fill Under Traces
   sub-steps:
    - copy: "To make an area plot from a line plot, edit the 'Fill To' attribute in the MODE tab of the TRACES popover."
    - copy: "Here's how the TRACES popover for 'trace 0' looks. Notice 'Fill To' has been set to 'Y=0'."
      img: "![Fill](/static/images/area-charts-in-excel-with-plotly/traces-popover-fill-to.png)"
    - copy: "Here's how the TRACES popover for 'trace 1' looks. Notice 'Fill To' has been set to 'Next Y'."
      img: "![ Set fill to](/static/images/area-charts-in-excel-with-plotly/fill-to-next-y.png)"
 - title: Optional styling to make your plot prettier
   sub-steps:
    - copy: "Nice! Now you have your area plot. If you want, you can change the colors and apply smoothing to the lines to get a chart that looks like one at the top of the tutorial."
    - copy: "Here's how your area chart looks before styling."
      img: "![Chart before styling](/static/images/area-charts-in-excel-with-plotly/chart-before-styling.png)"
    - copy: "Here's how the TRACES popover looks with smoothing and the change of colors."
      img: "![Style Tab](/static/images/area-charts-in-excel-with-plotly/style-tab.png)"
    - copy: "The smoothing button is highlighted in red."
      img: "![Smoothing buttons highlighted](/static/images/area-charts-in-excel-with-plotly/smoothing-button-highlighted.png)"
    - copy: "Here's how the AXES popover looks with the axes lines thickened and made white."
      img: "![Axes popover lines tab](/static/images/area-charts-in-excel-with-plotly/axes-lines.png)"
    - copy: "Here's how the LAYOUT popover looks with the plot and margin background color changed to grey."
      img: "![Background color](/static/images/area-charts-in-excel-with-plotly/layout-general.png)"
 - title: Export & Share
   sub-steps:
    - copy: "Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](http://i.imgur.com/tIGzmyp.png)"
    - copy: "Your finished chart should look something like this:"
      img: "![Finished](/static/images/area-charts-in-excel-with-plotly/finished-chart.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Plot in Excel](/static/images/area-charts-in-excel-with-plotly/image-in-excel.png)"

---
