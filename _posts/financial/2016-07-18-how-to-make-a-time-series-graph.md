---
layout: tutorial-single_layout
title: Time Series Graphs in Chart Studio
subtitle: Create a graph that illustrates data points at consecutive time intervals.
permalink: /make-a-time-series-graph/
imageurl: ../static/images/dates-time-series-and-timestamp/time-series-thimb.png
state: active
tags: financial
order: 1.5
meta_description: A tutorial on how to make a time series graph in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a time series graph in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:377

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/time-series/) or [R](https://plot.ly/r/time-series/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/377.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "A time series graph is a great way to evaluate patterns and behavior in data over time."
    - copy: "After selecting 'Line plot' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/time-series/try-an-example-time-series.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Data
   sub-steps:
    - copy: "Head to Chart Studio’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. For this tutorial, we will use the New Zealand Weather dataset, which can be found [here](https://raw.githubusercontent.com/plotly/datasets/master/nz_weather.csv). Simply, copy the URL and navigate back the workspace, select 'Import' and then the 'By URL' tab. Paste the URL in the available bix. It is important to note, that Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/time-series/add-data.png)"
    - copy: "When your data consists of dates, it's important to format them in a specific way, otherwise Plotly won't recognize them as such. To enter dates directly in the grid, you’ll need to use these formats: yyyy-mm, yyyy-mm-dd;  yyyy-mm-dd HH or yyyy-mm-dd HH:MM:SS (if your data consists of time). Note that the hour must be a number between 00 and 23, with hours 12 through 23 reserved for PM. You'll notice in the first column that we've set our dates as date-month (typing January 2000 as 2000-01, for example). For more detailed information on how to enter dates and times in the grid, and how to change the format displayed on your graph, visit [this](http://help.plot.ly/date-format-and-time-series/) page."

 - title: Create Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Line plot' under 'Chart type'."
      img: "![Choose chart main](../static/images/time-series/chart-type.png)"
    - copy: "Click on GRAPH on the left-hand side to add your x-axis and y-axis to your line plot. After selecting ‘Line plot', you should then fill out the X and Y dropdown to create the plot."
      img: "![Adding x and y axis](../static/images/time-series/add-trace.png)"
    - copy: "To add additional traces, click '+Trace' and enter the new Y value. Repeat accordingly."
      img: "![Multiple Traces](../static/images/time-series/add-multiple-traces.png)"
    - copy: "This will create a raw time series plot, as seen below."
      img: "![Raw chart](../static/images/time-series/all-traces.png)"

 - title: Style
   sub-steps:
    - copy: "You can choose your colors, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your chart."
    - copy: "To change the color of your lines, the line thickness and line type, click on ‘Traces’ under the same STYLE tab. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Color panel](../static/images/time-series/style-color.png)"
    - copy: "Right below that color section is 'Values Shown on Hover'. Plotly is all about interative charts, and although the x-axis shows only the year, you can hover over the plot to see the values of each month. Depending on what values you want to appear when you hover, can click on the 'X', 'Y', or 'Name'."
      img: "![Hover values](../static/images/time-series/style-values-on-hover.png)"
    - copy: "Now, lets style the Axes. Navigate to'Axes' under STYLE and then select the 'Tick Labels' panel. Here, select 'Custom' in the same section, and enter the number of markers you want to show on your plot."
      img: "![Hover values](../static/images/time-series/style-tick-labels.png)"
    - copy: "To change the range of your axes, visit 'Axes' under STYLE, and add the unix timestamps in the 'X-MIN' and 'X-MAX' fields under 'Range'."
      img: "![Hover values](../static/images/time-series/style-range.png)"
    - copy: "To add a title to your plot, you can type it directly on the title by double-clicking it."
      img: "![Type directly title](../static/images/dates-time-series-and-timestamp/time-title.png)"
    - copy: "The same can be done for the axis labels, and legend."
      img: "![Type directly axis](../static/images/dates-time-series-and-timestamp/time-axis-label.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/time-series/style-title.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/time-series/time-save.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/time-series/time-save-popup.png)"
---
