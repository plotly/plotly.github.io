---
layout: tutorial-single_layout
title: Line or Scatter Graphs in Chart Studio
subtitle: Create a graph with multiple traces.
permalink: /make-a-line-graph-or-scatter-plot/
redirect_from: /plotly1/make-a-line-graph-or-scatter-plot/
imageurl: ../static/images/line-graph-and-scatter-plot-with-excel/scatter-line-thumb.png
state: active
tags: basic
order: 3
meta_description: A tutorial on how to make a line or scatter graph in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a line or scatter graph in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:86

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/line-and-scatter/) or [R](https://plot.ly/r/line-and-scatter/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/86.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "If you want to make a graph with multiple traces and need a little help, this tutorial is for you!"
    - copy: "After selecting 'Line Plot' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what values and style attributes were selected for this specific plot, as well as the end result."
      img: "![Example Scatter](../static/images/line-graph-and-scatter-plot-with-excel/try-an-example.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-import.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Line Plot' under 'Chart type'."
      img: "![Choose chart main](../static/images/line-graph-and-scatter-plot-with-excel/choose-chart-main.png)"
    - copy: "Click on GRAPH on the left-hand side to add your values to your graph. After selecting ‘Line Plot', you should then fill out the x and y dropdowns to create the plot."
      img: "![Adding x and y axis](../static/images/line-graph-and-scatter-plot-with-excel/line-axes-panel.png)"
    - copy: "This will create a raw line graph as seen below."
      img: "![Raw chart](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-raw.png)"
    - copy: "For charts that have many values such as this one, we need to add more data to the plot. We do this by clicking on the '+Trace' button at the top right-hand side of that pane."
      img: "![Trace open](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-trace.png)"
    - copy: "You can add as many traces as you need, until your plot is complete! For this particular graph, we want to compare two different toothpastes for the prevention of caries development. Each toothpaste has a mean decayed, missing, and filled surfaces (DMFS) index, and a standard deviation DMFS index. We'll need four traces, and this is what the plot looks like after we've finished tracing."
      img: "![Finished traces](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-traces-finished.png)"
    - copy: "To mix it up a bit, we'll have the mean DMFS as a line graph, and the standard deviation DMFS as a scatter plot. We do this by going to the same panel with the x and y values, hit the 'Collapse All' button on the right-hand side of that panel, then open the trace we want to work on. In this case, it's the standard deviation value for toothpaste A and B. Click on 'Chart Type' and select 'Scatter Plot'."
      img: "![Finished plot](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-scatter-sd.gif)"

 - title: Style a Chart
   sub-steps:
    - copy: "We're almost done! Now it's time to choose the color, text position or typeface. Click on STYLE on the left-hand side to play around with the style of your plot."
    - copy: "To change the color of the lines and points, click on ‘Traces’ under the same STYLE tab, and choose the color you want. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Colour main](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-colour-panel.png)"
    - copy: "We've made the values of Toothpaste A gray, and the values of the Toothpaste B turquoise. We've also added a very thin line through each scatter plot."
      img: "![Colour and line](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-colour-lines.gif)"
    - copy: "To add a title to your graph, you can type it directly on the title by double-clicking it. "
      img: "![Type directly title](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-title.png)"
    - copy: "The same can be done for the axis labels and legend. We've added a break in the legend labels using HTML syntax so that they appear in two separate lines. To learn more about HTML and how to add tags and codes to your text, visit [this](http://help.plot.ly/adding-HTML-and-links-to-charts/) page!"
      img: "![Type directly axis](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-legend-labels.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-title-panel.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your plot is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-save.png)"
    - copy: "Give your file a name, then select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/line-graph-and-scatter-plot-with-excel/linescatter-save-popup.png)"
---
