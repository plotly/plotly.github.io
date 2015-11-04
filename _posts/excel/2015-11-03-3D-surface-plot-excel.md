---
layout: excel-tutorial-single_layout
title: Make a 3D Surface Plot Online with Plotly and Excel
subtitle: 3D Surface Plots with Plotly
permalink: /excel/3d-surface-plot
imageurl: /static/images/3d-surface-plot-with-excel/thumb-3d-surface-plot-with-excel.png
state: active
tags: excel
section: Basic Charts
meta_description: A tutorial on how to make a 3D surface plot online with Excel.
popularity: featured
carouselimageurl: https://plot.ly/~tarzzz/380/volcano-surface-plot.png
actioncall: Make this box plot
actioncall-url: https://plot.ly/~tarzzz/380/volcano-surface-plot/
download-url: https://plot.ly/~tarzzz/380/volcano-surface-plot.csv
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


otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/3d-surface-plots/) or [R](https://plot.ly/r/3d-surface-plots/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/380/volcano-surface-plot.embed"></iframe>

steps:
 - title: Upload your Excel data to Plotly's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://plot.ly/~tarzzz/380/volcano-surface-plot.csv)"
 - title: Head to Plotly
   sub-steps:
    - copy: "Head to [Plotly's Workspace](https://plot.ly/plot) and sign into your free Plotly account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](http://i.imgur.com/eQjmxGp.png)"
 - title: Create the 3D Plot
   sub-steps:
    - copy: "Select '3D Surface Plot' from the MAKE A PLOT button on menu bar."
      img: "![3D Surface Plots](/static/images/3d-surface-plot-with-excel/3d-surface-plot-from-menu.png)"
    - copy: "Now choose the input data shape as 'Z Matrix'."
      img: "![Data Shape Type](/static/images/3d-surface-plot-with-excel/select-data-shape.png)"
    - copy: "Set 'Select all columns' for z-values, and click the blue plot button in the sidebar to create the Surface Plot."
      img: "![Create chart](/static/images/3d-surface-plot-with-excel/plot-surface.png)"
 - title: Style the 3D Surface
   sub-steps:
    - copy: "Your plot should look something like this."
      img: "![Volcano Plot](/static/images/3d-surface-plot-with-excel/raw-plot.png)"
    - copy: "Now we will add some style elements to the generated plot. First, let's give it a name. We can add a title by clicking on the text box just above the plot:"
      img: "![Volcano Plot](/static/images/3d-surface-plot-with-excel/give-plot-title.png)"
    - copy: "Styling options are present on the left side of the plot.
    Change Background color: 1. Click on the 'Axis' selector on the options menu on the left side of the plot 2. Click on the 'Lines' tab from the pop-up. 3. Set 'Background' to 'On' 4. Select background color from the color palette."
      img: "![Set Background](/static/images/3d-surface-plot-with-excel/set-background.png)"
 - title: Style the Axes
   sub-steps:
    - copy: "Go to 'Lines' tab from 'Axis' Selector: 1. Set Grid Lines to 'On'. Select rgb(255,255,255),i.e. white color from pop-up. 2. Set Zero Lines to 'On'. Select rgb(255,255,255),i.e. white color from pop-up."
      img: "![Set Axis and Grid Color](/static/images/3d-surface-plot-with-excel/set-axis-color.png)"
 - title: Change Color Scales
   sub-steps:
    - copy: "Plotly allows us to set among a wide range of built in colorscales, in addition to custom color-scale feature. To change the color scale of a plot: 1. Click on the 'Traces' Selector from the style options. 2. Click on 'Style' tab from the pop-up. 3. Turn Auto Color to 'Off', and set one of the color-scales."
      img: "![Set Color Scale](/static/images/3d-surface-plot-with-excel/set-colorscale.png)"
 - title: Deploy - Your 3D Surface Plot
   sub-steps:
    - copy: "After Adding the styling, the plot will look something like this:"
      img: "![Styled Surface Plot](/static/images/3d-surface-plot-with-excel/thumb-3d-surface-plot-with-excel.png)"
    - copy: "Now you can share the generated plot with your peers/collaborators (basically, anyone you want to!) Click on share button on left menu bar:"
      img: "![Share Button](/static/images/3d-surface-plot-with-excel/share-plot-button.png)"
    - copy: "You can share it as a web-link, embed in your website (as an iframe), or share it via popular social networking sites. Cool, huh!"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version."
---
