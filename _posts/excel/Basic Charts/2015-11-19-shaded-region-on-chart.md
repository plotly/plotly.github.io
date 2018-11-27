---
layout: excel-tutorial-single_layout
title: Create a Shaded Region on a Chart with Chart Studio and Excel
subtitle: A Step-by-Step Guide to Create a Shaded Region on a Chart
permalink: /excel/shaded-region-on-chart/
imageurl: https://images.plot.ly/excel/shaded-region-excel/thumb-shaded-region.png
state: active
tags: excel
meta_description: Create a shaded region on a chart. Easily make interactive graphs online and for free with Chart Studio.
popularity: featured
section: BasicCharts
actioncall: Created a Shaded Region with Chart Studio
actioncall-url: https://plot.ly/7127/~Dreamshot/?plot_type=Line%20plot
download-url: https://raw.githubusercontent.com/plotly/datasets/master/shaded-region.csv

similar:
 - title: Make a Graph with Three Y Axes
   url: /excel/3-y-axes
   imgurl: https://images.plot.ly/excel/3-y-axes-excel/three-axes-thumb.png
 - title: Make a Graph with Mulitple Y Axes
   url: /excel/multiple-axes/
   imgurl: https://images.plot.ly/excel/multiple-axes-excel/double-axes-chart-thumb.png
 - title: Add Maps to a Dashboard
   url: /excel/dashboard/
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/shapes/) or [R](https://plot.ly/r/shapes/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~Dreamshot/7133.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/shaded-region.csv)"
      img: "![Excel view](https://images.plot.ly/excel/shaded-region-excel/excel-view-shaded-region.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import,' click 'Upload a file,' then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](help.plot.ly/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/shaded-region-excel/import-shaded-region.png)"
 - title: Creating Your Chart
   sub-steps:
    - copy: "Once you've loaded the data in Chart Studio, label your columns like we did below. You'll have Z scores and probability density as one x-y combination. You'll also have a second x-y combination; this is critical for shading purposes! Then, select 'Line plots' from the CHOOSE PLOT TYPE menu. When you're finished, click on the blue 'LINE PLOT' button in the sidebar."
      img: "![Grid](https://images.plot.ly/excel/shaded-region-excel/grid-shaded-region.png)"
    - copy: "Your plot would initially look something like this."
      img: "![Original](https://images.plot.ly/excel/shaded-region-excel/original-shaded-region.png)"
    - copy: "In order recreate a typical Standard Normal Probability Density Function graph, we'll smooth out the traces. Head to the 'Traces' menu and select 'All traces' within the drop down menu. Click the 'Style' menu and select the smooth 'Shape' as we highlight in the image below."
      img: "![Smooth](https://images.plot.ly/excel/shaded-region-excel/smooth-shaded-region.png)"
    - copy: "Take a moment to resize your plot to something less wide. A width of 800 and a height of 600 seems reasonable. Head to the layout menu to do this."
      img: "![Resize](https://images.plot.ly/excel/shaded-region-excel/resize-shaded-region.png)"
    - copy: "With our particular data, a normal score range is -1 to 1, so we'll shade that region. Head to the 'Traces' menu and select 'Col4' from the drop down menu. Then, within the 'Fill To' area, select 'Y=0.' Your plot should then look similar to the one below."
      img: "![Shade](https://images.plot.ly/excel/shaded-region-excel/shade-shaded-region.png)"
    - copy: "For clarification, we'll revist our grid. Since we wanted the region between -1.0 and 1.0 shaded, our second x-y combination contained values up to -1 and 1. If we wanted the region between -1.5 and 1.5 shaded, for instances, we would have included those values in our second x-y combination. We've highlighted the extra steps to illustrate this difference; it all depends on your indivdual shading needs!"
      img: "![Grid2](https://images.plot.ly/excel/shaded-region-excel/grid2-shaded-region.png)"
 - title: Finalizing Your Graph
   sub-steps:
    - copy: "Your graph should now look something like this."
      img: "![Final](https://images.plot.ly/excel/shaded-region-excel/final-shaded-region.png)"
    - copy: "Head to the 'Traces' menu and then the 'Style' tab to set the trace color to your liking. You can title your graph and axes like we did. You can also blank out the legend, as it is not particularly necessary for this graph. Hide the legend within the 'Legend' menu."
      img: "![Styling](https://images.plot.ly/excel/shaded-region-excel/styling-shaded-region.png)"
    - copy: "Here's our finished graph."
      img: "![Finished](https://images.plot.ly/excel/shaded-region-excel/finished-shaded-region.png)"
    - copy: "You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the 'Share' button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://images.plot.ly/excel/shaded-region-excel/export-shaded-region.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel workbook](https://images.plot.ly/excel/shaded-region-excel/excel-workbook-shaded-region.png)"
---
