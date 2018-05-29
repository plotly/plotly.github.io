---
layout: tutorial-single_layout
title: Stacked Bar Charts in Chart Studio
subtitle: Create one of the most common chart types, a column chart useful for comparing data points in one or more data series.
permalink: /stacked-bar-chart/
imageurl: ../static/images/bar-graph/new stacked thumb.png
state: active
tags: basic
order: 5
meta_description: A tutorial on how to make a stacked bar chart in Chart Studio.
popularity: featured
actioncall: How to Make a Stacked Bar Chart in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:153

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bar-charts/#stacked-bar-chart) or [R](https://plot.ly/r/bar-charts/#stacked-bar-chart).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/153.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Use a stacked bar chart when you have multiple groupings and are interested in the proportions between values in each grouping, as well as each grouping's total."
    - copy: "After selecting 'Bar chart' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/bar-graph/try-an-example-after.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create/bar-chart/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/bar-graph/import-data-main.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Bar chart' under 'Chart type'."
      img: "![Choose chart main](../static/images/bar-graph/choose-chart-main.png)"
    - copy: "Click on GRAPH on the left-hand side to add your y-axis and x-axis to your stacked bar chart. After selecting ‘Bar chart', you should then select the Y and X dropdown to create the plot."
      img: "![Adding x and y axis](../static/images/bar-graph/adding-x-and-y-axis.png)"
    - copy: "This will create a raw stacked chart, as seen below."
      img: "![Adding x and y axis](../static/images/bar-graph/raw-stacked-chart.png)"
    - copy: "For charts that have many values such as this one, we need to add more data on the x-axis. We do this by clicking on the '+Trace' button at the top right-hand side of that pane."
      img: "![Trace open](../static/images/bar-graph/trace-opened.png)"
    - copy: "You can add as many traces as you need, until your plot is complete!"
      img: "![Finished traces](../static/images/bar-graph/finished-traces.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "You can choose your colors, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your chart."
    - copy: "To make this bar chart a stacked bar chart, visit the 'Traces' section under STYLE and select the 'Stacked' option under 'Bars'. Your chart will now be updated."
      img: "![Stacked chart](../static/images/bar-graph/stacked-chart.png)"
    - copy: "To change the colors of your bars, select ‘Traces’ under the same STYLE tab, then click on FILL and a color pop-up will appear. As you scroll down that pane, each bar will have its own FILL color that you can change. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Stacked colour fill](../static/images/bar-graph/stacked-colour-fill.png)"
    - copy: "To add a title to your plot, you can type it directly on the title by double-clicking it."
      img: "![Type directly title](../static/images/bar-graph/new stacked title.png)"
    - copy: "The same can be done for the axis labels, and legend."
      img: "![Type directly legend](../static/images/bar-graph/new stacked legend.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/bar-graph/type-in-layout-panel.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/bar-graph/new stacked save main.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/bar-graph/new stacked save popup.png)"
---
