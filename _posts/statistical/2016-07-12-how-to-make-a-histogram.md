---
layout: tutorial-single_layout
title: Histograms in Plotly 2.0
subtitle: Create a graphical representation of the distribution of numerical data.
permalink: /make-a-histogram/
redirect_from: 'https://help.plot.ly/plotly1/make-a-histogram/'
imageurl: ../static/images/make-a-histogram/histogram-thumb.png
state: active
tags: statistical
order: 1
meta_description: A tutorial on how to make a histogram in Plotly 2.0.
popularity: featured
carouselimageurl:
actioncall: How to Make a Histogram in Plotly 2.0
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:88

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/histograms/) or [R](https://plot.ly/r/histograms/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/88.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Histograms are an estimate of the probability distribution of a continuous quantitative variable. If you'd like to know more about this type of plot, visit [this](http://help.plot.ly/histogram/) page for great information."
    - copy: "After selecting 'Histogram' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what values and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/make-a-histogram/try-an-example.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create/histogram/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/make-a-histogram/import-data.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Histogram' under 'Chart type'. Note that this chart is only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade"
      img: "![Choose chart main](../static/images/box-plot/choose-chart-type.png)"
    - copy: "Click on GRAPH on the left-hand side to add your values to your histogram. After selecting ‘Histogram', you should then fill out the values dropdown to create the plot. Note that drawing and fitting the curve for this type of plot is not currently available, but is coming soon!"
      img: "![Values dropdown](../static/images/make-a-histogram/axis-pane.png)"
    - copy: "We've selected the height as the value for this specific chart. This will create a raw histogram as seen below, but there's still a little work to do to make it look great!"
      img: "![Raw plot](../static/images/make-a-histogram/histogram-raw-plot.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "You can choose your colors, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your chart."
    - copy: "To change the colors, click on ‘Traces’ under the same STYLE tab. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Colour main](../static/images/make-a-histogram/histogram-colours.png)"
    - copy: "It's also possible to change the bin size (the width of each bin) and the padding between each bar; it's under the same 'Traces' section. We want padding between each bar, so we've spaced them by 15%."
      img: "![Bin and bar spacing](../static/images/make-a-histogram/histogram-bin-bar.png)"
    - copy: "The 'Axes' section under STYLE is where you visit if you want to change your axes title(s), range(s), or grid lines behind your plot.."
      img: "![Axes panel](../static/images/make-a-histogram/histogram-axes.gif)"
    - copy: "To add a title to your plot, you can type it directly on the title by double-clicking it."
      img: "![Type directly title](../static/images/make-a-histogram/histogram-title-type.png)"
    - copy: "The same can be done for the axis labels, and legend."
      img: "![Type directly axis](../static/images/make-a-histogram/histogram-axes-type.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/make-a-histogram/histogram-title-panel.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/make-a-histogram/histogram-save-main.png)"
    - copy: "Give your file a name, then select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/make-a-histogram/histogram-save-popup.png)"
---
