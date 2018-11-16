---
layout: excel-tutorial-single_layout
title: Make a Heatmap Online with Chart Studio and Excel
subtitle: Heatmaps with Chart Studio
permalink: /excel/heatmap/
imageurl: /static/images/heat-map-with-excel/thum-heat-map-with-excel.png
state: active
tags: excel
section: Scientific
meta_description: A tutorial on how to make a heatmap online with Excel.
popularity: featured
actioncall-url: https://plot.ly/15074/~jackp/?plot_type=Make%20heatmap
download-url: https://github.com/plotly/datasets/raw/master/okcupid-compatibility-by-religion.csv.zip

similar:
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png
 - title: Make a Histogram
   url: /excel/histogram
   imgurl: https://images.plot.ly/excel/histogram/thum-histogram-with-excel.png
 - title: Adding Charts to Dashboards
   url: /excel/dashboards
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/heatmaps/) or [R](https://plot.ly/r/heatmaps/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~cimar/200/okcupid-compatibility-by-religion-source-oktrends-2009.embed"></iframe>

steps:
 - title: Upload your Excel Data to Chart Studio's Grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://plot.ly/~cimar/200/okcupid-compatibility-by-religion-source-oktrends-2009.csv)"
      img: "![View of data](/static/images/heat-map-with-excel/image21.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import button](https://images.plot.ly/excel/heat-map/import-data-heat-map.png)"
    - copy: "Select 'Heatmaps' from the MAKE A PLOT menu."
      img: "![Dropdown](/static/images/heat-map-with-excel/image06.png)"
    - copy: "Select the 'Column names' button from the X-AXIS options in the sidebar and click 'Select all columns' button."
      img: "![Select all columns](/static/images/heat-map-with-excel/image10.png)"
    - copy: "Deselect any columns you don't want to plot, and your row names column if you have one. This will be your 'y' value."
      img: "![Y value](/static/images/heat-map-with-excel/image02.png)"
    - copy: "Click the blue plot button in the sidebar to create the chart."
      img: "![Create a chart button](/static/images/heat-map-with-excel/image07.png)"
 - title: Traces
   sub-steps:
    - copy: "Your plot should look something like this."
      img: "![Unstyled heatmap](/static/images/heat-map-with-excel/image00.png)"
    - copy: "The first step to styling it into the heatmap above is to open the TRACES popover in the toolbar."
      img: "![Style menu](/static/images/heat-map-with-excel/image12.png)"
    - copy: "This is what the 'Style' tab of the TRACES popover should look like. We've selected one of the default gradients, red-yellow-blue."
      img: "![Gradient colors](/static/images/heat-map-with-excel/image14.png)"
    - copy: "For this particular data, we also want to center our gradient so that yellow correlates to a value of 60.2, and everything above or below is a little red or green. The easiest way to do this is by nudging the 'Z range' values in the 'Range/bins' tab to converge on our desired midpoint  -- we compressed our range, but you can also stretch it if you prefer the effect."
      img: "![Setting the range](/static/images/heat-map-with-excel/image03.png)"
    - copy: "(Alternative: if you want to make a contour plot, just change the 'Type' setting in the 'Mode' tab.)"
      img: "![Making a contour plot](/static/images/heat-map-with-excel/image13.png)"
    - copy: "Contour Plot"
      img: "![Changing the type](/static/images/heat-map-with-excel/image01.png)"
 - title: Style and Annotate
   sub-steps:
    - copy: "Your plot should look something like this."
      img: "![Styled heatmap](/static/images/heat-map-with-excel/image16.png)"
    - copy: "There's a little more styling you need to do to get the graph at the top of the chart."
      img: "![Trace menu](/static/images/heat-map-with-excel/image12.png)"
    - copy: "Here's how the LAYOUT popover should look."
      img: "![Adjusting the background color](/static/images/heat-map-with-excel/image11.png)"
    - copy: "We've nudged the margins to accommodate the y-axis labels, and we're giving our chart a grey background."
      img: "![Styling the margins](/static/images/heat-map-with-excel/image04.png)"
    - copy: "We've titled our chart, and used markup to format our text and source our data."
      img: "![Title](/static/images/heat-map-with-excel/image09.png)"
    - copy: "OKCupid Compatibility by Religion<br>Source: <a href=''http://blog.okcupid.com/index.php/how-races-and-religions-match-in-online-dating'' >OKTrends, 2009</a>"
 - title: Export and Share
   sub-steps:
    - copy: "You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the 'Share' button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://s3-us-west-1.amazonaws.com/plotly-tutorials/excel/bubble-maps/export-bubble-map.png)"
    - copy: "Your finished chart should look something like this"
      img: "![Bar chart](https://plot.ly/~cimar/200/okcupid-compatibility-by-religion-source-oktrends-2009.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel view](/static/images/heat-map-with-excel/image23.png)"
---
