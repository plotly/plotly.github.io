---
layout: excel-tutorial-single_layout
title: Make a Chart with an Inset Plot with Plotly and Excel
subtitle: Chart with an Inset Plot with Plotly
permalink: /excel/insets
imageurl: 
state: inactive
tags: excel
meta_description: A tutorial on how to make an inset chart online with Excel.
section: Layout
popularity: featured
actioncall: Make this Chart with an Inset Plot with Plotly
actioncall-url:
download-url: https://raw.githubusercontent.com/plotly/datasets/master/inset.csv

similar:
 - title: Make a Bubble Map
   url: /excel/bubble-maps/
   imgurl: /static/images/bubble-map-with-excel/bubble-map-thumb.png
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps/
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png
 - title: Add Maps to a Dashboard
   url: /excel/dashboard/
   imgurl: http://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/insets/) or [R](https://plot.ly/r/insets/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~Dreamshot/404.embed"></iframe>

steps:
 - title: Upload your Excel data to Plotly's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/inset.csv)"
      img: "![Data](http://i.imgur.com/uPPOAi9.png)"
 - title: Head to Plotly
   sub-steps:
    - copy: "Head to [Plotly's Workspace](https://plot.ly/plot) and sign into your free Plotly account. Go to 'Import,' click 'Upload a file,' then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see [this tutorial](help.plot.ly/add-data-to-the-plotly-grid/)"
      img: "![Import data](http://i.imgur.com/eQjmxGp.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Label your columns like we did below. You'll have three different x-y datasets (margin of error, photon density/energy, electron energy/density). Select 'Line plots' from the MAKE A PLOT menu and then click line plot in the bottom left."
      img: "![Plotting](http://i.imgur.com/9uXEXvF.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](http://i.imgur.com/xN3BN3m.png)"
    - copy: "Head to the TRACES popover and access Col5 from the dropdown menu. From 'Axes' you'll want to click New Axis/Subplot bar. From New Axis/Subplot you'll want to click 'Inset' under New Subplot."
      img: "![Create Inset](http://i.imgur.com/j06ec0P.png)"
    - copy: "Your plot would then look something like this."
      img: "![Plotting2](http://i.imgur.com/YGU1F41.png)"
    - copy: "Take a moment to resize your plot to something less wide. A width of 800 and a height of 600 seems reasonable. Head to the layout menu to do this."
      img: "![Resize](http://i.imgur.com/gkbenLD.png)"
    - copy: "Now, head to the TRACES popover again and access Col1 from the dropdown menu. For these data points, you'll want to remove the line from the marker. This will get you a plot closer to our version."
      img: "![Data Points](http://i.imgur.com/iCNNizP.png)"
    - copy: "Then, within the same popover and column, head to the error bar menu. Show both the x and y error bars. You'll immediately notice the change on your graph."
      img: "![Error Bars](http://i.imgur.com/qgrCXqV.png)"
    - copy: "You can play with the "Value" option within the error bar menu to get the bars to a length of your liking."
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "Adding titles to the x and y axis of your original plot and inset plot are important, as is an overall title for your plot. After titling your plot, it should look something like this."
      img: "![Titles](http://i.imgur.com/TYdhLJD.png)"
    - copy: "Head to the LEGEND popover. From there, you can hide your legend; it isn't really an important part of this graph."
      img: "![Legend](http://i.imgur.com/2kdhgyE.png)"
    - copy: "You might notice that the grid lines on the inset plot clash with the grid lines of your original plot. Head to the AXES popover, then select X Axis 2 (Y Axis 2) from the drop down menu. Head to 'lines' and turn the grid lines off."
      img: "![Grid Lines off X](http://i.imgur.com/zZ6Kozq.png)"
      img: "![Grid Lines off Y](http://i.imgur.com/5hcDKAF.png)"
    - copy: "In order to get a distinguished inset 'boxed-in' look, you can turn the Axis line and Mirror on in the case of X Axis 2 (Y Axis 2) and also turn the Zero line off in both cases."
      img: "![Axis Line/Mirror X](http://i.imgur.com/SPOEO1T.png)"
      img: "![Axis Line/Mirror Y](http://i.imgur.com/ioJwK42.png)"
 - title: Finalizing your Graph
   sub-steps:
    - copy: "Your plot should now look something like this. In order to get the graph at the top of the tutorial, you’ll need to style it a little more."
      img: "![Final](http://i.imgur.com/xH25cQC.png)"
    - copy: "We used a note to link to our source data. You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the 'Share' button. Download an image of your Plotly graph by clicking EXPORT on the toolbar."
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version."
      img: "![Excel workbook](http://i.imgur.com/x6jTJ47.png)"
