---
layout: excel-tutorial-single_layout
title: Three Y Axes Graph with Plotly and Excel
subtitle: A Step by Step Guide to Making a Graph with Three Y Axes With Plotly and Excel
permalink: /excel/3-y-axes
imageurl: http://images.plot.ly/excel/3-y-axes-excel/thumbnail5-3-y-axes.png
state: inactive
tags: basic
meta_description: Create a graph with 3 traces, with a separate y-axis for each trace with Plotly and Excel. Follow our step-by-step tutorial to make a three axes graph for free and online with Plotly.
popularity: featured
section: Layouts
actioncall: Make a Graph with Three Y Axes
actioncall-url:
download-url: https://raw.githubusercontent.com/plotly/datasets/master/cost_output_defective.csv

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

otherlang: Know how to program? See how to create this in [Python](url) or [R](url).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~Dreamshot/6499.embed"></iframe>

steps:
 - title: Upload your Excel data to Plotly's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/cost_output_defective.csv)"
 - title: Head to Plotly
   sub-steps:
    - copy: "Head to [Plotly's Workspace](https://plot.ly/plot) and sign into your free Plotly account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](http://images.plot.ly/excel/scatter-plot-on-a-map/import-scatter-plot-on-a-map.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Label your columns like we did below. You'll have three y-axis columns (cost, output, defective) and one x-axis column (date). Select 'Line plots' from the MAKE A PLOT menu and then click line plot in the
bottom left."
      img: "![Labeling](http://i.imgur.com/pX7MAS1.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](http://i.imgur.com/fgyLUku.png)"
    - copy: "Head to the TRACES popover and access Col2. Prepare to add the second y-axis. Click 'New Axis/Subplot...'"
      img: "![New Axis](http://i.imgur.com/0wG9oM6.png)"
    - copy: "You'll want to apply your new y-axis to the right side of the graph."
      img: "![Right](http://i.imgur.com/QcRkOf0.png)"
    - copy: "Your graph should now look something like this:"
      img: "![Progress](http://i.imgur.com/IYQcLUA.png)"
    - copy: "Now, we'll peform a similar process for Col3. Instead of applying third y-axis to the right side of the graph, choose 'free left' instead."
      img: "![Free Left](http://i.imgur.com/q1BRAeF.png)"
    - copy: "Your graph should now look something like this:"
      img: "![Free Left](http://i.imgur.com/p19DIG2.png)"
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "You might notice that the y-axis is busy with grid lines. Open the AXES popover, then Lines in the toolbar to clean this up. Select the first and second y-axes and turn grid lines 'off.'"
      img: "![Grid Lines](http://i.imgur.com/4BV5Pfr.png)"
    - copy: "Next, ensure that all your y-axes range starts at 0. Open the Axes popover, then Range and adjust it to 0. Do this for all y-axes."
      img: "![Range](http://i.imgur.com/QG1T8hA.png)"
    - copy: "Your graph should now look something like this:"
      img: "![Progress](http://i.imgur.com/Y4f1J7K.png)"
    - copy: "Within the legend on the right side of the graph, you can label your 'Col2' trace 'Cost,' Col3 'Output' and Col4 'Defective.'"
      img: "![Progress]()"
    - copy: "Your plot should now look something like this. In order to get the graph at the top of the tutorial, you’ll need to style it a little more. You can adjust the 'Lines/Markers' within the TRACES popover."
      img: "![Lines/Markers](http://i.imgur.com/2REaJST.png)"
    - copy: "We’ve titled our chart. We've also colored-coded our y-axis labels to our traces. You can even add 'Tick Prefixes' within the AXES popover and 'Labels' tab. And we’ve linked to our source data in the x-axis label area."
      img: "![Prefixes](http://i.imgur.com/AT9d9AH.png)"
      img: "![Prefixes](http://i.imgur.com/oCPqGX2.png)"
    - copy: "You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the 'Share' button. Download an image of your Plotly graph by clicking EXPORT on the toolbar."
      img: "![Final](http://i.imgur.com/7B8BqSy.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version."
      img: "![Excel](http://i.imgur.com/NUGmp3l.png)"
---
