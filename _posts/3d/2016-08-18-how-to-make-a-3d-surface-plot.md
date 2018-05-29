---
layout: tutorial-single_layout
title: 3D Surface Plots in Chart Studio
subtitle: Create a three-dimensional surface plot that connects a set of data points.
permalink: /make-a-3d-surface-plot/
redirect_from: /make-a-3D-surface-plot/
imageurl: ../static/images/3d-surface-plot-with-excel/3d-thumb.png
state: active
tags: graph3d
order: 2
meta_description: A tutorial on how to make a 3D surface plot in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to Make a 3D Surface Plot in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:140

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/3d-surface-plots/) or [R](https://plot.ly/r/3d-surface-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/140.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "We love interactive graphs at Plotly. This 3D surface chart can be rotated in place by dragging the mouse inside the plot. It's also a cool way to show relationships between large amounts of data that may be difficult to see in a 2D plot."
    - copy: "After selecting '3D Surface' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what values and style attributes were selected for this specific plot, as well as the end result."
      img: "![Example Surface](../static/images/3d-surface-plot-with-excel/try-example.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/3d-surface-plot-with-excel/import-data-surface.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose '3D Surface' under 'Chart type'."
      img: "![Choose chart main](../static/images/3d-surface-plot-with-excel/chart-type.png)"
    - copy: "After selecting ‘3D Surface', you should then fill out the Z, X, and Y dropdowns to create the plot."
      img: "![Values dropdown](../static/images/3d-surface-plot-with-excel/trace-dropdown.png)"
    - copy: "This will create a raw 3D surface plot as seen below."
      img: "![Raw plot](../static/images/3d-surface-plot-with-excel/raw-plot.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "You can choose your colorscale, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your plot. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Colour main](../static/images/3d-surface-plot-with-excel/colour-panel.png)"
    - copy: "To add a title to your graph, you can type it directly on the title by double-clicking it. The same can be done for the colorbar."
      img: "![Type directly title](../static/images/3d-surface-plot-with-excel/title-type.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/3d-surface-plot-with-excel/title-panel.png)"
    - copy: "For adding axes labels, the 'Text' box is found in the 'Axes' section under STYLE. Note that you have to click on each X, Y, and Z text box to add its own label. We'll leave the labels as default on our plot."
      img: "![Type directly axis](../static/images/3d-surface-plot-with-excel/axes-title.png)"
    - copy: "Our plot is now done! We've styled it a bit, and to learn how to make your plots extra fancy, check out [this](http://help.plot.ly/style-your-plots/) styling tutorial."
      img: "![Type directly axis](../static/images/3d-surface-plot-with-excel/final-plot.png)"

 - title: Save and Share
   sub-steps:
    - copy: "It's time to show off your plot! Click SAVE on the left-hand side. "
      img: "![Save main](../static/images/3d-surface-plot-with-excel/save-main.png)"
    - copy: "Give your file a name, then select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/3d-surface-plot-with-excel/final-plot.png)"
---
