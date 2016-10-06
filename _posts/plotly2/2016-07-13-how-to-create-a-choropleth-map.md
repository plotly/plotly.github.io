---
layout: tutorial-single_layout
title: Learn How to Make a Choropleth Map using the Plotly 2.0 Data Visualization Tool
subtitle: Create a choropleth map, which uses differences in coloring to indicate the average values of a variable within predefined areas
permalink: /make-a-choropleth-map/
imageurl: ../static/images/choropleth-map-with-excel/choropleth-thumb.png
state: active
tags: maps
order: 1
meta_description: Learn how to plot a choropleth map online using Plotly 2.0 data visualization software.
popularity: featured
carouselimageurl:
actioncall: How to Make a Choropleth Map in Plotly 2.0
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:31

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/choropleth-maps/) or [R](https://plot.ly/r/choropleth-maps/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/31.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "A choropleth map provides an easy way to visualize how a measurement varies across a geographic area. It can also show the level of variability within a region."
    - copy: "After selecting 'Choropleth' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after you add data and adjust the styles. In addition to seeing the end result, you will see which labels and style attributes were selected for this specific chart."
      img: "![Example Scatter](../static/images/choropleth-map-with-excel/choropleth-example.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It will open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online data visualization [workspace](https://plot.ly/alpha/workspace/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/choropleth-map-with-excel/choropleth-import.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Choropleth' under 'Chart type'. Note that this chart is only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade."
      img: "![Choose chart main](../static/images/choropleth-map-with-excel/choropleth-chart-type.png)"
    - copy: "Click on GRAPH on the left-hand side to add your values to your map. After selecting ‘Choropleth', you should then fill out the locations and values dropdown to create the plot. The 'Location Format' field includes country names, country ISO-3 codes, and US state names. Since our map has USA data, we'll select USA under the 'Location Format' and 'Map Region' fields. These sections are selected depending on your data."
      img: "![Values dropdown](../static/images/choropleth-map-with-excel/choropleth-values.png)"
    - copy: "This will create a raw choropleth map as seen below."
      img: "![Raw plot](../static/images/choropleth-map-with-excel/choropleth-raw-plot.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "You can choose your colorscale, text position, or typeface. Click on STYLE on the left-hand side to adjust the style of your map."
    - copy: "To change the color gradients of your map, click on ‘Traces’ under the same STYLE tab, and choose your desired colorscale."
      img: "![Colour main](../static/images/choropleth-map-with-excel/choropleth-colorscale.png)"
    - copy: "To add a title to your map, double click on the title and type directly into the field."
      img: "![Type directly title](../static/images/choropleth-map-with-excel/choropleth-title.png)"
    - copy: "The same can be done for the axis labels, and legend."
      img: "![Type directly axis](../static/images/choropleth-map-with-excel/choropleth-legend-title.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/choropleth-map-with-excel/choropleth-title-panel.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your map is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/choropleth-map-with-excel/choropleth-save.png)"
    - copy: "Give your file a name, then select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/choropleth-map-with-excel/save-popup.png)"
---


