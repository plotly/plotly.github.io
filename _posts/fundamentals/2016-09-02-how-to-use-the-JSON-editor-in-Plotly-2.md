---
layout: tutorial-single_layout
title: JSON Tree Editor
subtitle: How to use the JSON tree editor in Chart Studio to edit your plots.
permalink: /view-and-edit-JSON/
imageurl: ../static/images/json-tree-editor/thumbnail.png
state: active
tags: fundamentals
order: 12
meta_description: A tutorial on how to use the JSON tree editor in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to use the JSON tree editor in Chart Studio to edit your plots.
actioncall-url: https://plot.ly/~plotly2_demo/475/

otherlang: Know how to program? Learn more about chart attributes for [Python](https://plot.ly/python/reference/) or [R](https://plot.ly/r/reference/).


steps:
 - title: Getting to Know JSON
   sub-steps:
    - copy: "JSON, which stands for JavaScript Object Notation, is an open-standard format that uses human-readable text to transmit data objects consisting of attribute–value pairs."
    - copy: "What does this mean? It's a way to store information in an organized, easy-to-access manner. It also provides us a human-readable collection of data that we can access in a really clear manner."
    - copy: "The [Chart Studio Workspace](https://plot.ly/create/) not only lets you view your plot's attributes through JSON, but opening the JSON panel also allows you to edit most of your plot's properties. This is especially handy if you're new to coding."

steps:
 - title: Try an Example
   sub-steps:
    - copy: "The first step is to head to Chart Studio [Workspace](https://plot.ly/create/) and check out an example. First, select the 'Type' menu. Hovering the mouse over a chart type icon will display three options: 1) Charts like this by Chart Studio users, 2) View tutorials on this chart type, and, 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "This is a great way to get yourself acquainted with not only the JSON editor, but also with the Chart Studio Workspace itself."
    - copy: "You can use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in the Chart Studio."
    - copy: "You can also add your own data. You have the option of typing directly in the grid, uploading your file, or entering the URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "After adding the data, go to the 'Traces' section under the 'Structure' menu, then choose the desired 'Type' of trace."

 - title: JSON Editor
   sub-steps:
    - copy: "Once the chart is [created](https://help.plot.ly/tutorials/#basic), you can [style](https://help.plot.ly/style-your-plots/) your chart via the 'Style' menu or 'JSON' menu. To learn more about styling the chart via the 'Style' menu, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "After clicking the 'JSON' menu, head to the 'Tree' section which will reveal the JSON tree of your chart within the panel. You'll see that the tree consists of three objects: 'data', 'layout' and 'frames'."
      img: "![JSON Menu](../static/images/json-tree-editor/JSON-menu.png)"
    - copy: "As you're going through the attributes in this panel, its a good idea to have the [plotly.js reference](https://plot.ly/javascript/reference/) opened in a new tab to help you out in case you need an explanation about a certain attribute."

 - title: Data
   sub-steps:
    - copy: "Although this object is labeled as 'data', it's important to note that you cannot edit your data here. To do that, follow [this tutorial](https://help.plot.ly/add-data-to-the-plotly-grid/)."
      img: "![JSON Data](../static/images/json-tree-editor/JSON-menu-data.png)"
    - copy: "There are three parts to this 'data' object because when this plot was created, three traces were added to it. Each of these 'Traces' contain the same editable properties and can be edited to individually style each trace."
    - copy: "This is where you can change the trace properties such as the trace name, thickness of the lines, marker size, symbol, point diameter, colors for each element of the trace, etc."
    - copy: "Let's consider an instance where we want to change the marker symbol from 'circle' to 'cross' for the scatter trace in the plot. To cross-check if the symbol 'cross' is available, head to the reference page, as mentioned earlier, and navigate to the [symbols](https://plot.ly/javascript/reference/#scatter-marker-symbol) attribute under the marker property for the 'Scatter' type chart. It looks like 'cross' is available on that list."
    - copy: "Now, head to the scatter trace's properties in the JSON tree. In this plot, the scatter trace is added in the last, hence, click on the last object ('2') to reveal its properties and then click on the property 'marker' to reveal the marker attributes."
      img: "![Traces image](../static/images/json-tree-editor/change-symbol.gif)"
    - copy: "To change the value for an attribute, hover your mouse over the field next to it as seen above and type directly into the field, or select/unselect the checkbox, if available. See the image below for a quick example for selecting/unselecting a checkbox."
      img: "![True or false](../static/images/json-tree-editor/show-legend-JSON.gif)"

 - title: Layout
   sub-steps:
    - copy: "This is the object that describes the overall display of the plot, including the plot/axes title, annotations, shapes, legend positioning, etc. Unlike the 'data' object, the 'layout' object isn't divided by the traces, but by the sections of the plot."
    - copy: "The 'annotations' property under the 'layout' object allows you to edit your annotations. Note that you can not add any new annotations in the JSON tree editor. To add a new annotation, head to the 'Annotation' section under the 'Style' menu. To learn more about how to add annotations, please visit [this tutorial](https://help.plot.ly/how-to-add-annotations/)."
    - copy: "Now looking at the JSON tree, you can see that we have one annotation on the chart. You can change the attributes associated with that annotation directly within this panel without even navigating to the 'Annotation' section."
      img: "![Annotations](../static/images/json-tree-editor/annotations-JSON.png)"
    - copy: "Let's consider another instance: removing the grid lines in the X axis. For this, head to the property 'xaxis' and select the checkbox next to the attribute 'showgrid' or type 'false' directly in the field next to it. To do the same for Y axis, head to the property 'yaxis'."
      img: "![Axes attributes](../static/images/json-tree-editor/axes-JSON.png)"
    - copy: "You can also make use of the search box on the top-right corner of the panel to find the appropriate fields or values that you are looking for to modify. Use the down/up arrows available on the right side of the search box to navigate to the next/previous field respectively, if more than one field is available matching the text you entered."
      img: "![Search Tool](../static/images/json-tree-editor/search-tool.gif)"

 - title: Frames
   sub-steps:
    - copy: "The 'frames' object comprises elements associated with any animation within the chart. Unfortuantely, Chart Studio does not support creations of animations within the workspace. However, animated charts can be created programmatically, and once created, can then be edited in the workspace via the JSON editor. To learn more about how to create animations programmatically, check out these tutorials: [Plotly.js](https://plot.ly/javascript/animations/), [Python](https://plot.ly/python/animations/), and [R](https://plot.ly/r/animations/)."
    - copy: "Here is a sneak peak of the 'frames' object in the JSON editor when a chart has an animation. Note that the number of objects under 'frames' correspond to the number of frames associated with the animation. In this [example](https://plot.ly/~chelsea_lyn/15704/) below, the chart contains only two frames."
      img: "![Frames Object](../static/images/json-tree-editor/JSON-menu-frames.png)"
---
