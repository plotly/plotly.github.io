---
layout: tutorial-single_layout
title: 3D Cone Plots
subtitle: Use 3D cone plots to visualize vector fields in 3-dimensions.
permalink: /make-a-cone-plot/
imageurl:  https://plotly.github.io/static/images/3d-cone-plot/3d-cone-thumbnail.png
state: active
tags: graph3d
order: 4
meta_description: A tutorial on how to make a cone plot in Chart Studio.
popularity: featured
carouselimageurl:  https://plotly.github.io/static/images/3d-cone-plot/3d-cone-thumbnail.png
actioncall: How to make 3D cone plots in Chart Studio.
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:395

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/cone-plot/) or [R](https://plot.ly/r/cone-plot/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/395.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options:

    1) Charts like this by Plotly users
    2) View tutorials on this chart type
    3) See a basic example."

    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](https://plotly.github.io/static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Data
   sub-steps:
    - copy: "Head to Plotly’s [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Cone' under '3D' chart type."
      img: "![Chart type cone](https://plotly.github.io/static/images/3d-cone-plot/chart-type-cone.png)"
    - copy: "Next, specify the vector field of the cone trace using the six attributes: 'X', 'Y', 'Z', 'U', 'V' and 'W' using their resepective dropdown menus. 'X', 'Y' and 'Z' are the vector position arrays that set the X, Y and Z coordinates of the vector field, while 'U', 'V' and 'W' are the vector component arrays that set the X, Y and Z components of the vector field respectively. Note that the cones are drawn exactly at the given positions."
      img: "![Axes data](https://plotly.github.io/static/images/3d-cone-plot/select-axes-data.gif)"

 - title: Style Trace
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to set the plot title, as well as change the layout background, margin color and font styles."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property."
      img: "![Plot Title](https://plotly.github.io/static/images/3d-cone-plot/3d-cone-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the colorscale title."
      img: "![Type directly title](https://plotly.github.io/static/images/3d-cone-plot/3d-cone-title-direct.png)"
    - copy: "To change the properties of the trace, go to the 'Traces' section under the 'Style' menu."
      img: "![Trace Properties](https://plotly.github.io/static/images/3d-cone-plot/3d-cone-trace-properties.png)"
    - copy: "To change the color of the trace, click on the color panel on the right-side of the `Colorscale` property and choose the scale type from the dropdown, followed by the desired colorscale as seen below."
      img: "![Colour main](https://plotly.github.io/static/images/3d-cone-plot/3d-cone-colourscale.gif)"
    - copy: "Use the 'Color Bars' section under the 'Style' menu to change the properties of the color bar."

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](https://plotly.github.io/static/images/3d-cone-plot/3d-cone-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
