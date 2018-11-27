---
layout: tutorial-single_layout
title: Histograms
subtitle: A type of plot that visualizes the distribution of numerical data.
permalink: /make-a-histogram/
redirect_from: plotly1/make-a-histogram/
imageurl: ../static/images/histogram-plot/histogram-thumb.png
state: active
tags: statistical
order: 1
meta_description: A tutorial on how to make a histogram in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a histogram in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:88

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/histograms/) or [R](https://plot.ly/r/histograms/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/88.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Histograms are an estimate of the probability distribution of a continuous quantitative variable. If you'd like to know more about this type of plot, visit [this](http://help.plot.ly/histogram/) page for more information."
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Chart Studio users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Histogram' under 'Distributions' chart type."
      img: "![Choose chart main](../static/images/histogram-plot/histogram-choose-chart.png)"
    - copy: "Next, select the 'X' and 'Y' values from the dropdowns to create the plot."
      img: "![Adding x and y axis](../static/images/histogram-plot/histogram-axis.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'Traces' section under the 'Style' menu to change the properties of the traces such as histogram normalization, binning, and bar size and spacing."
      img: "![Colour main](../static/images/histogram-plot/histogram-properties.gif)"
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Axis Title](../static/images/histogram-plot/histogram-title.png)"
    - copy: "To set the axes title, go to the 'Axis' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title' for each axis."
      img: "![Plot Title](../static/images/histogram-plot/histogram-axis-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface."
      img: "![Type directly title](../static/images/histogram-plot/histogram-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/histogram-plot/histogram-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
