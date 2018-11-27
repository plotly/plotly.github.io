---
layout: tutorial-single_layout
title: JSON Viewer/Editor in Chart Studio
subtitle: How to use the JSON Viewer/Editor in Chart Studio
permalink: /view-and-edit-JSON/
imageurl: ../static/images/misc-tutorial-images/JSON-thumb.png
state: active
tags: fundamentals
order: 12
meta_description: A tutorial on how to use the JSON viewer/editor in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to use the JSON Viewer/Editor in Chart Studio
actioncall-url:

otherlang: Know how to program? Learn more about chart attributes for [Python](https://plot.ly/python/reference/) or [R](https://plot.ly/r/reference/).


steps:
 - title: Getting to Know JSON
   sub-steps:
    - copy: "JSON, which stands for JavaScript Object Notation, is an open-standard format that uses human-readable text to transmit data objects consisting of attribute–value pairs."
    - copy: "What does this mean? It's a way to store information in an organized, easy-to-access manner. It also provides us a human-readable collection of data that we can access in a really clear manner."
    - copy: "The new online [workspace](https://plot.ly/alpha/workspace/) not only lets you view your plot's attributes through JSON, but opening the JSON panel also allows you to edit most of your plot's properties. This is especially cool if you're new to coding."

 - title: The JSON Panel
   sub-steps:
    - copy: "The first step is to head to Chart Studio's new online [workspace](https://plot.ly/create) and [add your data](http://help.plot.ly/add-data-to-the-plotly-grid/)."
    - copy: "For this tutorial,  we're using Chart Studio's box plot example, as well as a few of [our own projects](https://plot.ly/~plotly2_demo/folder/home). To find the box plot example, select 'Box plot' under 'Chart Type', and click the 'try an example' button. As you can see, the data's already been added, and the plot has been styled. This is a great way to get yourself acquainted with not only the JSON editor, but the entire workspace as well."
      img: "![Example after](../static/images/box-plot/try-an-example.png)"
    - copy: "You can [plot](http://help.plot.ly/tutorials/#basic) and [style](http://help.plot.ly/style-your-plots/) your graph as you wish, by using the STYLE tab on the left-hands side, or by using the JSON tab."
      img: "![JSON tab](../static/images/misc-tutorial-images/JSON tab main.png)"
    - copy: "Once you've opened this tab, a panel will open to reveal the JSON code. If you're new to coding, it may look a little overwhelming, but it's not as scary as it seems."
      img: "![JSON panel](../static/images/misc-tutorial-images/JSON-panel-open.png)"
    - copy: "As you're going through the attributes in this panel, it's a good idea to have [this reference](https://plot.ly/javascript/reference/) opened to help you out in case you need an explanation about a certain attribute."
    - copy: "As you scroll down this panel, you'll see that the 'object' consists of two sections: 'data' and 'layout'."

 - title: The Data Section
   sub-steps:
    - copy: "Although this sub-tab is labeled 'data', it's important to note that you aren't able to edit your data here, but you can by following [this step](http://help.plot.ly/add-data-to-the-plotly-grid/#step-5-update-your-data). This is actually referring to the attributes that belong to your traces, the same ones that are in the 'Traces' section under STYLE."
    - copy: "There are three parts to this 'data' sub-tab because when this plot was created, three traces were added to it. All the elements will be the same in each of these 'traces', but depending on what you want each of these 'traces' to look like, they'll be filled differently."
    - copy: "This is where you can change the labels of your traces, and depending on your chart type, you can change the thickness of your lines, the symbols and diameter of your points, and the colors of these attributes."
    - copy: "Let's say we want to change the point symbol from an open diamond to a cross. This is where that reference page comes in handy! We can use any of [these symbols](https://plot.ly/javascript/reference/#scatter3d-marker-symbol) in a 3D scatter, and it looks like 'cross' is on that list! We'll go right ahead and change it, as well as the size."
      img: "![Traces image](../static/images/misc-tutorial-images/symbol-JSON.gif)"
    - copy: "How do you change them? Hover your mouse over the fields next to the attributes to type into a field, or select/unselect an item. See the image below for a quick example."
      img: "![Hover over trace](../static/images/misc-tutorial-images/hover-first-trace.gif)"
    - copy: "Why would you select or unselect an item? If you want something to appear on your plot, select the box corresponding to that specific attribute and check it to make it 'true'. You can also hide something by clicking it (so it's no longer checked off) and it appears as 'false'."
      img: "![True or false](../static/images/misc-tutorial-images/show-legend-JSON.gif)"

 - title: The Layout Section
   sub-steps:
    - copy: "This is the section that covers the rest of the plot, including the title, annotations, and legend positioning. Unlike the 'data' section, this isn't divided by the traces, but by the sections of the plot."
    - copy: "The 'annotations' section allows you to edit your notes, and by looking at the image below, you can see that we have three annotations on our plot. We can change the text, color, and font of these notes. Although you can't add any annotations in the JSON editor, you can do so by going to the 'Notes' section by clicking STYLE. Visit [this tutorial](http://help.plot.ly/how-to-add-annotations/) if you need help getting started."
      img: "![Annotations](../static/images/misc-tutorial-images/Annotations-JSON.png)"
    - copy: Let's say you want to edit the width, height, or anchoring of the legend; scroll until you find 'legend', then click on the arrow next to it to see the attributes belonging to the legend. Click on the fields that you wish to change. You can follow the same steps for the 'margin'. By doing this, you can edit the positioning and padding of the margins."
      img: "![Legend and margins](../static/images/misc-tutorial-images/legendandmargins.png)"
    - copy: "To edit the axis properties, scroll to the bottom of this category. This is where you can change the axes labels, but also the characteristics belonging to the ticks (labels, markers, formats, angles, and fonts to name a few), as well as the grid lines and zero lines. It's a good idea to look at both the x-axis and y-axis parts of this section, to make sure you don't miss anything. Let's say you want to remove the grid lines from your plot; you have to unselect the 'grid line' in both axes so they both appear as 'false'. Otherwise, you'll be left with either horizontal or vertical lines behind your plot."
      img: "![Axes attributes](../static/images/misc-tutorial-images/axes-JSON.png)"
    - copy: "Although you can't add __new attributes__ to your plot using the JSON editor, in some cases you still have a little more control by setting things specifically to your liking, rather than just using the tabs in the workspace. Happy plotting!"
---
