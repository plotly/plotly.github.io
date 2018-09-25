---
layout: tutorial-single_layout
title: Bubble Charts in Chart Studio
subtitle: Create a bubble charts using scatter plot.
permalink: /make-a-bubble-chart/
imageurl: ../static/images/create-bubble-chart/bubble.jpg
state: active
tags: basic
order: 7
meta_description: A tutorial on how to make a bubble chart in Chart Studio.
popularity: featured
carouselimageurl: ../static/images/create-bubble-chart/bubble.jpg
actioncall: How to create a bubble chart in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:397

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bubble-charts/) or [R](https://plot.ly/r/bubble-charts/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/397.embed"></iframe>
live-graph-image:

steps:
 - title: Add Data
   sub-steps:
    - copy: "Bubble charts are scatter plots with an added size dimension, thus three dimensional data is represented as x position, y position, and size of the marker."
    - copy: "Head to the Plotly's [Chart Studio](https://plot.ly/create/) to get started. You have the option of typing directly in the grid, uploading your local file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Example after](../static/images/create-bubble-chart/add-data.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in Chart Studio."

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under 'Structure' menu on the left-hand side. Choose the 'Type' of trace. To create a bubble chart, choose 'Scatter' under 'Simple' trace type."
      img: "![Chart type bubble](../static/images/create-bubble-chart/chart-type-scatter.png)"
    - copy: "Next, select 'X' and 'Y' values from the dropdown menus. This will create a raw scatter trace, as seen below."
      img: "![X and Y values](../static/images/create-bubble-chart/select-x-y.png)"

 - title: Style Trace
   sub-steps:
    - copy: "'Style' allows to modify colors and size of the markers for the traces, add text annotations, shapes, embed images and many more. To play around with the style of your chart click on 'Style' menu on the left-hand side."
    - copy: "To change the size of the markers (bubbles), there are two modes: 'Constant' or 'Variable'. To set a varying size for the markers based on a new set of data points, click on 'Variable' and select the desired column name from the excel."
      img: "![Variable Marker Size](../static/images/create-bubble-chart/variable-marker-size.gif)"

 - title: Set Titles
   sub-steps:
    - copy: "Now that the trace styles being applied to the bubble chart, let's setup the titles for the plot and the axes. To set the plot title, go to 'General' section under 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot title](../static/images/create-bubble-chart/plot-title.png)"
    - copy: "To set the axes title, go to 'Axes' section under 'Style' menu and type in the axis title within the textbox provided under 'Title' for each axes."
      img: "![Axes title](../static/images/create-bubble-chart/axes-title.png)"
    - copy: "Another approach is to type in directly on the plot interface."
      img: "![Title Interface](../static/images/create-bubble-chart/title-in-interface.gif)"

 - title: Save and Share
   sub-steps:
    - copy: "Now, the bubble chart has been created. To save the plot click 'Save' button on the left-hand side. A Save pop-up will appear, as seen below, where you can specify the filename for your plot and the data."
      img: "![Save main](../static/images/create-bubble-chart/save-bubble-chart.png)"
    - copy: "Select the privacy setting for the plot and data as 'Public' or 'Private' or 'Private link'. For more information on how sharing works, including the difference between private, public, and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page.."

---
