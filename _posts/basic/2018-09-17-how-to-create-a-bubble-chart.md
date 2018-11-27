---
layout: tutorial-single_layout
title: Bubble Charts
subtitle: A type of scatter chart that displays three dimensions of data.
permalink: /make-a-bubble-chart/
imageurl: ../static/images/create-bubble-chart/bubble.jpg
state: active
tags: basic
order: 7
meta_description: A tutorial on how to make a bubble chart in Chart Studio.
popularity: featured
carouselimageurl: ../static/images/create-bubble-chart/bubble.jpg
actioncall: How to create a bubble chart in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:397

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bubble-charts/) or [R](https://plot.ly/r/bubble-charts/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/397.embed"></iframe>
live-graph-image:

steps:
 - title: Add Data
   sub-steps:
    - copy: "Bubble charts are scatter plots with an added size dimension, thus three dimensional data is represented as x position, y position, and size of the marker."
    - copy: "Head to Chart Studio's [Chart Studio](https://plot.ly/create/) to get started. You have the option of typing directly in the grid, uploading your local file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Example after](../static/images/create-bubble-chart/add-data.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace. To create a bubble chart, choose 'Scatter' under 'Simple' trace type."
      img: "![Chart type bubble](../static/images/create-bubble-chart/chart-type-scatter.png)"
    - copy: "Next, select 'X' and 'Y' values from the dropdown menus. This will create a raw scatter trace, as seen below."
      img: "![X and Y values](../static/images/create-bubble-chart/select-x-y.png)"

 - title: Style Trace
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "In order to create a bubble chart, change the size of the markers. There are two modes: 'Constant' or 'Variable'. To set a varying size for the markers based on a dimension of data, click on 'Variable' and select the desired column name from the dropdown menu."
      img: "![Variable Marker Size](../static/images/create-bubble-chart/variable-marker-size.gif)"

 - title: Set Titles
   sub-steps:
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot title](../static/images/create-bubble-chart/plot-title.png)"
    - copy: "To set the axes titles, go to the 'Axes' section under the 'Style' menu and type in the axis title within the textbox provided under 'Title' for each axis."
      img: "![Axes title](../static/images/create-bubble-chart/axes-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface."
      img: "![Title Interface](../static/images/create-bubble-chart/title-in-interface.gif)"

 - title: Save and Share
   sub-steps:
    - copy: "Now, the bubble chart has been created. To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/create-bubble-chart/save-bubble-chart.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."

---
