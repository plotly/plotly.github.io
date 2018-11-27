---
layout: excel-tutorial-single_layout
title: Create a Pareto Chart with Chart Studio and Excel
subtitle: A Step-by-Step Guide to Create a Pareto Chart
permalink: /excel/pareto-chart/
imageurl: https://images.plot.ly/excel/pareto-chart-excel/thumb-pareto-chart.png
state: active
tags: excel
meta_description: Create a Pareto chart. Easily make interactive graphs online and for free with Chart Studio.
popularity: featured
section: BasicCharts
actioncall: Created a Pareto Chart with Chart Studio
actioncall-url: https://plot.ly/7162/~Dreamshot/?plot_type=Line%20plot
download-url: https://raw.githubusercontent.com/plotly/datasets/master/pareto-chart.csv

similar:
 - title: Make a Graph with Three Y Axes
   url: /excel/3-y-axes
   imgurl: https://images.plot.ly/excel/3-y-axes-excel/three-axes-thumb.png
 - title: Make a Graph with Mulitple Y Axes
   url: /excel/multiple-axes/
   imgurl: https://images.plot.ly/excel/multiple-axes-excel/double-axes-chart-thumb.png
 - title: Add Maps to a Dashboard
   url: /excel/dashboard/
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/multiple-axes/) or [R](https://plot.ly/r/multiple-axes/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~Dreamshot/7164.embed"></iframe>

steps:
 - title: About a Pareto Chart
   sub-steps:
    - copy: "A Pareto chart combines a bar and line chart. The Pareto principle states that, 'for many events, roughly 80% of the effects come from 20% of the causes.' In this example, we will see that 80% of complaints come from 20% of the complaint types."
      img: "![Pareto principle](https://images.plot.ly/excel/pareto-chart-excel/pareto-principal-pareto-chart.jpg)"
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/pareto-chart.csv)"
      img: "![Excel view](https://images.plot.ly/excel/pareto-chart-excel/excel-view-pareto-chart.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import,' click 'Upload a file,' then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](help.plot.ly/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/pareto-chart-excel/import-pareto-chart.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Once you've loaded the data in Chart Studio, label your columns like we did below. You'll have complaint type on the x axis data and complaint count and cumulative percentage on the y axis data. Then, select 'Line plots' from the CHOOSE PLOT TYPE menu. When you're finished, click on the blue 'LINE PLOT' button in the sidebar."
      img: "![Grid](https://images.plot.ly/excel/pareto-chart-excel/grid-pareto-chart.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](https://images.plot.ly/excel/pareto-chart-excel/original-pareto-chart.png)"
    - copy: "Remember, a Pareto chart combines a bar and line chart. The complaint count will be the 'bar' portion of the chart and the cumulative percentage will be the 'line' portion of the chart. Let's set the complaint count trace (Col2) to 'Bar.' Head to the 'Traces' menu and select 'Bar' as type."
      img: "![Bar](https://images.plot.ly/excel/pareto-chart-excel/bar-pareto-chart.png)"
    - copy: "Take a moment to resize your plot to something less wide. A width of 800 and a height of 600 seems reasonable. Head to the layout menu to do this."
      img: "![Resize](https://images.plot.ly/excel/pareto-chart-excel/resize-pareto-chart.png)"
    - copy: "Next, we'll add a second y-axis for the other trace (Col3). To do this, head to the 'Traces' menu then to 'New Axis/Subplot.' Set your 'New Y' to 'Right.'"
      img: "![Second axis](https://images.plot.ly/excel/pareto-chart-excel/second-axis-pareto-chart.png)"
    - copy: "Your plot should now look something like this."
      img: "![Progress](https://images.plot.ly/excel/pareto-chart-excel/progress-pareto-chart.png)"
    - copy: "Now, we'll clean up the grid lines. Go to the 'Axes' menu, then select 'Y Axis 2' in the drop down menu. Set 'Grid lines' to off."
      img: "![Grid lines](https://images.plot.ly/excel/pareto-chart-excel/grid-lines-pareto-chart.png)"
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "Your graph should now look something like this."
      img: "![Final](https://images.plot.ly/excel/pareto-chart-excel/final-pareto-chart.png)"
    - copy: "Head to the 'Traces' menu and then the 'Style' tab to set the trace color to your liking. You can title your graph and axes like we did. You can add 'Tick Suffixes' to 'Y Axis 2' by heading to the 'Axes' menu, then the 'Labels' menu within."
      img: "![Suffix](https://images.plot.ly/excel/pareto-chart-excel/suffix-pareto-chart.png)"
    - copy: "Here's our finished graph."
      img: "![Finished](https://images.plot.ly/excel/pareto-chart-excel/finished-pareto-chart.png)"
    - copy: "You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the 'Share' button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/pareto-chart-excel/export-pareto-chart.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel workbook](https://images.plot.ly/excel/pareto-chart-excel/excel-pareto-chart.png)"
---
