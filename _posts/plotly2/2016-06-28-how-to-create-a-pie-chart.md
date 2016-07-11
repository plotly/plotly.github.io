---
layout: excel-tutorial-single_layout
title: Pie Charts in Plotly 2.0
subtitle: Create a circular statistical chart that is divided into slices.
permalink: /pie-chart/
imageurl: ../static/images/bar-graph/stacked-imageurl.png
state: active
tags: basic
section: basic
meta_description: A tutorial on how to make a pie chart in Plotly 2.0.
popularity: featured
carouselimageurl: ../static/images/bar-graph/stacked-imageurl.png
actioncall: How to create a pie chart in Plotly 2.0

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/pie-charts/) or [R](https://plot.ly/r/pie-charts/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~ellecj/17.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "In a pie chart, the arc length of each slice is proportional to the quantity it represents. While it is named for its resemblance to a pie which has been sliced, there are variations on the way it can be presented."
    - copy: "After selecting 'Pie chart' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what labels, values, and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/create-pie-chart/try-an-example-after.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/alpha/workspace/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/create-pie-chart/import-data-main.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Pie chart' under 'Chart type'."
      img: "![Chart type pie](../static/images/create-pie-chart/chart-type-pie.png)"
    - copy: "Click on GRAPH on the left-hand side to add the 'Labels' and 'Values' to your pie chart. After selecting ‘Pie chart', you should then fill the labels and values dropdown to create the plot."
      img: "![Labels and values](../static/images/create-pie-chart/labels-and-values.png)"
    - copy: "This will create a raw pie chart, as seen below. It may not look perfect right away, but playing around with the style will get it there."
      img: "![Raw chart](../static/images/create-pie-chart/raw-chart-open-slices.png)"
 
 - title: Style a Chart
   sub-steps:
    - copy: "You can choose your colors, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your chart."
    - copy: "This particular chart has many values, so we've changed the text position from 'Outside Slices' to 'Hidden', creating a neater looking pie chart."
      img: "![Neater pie chart](../static/images/create-pie-chart/neater-chart-hidden-slices.png)"
    - copy: "To change the colors, click on ‘Traces’ under the same STYLE tab. Note that certain colors and typeface are available only on PRO. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Colour main](../static/images/create-pie-chart/colour-main.png)"
    - copy: "You can also take your pie chart to the next level by pulling apart your pie slices, or by creating a donut chart."
    - copy: "You'll be able to do both by visiting 'Traces' in the STYLE section. For pulling your pie slices apart, play with the percentage in the PULL APART % field under 'Modify'."
      img: "![Pull apart](../static/images/create-pie-chart/pull-apart.png)"
    - copy: "If you wish to create a donut chart, you can play around with the % in the HOLE field."
      img: "![Hole](../static/images/create-pie-chart/hole.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Click SAVE on the left-hand side."
      img: "![Save main](../static/images/create-pie-chart/save-main.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/create-pie-chart/save-pop-up.png)"
---
