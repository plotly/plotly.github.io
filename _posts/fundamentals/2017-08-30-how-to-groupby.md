---
layout: tutorial-single_layout
title: Split into groups
subtitle: Split a single trace into multiple traces using categorical data in Chart Studio
permalink: /split/
redirect_from: /group-by/
imageurl: ../static/images/split-groups/thumbnail.png
state: active
tags: transforms
order: 10.5
meta_description: A tutorial on how to use the split transform in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: A tutorial on how to use the split transform in Chart Studio.
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:479

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/479.embed"></iframe>

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. You can use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering the URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side, then choose the 'Type' of trace. In this tutorial, 'Scatter' plot is used."
      img: "![Choose chart main](../static/images/line-graph-and-scatter-plot-with-excel/scatter-choose-chart.png)"
    - copy: "Next, select 'X' and 'Y' values from the dropdown menus. This will create a raw scatter trace, as seen below."
      img: "![Adding x and y axis](../static/images/split-groups/split-groups-import-data.png)"

 - title: Apply Transforms
   sub-steps:
    - copy: "After adding data, to split the trace into groups, head to the 'Transforms' section under the 'Structure' menu. Click on the '+ Transform' button on the top right corner of the panel and then choose the 'Split' option."
      img: "![Transform Button](../static/images/filters/add-transform.png)"
    - copy: "This will display a Split sub-panel directly below the button as seen below. Here, you can choose the data column containing the categories based on which you can split the trace; use the dropdown menu next to the attribute 'By' and then choose the desired categorical data. In this example, the trace is split based on the continents."
      img: "![Split By](../static/images/split-groups/split-groups-select-by.gif)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
      img: "![insert](../static/images/split-groups/trace-properties.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/split-groups/split-groups-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
