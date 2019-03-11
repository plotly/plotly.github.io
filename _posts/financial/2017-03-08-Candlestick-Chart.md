---
layout: tutorial-single_layout
title: Candlestick Charts
subtitle: A type of chart that describes the price movements of financial data over a certain period of time.
permalink: /make-a-candlestick/
imageurl: ../static/images/candlestick-chart/thumbnail.png
state: active
tags: financial
order: 3
meta_description: A tutorial on how to make a candlestick chart in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a candlestick chart in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:449

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/candlestick-charts/) or [R](https://plot.ly/r/candlestick-charts/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/449.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "The candlestick is a style of financial chart that describes Open, High, Low and Close for a given X coordinate which is most likely time."
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Plotly users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering the URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding the data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Candlestick' under 'Financial' chart type."
      img: "![Chart Type](../static/images/candlestick-chart/candlestick-chart-type.png)"
    - copy: "Next, select 'X', 'Open', 'High', 'Low' and 'Close' values from the dropdown menus. This will create the candlestick trace as seen below."
      img: "![Add values](../static/images/candlestick-chart/candlestick-values.png)"
    - copy: "The candlesticks are nothing but the combination of boxes and lines. The boxes represent the spread between the 'Open' and 'Close' values, and the lines represent the spread between the 'Low' and 'High' values."
    - copy: "Note that the candlestick trace is described in two color variants, one for the increasing trace and the other for decreasing trace."
    - copy: "The sample points where the 'Close' value is higher than the 'Open' value are said to be increasing, while the sample points where the 'Close' value is lower than the 'Open' value are said to be decreasing. The color styles for the increasing and decreasing can be set under the 'Style' menu which will be discussed in the next step."

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to set the plot title, as well as change the layout background, margin color and font styles."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property."
      img: "![Type title](../static/images/candlestick-chart/candlestick-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title."
      img: "![Type directly title](../static/images/candlestick-chart/candlestick-title-direct.png)"
    - copy: "Use the 'Traces' section under the 'Style' menu to change the properties of the trace such as the whisker and line width, colors, and hoverinfo."
    - copy: "To change the color of the trace, click on the color palette next to the attributes 'Line Color' and 'Fill Color' under the properties 'Increasing Trace Styles' and 'Decreasing Trace Styles'."
      img: "![Trace Properties](../static/images/candlestick-chart/candlestick-properties.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot, click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/candlestick-chart/candlestick-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."

---
