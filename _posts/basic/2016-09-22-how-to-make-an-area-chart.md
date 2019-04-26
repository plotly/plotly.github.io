---
layout: tutorial-single_layout
title: Area Charts
subtitle: A line chart that displays quantitative data using colored areas between the axis and line(s)
permalink: /make-an-area-graph/
imageurl: ../static/images/area-chart/area chart thumb.png
state: active
tags: basic
order: 9
meta_description: A tutorial on how to make an area chart using Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to create an area chart in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:423

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/filled-area-plots/) or [R](https://plot.ly/r/filled-area-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/423.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 

    1) Charts like this by Chart Studio users
    2) View tutorials on this chart type
    3) See a basic example."

    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in your workspace."

 - title: Add Data
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering the URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Area' under 'Simple' chart type."
      img: "![Choose chart main](../static/images/area-chart/area-choose-chart.png)"
    - copy: "Next, select the 'X' and 'Y' values from the dropdown menus. This will create an area trace, as seen below."
      img: "![Add X and Y](../static/images/area-chart/area-select-x-y.png)"
    - copy: "To add more traces to the plot, click on '+ Trace' button at the top right corner of the panel in the 'Traces' section under the 'Structure' menu."
      img: "![Trace open](../static/images/area-chart/area-add-trace.gif)"
    - copy: "Add as many traces as needed, until the plot is complete!"

 - title: Style Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'Traces' section under the 'Style' menu to change the properties of the traces, such as area color fill, markers, or line attributes."
      img: "![Area properties](../static/images/area-chart/area-properties.png)"
    - copy: "To set the trace names, type the name in the textbox provided under 'Name' property for each trace. Note that updating the trace name will update the legends as well."
      img: "![Trace Name](../static/images/area-chart/area-trace-name.png)"
    - copy: "To display/remove the lines on top of the filled-area, click the checkbox corresponding to 'Lines' under the 'Display' option."
      img: "![Display Lines](../static/images/area-chart/area-lines.gif)"
    - copy: "Similarly, to display the markers along the filled area's line, click the checkbox corresponding to 'Points' under the 'Display' option. Use the color palletes to change the color of each individual component of the traces, as seen below."
      img: "![Colour main](../static/images/area-chart/area-colour-panel.gif)"
    - copy: "Use the 'General' section under the 'Style' menu to change the layout background and margin color, set the plot title, and change the font styles."
      img: "![Area properties](../static/images/area-chart/area-layout-properties.png)"
    - copy: "To set the plot title, type in the textbox provided under the attribute 'Title'."
      img: "![Plot Title](../static/images/area-chart/area-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](../static/images/area-chart/area-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot, click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/area-chart/area-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
