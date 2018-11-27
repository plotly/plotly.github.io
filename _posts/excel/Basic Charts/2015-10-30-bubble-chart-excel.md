---
layout: excel-tutorial-single_layout
title: Make a Bubble Chart Online with Chart Studio and Excel
subtitle: Bubble charts with Chart Studio
permalink: /excel/bubble-chart/
imageurl: https://images.plot.ly/excel/bubble-charts/bubble-chart-thumb.png
state: active
tags: excel
section: BasicCharts
meta_description: A tutorial on how to make a bubble chart online with Excel.
popularity: featured
carouselimageurl: /images/bubble-carousel.jpg
actioncall-url: https://plot.ly/14788/~jackp/?plot_type=Bubble%20chart
download-url: https://raw.githubusercontent.com/plotly/datasets/master/bubble_chart_tutorial.csv.zip

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

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bubble-charts/) or [R](https://plot.ly/r/bubble-charts/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~jackp/1835.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/bubble_chart_tutorial.csv)"
      img: "![Excel view](http://i.imgur.com/5ON7Ypp.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/bubble-charts/import-data-bubble-chart.png)"
 - title: Sizing and Log Axis
   sub-steps:
    - copy: "Your plot should look something like this."
      img: "![Progress](http://i.imgur.com/i0m9Oer.png)"
    - copy: "Open the TRACES popover in the toolbar."
      img: "![Traces](http://i.imgur.com/9hkxMs2.png)"
    - copy: "This is what the “Style” tab of the TRACES popover should look like for “All Traces (Bubble)”. We’ve set the “Size” field to scale the bubbles’ diameter, not area. And we’ve evened out the pixel-to-value ratio (the higher the value in the box, the smaller the bubbles will be). We’ve also increased the weight of the white bubble outlines."
      img: "![Style tab](http://i.imgur.com/wKMZtRX.png)"
    - copy: "Now, open the AXES popover in the toolbar. This is what the 'Range' tab for the X Axis looks like."
      img: ![Axes](http://i.imgur.com/zpmMa1X.png)
    - copy: "We’re opting for a log scale, which will result in a more linear plot."
      img: ![Axes2](http://i.imgur.com/ijOtC0F.png)
 - title: Style and annotate!
   sub-steps:
    - copy: "Your plot should now look something like this. In order to get the graph at the top of the chart, you’ll need to style it a little more."
      img: "![Progress3](http://i.imgur.com/ggQMO8z.png)"
    - copy: "This is what the “General” and “Margins” tabs of the LAYOUT popover should look like. We’re giving our plot a grey background, and we’ve changed some of the font options."
      img: "![General](http://i.imgur.com/OliO8BP.png)"
    - copy: "This is what the 'Lines' tab of the AXES popover looks like. We’ve changed the grey grid to white, and increased the line weight."
      img: ![Lines](http://i.imgur.com/w43GpG1.png)
    - copy: This is what the LEGEND popover looks like.  We’ve set its background to grey, too.
      img: ![Legend](http://i.imgur.com/glczRJ3.png)
    - copy: "We’ve titled our chart and axes. And we’re using markup to link to our source data using the NOTES popover. Select the 'Page' option, and hide the arrow."
      img: ![Note](http://i.imgur.com/4CI4Lj7.png)
    - copy: Because our note has nothing to do with specific data points, we’re going to nestle it below the x-axis. Now drag it to the bottom corner of your plot.
      img: ![Note2](http://i.imgur.com/34heJSi.png)
    - copy: Once your note looks like you want it to, use the HTML anchor tag (<a>) to link to the data source.
      img: ![Source](http://i.imgur.com/hYht3pb.png)
 - title: Export & Share
   sub-steps:
    - copy: "Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](http://i.imgur.com/tIGzmyp.png)"
    - copy: "Your finished chart should look something like this:"
      img: "![Finished](http://i.imgur.com/ff5feZ5.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel](http://i.imgur.com/DpJJbQP.png)"
---
