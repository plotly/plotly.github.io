---
layout: excel-tutorial-single_layout
title: Make a Bubble Map Online with Plotly and Excel
subtitle: Bubble maps with Plotly
permalink: /excel/bubble-map
imageurl: /static/images/bubble-map-with-excel/bubble-map-thumb.png
state: active
tags: excel
section: Maps
meta_description: A tutorial on how to make a bubble map online with Excel.
popularity: featured
carouselimageurl: https://plot.ly/~Dreamshot/6752/_2014-us-city-populations.png
actioncall: Make this Bubble Map
actioncall-url: https://plot.ly/~Dreamshot/6752/_2014-us-city-populations/
download-url: https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv

similar:
 - title: Tutorial 1
   url: http://link.com
   imgurl: http://i.imgur.com/uhxCioO.png
 - title: Tutorial 2
   url: http://link.com
   imgurl: http://i.imgur.com/uhxCioO.png
 - title: Tutorial 3
   url: http://link.com
   imgurl: http://i.imgur.com/uhxCioO.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bubble-charts/) or [R](https://plot.ly/r/bubble-charts/).

live-graph: <iframe width="100%" height="800" frameborder="0" seamless="seamless" scrolling="no" src="https://plot.ly/~Dreamshot/6752.embed"></iframe>

steps:
 - title: Upload your Excel data to Plotly's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv)"
      img: "![Excel view](https://images.plot.ly/excel/bubble-maps/excel-view-bubble-map.png)"
 - title: Head to Plotly
   sub-steps:
    - copy: "Head to [Plotly's Workspace](https://plot.ly/plot) and sign into your free Plotly account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/bubble-maps/import.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Head to the 'MAKE A PLOT' dropdown and select 'Bubble map.' Label your columns like we did below. You'll have a column for latitude and longitude. Then, click both the 'Size By' and 'Text' options on the left; assign 'Text' to the city and 'Size By' to the population."
      img: "![Labeling](https://images.plot.ly/excel/bubble-maps/labeling-bubble-map.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](https://images.plot.ly/excel/bubble-maps/original-bubble-map.png)"
    - copy: "Since our data only encompasses the U.S., we can change the map layout to focus on the Lower 48, Alaska and Hawaii. Head to the LAYOUT popover, then select the 'Geo layout' option and select 'USA' within the scope dropdown."
      img: "![Domain](https://images.plot.ly/excel/bubble-maps/domain-bubble-map.png)"
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "We’ve titled our chart. You can too. We came up with '2014 U.S. City Populations.'"
      img: "![Title](https://images.plot.ly/excel/bubble-maps/title-bubble-map.png)"
    - copy: "You can just the 'Type' of layout within the dropdown. We suggest going with 'Albers usa' for this plot."
      img: "![Type](https://images.plot.ly/bubble-maps/type-bubble-map.png)"
    - copy: "You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the 'Share' button. Download an image of your Plotly graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/bubble-maps/export-bubble-map.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version."
      img: "![Excel](https://images.plot.ly/excel/bubble-maps/final-excel-bubble-map.png)"
---
