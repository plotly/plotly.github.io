---
layout: tutorial-single_layout
title: Choropleth Maps
subtitle: A map that uses differences in coloring within predefined areas to indicate the average values of a variable within those areas.
permalink: /make-a-choropleth-map/
imageurl: ../static/images/choropleth-map/thumbnail.png
state: active
tags: maps
order: 1
meta_description: A tutorial on how to make a choropleth map in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to Make a choropleth map in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:31

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/choropleth-maps/) or [R](https://plot.ly/r/choropleth-maps/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/31.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "A choropleth map provides an easy way to visualize how a measurement varies across a geographic area or it shows the level of variability within a region."
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 1) Charts like this by Plotly users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Choropleth' under 'Maps' chart type."
      img: "![chart type](../static/images/choropleth-map/choropleth-map-chart-type.png)"
    - copy: "Now, specify the coordinates in terms of location IDs (i.e., abbrevations). Note that the coordinates correspond to the centroid of each given location. The attribute 'Location Format' determines the set of locations used to match entries in 'Location' to regions of the map."

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to set the plot title, and other layout properties."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property."
      img: "![Plot Title](../static/images/choropleth-map/choropleth-map-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface."
      img: "![Type directly title](../static/images/choropleth-map/choropleth-map-title-direct.png)"
    - copy: "Use the 'Traces' section under the 'Style' menu to change the properties of the trace such as the marker (points) symbol, color or size and hoverinfo."
      img: "![Trace Properties](../static/images/choropleth-map/choropleth-map-properties.png)"
    - copy: "To change the color of the traces, choose either the option 'Constant' or 'Variable'."
    - copy: "If 'Constant' is chosen, all the points of the trace are colored in the same color. Then choose the color by clicking on the color palette."
      img: "![Color Palette](../static/images/3D-scatter-plots/3D-scatter-color-palette.png)"
    - copy: " If 'Variable' is chosen, each point in the trace is colored according to the data specified. Then choose the desired colorscale from the respective dropdown menu. In this plot, the option 'Variable' is chosen, as seen below."
      img: "![Color main](../static/images/choropleth-map/choropleth-map-colorscale.png)"
    - copy: "Use the 'Color Bars' section under the 'Style' menu to change the properties of the color bar such as title, size and position, etc."
      img: "![Color Bar](../static/images/choropleth-map/choropleth-map-colorbar.png)"
    - copy: "Similar to the plot title, the color bar title can also be entered directly on the plot interface."

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot, click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/choropleth-map/choropleth-map-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
