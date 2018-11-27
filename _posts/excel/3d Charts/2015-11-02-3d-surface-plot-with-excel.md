---
layout: excel-tutorial-single_layout
title: Make a 3D Surface Plot Online with Chart Studio and Excel
subtitle: 3D Surface Plots with Chart Studio
permalink: /excel/3d-surface/
redirect_from: /excel/3d-surface-plot/
imageurl: https://images.plot.ly/excel/3d-surface-plot-with-excel/thumb-surface-plot-with-excel.png
state: active
tags: excel
section: 3D Charts
meta_description: A tutorial on how to make a 3D Surface Plot online with Excel.
popularity: featured
carouselimageurl: https://images.plot.ly/excel/3d-surface-plot-with-excel/thumb-surface-plot-with-excel.png
actioncall: Make this 3D Surface Plot
actioncall-url: https://plot.ly/550/~tarzzz/?plot_type=3d%20surface%20plot
download-url: https://raw.githubusercontent.com/plotly/datasets/master/volcano.csv
similar:
 - title: Make a 3d scatter chart
   url: /excel/3d-scatter-plot/
   imgurl: https://images.plot.ly/excel/3d-scatter-plot-with-excel/3d-scatter-thumb.png
 - title: Make a 3d line chart
   url: /excel/3d-line-plot
   imgurl: https://images.plot.ly/excel/3d-line-plot-with-excel/3d-line-plot-with-excel-thumb.png
 - title: Add a 3d chart to your dashboard
   url: /excel/dashboard/
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/3d-surface-plots/) or [R](https://plot.ly/r/3d-surface-plots/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/380.embed"></iframe>
live-graph-image:

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/volcano.csv)"
      img: "![Open data in excel](https://images.plot.ly/excel/3d-surface-plot-with-excel/open-data-in-excel.png)"

 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/3d-surface-plot-with-excel/import-data-3d-surface-plot.png)"


 - title: Creating the Surface Plot
   sub-steps:
    - copy: "Select '3D Surface Plot' from the `MAKE A PLOT` button on menu bar."
      img: "![Select Chart Type](https://images.plot.ly/excel/3d-surface-plot-with-excel/select-surface-plot-from-menu.png)"
    - copy: "Choose the input shape as 'Z Matrix', click on 'Select All Columns Button'. With these options enabled,  click the plot button to create the chart"
      img: "![Create Chart](https://images.plot.ly/excel/3d-surface-plot-with-excel/create-chart.png)"


 - title: Finalizing the chart
   sub-steps:
    - copy: "Your plot should look something like this:"
      img: "![Raw Plot](https://images.plot.ly/excel/3d-surface-plot-with-excel/raw-plot.png)"

    - copy: "Now we will add some style elements to the generated plot. First, let's give it a name. We can add a title by clicking on the text box just above the plot:"
      img: "![Add Plot Title](https://images.plot.ly/excel/3d-surface-plot-with-excel/give-plot-title.png)"

    - copy: "Styling options are present on the left side of the plot. To set the background color, (1) Click on the 'Axis' selector on the toolbar, (2) Click on the 'Lines' tab from the pop-up, (3) Set 'Background' to 'On', and (4) Select background color from the color pallete."
      img: "![Background Color](https://images.plot.ly/excel/3d-surface-plot-with-excel/set-background.png)"

    - copy: "**Axes and Grid**: Go to 'Lines' tab from 'Axis' popover. (1) Set Grid Lines to 'On' and select white color from pop-up, (2) Set Zero Lines to 'On' and select white color from pop-up"
      img: "![Set Axes and Grid Color](https://images.plot.ly/excel/3d-surface-plot-with-excel/set-axis-color.png)"

    - copy: "**Change Color Scale**:Chart Studio allows us to set among a wide range of colorscales.To change the color scale of a plot, (1) Click on the 'Traces' popover from the toolbar, (2) Click on 'Style' tab from the pop-up, (3) Turn Auto Color to 'Off', and set one of the color-scales."
      img: "![Set Colorscale](https://images.plot.ly/excel/3d-surface-plot-with-excel/set-colorscale.png)"

 - title: Exporting the final chart
   sub-steps:
    - copy: "The final plot should look something like this:"
      img: "![Finished Plot](https://images.plot.ly/excel/3d-surface-plot-with-excel/3d-surface-plot-with-excel-final.png)"
    - copy: "You can export the finished plot to embed in the excel notebook. We also recommend adding the Chart Studio link to the excel for easy access to the interactive version. To get the link to the chart, click on the 'Share' button. To export the chart, as an image, click on 'EXPORT' button on the toolbar."
      img: "![Share Button](https://images.plot.ly/excel/3d-surface-plot-with-excel/export-3d-surface-chart.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it:"
      img: "![Excel](https://images.plot.ly/excel/3d-surface-plot-with-excel/excel-3d-surface-plot.png)"
---
