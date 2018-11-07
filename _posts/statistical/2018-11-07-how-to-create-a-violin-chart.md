---
layout: tutorial-single_layout
title: Violin Chart
subtitle: A type of chart that visualizes the distribution of data and it plobability density.
permalink: /make-a-violin-chart/
imageurl: ../static/images/violin-plot/violin-thumb.png
state: active
tags: statistical
order: 2.5
meta_description: A tutorial on how to make a violin chart in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a violin chart in Plotly's Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:430

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/violin/) or [R](https://plot.ly/r/violin/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/430.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Violin Chart is a combination of a box plot and a rotated density placed on each side, that shows the distribution shape of the data."
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Plotly users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose '2D Histogram' under 'Distributions' chart type."
      img: "![Choose chart](../static/images/violin-plot/2d-histogram-choose-chart.png)"
    - copy: "Next, select the 'X', 'Y' and 'Z' values from the dropdown menus. This will create a 2D histogram as seen below. Note that specifying 'Z' is optional. If specified, the histogram function can be configured based on 'Z' values. If omitted, the histogram function defaults to 'Count'."
      img: "![Adding X Y Z values](../static/images/violin-plot/2d-histogram-fill-x-y-z.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "To change the properties of the histogram such as the histogram function and normalization, binning and other trace properties, go to the 'Traces' section under the 'Style' menu."
      img: "![Properties](../static/images/violin-plot/2d-histogram-properties.png)"
    - copy: "Use the colorscale attibute to define the colorscale range for the heatmap. To hide/show colorbar attribute under the same panel."
      img: "![Colorscale](../static/images/violin-plot/2d-histogram-colorscale.gif)"
    - copy: "To set the size and positioning of the colorbar, go to the 'Color Bars'.section under 'Style' menu."
      img: "![Color Bar](../static/images/violin-plot/2d-histogram-colorbar.png)"
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot Title](../static/images/violin-plot/2d-histogram-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](../static/images/violin-plot/2d-histogram-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/violin-plot/2d-histogram-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Plotly's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
