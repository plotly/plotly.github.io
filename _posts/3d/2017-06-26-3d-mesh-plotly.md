---
layout: tutorial-single_layout
title: 3D Mesh Plot
subtitle: How to create a 3D mesh plot.
permalink: /make-a-3d-mesh-plot/
imageurl: ../static/images/3D-mesh-plot/3d-mesh-thumbnail.png
state: active
tags: graph3d
order: 3
meta_description: A tutorial on how to create a 3D mesh plot in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: 3D Mesh Plots in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:445

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/3d-mesh-plots/) or [R](https://plot.ly/r/3d-mesh-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/445.embed"></iframe>

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Plotly users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding the data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose '3D Mesh' under '3D' chart type."
      img: "![Chart Type](../static/images/3D-mesh-plot/chart-type.png)"
    - copy: "Next, fill out the necessary 'X', 'Y' and 'Z' values from their respective dropdown menus. This will create a raw 3D surface, as seen below."
      img: "![Add XYZ values](../static/images/3D-mesh-plot/3D-surface-raw.png)"
    - copy: "Additionally for 3D mesh plots, you have the option to add 'I', 'J' and 'K' values, immediately below in the trace panel."
      img: "![Add IJK values](../static/images/3D-mesh-plot/3D-surface-ijk-values.png)"
    - copy: "Now, that the 3d mesh has it's structure completed, you can now add the coloring options via either of these attributes: 'Intensity', 'Facecolor' or 'Vertexcolor'. The attribute 'Intensity' sets the vertex intensity values, 'Facecolor' sets the color of each face and the 'Vertex' sets the color of each vertex. In this example, the coloring is set via the attribute 'Intensity' using 'Y' axis values."
      img: "![Coloring Options](../static/images/3D-mesh-plot/3D-surface-color-options.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "Now that we have created our chart, you can optionally choose to style it. In this example, we will adjust the aspect ratio. Here, select the 'STYLE' tab on the left-hand side, then 'Layout'. Next select 'Scene', then in the 'Aspect Ratio' dropwdown select 'auto'."
      img: "![Change aspect ratio](../static/images/3D-mesh-plot/change-aspect-ratio.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/3D-mesh-plot/3D-mesh-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Plotly's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
