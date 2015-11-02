---
layout: excel-tutorial-single_layout
title: Make a Bubble Map Online with Plotly and Excel
subtitle: Bubble maps with Plotly
permalink: /excel/bubble-map
imageurl: /static/images/bubble-map.png
state: inactive
tags: excel
section: Basic Charts
meta_description: A tutorial on how to make a bubble map online with Excel.
popularity: featured
carouselimageurl:
actioncall: Make this Bubble Map
actioncall-url: https://plot.ly/~Dreamshot/6618/_2014-us-city-populations/
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

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~jackp/1835.embed"></iframe>

steps: 
 - title: Upload your Excel data to Plotly's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv)"
      img: "![Excel view](http://i.imgur.com/5ON7Ypp.png)"
 - title: Head to Plotly
   sub-steps:
    - copy: "Head to [Plotly's Workspace](https://plot.ly/plot) and sign into your free Plotly account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see [this tutorial](help.plot.ly/add-data-to-the-plotly-grid/)"
      img: "![Import data](http://i.imgur.com/eQjmxGp.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Label your columns like we did below. You'll have a column for latitude and longitude. Then, click   both the "Size By" and "Text" options on the left; assign "Text" to the city and "Size By" to the population." For ideal bubble sizing on your final chart, organize the cities by population (separate top 2, then 3-10, 11-20, 21-50 and 50-3000).
      img: "![Labeling]()"
    - copy: "Your plot would initially look something like this."
      img: "![Original]()"
    - copy: "Since our data only encompasses the U.S., we can change the map layout to focus on the Lower 48, Alaska and Hawaii. Head to the LAYOUT popover, then select the "Geo layout" option and select "USA" within the scope dropdown."
      img: "![Domain]()"
    - copy: "We suggest changing your "Bubble Scale" for each trace to enhance the visual appeal. Head to the TRACES popover, then the "Style" menu. For "trace 0 [0-2]," use an area of 200. "Trace 1 [3-10]" should have an area of 500, then 1000 for "trace 3 [11-20]," 2000 for "trace 4 [21-50]," and 3000 for "trace 5 [50-3000]."
      img: ![Bubble Scale]()
    - copy: "When finished scaling, your plot should look something like this."
      img: ![Progress]()
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "We’ve titled our chart. You can too. We came up with "2014 U.S. City Populations.""
      img: "![Title]()"
    - copy: "You can just the "Type" of layout within the dropdown. We suggest going with "Albers usa" for this plot."
      img: "![Type]()"
    - copy: "Our legend describes the traces. Remember, we sorted the cities by population earlier. Label your traces accordingly."
      img: ![Legend]()
    - copy: "You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the "Share" button. Download an image of your Plotly graph by clicking EXPORT on the toolbar."
      img: ![Export]()
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version." 
      img: ![Excel]()
---
