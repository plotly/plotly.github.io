---
layout: two_column_layout
title: Multiple Y Axes Graph
subtitle: A Step by Step Guide to Making a Graph with Multiple Y Axes
permalink: /excel/multiple-axes/
imageurl: /static/images/multiple-y-axes/thum-multiple-y-axes.png
state: active
tags: basic
meta_description: Create a graph with 2 or more traces, with a separate y-axis for each trace. Follow our step-by-step tutorial to make a multiple axes graph for free and online with Plotly.
actioncall: Make a Graph with Mulitple Y Axes
---

#Multiple Y Axes Graph

<div>
    <a href="https://plot.ly/~Dreamshot/4437/" target="_blank" title="Online Dating" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/4437.png" alt="Online Dating" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="Dreamshot:4437" src="https://plot.ly/embed.js" async></script>
</div>

Follow along below to make a chart with multiple y axes of your own.

### Step 1 - Upload your Excel data to Plotly's grid

Open the data file for this tutorial in Excel. You can download the file here in <a href="https://raw.githubusercontent.com/plotly/datasets/master/multiple_y_axis.csv">CSV</a>
format.

![Data](http://i.imgur.com/ZFINaQl.png)

### Step 2 - Head to Plotly

Head to Plotly's Workspace at <a class="link--impt" href="/plot">https://plot.ly/plot</a> and sign into your free Plotly account. Go to "Import," click "Upload a file," then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see the tutorial: <a class="link--impt" href="/add-data-to-the-plotly-grid/">https://plot.ly/add-data-to-the-plotly-grid/</a>

### Step 3 - Creating Your Chart

Label your columns like we did below. You'll have three y-axis columns (male number, female number, male:female ratio) and one x-axis column (age). Select “Line plots” from the MAKE A PLOT menu and then click line plot in the bottom left.

![Plotting](http://i.imgur.com/YAzvCSP.png)

Your plot would initially look something like this.

![Original](http://i.imgur.com/ePWOHkx.png)

Head to the TRACES popover and access Col1 and Col3 from the dropdown menu. For "Type" you'll want these traces to be bar. For "Mode" you'll want these traces to be stack. These two traces apply to the first y-axis (the one on the left).

![Editing](http://i.imgur.com/CdyZaIq.png)

Now, access your third trace (Col4) and prepare to add the second y-axis. Click "New Axis/Subplot..."

![New Axis](http://i.imgur.com/NBGFIsl.png)

You'll want to apply your new y-axis to the right side of the graph.

![Right](http://i.imgur.com/Sp7Mavd.png)

Your graph should now look something like this:

![Progress](http://i.imgur.com/WURvnim.png)

Good job, you now have two y-axes. You are now ready for styling!

### Step 4 - Sizing and Styling!

You might notice that the y-axis is busy with grid lines. Open the AXES popover in the toolbar to clean this up. Select the y-axis and turn grid lines "off."

![Grid lines](http://i.imgur.com/yv4OMzR.png)

You can adjust the coloring of the traces to your liking or roll with Plotly's defaults.

Within the legend on the right side of the graph, you can label your "line" trace "Ratio male/female," Col3 "female," and Col1 "male."

### Step 5 - Finalizing Your Graph

Your plot should now look something like this. In order to get the graph at the top of the tutorial, you’ll need to style it a little more.

![Final](http://i.imgur.com/118Yipj.png)

We’ve titled our chart. And we’ve linked to our source data in the x-axis label area.

You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the "Share" button. Download an image of your Plotly graph by clicking EXPORT on the toolbar.

To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version.

![Excel workbook](http://i.imgur.com/szq4417.png)
