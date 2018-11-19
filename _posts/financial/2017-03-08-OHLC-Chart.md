---
layout: tutorial-single_layout
title: OHLC Charts in Chart Studio
subtitle: A type of chart that shows the open, high, low and close price of financial data over a certain period of time.
permalink: /make-a-ohlc/
imageurl: ../static/images/ohlc-chart/thumbnail.png
state: active
tags: financial
order: 2
meta_description: A tutorial on how to make an OHLC chart in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make an OHLC chart in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:451

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/ohlc-charts/) or [R](https://plot.ly/r/ohlc-charts/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/451.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Plotly users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering the URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding the data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'OHLC' under 'Financial' chart type."
      img: "![Chart Type](../static/images/ohlc-chart/ohlc-chart-type.png)"
    - copy: "Next, select 'X', 'Open', 'High', 'Low' and 'Close' values from the dropdown menus. This will create the OHLC trace as seen below."
      img: "![Add values](../static/images/ohlc-chart/ohlc-values.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to set the plot title, as well as change the layout background, margin color and font styles."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property."
      img: "![Type title](../static/images/ohlc-chart/ohlc-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface."
      img: "![Type directly title](../static/images/ohlc-chart/ohlc-title-direct.png)"
    - copy: "Use the 'Traces' section under the 'Style' menu to change the properties of the trace such as the colorscale, lighting effects, light position, and hoverinfo."
      img: "![Trace Properties](../static/images/ohlc-chart/ohlc-properties.png)"
    - copy: "To change the color of the traces, click on the color palette next to the attributes 'Line Color' and 'Fill Color' under the properties 'Increasing Trace Styles'."
      img: "![Color main](../static/images/ohlc-chart/ohlc-color.png)"
    - copy: "To change the axes titles, go to the 'Axes' section under the 'Style' menu and type the title text within the textbox provided under the 'Title' property for each axis."
      img: "![Axes title](../static/images/ohlc-chart/ohlc-axes.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot, click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/ohlc-chart/ohlc-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Plotly's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
