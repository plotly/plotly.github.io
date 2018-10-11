---
layout: tutorial-single_layout
title: Pie Charts in Chart Studio
subtitle: A type of statistical chart that uses "pie slices" to show relative sizes of data.
permalink: /make-a-pie-chart/
imageurl: ../static/images/create-pie-chart/new thumb.png
state: active
tags: basic
order: 7
meta_description: A tutorial on how to make a pie chart in Chart Studio.
popularity: featured
carouselimageurl: ../static/images/create-pie-chart/pie-thumb.png
actioncall: How to make a pie chart in Plotly's Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:407

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/pie-charts/) or [R](https://plot.ly/r/pie-charts/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/407.embed"></iframe>
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
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Pie' under 'Simple' chart type."
      img: "![Choose chart main](../static/images/create-pie-chart/pie-choose-chart.png)"
    - copy: "Next, select the 'Values' and 'Labels' to your pie chart from the dropdpwn menus. This will create a raw pie chart, as seen below."
      img: "![Labels and values](../static/images/create-pie-chart/select-labels-values.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "To change the properties of the pie trace, namely, change trace name, change color of the pie segments, add hole in the middle or pull effect to the pie segments/slices, go to the 'Traces' section under the 'Style' menu."
      img: "![Pie Properties](../static/images/create-pie-chart/pie-properties.gif)"
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot Title](../static/images/create-pie-chart/pie-title.png)"  
    - copy: "Another approach is to click and then enter the title directly on the plot interface."
      img: "![Type directly title](../static/images/create-pie-chart/pie-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot, click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/create-pie-chart/pie-save.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Plotly's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
