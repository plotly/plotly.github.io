---
layout: excel-tutorial-single_layout
title: Studing Various Qualities of Diamonds
subtitle: 3D Scatter Plots with Plotly
permalink: /excel/3d-scatter-plot
imageurl: http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/thumb-diamond-quality-scatter-plot-with-excel.png
state: active
tags: excel
section: 3D Plots
meta_description: A tutorial on how to make a 3D Scatter Plot online with Excel.
popularity: featured
carouselimageurl: http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/thumb-diamond-quality-scatter-plot-with-excel.png
actioncall: Make this 3D Scatter Plot
actioncall-url: https://plot.ly/504/~tarzzz/
download-url: https://raw.githubusercontent.com/plotly/datasets/master/diamonds_short.csv
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

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/3d-scatter-plots/) or [R](https://plot.ly/r/3d-scatter-plots/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/504.embed"></iframe>

steps:
 - title: Login to Plotly's Workspace

   sub-steps:
    - copy: "Head to [Plotly's Workspace](https://plot.ly/plot) and sign into your free Plotly account."


 - title: Upload your Excel data to Plotly's grid

   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/diamonds_short.csv). Click on 'ADD DATA' button on the workspace, and upload the data file."
      img: "![Import data](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/upload-data-file.png)"


 - title: Create the 3D Plot

   sub-steps:

    - copy: "Select '3D Scatter Plots' from the `MAKE A PLOT` button on menu bar."
      img: "![Create Plot](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/3d-scatter-plot-from-menu.png)"

    - copy: "To Enable the Hover Text, and Group By option in the chart, click on the two options in the left dialog:"
      img: "![Enable extra data options](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/enable-extra-data-options.png)"

    - copy: "The Excel data has many fields. We will only be using the following for our plot. (1) Carat: for x-coordinate, (2) Price: for y-coordinate (3) depth: for z-coordinate. In addition we will be grouping the diamonds by (4) Cut, and use (5) Clarity for hover text. To achieve this, set the data headers as shown in this image:"
      img: "![Style tab](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/set-data-shape.png)"  

    - copy: "Click on '3d Scatter Plot' button to generate the plot."
      img: "![Style tab](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/plot-chart.png)"  


 - title: Decorate - The Diamonds Plot

   sub-steps:

    - copy: "We will now add some style elements to the generated plot."
      img: "![Raw Plot](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/raw-plot.png)"

    - copy: "Styling options are present on the left side of the plot. To set the background color, (1) Click on the 'Axis' selector on the options menu on the left side of the plot, (2) Click on the 'Lines' tab from the pop-up, (3) Set 'Background' to 'On', and (4) Select background color from the color pallete."
      img: "![Background Color](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/set-background.png)"

    - copy: "**Stylize Axes**: Go to 'Lines' tab from 'Axis' Selector. (1) Set Grid Lines to 'On' and select white color from pop-up, (2) Set Zero Lines to 'On' and select white color from pop-up"
      img: "![Set Axes and Grid Color](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/set-axis-color.png)"

    - copy: "**Set Marker Size**: Go to 'Style' tab from 'Traces' Selector. Set the Marker Size to '8'."
      img: "![Set Marker Size](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/set-marker-size.png)"  

    - copy: "**Set Color Scale**: Go to 'Style' tab from 'Traces' Selector. Select 'Blues' from Marker Color Pallete:"
      img: "![Set Color Scale](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/set-colorways.png)"  

 - title: Deploy - Export & Share the Diamonds plot
   sub-steps:
    - copy: "After Adding the styling, the plot will look something like this:"
      img: "![Finished Plot](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/thumb-diamond-quality-scatter-plot-with-excel.png)"
    - copy: "Now you can share the generated plot with your peers/collaborators (basically, anyone you want to!). Click on share button on left menu bar:"
      img: "![Share Button](http://images.plot.ly/excel/diamond-quality-scatter-plot-with-excel/share-plot-button.png)"
---
