---
layout: excel-tutorial-single_layout
title: Label Points With Text in a Scatter Plot with Plotly and Excel
subtitle: A Step-by-Step Guide to Labeling Points With Text in a Scatter Plot
permalink: excel/text-scatter-chart 
imageurl: 
state: inactive
tags: excel, textandlinks
meta_description: Add text labels to points in a scatter plot. Easily make interactive graphs online and for free with Plotly.
popularity: featured
section: Layouts
actioncall: Make a Scatter Plot with Plotly
actioncall-url: https://plot.ly/6944/~Dreamshot/?plot_type=Scatter%20plot
download-url: https://raw.githubusercontent.com/plotly/datasets/master/label-text.csv

similar:
 - title: Make a Graph with Three Y Axes
   url: /excel/3-y-axes
   imgurl: http://images.plot.ly/excel/3-y-axes-excel/three-axes-thumb.png
 - title: Make a Graph with Mulitple Y Axes
   url: /excel/multiple-axes/
   imgurl: http://images.plot.ly/excel/multiple-axes-excel/double-axes-chart-thumb.png
 - title: Add Maps to a Dashboard
   url: /excel/dashboard/
   imgurl: http://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/text-scatter-chart/) or [R](https://plot.ly/r/text-scatter-chart/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~Dreamshot/3386.embed"></iframe>

steps:
 - title: Upload your Excel data to Plotly's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/label-text.csv)"
      img: "![Excel view](http://images.plot.ly/excel/subplots-excel/excel-view-subplots.png)"
 - title: Head to Plotly
   sub-steps:
    - copy: "Head to [Plotly's Workspace](https://plot.ly/plot) and sign into your free Plotly account. Go to 'Import,' click 'Upload a file,' then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see [this tutorial](help.plot.ly/add-data-to-the-plotly-grid/)"
      img: "![Import data](http://images.plot.ly/excel/subplots-excel/import-data-subplots.png)"

 - title: Creating Your Chart
   sub-steps:
    - copy: "Once you've loaded the data in Plotly, select 'Scatter plot' from the MAKE A PLOT menu. Look for the 'text' option in the sidebar. This will enable you to select columns that associate text with corresponding data points. For each group of data that you want to plot, you'll need to select a column of x-values, a column of y-values, and a column for the text labels. When you're finished, click on the blue 'Scatter plot' button in the sidebar."
      img: "![Grid](http://images.plot.ly/excel/subplots-excel/grid-subplot.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](http://images.plot.ly/excel/subplots-excel/original-subplot.png)"
    - copy: "To add text labels, open the 'Traces' popover by selecting TRACES from the toolbar. You can add labels to an individual trace by selecting that trace from the dropdown menu, or select 'All traces (scatter)' to label all the points in your scatter plot. Here we position the labels on individual traces in order to avoid overlapping labels. We start with Col1. In the 'Mode' tab, look for 'Lines/Markers' and select the option of text over a point."
      img: "![Text Labels](http://images.plot.ly/excel/subplots-excel/create-subplot1-subplot.png)"
    - copy: "To position the labels, click on the 'Style' tab in the 'Traces' popover. In order to have the lables appear directly above the data points, click on the arrow that points up in the '...Position' option." 
      img: "![Position Labels](http://images.plot.ly/excel/subplots-excel/reassign-axis-1-subplot.png)"
    - copy: "Repeat this process for Col4 and Col7. For Col4, we position the text labels below the scatter points. For Col7, we position them above the scatter points."
      img: "![Position Labels2](http://images.plot.ly/excel/subplots-excel/resize-subplot.png)"
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "Your graph should now look something like this."
      img: "![Final](http://images.plot.ly/excel/subplots-excel/titles-subplot.png)"
    - copy: "To make your scatter points all have the same color, head to TRACES, then in the drop down menu select the tab called 'All traces (scatter)'. Go to the 'Style' tab and set the marker color to your liking."
      img: "![Styling](http://images.plot.ly/excel/subplots-excel/legend-subplot.png)"
    - copy: "You can label your axes by clicking on the 'Click to enter X axis title' and 'Click to enter Y axis title' on your graph. The finished product should look something like this."
      img: "![Titles](http://images.plot.ly/excel/subplots-excel/legend2-subplot.png)"
    - copy: "We used a note to link to our source data. You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the 'Share' button. Download an image of your Plotly graph by clicking EXPORT on the toolbar."
      img: "![Export](http://images.plot.ly/excel/subplots-excel/export-subplot.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version."
      img: "![Excel workbook](http://images.plot.ly/excel/subplots-excel/excel-subplot.png)"
---
