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
    - copy: "The first step is to head to Chart Studio [Workspace](https://plot.ly/create/) and check out an example. First, select the 'Type' menu. Hovering the mouse over a chart type icon, will display three options: 1) Charts like this by Chart Studio users, 2) View tutorials on this chart type and 3) See a basic example."
    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "This is a great way to get yourself acquainted with not only the JSON editor, but also with the Chart Studio Workspace itself."
    - copy: "You can use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in the Chart Studio."
    - copy: "You can also add your own data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "After adding the data, go to the 'Traces' section under the 'Structure' menu, then choose the desired 'Type' of trace."

 - title: JSON Editor
   sub-steps:
    - copy: "Once the chart is [created](http://help.plot.ly/tutorials/#basic), you can [style](http://help.plot.ly/style-your-plots/) your chart as you wish, by using the 'Style' menu on the left-hands side, or by using the 'JSON' menu."
    - copy: "After clicking the 'JSON' menu, click on the 'Tree' section underneath it. This will reveal the JSON tree of your chart within the panel and you'll see that the tree consists of three sections: 'data', 'layout' and 'frames'. If you're new to JSON, it may look a little overwhelming, but it's not as scary as it seems."
      img: "![JSON Menu](../static/images/json-tree-editor/JSON-menu.png)"
    - copy: "As you're going through the attributes in this panel, its a good idea to have the [plotly.js reference](https://plot.ly/javascript/reference/) opened in a new tab to help you out in case you need an explanation about a certain attribute."

 - title: Data
   sub-steps:
    - copy: "Although this property is labeled as 'data', it's important to note that you cannot edit your data here. To do that, follow [this tutorial](http://help.plot.ly/add-data-to-the-plotly-grid/)."
      img: "![JSON Data](../static/images/json-tree-editor/JSON-menu-data.png)"
    - copy: "Note that there are three objects under this property which corresponds to the number of traces within the chart. The attributes within each object are same as those that were available in the 'Traces' section under the 'Style' menu, for each traces."
    - copy: "This is where you can change the trace properties such as thickness of the lines, marker size, symbol, point diameter, colors/colorscale, etc."
    - copy: "Let's say we want to change the marker symbol from an open circle to a cross. This is where that reference page comes in handy! We can use any of [these symbols](https://plot.ly/javascript/reference/#scatter-marker-symbol) in a scatter, and it looks like 'cross' is on that list! We'll go right ahead and change it, as well as the size."
      img: "![Traces image](../static/images/json-tree-editor/symbol-JSON.gif)"
    - copy: "How do you change them? Hover your mouse over the fields next to the attributes to type into a field, or select/unselect an item. See the image below for a quick example."
      img: "![Hover over trace](../static/images/json-tree-editor/hover-first-trace.gif)"
    - copy: "Why would you select or unselect an item? If you want something to appear on your plot, select the box corresponding to that specific attribute and check it to make it 'true'. You can also hide something by clicking it (so it's no longer checked off) and it appears as 'false'."
      img: "![True or false](../static/images/json-tree-editor/show-legend-JSON.gif)"

 - title: Layout
   sub-steps:
    - copy: "This is the part that covers all the layout properties of the chart that includes the plot/axes title, annotations, shapes, legend positioning, etc. Unlike the 'data' property, the 'layout' property isn't divided by the traces, but by the sections of the plot."
    - copy: "The 'annotations' property allows you to edit your annotations associated with the chart, and by looking at the JSON tree, you can see that we have one annotation on the chart. You can change the attributes such as text, color, and font of the annotation directly within this panel without even navigating to the 'Annotation' section under the 'Style' menu. However, please note that you cannot add any new annotation via the JSON tree editor, which can only be done via the 'Annotation' section under the 'Style' menu. To learn more about how to add annotations, please visit [this tutorial](http://help.plot.ly/how-to-add-annotations/)."
      img: "![Annotations](../static/images/json-tree-editor/Annotations-JSON.png)"
    - copy: "To edit the width, height, or anchoring of the legend, use the  until you find 'legend', then click on the arrow next to it to see the attributes belonging to the legend. Click on the fields that you wish to change. You can follow the same steps for the 'margin'. By doing this, you can edit the positioning and padding of the margins."
      img: "![Legend and margins](../static/images/json-tree-editor/legendandmargins.png)"
    - copy: "To edit the axis properties, scroll to the bottom of this category. This is where you can change the axes labels, but also the characteristics belonging to the ticks (labels, markers, formats, angles, and fonts to name a few), as well as the grid lines and zero lines. It's a good idea to look at both the x-axis and y-axis parts of this section, to make sure you don't miss anything. Let's say you want to remove the grid lines from your plot; you have to unselect the 'grid line' in both axes so they both appear as 'false'. Otherwise, you'll be left with either horizontal or vertical lines behind your plot."
      img: "![Axes attributes](../static/images/json-tree-editor/axes-JSON.png)"
    - copy: "Although you can't add __new attributes__ to your plot using the JSON editor, in some cases you still have a little more control by setting things specifically to your liking, rather than just using the menus in the left-hand side of the Chart Studio Workspace. Happy plotting!"
---
