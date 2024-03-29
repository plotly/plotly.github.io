---
layout: tutorial-single_layout
title: Line Graphs
subtitle: A type of graph that shows the relationship between two variables with a line that connects a series of successive data points.
permalink: /make-a-line-graph/
imageurl:  https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/new line thumb.png
state: active
tags: basic
order: 2
meta_description: A tutorial on how to make a line graph in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to create a line graph in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:2

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/line-and-scatter/) or [R](https://plot.ly/r/line-and-scatter/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/2.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options:

    1) Charts like this by Chart Studio users
    2) View tutorials on this chart type
    3) See a basic example."

    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Data
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Line' under 'Simple' chart type."
      img: "![Choose chart main](https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/line-choose-chart.png)"
    - copy: "Next, select 'X' and 'Y' values from the dropdown menus. This will create a line trace, as seen below."
      img: "![Adding x and y axis](https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/line-import-data.png)"

 - title: Style Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "To change the properties of the line trace, go to the 'Traces' section under the 'Style' menu."
      img: "![Colour main](https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/line-colour-panel.gif)"
    - copy: "To display markers along the line, click the checkbox corresponding to 'Points' under the 'Display' option."
      img: "![Markers in Line](https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/points-line.gif)"
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot Title](https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/line-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/line-title-direct.gif)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot, click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/scatter-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
