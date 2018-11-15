---
layout: tutorial-single_layout
title: How to Make a 2D Histogram Contour Plot in Chart Studio
subtitle: Create a plot that visualizes a bivariate distribution with contour lines.
permalink: /make-a-2d-histogram-contour-plot/
imageurl: ../static/images/create-contour-plot.md/2d contour thumb.png
state: active
tags: statistical
order: 2
meta_description: A tutorial on how to make a 2D Histogram Contour Plot in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to Make a 2D Histogram Contour Plot in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:202

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/density-plots/#2d-histogram-contour-plot-with-histogram-subplots).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/202.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "This 2 dimensional histogram compares distributions across two variables in a contour plot fashion and the distribution is depicted by a colorscale."
    - copy: "After selecting '2D Histogram Contour Plot' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what values and style attributes were selected for this specific plot, as well as the end result."
      img: "![Example after](../static/images/create-contour-plot.md/example contour.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in the workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to Chart Studio’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/create-contour-plot.md/contour import.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, choose your 'Chart Type' in the GRAPH section on the left-hand side and select '2D Histogram Contour Plot'."
      img: "![Choose chart main](../static/images/create-contour-plot.md/contour chart type.png)"
    - copy: "Click on GRAPH on the left-hand side to add your data to your plot. After selecting '2D Histogram Contour Plot', you should then fill out the X and Y dropdown to create the plot."
      img: "![Adding axes](../static/images/create-contour-plot.md/contour choose data.png)"
    - copy: "This will create a raw 2D histogram contour plot, as seen below."
      img: "![Raw plot](../static/images/create-contour-plot.md/contour raw plot.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "Now it's time to choose the color, text position or typeface. Click on STYLE on the left-hand side to play around with the style of your plot."
    - copy: "To change the colorscale, click on ‘Traces’ under the same STYLE tab, and choose the colorscale you want, with the added option of reversing the colorscale. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Colour main](../static/images/create-contour-plot.md/contour color.png)"
    - copy: "You can also show or hide your contour lines, and choose the type, thickness, color and numbers of lines. This is also where you select the colorscale range, as well as the x and y binning as auto or custom, play with the max bins, and show or hide your color bar."
      img: "![Colour styling](../static/images/create-contour-plot.md/contour style.gif)"
    - copy: "To add a title to your graph, you can type it directly on the title by double-clicking it. "
      img: "![Type directly title](../static/images/create-contour-plot.md/contour title.png)"
    - copy: "The same can be done for the axis labels and legend. As you can see int he image below, we've used latex for our x-axis label. If you want to learn more about this cool typesetting system, click [here](http://help.plot.ly/LaTeX-basics/)."
      img: "![Type directly axes](../static/images/create-contour-plot.md/contour x axis.png)"
    - copy: "We've also added an annotation for our y-axis label by going to 'Notes' and clicking on the blue '+Annotation' button, then selecting 'General Annotation'. For more information on annotations, visit [this](http://help.plot.ly/how-to-add-annotations/) page."
      img: "![Annotation](../static/images/create-contour-plot.md/contour annotation.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Title and Fonts' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/create-contour-plot.md/contour title tab.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your plot is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/create-contour-plot.md/contour save button.png)"
    - copy: "Give your PLOT and DATA a filename and select them as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public, and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/create-contour-plot.md/contour save plot and data.png)"
---
