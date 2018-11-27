---
layout: tutorial-single_layout
title: 2D Contour Histogram Plots
subtitle: A type of contour plot that visualizes a bivariate distribution with contour lines.
permalink: /make-a-2d-histogram-contour-plot/
imageurl: ../static/images/create-2d-contour-histogram-plot/2d-contour-thumb.png
state: active
tags: statistical
order: 2
meta_description: A tutorial on how to make a 2D Histogram Contour Plot in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a 2D histogram contour plot in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:415

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/density-plots/#2d-histogram-contour-plot-with-histogram-subplots).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/415.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "The 2D histogram uses a colorscale to depict distribution across two variables in a contour plot."
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Chart Studio users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in your workspace."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering the URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose '2D Contour Histogram' under 'Distributions' chart type."
      img: "![Choose chart](../static/images/create-2d-contour-histogram-plot/contour2D-choose-chart.png)"
    - copy: "Next, fill out the necessary 'X', 'Y' and 'Z' values from their respective dropdown menus. This will create a 2D contour, as seen below."
      img: "![Adding axes](../static/images/create-2d-contour-histogram-plot/contour2D-values.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to set the plot title and change the layout background, margin color and font styles."
    - copy: "To set the plot title, type the title text within the textbox provided under 'Title.'"
      img: "![Type title](../static/images/create-2d-contour-histogram-plot/contour2D-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type Direct](../static/images/create-2d-contour-histogram-plot/contour2D-title-direct.png)"
    - copy: "Use the 'Traces' section under the 'Style' menu to change the properties of the traces, such as histogram and binning attributes, color gradients, contours and line attributes."
      img: "![Colourscale](../static/images/create-2d-contour-histogram-plot/contour2D-properties.png)"
    - copy: "To add annotations, go to the 'Annotations' section under the 'Style' section and click on the '+ Annotation' button on the top right corner in the panel."
      img: "![Annotation](../static/images/create-2d-contour-histogram-plot/contour2D-annotation.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/create-2d-contour-histogram-plot/contour2D-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
