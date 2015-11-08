---
layout: one_column_layout
title: Three Y Axes Graph with Plotly and Excel
subtitle: A Step by Step Guide to Making a Graph with Three Y Axes With Plotly and Excel
permalink: /excel/3-y-axes
imageurl: http://images.plot.ly/excel/3-y-axes-excel/thumbnail5-3-y-axes.png
state: active
tags: basic
meta_description: Create a graph with 3 traces, with a separate y-axis for each trace with Plotly and Excel. Follow our step-by-step tutorial to make a three axes graph for free and online with Plotly.
section: Layouts
actioncall: Make a Graph with Three Y Axes
---

#Three Y Axes Graph

<div>
    <a href="https://plot.ly/~Dreamshot/6499/" target="_blank" title="Business Data" style="display: block;
    text-align: center;"><img src="https://plot.ly/~Dreamshot/6499.png" alt="Business Data" style="max-width: 100%;width:
    600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="Dreamshot:6499" src="https://plot.ly/embed.js" async></script>
</div>

### Step 1 - Upload your Excel data to Plotly's grid

Open the data file for this tutorial in Excel. You can download the file here in <a href="https://raw.githubusercontent.com/plotly/datasets/master/cost_output_defective.csv">CSV</a>
format.

![Data](http://i.imgur.com/o0r1tGj.png)

### Step 2 - Head to Plotly

Head to Plotly's Workspace at <a class="link--impt" href="/plot">https://plot.ly/plot</a> and sign into your free
Plotly account. Go to "Import," click "Upload a file," then choose your Excel file to upload. Your Excel file will
now open in Plotly's grid. For more about Plotly's grid, see the tutorial: <a class="link--impt"
href="/add-data-to-the-plotly-grid/">https://plot.ly/add-data-to-the-plotly-grid/</a>

### Step 3 - Creating Your Chart

Label your columns like we did below. You'll have three y-axis columns (cost, output, defective) and one x-axis
column (date). Select “Line plots” from the MAKE A PLOT menu and then click line plot in the
bottom left.

![Plotting](http://i.imgur.com/pX7MAS1.png)

Your plot would initially look something like this.

![Original](http://i.imgur.com/fgyLUku.png)

Head to the TRACES popover and access Col2. Prepare to add the second y-axis. Click "New Axis/Subplot..."

![New Axis](http://i.imgur.com/0wG9oM6.png)

You'll want to apply your new y-axis to the right side of the graph.

![Right](http://i.imgur.com/QcRkOf0.png)

Your graph should now look something like this:

![Progress](http://i.imgur.com/IYQcLUA.png)

Now, we'll peform a similar process for Col3. Instead of applying third y-axis to the right side of the graph,
choose "free left" instead.

![Free left](http://i.imgur.com/q1BRAeF.png)

Your graph should now look something like this:

![Progress](http://i.imgur.com/p19DIG2.png)

A little messy, but not to worry; we'll clean it up!

### Step 4 - Sizing and Styling!

You might notice that the y-axis is busy with grid lines. Open the AXES popover, then Lines in the toolbar to clean
this up. Select the first and second y-axes and turn grid lines "off."

![Grid lines](http://i.imgur.com/4BV5Pfr.png)

Next, ensure that all your y-axes range starts at 0. Open the Axes popover, then Range and adjust it to 0. Do this
for all y-axes.

![Range](http://i.imgur.com/QG1T8hA.png)

Your graph should now look something like this:

![Progress](http://i.imgur.com/Y4f1J7K.png)

You can adjust the coloring of the traces to your liking or roll with Plotly's defaults.

Within the legend on the right side of the graph, you can label your "Col2" trace "Cost," Col3 "Output" and Col4 "Defective."

### Step 5 - Finalizing Your Graph

Your plot should now look something like this. In order to get the graph at the top of the tutorial, you’ll need to style it a little more. You can adjust the "Lines/Markers" within the TRACES popover.

![Lines/Markers](http://i.imgur.com/2REaJST.png)

We’ve titled our chart. We've also colored-coded our y-axis labels to our traces. You can even add "Tick Prefixes" within the AXES popover and "Labels" tab. And we’ve linked to our source data in the x-axis label area.

![Prefixes](http://i.imgur.com/AT9d9AH.png)

![Color-coded](http://i.imgur.com/oCPqGX2.png)

You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the "Share" button. Download an image of your Plotly graph by clicking EXPORT on the toolbar.

![Final](http://i.imgur.com/7B8BqSy.png)

To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version.

![Excel workbook](http://i.imgur.com/NUGmp3l.png)
