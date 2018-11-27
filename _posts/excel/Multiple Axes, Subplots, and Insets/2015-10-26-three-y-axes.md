---
layout: excel-tutorial-single_layout
title: Three Y Axes Graph with Chart Studio and Excel
subtitle: A Step by Step Guide to Making a Graph with Three Y Axes With Chart Studio and Excel
permalink: /excel/three-y-axes/
imageurl: https://images.plot.ly/excel/3-y-axes-excel/three-axes-thumb.png
state: active
tags: excel
meta_description: Create a graph with 3 traces, with a separate y-axis for each trace with Chart Studio and Excel. Follow our step-by-step tutorial to make a three axes graph for free and online with Chart Studio.
popularity: featured
section: Layouts
actioncall: Make a Graph with Three Y Axes
actioncall-url: https://plot.ly/6812/~Dreamshot?plot_type=Line%20plot
download-url: https://raw.githubusercontent.com/plotly/datasets/master/cost_output_defective.csv.zip

similar:
 - title: Make a Graph with Mulitple Y Axes
   url: /excel/multiple-axes/
   imgurl: https://images.plot.ly/excel/multiple-axes-excel/double-axes-chart-thumb.png
 - title: Make a Chart with an Inset Plot
   url: /excel/insets
   imgurl: https://images.plot.ly/excel/inset-plot-excel/inset-thumb.png
 - title: Add Maps to a Dashboard
   url: /excel/dashboard/
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](url) or [R](url).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~jackp/15139.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/cost_output_defective.csv)"
      img: "![Excel view](https://images.plot.ly/excel/3-y-axes-excel/excel-view-3-y-axes.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/3-y-axes-excel/import-data-3-y-axes.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Label your columns like we did below. You'll have three y-axis columns (cost, output, defective) and one x-axis column (date). Select 'Line plots' from the MAKE A PLOT menu and then click line plot in the
bottom left."
      img: "![Labeling](https://images.plot.ly/excel/3-y-axes-excel/labeling-3-y-axes.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](https://images.plot.ly/excel/3-y-axes-excel/original-3-y-axes.png)"
    - copy: "Head to the TRACES popover and access Col2. Prepare to add the second y-axis. Click 'New Axis/Subplot...'"
      img: "![New Axis](https://images.plot.ly/excel/3-y-axes-excel/new-axis-3-axes.png)"
    - copy: "You'll want to apply your new y-axis to the right side of the graph."
      img: "![Right](https://images.plot.ly/excel/3-y-axes-excel/right-3-y-axes.png)"
    - copy: "Your graph should now look something like this:"
      img: "![Progress](https://images.plot.ly/excel/3-y-axes-excel/progress-3-y-axes.png)"
    - copy: "Now, we'll peform a similar process for Col3. Instead of applying third y-axis to the right side of the graph, choose 'free left' instead."
      img: "![Free Left](https://images.plot.ly/excel/3-y-axes-excel/free-left-3-y-axes.png)"
    - copy: "Your graph should now look something like this:"
      img: "![Progress1](https://images.plot.ly/excel/3-y-axes-excel/progress1-3-y-axes.png)"
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "You might notice that the y-axis is busy with grid lines. Open the AXES popover, then Lines in the toolbar to clean this up. Select the first and second y-axes and turn grid lines 'off.'"
      img: "![Grid Lines](https://images.plot.ly/excel/3-y-axes-excel/grid-lines-3-y-axes.png)"
    - copy: "Next, ensure that all your y-axes range starts at 0. Open the Axes popover, then Range and adjust it to 0. Do this for all y-axes."
      img: "![Range](https://images.plot.ly/excel/3-y-axes-excel/range-3-y-axes.png)"
    - copy: "Your graph should now look something like this:"
      img: "![Progress2](https://images.plot.ly/excel/3-y-axes-excel/progress2-3-y-axes.png)"
    - copy: "Within the legend on the right side of the graph, you can label your 'Col2' trace 'Cost,' Col3 'Output' and Col4 'Defective.'"
      img: "![Legend](https://images.plot.ly/excel/3-y-axes-excel/legend-3-y-axes.png)"
    - copy: "Your plot should now look something like this. In order to get the graph at the top of the tutorial, you’ll need to style it a little more. You can adjust the 'Lines/Markers' within the TRACES popover."
      img: "![Lines/Markers](https://images.plot.ly/excel/3-y-axes-excel/lines-markers-3-y-axes.png)"
    - copy: "We’ve titled our chart. We've also colored-coded our y-axis labels to our traces. You can even add 'Tick Prefixes' within the AXES popover and 'Labels' tab. If you feel so moved, you can even color-code the 'ticks' to your traces. Finally, we’ve linked to our source data in the x-axis label area."
      img: "![Prefixes](https://images.plot.ly/excel/3-y-axes-excel/prefixes-3-y-axes.png)"
      img: "![Color Coded](https://images.plot.ly/excel/3-y-axes-excel/color-coded-3-y-axes.png)"
    - copy: "You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the 'Share' button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Final](https://images.plot.ly/excel/3-y-axes-excel/final-3-y-axes.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel](https://images.plot.ly/excel/3-y-axes-excel/excel-3-y-axes.png)"
---
