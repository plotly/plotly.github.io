---
layout: tutorial-single_layout
title: Box Plots in Chart Studio
subtitle: A convenient way of graphically depicting groups of numerical data through their quartiles.
permalink: /make-a-box-plot/
redirect_from: /plotly1/make-a-box-plot/
imageurl: ../static/images/how-to-make-a-boxplot/thum-how-to-make-a-boxplot.png
state: active
tags: statistical
order: 2.5
meta_description: A tutorial on how to make a box plot in Chart Studio.
popularity: featured
actioncall: How to Make a Box Plot in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:108

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/box-plots/) or [R](https://plot.ly/r/box-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/108.embed"></iframe>

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Box plots may have lines extending vertically from the boxes, or whiskers, indicating variability outside the upper and lower quartiles. This type of plot is also known as a box-and-whisker plot or box-and-whisker diagram."
    - copy: "After selecting 'Box plot' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what values and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/box-plot/try-an-example.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Chart Studio’s new online [workspace](https://plot.ly/create/box-plot/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/box-plot/import-data.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Box plot' under 'Chart type'. Note that this chart is only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade."
      img: "![Choose chart main](../static/images/box-plot/choose-chart-type.png)"
    - copy: "Click on GRAPH on the left-hand side to add your values to your boxed plot. After selecting ‘Box plot', you should then fill out the 'Values' and 'X-Data' dropdown to create the plot."
      img: "![Values](../static/images/box-plot/Values.png)"
    - copy: "This will create a raw plot, as seen below. Don't worry, it still needs more work to get it the way you want!"
      img: "![Raw plot](../static/images/box-plot/raw-plot.png)"
    - copy: "For charts that have many values such as this one, we need to add more data in 'Values'. We do this by clicking on the '+Trace' button at the top rigth-hand side of that pane."
      img: "![Trace open](../static/images/box-plot/traces.png)"
    - copy: " You can add as many traces as you need, until your plot is complete!"
      img: "![Finished traces](../static/images/box-plot/finish-traces.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "You can choose your colors, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your chart."
    - copy: "To change the colors of your boxes, select ‘Traces’ under the same STYLE tab, then click on FILL and a color pop-up will appear. As you scroll down that pane, each box will have its own FILL color that you can change. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Colour fill](../static/images/box-plot/fill-colour.png)"
    - copy: "To add a title to your plot, you can type it directly on the title by double-clicking it. The same can be done for the axis labels, and legend."
      img: "![Type directly](../static/images/box-plot/type-directly.png)"
      img: "![Type directly](../static/images/box-plot/legend.png)"
      img: "![Type directly](../static/images/box-plot/axes-label.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/box-plot/type-directly-in-panel.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side, and give your file a name."
      img: "![Save main](../static/images/box-plot/save-main.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/box-plot/save-pop-up.png)"
---
