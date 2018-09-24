---
layout: tutorial-single_layout
title: Bubble Charts in Chart Studio
subtitle: Create a bubble charts using scatter plot.
permalink: /make-a-bubble-chart/
imageurl: ../static/images/create-bubble-chart/bubble.jpg
state: active
tags: basic
order: 7
meta_description: A tutorial on how to make a bubble chart in Chart Studio.
popularity: featured
carouselimageurl: ../static/images/create-bubble-chart/bubble.jpg
actioncall: How to create a bubble chart in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:392

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bubble-charts/) or [R](https://plot.ly/r/bubble-charts/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/392.embed"></iframe>
live-graph-image:

steps:
 - title: Add Data
   sub-steps:
    - copy: "Bubble charts are nothing but scatter plots useful for comparing the relationship between the data objects in three dimensions: X-axis, Y-axis and Z-axis (representing the size of the bubbles). While in addition to the nature of bubble charts to show the relationships in three dimensions, plotly's React Chart Editor easily allows to group the data points based on a new dimension which is color of the bubbles."
    - copy: "Head to the Plotly's new [online React Chart Editor](https://plot.ly/create/). You have the option of typing directly in the grid, uploading your local file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Example after](../static/images/create-bubble-chart/add-data.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your Chart Editor."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to 'Traces' section under 'Structure' menu on the left-hand side. Choose the 'Type' of trace. For creating bubble charts, choose 'Scatter' under 'Simple' trace type (Ideally, The trace will be set to 'Scatter' by default)."
      img: "![Chart type bubble](../static/images/create-bubble-chart/chart-type-scatter.png)"
    - copy: After selecting the trace type, you should then fill the 'X' and 'Y' values from the dropdown to create the plot. This will create a raw scatter trace, as seen below."
      img: "![X and Y values](../static/images/create-bubble-chart/select-x-y.png)"

 - title: Apply Transforms
   sub-steps:
    - copy: "Now with the raw trace been created, let's apply transforms. Go to 'Transforms' section under 'Structure' menu on the left-hand side."
      img: "![Transforms Menu](../static/images/create-bubble-chart/select-transforms.png)"
    - copy: "First, let's filter the data by applying 'Filter' transform."
      img: "![Filter](../static/images/create-bubble-chart/apply-filter.gif)"
    - copy: "Then, let's split the data into groups. This can be done by using 'Split' transform."
      img: "![Split](../static/images/create-bubble-chart/apply-split.gif)"
    - copy: "From the graph, it can be seen that color for our bubbles has now been added to the plot with just few clicks. As for the size for the bubbles, it can be defined under 'Styles' menu."

 - title: Style Trace
   sub-steps:
    - copy: "'Style' allows to modify colors and size of the markers for the traces, add text annotations, shapes, embed images and many more. To play around with the style of your chart click on 'Style' menu on the left-hand side."
    - copy: "To change the colors, click on 'Traces' section under 'Style' menu. Note that this section has two tabs: 'Individually' and 'By Type', as seen below."
    - copy: "'By Type' allows to apply the style effects to all the traces under the each trace type (in this case, it's 'Scatter' trace) while the 'Individually' tab will provide the same options for individual trace."
      img: "![Style Trace Tabs](../static/images/create-bubble-chart/style-traces.gif)"
    - copy: "Navigate to the 'Color' option under 'Points', and pick a color of your preference either by clicking on the color panel that appears when clicking the color-filled circle. You can also specify Hexa-decimal code or RGBA values of the desired color, as seen below."
      img: "![Pick Color Individual](../static/images/create-bubble-chart/pick-color-individually.gif)"
    - copy: "To change the color for all scatter traces together, navigate to 'By Type' tab and pick a preset colorscale from the dropdown that appears upon the clicking the default colorscale. Please note to apply same color to all the traces of similar type, click on 'Single' button  and pick the desired color."
      img: "![Pick Color ByType](../static/images/create-bubble-chart/pick-color-bytype.gif)"
    - copy: "To change the size of the markers (bubbles), there are two modes: 'Constant' or 'Variable'. To set a varying size for the markers based on a new set of data points (Z-axis), click on 'Variable' and select the desired column name provided in the excel."
      img: "![Variable Marker Size](../static/images/create-bubble-chart/variable-marker-size.gif)"
    - copy: "To set the opacity of the bubbles use the slider besides 'Point Opacity' option. Additional marker settings like symbol format, border width, border color, scaling of marker size with respect to the data can also specified, as shown below."
      img: "![Addon Marker options](../static/images/create-bubble-chart/marker-addon-options.png)"

 - title: Setup Style for Axes
   sub-steps:
    - copy: "Now the styles being applied to the bubble chart, let's setup the axes titles, axes  range. For this, navigate to 'Axes' section under 'Style' menu, as seen below."
      img: "![Axes settings](../static/images/create-bubble-chart/axes-setup.png)"
    - copy: "Please not that the axes titles can aslo be specified by directly typing on the axes title boxes. Likewise for the plot title, as shown below. "
      img: "![Plot title](../static/images/create-bubble-chart/plot-title.gif)"

 - title: Layout Style
   sub-steps:
    - copy: "To apply layout styles such as background color, font type, font size and font color, navigate to 'General' section under 'Style' menu."
      img: "![Axes settings](../static/images/create-bubble-chart/layout-settings.png)"
    - copy: "Please not that the axes titles can aslo be specified by directly typing on the axes title boxes. Likewise for the plot title, as shown below. "
      img: "![Plot title](../static/images/create-bubble-chart/plot-title.gif)"

 - title: Save and Share
   sub-steps:
    - copy: "Now, the bubble chart has been created. To save the plot click 'Save' button on the left-hand side. A Save pop-up will appear, as seen below, where you can specify the filename for your plot and the data."
      img: "![Save main](../static/images/create-bubble-chart/save-bubble-chart.png)"
    - copy: "Select the privacy setting for the plot and data as 'Public' or 'Private' or 'Private link'. For more information on how sharing works, including the difference between private, public, and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page.."

---
