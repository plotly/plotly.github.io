---
layout: excel-tutorial-single_layout
title: Make a 3D Line Plot Online with Chart Studio and Excel
subtitle: 3D Line Plots with Chart Studio
permalink: /excel/3d-line-plot/
imageurl: https://images.plot.ly/excel/3d-line-plot-with-excel/3d-line-plot-with-excel-thumb.png
state: active
tags: excel
section: 3D Charts
meta_description: A tutorial on how to make a 3D Line Plot online with Excel.
popularity: featured
actioncall: Make this 3D Line Plot
actioncall-url: https://plot.ly/566/~tarzzz/?plot_type=3d%20line%20plot
download-url: https://raw.githubusercontent.com/plotly/datasets/master/line_3d_dataset.csv.zip
similar:
 - title: Make a 3d Surface Plot
   url: /excel/3d-surface
   imgurl: https://images.plot.ly/excel/3d-surface-plot-with-excel/thumb-3d-surface-plot-with-excel.png
 - title: Make a 3d scatter chart
   url: /excel/3d-scatter-plot/
   imgurl: https://images.plot.ly/excel/3d-scatter-plot-with-excel/3d-scatter-thumb.png
 - title: Add a 3d chart to your dashboard
   url: /excel/dashboard/
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/3d-line-plots/) or [R](https://plot.ly/r/3d-line-plots/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/423.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/line_3d_dataset.csv)"
      img: "![Open data in excel](https://images.plot.ly/excel/3d-line-plot-with-excel/open-data-in-excel.png)"

 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/3d-line-plot-with-excel/import-data-3d-line-plot.png)"


 - title: Creating the Line Plot

   sub-steps:

    - copy: "Select '3D Line Plot' from the `MAKE A PLOT` button on menu bar."
      img: "![Select Chart Type](https://images.plot.ly/excel/3d-line-plot-with-excel/select-line-plot-from-menu.png)"

    - copy: "Select the columns to be used as x, y and z axes for line plot. Click on '3d line plot' to generate the chart"
      img: "![Create Chart](https://images.plot.ly/excel/3d-line-plot-with-excel/create-chart.png)"

 - title: Finalizing the Chart

   sub-steps:

    - copy: "The chart looks like the one shown below:"
      img: "![Raw Plot](https://images.plot.ly/excel/3d-line-plot-with-excel/raw-3d-plot.png)"

    - copy: "We are going to add some style elements to the chart. Styling options are present on the left side of the plot. To set the background color, (1) Click on the 'Axis' selector on the options menu on the left side of the plot, (2) Click on the 'Lines' tab from the pop-up, (3) Set 'Background' to 'On', and (4) Select background color from the color pallete."
      img: "![Background Color](https://images.plot.ly/excel/3d-line-plot-with-excel/set-background.png)"

    - copy: "**Axes and Grid**: Go to 'Lines' tab from 'Axis' Selector. (1) Set Grid Lines to 'On' and select white color from pop-up, (2) Set Zero Lines to 'On' and select white color from pop-up"
      img: "![Set Axes and Grid Color](https://images.plot.ly/excel/3d-line-plot-with-excel/set-axis-color.png)"

 - title: Exporting the final chart
   sub-steps:
    - copy: "The final plot will look something like this:"
      img: "![Finished Plot](https://images.plot.ly/excel/3d-line-plot-with-excel/3d-line-plot-with-excel-final.png)"
    - copy: "You can export the finished plot to embed in the excel notebook. We also recommend adding the Chart Studio link to the excel for easy access to the interactive version. To get the link to the chart, click on the 'Share' button. To export the chart, as an image, click on 'EXPORT' button on the toolbar."
      img: "![Share Button](https://images.plot.ly/excel/3d-line-plot-with-excel/export-3d-line-plot.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it:"
      img: "![Excel](https://images.plot.ly/excel/3d-line-plot-with-excel/excel-3d-line-plot.png)"

---
