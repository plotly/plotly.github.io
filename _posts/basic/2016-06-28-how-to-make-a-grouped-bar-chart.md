---
layout: tutorial-single_layout
title: Grouped Bar Charts
subtitle: A bar chart presents grouped data with rectangular bars. Bar lengths are proportional to the values that they represent, and can be plotted vertically or horizontally.
permalink: /grouped-bar-chart/
imageurl: ../static/images/bar-graph/new grouped thumb.png
state: active
tags: basic
order: 4
meta_description: A tutorial on how to make a grouped bar chart in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a grouped bar chart in Chart Studio
actioncall-url: <https://plot.ly/create/?fid=plotly2_demo:149>

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bar-charts/#grouped-bar-chart) or [R](https://plot.ly/r/bar-charts/#grouped-bar-chart).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/149.embed"></iframe>
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
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Data
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Bar' under 'Simple' chart type."
      img: "![Choose chart main](../static/images/bar-graph/bar-choose-chart.png)"
    - copy: "Next, select 'X' and 'Y' values from the dropdown menus. This will create a bar trace, as seen below."
      img: "![Adding x and y axis](../static/images/bar-graph/groupedbar-x-and-y.png)"
    - copy: "Then, choose the desired orientation for the bar trace. 'Vertical' is chosen by default. Here is how the above chart looks like when 'Horizontal' is chosen as orientation."
      img: "![Orientation Horizontal](../static/images/bar-graph/groupedbar-horizontal-orientaion.png)"
    - copy: "To add more traces to the plot, click on the '+ Trace' button at the top right corner of the panel in the 'Traces' section under the 'Structure' menu."
      img: "![Add Trace](../static/images/bar-graph/groupedbar-add-trace.gif)"
    - copy: "Add as many traces as needed until the plot is complete!"
      img: "![Finished traces](../static/images/bar-graph/groupedbar-traces-finished.png)"

 - title: Style Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options for modifying characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "To change the properties of the bar traces, such as trace name, bar color, or size and spacing, go to the 'Traces' section under the 'Style' menu."
      img: "![Bar Properties](../static/images/bar-graph/groupedbar-bar-properties.png)"
    - copy: "Note that updating the trace name will update the legends as well."
      img: "![Trace Name](../static/images/bar-graph/groupedbar-trace-name.png)"
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot Title](../static/images/bar-graph/groupedbar-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](../static/images/bar-graph/groupedbar-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot, click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/bar-graph/groupedbar-save.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
