---
layout: excel-tutorial-single_layout
title: Make a Box Plot Online with Chart Studio and Excel
subtitle: Box Plots with Chart Studio
permalink: /excel/box-plot/
imageurl: /static/images/box-plot-with-excel/thum-box-plot-with-excel.png
state: active
tags: excel
section: Statistical
meta_description: A tutorial on how to make a box plot online with Excel.
popularity: featured
actioncall-url: https://plot.ly/15100/~jackp/?plot_type=Box%20plot
download-url: https://plot.ly/~cimar/203.csv

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

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/box-plots/) or [R](https://plot.ly/r/box-plots/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~cimar/203/points-scored-per-nba-game-data-taken-from-points-scored-by-the-top-50-scoring-n.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://plot.ly/~cimar/203/points-scored-per-nba-game-data-taken-from-points-scored-by-the-top-50-scoring-n.csv)"
      img: "![View of data](/static/images/box-plot-with-excel/image22.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/box-plots/import-data-box-plot.png)"
    - copy: "Select 'Box plots' from the MAKE A PLOT menu."
      img: "![Box Plot](/static/images/box-plot-with-excel/image18.png)"
    - copy: "Click the blue plot button in the sidebar to create the chart."
      img: "![Plot button](/static/images/box-plot-with-excel/image09.png)"
 - title: Traces
   sub-steps:
    - copy: "Your plot should look something like this."
      img: "![Traces](/static/images/box-plot-with-excel/image12.png)"
    - copy: "Open the TRACES popover in the toolbar."
      img: "![Traces](/static/images/box-plot-with-excel/image13.png)"
    - copy: "This is what the 'Mode' tab of the TRACES popover should look like for 'All Traces (Box)'. We've elected to show all points alongside our boxes, not just the outliers."
      img: "![Mode](/static/images/box-plot-with-excel/image02.png)"
 - title: Style and Annotate
   sub-steps:
    - copy: "Your plot should look something like this."
      img: "![Chart Studio box plot](/static/images/box-plot-with-excel/image05.png)"
    - copy: "In order to get the graph at the top of the chart, you'll need to style it more."
      img: "![Style your plot](/static/images/box-plot-with-excel/image13.png)"
    - copy: "This is what the 'Style' tab of the TRACES popover should look like for 'All Traces (Box)'.    We've narrowed our boxes, spread them out more, and stroked them with a thinner weight. We've also made the accompanying points smaller and more spread-out."
      img: "![box plot styling](/static/images/box-plot-with-excel/image10.png)"
    - copy: "We've also changed the fill color of each trace in the 'Mode' tab of the TRACES popover. This is what the tab looks like for 'Carmelo Anthony'."
      img: "![change the fill color](/static/images/box-plot-with-excel/image16.png)"
    - copy: "(Alternative: We didn't, but you can also change the color of the box plot strokes, in the 'Style' tab of the TRACES popover.)"
      img: "![Style graph](/static/images/box-plot-with-excel/image19.png)"
    - copy: "Here's how the LAYOUT popover should look."
      img: "![Graph Layout](/static/images/box-plot-with-excel/image04.png)"
    - copy: " We've nudged the top margin, and we're giving our chart a grey background. We've also changed the font."
      img: "![Chart Studio graph styling](/static/images/box-plot-with-excel/image06.png)"
    - copy: "This is what the 'Lines' tab of the AXES popover looks like for 'All Axes'. We've made the grid lines white, and the x-axis a little heavier."
      img: "![Axes styling](/static/images/box-plot-with-excel/image14.png)"
    - copy: "This is what the 'Labels' tab of the AXES popover looks like for 'X Axis'. We've rotated the labels."
      img: "![Rotate labels on graph](/static/images/box-plot-with-excel/image00.png)"
    - copy: "We're hiding the legend in the LEGEND popover."
      img: "![Hiding the legend](/static/images/box-plot-with-excel/image08.png)"
    - copy: "We've titled our chart, and used markup to format our text and source our data, which in this case is another plotly graph."
      img: "![markup](/static/images/box-plot-with-excel/image07.png)"
    - copy: "Points Scored per NBA Game<br>data taken from <i><a href=''https://plot.ly/jackp/969''>Points Scored by the Top 50 Scoring NBA Players in 2012</a></i>"
 - title: Export & Share
   sub-steps:
    - copy: "Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](http://i.imgur.com/tIGzmyp.png)"
    - copy: "Your finished chart should look something like this:"
      img: "![Finished](https://plot.ly/~cimar/203/points-scored-per-nba-game-data-taken-from-points-scored-by-the-top-50-scoring-n.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Plot in Excel](/static/images/box-plot-with-excel/image24.png)"
---
