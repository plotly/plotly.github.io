---
layout: tutorial-single_layout
title: 3D Line Charts
subtitle: How to create a 3D Line Chart.
permalink: /make-a-3d-line-plot/
redirect_from: /make-a-3d-line-chart/
imageurl: ../static/images/3D-line-chart/3d-line-thumbnail.png
state: active
tags: graph3d
order: 1.5
meta_description: A tutorial on how to create a 3D line chart in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a 3D line chart in Plotly's Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:441

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/3d-line-plots/) or [R](https://plot.ly/r/3d-line-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/441.embed"></iframe>

steps:
 - title: Try an Example
   sub-steps:
    - copy: "To try an example, select 'Chart Type' and a panel will appear with chart type options. Once you locate the 3D line icon under the '3d'column, you can check out an example before adding your own data by clicking the little graph icon that will show what a sample chart looks like after adding data and playing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Try an Example](../static/images/create-animations/try-an-example.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to Chart Studio’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "In this tutorial, we will use a bsic dataset that is available via [Chart Studio's dataset repo](https://raw.githubusercontent.com/plotly/datasets/master/3d-line1.csv). Simply copy the URL and then navigate back to the Chart Studio workspace. Now, click 'IMPORT', select the 'By URL' tab, and paste in the the URL."
      img: "![Add Data](../static/images/make-a-3d-line-chart/add-data.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose '3D Line' under '3D' chart type."
      img: "![Choose chart main](../static/images/3D-line-chart/3D-line-chart-type.png)"
    - copy: "Next, select 'X', 'Y' and 'Z' values from the dropdown menus. This will create a 3D line trace, as seen below."
      img: "![Adding X Y Z](../static/images/3D-line-chart/3D-line-data.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to set the plot title, as well as change the layout background, margin color and font styles."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property."
      img: "![Type title](../static/images/3D-line-chart/3D-line-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title."
      img: "![Type directly title](../static/images/3D-line-chart/3D-line-title-direct.png)"
    - copy: "Use the 'Traces' section under the 'Style' menu to change the properties of the trace such as line type, color and width, and hoverinfo."
    - copy: "To change the color of the traces, click on the color palette as seen below. "
      img: "![Color main](../static/images/3D-line-chart/3D-line-color.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot, click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/3D-line-chart/3D-line-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Plotly's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
