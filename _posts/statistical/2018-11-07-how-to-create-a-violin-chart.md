---
layout: tutorial-single_layout
title: Violin Plot
subtitle: Violin Plot is a combination of a box plot and density plot that shows the distribution shape of the data.
permalink: /make-a-violin-plot/
imageurl: ../static/images/violin-plot/violin-thumb.png
state: active
tags: statistical
order: 2.5
meta_description: A tutorial on how to make a violin plot in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a violin plot in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:430

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/violin/) or [R](https://plot.ly/r/violin/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/430.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Chart Studio users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Violin' under 'Distributions' chart type."
      img: "![Choose chart](../static/images/violin-plot/violin-choose-chart.png)"
    - copy: "Next, select the 'X'and 'Y' values from the dropdown menus. This will add a violin trace to the chart as seen below."
      img: "![Adding X Y Z values](../static/images/violin-plot/violin-fill-x-y-z.png)"
    - copy: "To add more traces to the chart, click on the '+ Trace' button at the top right corner of the panel in the 'Traces' section under the 'Structure' menu. Add as many traces as needed, until the plot is complete! This is what the plot looks like after adding all the traces."
      img: "![Add All](../static/images/violin-plot/violin-add-trace.png)"
    - copy: "The property 'Axes to Use' under each trace panel allows you to choose the desired 'X Axis' and 'Y Axis' from the dropdown menus to be used as reference axis for the respective trace. If the reference axis is not available in the dropdown, click on the '+' button next to the dropdwon to add a new reference axis associated with the trace."
      img: "![Add axis](../static/images/violin-plot/violin-add-axis.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to change the general style properties such as plot background color, margin color and font sytlings, the layout properties, the modebar and interactive settings."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property in the 'General' section."
      img: "![Plot Title](../static/images/violin-plot/violin-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title and the legends."
      img: "![Type directly title](../static/images/violin-plot/violin-title-direct.png)"
    - copy: "To change the properties specific to the traces in the plot such trace name, color, etc., go to the 'Traces' section under the 'Style' menu."
      img: "![Trace Properties](../static/images/violin-plot/violin-trace-properties.gif)"
    - copy: "Use the 'Points' property to show/hide/modify the marker points associated with the violins."
      img: "![Violin Points](../static/images/violin-plot/violin-points.gif)"
    - copy: "To set the size and positioning of the violins, use the 'Violin Size and Spacing' property."
    - copy: "To display only the positive side of the violins, set the attribute 'Visible Sides' to 'Positive' and similarly choose 'Negative' to display the negative side of the violins."
      img: "![Violin Sides](../static/images/violin-plot/violin-side.png)"
    - copy: "To display box traces within the violins, click 'Show' under the 'Box' property."
      img: "![Box trace](../static/images/violin-plot/violin-box-trace.png)"
    - copy: "Use the 'Axis' section under the 'Style' menu to change the axis properties such as axes title, lines and tick properties."
    - copy: "To set custom range for the axes click on the 'Custom' button under the 'Range' property."
      img: "![Axis Range](../static/images/violin-plot/violin-axis-range.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/violin-plot/violin-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
