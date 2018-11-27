---
layout: excel-tutorial-single_layout
title: Make a Chart with a Subplot with Chart Studio and Excel
subtitle: Chart with a Subplot with Chart Studio
permalink: /excel/subplots/
imageurl: https://images.plot.ly/excel/subplots-excel/thumbnail1-subplot.png
state: active
tags: excel
meta_description: A tutorial on how to make a subplot online with Excel. Follow our step-by-step tutorial to make a subplot for free and online with Chart Studio.
popularity: featured
section: Layouts
actioncall: Make this Chart with a Subplot with Chart Studio
actioncall-url: https://plot.ly/6875/~Dreamshot/?plot_type=Line%20plot
download-url: https://raw.githubusercontent.com/plotly/datasets/master/subplots.csv.zip

similar:
 - title: Make a Chart with an Inset Plot
   url: /excel/insets
   imgurl: https://images.plot.ly/excel/inset-plot-excel/inset-thumb.png
 - title: Make a Graph with Mulitple Y Axes
   url: /excel/multiple-axes/
   imgurl: https://images.plot.ly/excel/multiple-axes-excel/double-axes-chart-thumb.png
 - title: Add Maps to a Dashboard
   url: /excel/dashboard/
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/subplots/) or [R](https://plot.ly/r/subplots/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~Dreamshot/2050.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/subplots.csv)"
      img: "![Excel view](https://images.plot.ly/excel/subplots-excel/excel-view-subplots.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import,' click 'Upload a file,' then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](help.plot.ly/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/subplots-excel/import-data-subplots.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Label your columns like we did below. You'll have three different x-y datasets (Date, Atmospheric CO2 [Mauna Loa and South Pole], Date, Global Temperature Anomaly, and +2/-2 Standard Error, and Date, Heat Content and +2/-2 Standard Error). Select 'Line plots' from the MAKE A PLOT menu and then click line plot in the bottom left."
      img: "![Grid](https://images.plot.ly/excel/subplots-excel/grid-subplot.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](https://images.plot.ly/excel/subplots-excel/original-subplot.png)"
    - copy: "Head to the TRACES popover and access Col4 from the dropdown menu. From 'Axes' you'll want to click New Axis/Subplot bar. From New Axis/Subplot you'll want to click 'Stacked' under New Subplot."
      img: "![Create First Subplot](https://images.plot.ly/excel/subplots-excel/create-subplot1-subplot.png)"
    - copy: "Now, head back to the TRACES popover. Shift Col6 and Col7 to the new subplot. To do this, change the axes to X2 and Y2 in both cases."
      img: "![Reassign Axes1](https://images.plot.ly/excel/subplots-excel/reassign-axis-1-subplot.png)"
    - copy: "Take a moment to resize your plot to something less wide. A width of 1000 and a height of 800 seems reasonable. Head to the layout menu to do this."
      img: "![Resize](https://images.plot.ly/excel/subplots-excel/resize-subplot.png)"
    - copy: "Now, head to the TRACES popover again and access Col10 from the dropdown menu. Move this trace, along with the Col9 and Col11 traces to the 'X2' and 'Y2' axes. Then head to the 'New Axis/Subplot' popover and create a 'New subplot' for trace Col10, similar to what you previously for Col4."
      img: "![Plotting2](https://images.plot.ly/excel/subplots-excel/plotting2-subplot.png)"
    - copy: "Then, move Col9 and Col11 to the same axes (X3 and Y3). Your plot would then look something like this."
      img: "![Progress](https://images.plot.ly/excel/subplots-excel/progress-subplot.png)"
    - copy: "You can play with the axes ranges within the AXES popover. You can also adjust the span of each subplot within the AXES opover and Layout menu. We found that a 'Span' of 0 to 0.33 worked best for the Y Axis, 0.34 to 0.67 for the Y Axis 2, and 0.68 to 1.00 for the Y Axis. Your plot would then look something like this."
      img: "![Span](https://images.plot.ly/excel/subplots-excel/span-subplot.png)"
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "Adding titles to your graph and to all of the x and y axes of your subplots is important. After titling your plot, it should look something like this."
      img: "![Titles](https://images.plot.ly/excel/subplots-excel/titles-subplot.png)"
    - copy: "Now, add some description to the different traces in your legend. Follow our lead."
      img: "![Legend](https://images.plot.ly/excel/subplots-excel/legend-subplot.png)"
    - copy: "Once you've added the text to your legend, you can head to the LEGEND popover and hide it. This will make your graph less cluttered. Your readers will see the trace descriptors on the hover!"
      img: "![Legend2](https://images.plot.ly/excel/subplots-excel/legend2-subplot.png)"
    - copy: "Now for a little styling. Head to the AXES popover and ensure that 'All Axes' is selected. Next, access the 'Lines' menu and turn the 'Axis line' and 'Mirror' on while the 'Grid lines' and 'Zero line' off."
      img: "![Styling](https://images.plot.ly/excel/subplots-excel/styling-subplot.png)"
    - copy: "Your plot should now look something like this. In order to get the graph at the top of the tutorial, you’ll need to style it a little more."
      img: "![Final](https://images.plot.ly/excel/subplots-excel/final-subplot.png)"
    - copy: "We used a note to link to our source data. You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the 'Share' button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/subplots-excel/export-subplot.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel workbook](https://images.plot.ly/excel/subplots-excel/excel-subplot.png)"
---
