---
layout: excel-tutorial-single_layout
title: Make a Bubble Map Online with Chart Studio and Excel
subtitle: Bubble maps with Chart Studio
permalink: /excel/bubble-maps/
imageurl: /static/images/bubble-map-with-excel/bubble-map-thumb.png
state: active
tags: excel
section: Maps
meta_description: A tutorial on how to make a bubble map online with Excel.
popularity: featured
actioncall-url: https://plot.ly/15108/~jackp/?plot_type=Bubble%20map
download-url: https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv.zip

similar:
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps/
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png
 - title: Plot Data on a Map
   url: /excel/scatter-plots-on-maps/
   imgurl: https://images.plot.ly/excel/scatter-plot-on-a-map/scatter-plot-on-a-map-thumb.png
 - title: Add Maps to a Dashboard
   url: /excel/dashboard/
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bubble-charts/) or [R](https://plot.ly/r/bubble-charts/).

live-graph: <iframe width="100%" height="800" frameborder="0" seamless="seamless" scrolling="no" src="https://plot.ly/~Dreamshot/6752.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv)"
      img: "![Excel view](https://images.plot.ly/excel/bubble-maps/excel-view-bubble-map.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/bubble-maps/import-data-bubble-map.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Head to the 'MAKE A PLOT' dropdown and select 'Bubble map.' Label your columns like we did below. You'll have a column for latitude and longitude. Then, click both the 'Size By' and 'Text' options on the left; assign 'Text' to the city and 'Size By' to the population."
      img: "![Labeling](https://images.plot.ly/excel/bubble-maps/grid-bubble-map.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](https://images.plot.ly/excel/bubble-maps/original1-bubble-map.png)"
    - copy: "Since our data only encompasses the U.S., we can change the map layout to focus on the Lower 48, Alaska and Hawaii. Head to the LAYOUT popover, then select the 'Geo layout' option and select 'USA' within the scope dropdown."
      img: "![Scope](https://images.plot.ly/excel/bubble-maps/scope-bubble-map.png)"
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "We’ve titled our chart. You can too. We came up with '2014 U.S. City Populations.'"
      img: "![Title](https://images.plot.ly/excel/bubble-maps/titling-bubble-map.png)"
    - copy: "You can just the 'Type' of layout within the dropdown. We suggest going with 'Albers usa' for this plot."
      img: "![Type](https://images.plot.ly/excel/bubble-maps/albers-bubble-map.png)"
    - copy: "You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the 'Share' button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/bubble-maps/export-bubble-map.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel](https://images.plot.ly/excel/bubble-maps/final1-excel-bubble-map.png)"
---
