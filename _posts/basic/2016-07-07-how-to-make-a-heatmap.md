---
layout: tutorial-single_layout
title: Heatmaps
subtitle: A graphical representation of data where the individual values contained in a matrix are represented as colors.
permalink: /make-a-heatmap/
redirect_from: /plotly1/make-a-heatmap/
imageurl: ../static/images/heat-map/new thumb.png
state: active
tags: basic
order: 10
meta_description: A tutorial on how to make a heatmap plot in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a heatmap plot in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:409

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/heatmaps/) or [R](https://plot.ly/r/heatmaps/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/409.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 

    1) Charts like this by Chart Studio users
    2) View tutorials on this chart type
    3) See a basic example."

    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Data
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering the URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Heatmap' under 'Simple' chart type."
      img: "![Choose chart main](../static/images/heat-map/heatmap-choose-chart.png)"
    - copy: "Next, select 'X' and 'Y', and fill out the 'Z' values from their respective dropdown menus. This will create a heatmap, as seen below."
      img: "![Adding axes](../static/images/heat-map/heatmap-select-x-y-z.gif)"

 - title: Style Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "To change the properties of the heatmap trace such as colorscale settings, smoothing effect or gaps between cells, go to the 'Traces' section under the 'Style' menu."
      img: "![Heatmap properties](../static/images/heat-map/heatmap-properties.png)"
    - copy: "To set the colorbar's position, size, title text and title location, go to the 'Color Bars' section under the 'Style' menu."
      img: "![Colorbar properties](../static/images/heat-map/heatmap-colorbar-properties.png)"
    - copy: "To change the general properties of the plot's layout, such as background color, font styling, or margin settings, go to the 'General' section under the 'Style' menu."
    - copy: "To set the plot title, type the title text within the textbox provided under 'Title.'"
      img: "![Plot Title](../static/images/heat-map/heatmap-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the colorscale title."
      img: "![Title direct](../static/images/heat-map/heatmap-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot, click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/heat-map/heatmap-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
