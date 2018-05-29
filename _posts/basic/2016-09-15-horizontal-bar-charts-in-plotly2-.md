---
layout: tutorial-single_layout
title: Horizontal Bar Charts in Chart Studio
subtitle: Create one of the most common chart types, in a horizontal fashion.
permalink: /horizontal-bar-chart/
imageurl: ../static/images/bar-graph/horizontalthumbnail.png
state: active
tags: basic
order: 6
meta_description: A tutorial on how to make a horizontal bar chart in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to Make a Horizontal Bar Chart in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:182

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/horizontal-bar-charts/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/182.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "A bar graph is a chart that uses either horizontal or vertical bars to show comparisons among categories."
    - copy: "After selecting 'Bar chart' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/bar-graph/try-an-example-after.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in Plotly’s online [workspace](https://plot.ly/create)."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/alpha/workspace/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/bar-graph/horizontal import.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Bar chart' under 'Chart type'."
      img: "![Choose chart main](../static/images/bar-graph/group-chart-type-main.png)"
    - copy: "Click on GRAPH on the left-hand side to add your y-axis and x-axis to your stacked bar chart. After selecting ‘Bar chart', you should then fill out the Y and X dropdown to create the plot."
      img: "![Adding x and y axis](../static/images/bar-graph/horizontalxandyvalues.png)"
    - copy: "This will create a raw stacked chart, as seen below."
      img: "![Adding x and y axis](../static/images/bar-graph/horizontalrawplot.png)"
    - copy: "For charts that have more than one set of values such as this one, we need to add more data on the y-axis. We do this by clicking on the '+Trace' button at the top right-hand side of that pane."
      img: "![Trace open](../static/images/bar-graph/horizontaltracebutton.png)"
    - copy: "You can add as many traces as you need, until your plot is complete!"
      img: "![Finished traces](../static/images/bar-graph/horizontal-all-traces.png)"
    - copy: "This plot looks good so far and has all the traces we need, but we want to make this a horizontal bar chart. By going to the 'Traces' tab under STYLE, we can see that bars are selected as 'Vertical' by default."
      img: "![Vertical bars](../static/images/bar-graph/horizontal-bars-section.png)"
    - copy: "All we need to do is select the bar as 'Horizontal', and it's not even necessary to do this to every trace. As you can see in the GIF below, it changes them all at once."
      img: "![Select horizontal](../static/images/bar-graph/select horizontal.gif)"
    - copy: "While we're here, we'll also mention that you can make this a stacked bar chart by selecting the 'Stacked' option in this very same section. Check out [this](http://help.plot.ly/stacked-bar-chart/) great tutorial for more information."
      img: "![Stacked bar](../static/images/bar-graph/stacked horizontal.gif)"
        
 - title: Style a Chart
   sub-steps:
    - copy: "Let's have some fun and style this plot! You can choose your colors, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your chart."
    - copy: "To change the colors of your bars, select ‘Traces’ under the same STYLE tab, then click on FILL and a color pop-up will appear. As you scroll down that pane, each bar will have its own FILL color that you can change. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Colour main](../static/images/bar-graph/horizontal traces colour.png)"
    - copy: "To add a title to your plot, you can type it directly on the title by double-clicking it."
      img: "![Type directly title](../static/images/bar-graph/horizontal title directly.png)"
    - copy: "The same can be done for the axis labels and legend."
      img: "![Type directly legend](../static/images/bar-graph/horizontal axes label.png)"
    - copy: "Another option is to visit the 'Layout' section under STYLE, click on 'Text' and enter your title in the box, as shown below."
      img: "![Type in layout panel](../static/images/bar-graph/Horizontaltitle.png)"
    - copy: "We've also added a subtitle, which you can do by going to the 'Notes' section. For more information about annotations and the different types of notes that can be added to your plot, visit [this](http://help.plot.ly/how-to-add-annotations/) page!"
      img: "![Subtitle](../static/images/bar-graph/horizontal subtitle.png)"
        
 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/bar-graph/horizontalsave.png)"
    - copy: "After giving your PLOT and DATA a name, select them as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/bar-graph/horizontalsavepopup.png)"
---

