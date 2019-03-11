---
layout: tutorial-single_layout
title: Apply Filters
subtitle: Filter Data in Chart Studio
permalink: /filter-data/
imageurl: ../static/images/filters/thumbnail.png
state: active
tags: transforms
order: 10
meta_description: A tutorial on how to apply filters to data in Chart Studio
popularity: featured
carouselimageurl:
actioncall: How to apply filters to data in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:477

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/477.embed"></iframe>

steps:
 - title: Introduction
   sub-steps:
    - copy: "Understanding how to apply filters to data in Chart Studio can be categorized based on three different filter operations: a) an inequality (=, <, >, <=, >=, ≠) between the target and the reference, b) a specific (open/closed) range, or c) specific set of values in a data column. This tutorial will cover all the three filter operations that can be applied to any format of the data: (1) categorical data, (2) continuous data, and (3) dates. In addition, you can also apply more than one filter to a single plot."

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
      img: "![Adding x and y axis](../static/images/filters/filters-import-data.png)"
    - copy: "Add as many traces as needed, until the plot is complete!"

 - title: Apply Transforms
   sub-steps:
    - copy: "After adding data, to add a filter, head to the 'Transforms' section under the 'Structure' menu. Click on the '+ Transform' button on the top right corner of the panel and then choose the 'Filter' option."
      img: "![Transform Button](../static/images/filters/add-transform.png)"
    - copy: "This will display a filter sub-panel directly below the button as seen below."
      img: "![Filter Panel](../static/images/filters/filters-sub-panel.gif)"
    - copy: "Here, you can choose the data column which you want to filter; use the dropdown menu next to the attribute 'Target' and then choose the data column."
      img: "![Target Data](../static/images/filters/filters-select-target.png)"
    - copy: "Then, choose the desired filter operator using the dropdown menu next to the attribute 'Operator'."
      img: "![Operator Select](../static/images/filters/filters-select-operator.png)"
    - copy: "Next, depending on the type of operator chosen, a unique attribute to input the reference's source will display."
    - copy: "If an 'Inequality' operator is chosen, a 'Reference' attribute will get displayed where you can provide a reference value that is available from the target data column."
      img: "![Inequality Operator](../static/images/filters/filters-inequality.gif)"
    - copy: "If a range operator is chosen ('Include Range' or 'Exclude Range'), 'Lower Bound' and 'Upper bound' attributes will get displayed using which you can provide the lower and upper limit for the range with respect to the target data column."
      img: "![Inequality Operator](../static/images/filters/filters-range.gif)"
    - copy: "If values operator is chosen ('Include Values' or 'Exclude Values'), 'Values' attribute will get displayed using which you can provide the reference values you would like to filter. Note that the 'Values' attribute accepts more than one value and must be comma-separated."
      img: "![Values Operator](../static/images/filters/filters-values.gif)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
      img: "![insert](../static/images/filters/trace-properties.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/filters/filters-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
