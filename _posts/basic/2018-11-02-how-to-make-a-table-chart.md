---
layout: tutorial-single_layout
title: Table
subtitle: How to make a table in Chart Studio.
permalink: /make-a-table/
imageurl: ../static/images/table/table-thumbnail.gif
state: active
tags: basic
order: 10
meta_description: A tutorial on how to make a table in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to make a table in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:426

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/table/) or [R](https://plot.ly/r/table/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/426.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:

    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options:
    - copy: "Before getting started with your own dataset, you can check out an example. First, select the 'Type' menu. Hovering the mouse over the chart type icon will display three options: 

    1) Charts like this by Chart Studio users
    2) View tutorials on this chart type
    3) See a basic example."

    - copy: "Clicking the 'See a basic example' option will show what a sample chart looks like after adding data and editing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Example after](../static/images/line-graph-and-scatter-plot-with-excel/scatter-try-example.gif)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Add Data
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Table' under 'Simple' chart type."
      img: "![Choose chart](../static/images/table/table-choose-chart.png)"
    - copy: "Next, fill out the 'Headers' and 'Columns' values from the dropdown menus. This will create a raw table as seen below."
      img: "![Add Values](../static/images/table/table-import-data.png)"
    - copy: "After adding the data to the table, fill out the table style attributes under the 'Header Options', 'Cell Options' and 'Column Options' (if the grid holds those information) via the dropdown menus. The resulting table will look like this:"
      img: "![Finished trace](../static/images/table/table-finished.png)"
    - copy: "Note that the above style properties can also be set under the `Style` section."

 - title: Style Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "To change the properties of the table plot, go to the 'Traces' section under the 'Style' menu."
      img: "![Table Properties](../static/images/table/table-properties.png)"
    - copy: "To set the plot title, go to the 'General' section under the 'Style' menu and type in the plot title within the textbox provided under 'Title'."
      img: "![Plot Title](../static/images/table/table-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface."
      img: "![Type directly title](../static/images/table/table-title-direct.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/table/table-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
