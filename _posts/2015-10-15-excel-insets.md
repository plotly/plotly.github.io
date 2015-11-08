---
layout: one_column_layout
title: Make a Chart with an Inset Plot in Excel
subtitle: A Step by Step Guide to Making a Graph with an Inset Plot in Excel
permalink: /excel/insets
imageurl: /static/images/subplots/thum-subplots.png 
state: active
tags: basic
meta_description: Create a chart with an inset with Plotly and Excel. Follow our step-by-step tutorial to make a graph with an inset for free and online with Plotly.
section: Layouts
actioncall: Make a Graph with an Inset Plot
---

#A Chart With an Inset Plot

<div>
    <a href="https://plot.ly/~Dreamshot/404/" target="_blank" title="Photon Density vs. Photon Energy" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/404.png" alt="Photon Density vs. Photon Energy" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="Dreamshot:404" src="https://plot.ly/embed.js" async></script>
</div>

Follow along below to make a chart with multiple y axes of your own.

### Step 1 - Upload your Excel data to Plotly's grid

Open the data file for this tutorial in Excel. You can download the file here in <a href="https://raw.githubusercontent.com/plotly/datasets/master/inset.csv">CSV</a> format.

[Data](http://i.imgur.com/uPPOAi9.png)

### Step 2 - Head to Plotly

Head to Plotly's Workspace at <a class="link--impt" href="/plot">https://plot.ly/plot</a> and sign into your free Plotly account. Go to "Import," click "Upload a file," then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see the tutorial: <a class="link--impt" 
href="/add-data-to-the-plotly-grid/">https://plot.ly/add-data-to-the-plotly-grid/</a>

### Step 3 - Creating Your Chart

Label your columns like we did below. You'll have three different x-y datasets (margin of error, photon density/energy, electron energy/density). Select “Line plots” from the MAKE A PLOT menu and then click line plot in the bottom left.

![Plotting](http://i.imgur.com/9uXEXvF.png)

Your plot would initially look something like this.

![Original](http://i.imgur.com/xN3BN3m.png)

Head to the TRACES popover and access Col5 from the dropdown menu. From "Axes" you'll want to click New Axis/Subplot bar. From New Axis/Subplot you'll want to click "Inset" under New Subplot.

![Create Inset](http://i.imgur.com/j06ec0P.png)

Your plot would then look something like this.

![Plotting2](http://i.imgur.com/YGU1F41.png)

Take a moment to resize your plot to something less wide. A width of 800 and a height of 600 seems reasonable. 
Head to the layout menu to do this.

![Resize](http://i.imgur.com/gkbenLD.png)

Now, head to the TRACES popover again and access Col1 from the dropdown menu. For these data points, you'll want to remove the line from the marker. This will get you a plot closer to our version. 

![Data Points](http://i.imgur.com/iCNNizP.png)

Then, within the same popover and column, head to the error bar menu. Show both the x and y error bars. You'll
immediately notice the change on your graph. 

![Error Bars](http://i.imgur.com/qgrCXqV.png)

You can play with the "Value" option within the error bar menu to get the bars to a length of your liking.

### Step 4 - Sizing and Styling!

Adding titles to the x and y axis of your original plot and inset plot are important, as is an overall title for 
your plot. After titling your plot, it should look something like this.

![Titles](http://i.imgur.com/TYdhLJD.png)

Head to the LEGEND popover. From there, you can hide your legend; it isn't really an important part of this graph.

![Legend](http://i.imgur.com/2kdhgyE.png)

You might notice that the grid lines on the inset plot clash with the grid lines of your original plot. Head to the AXES popover, then select X Axis 2 (Y Axis 2) from the drop down menu. Head to "lines" and turn the grid lines off.

![Grid Lines off X](http://i.imgur.com/zZ6Kozq.png)

![Grid Lines off Y](http://i.imgur.com/5hcDKAF.png)

In order to get a distinguished inset "boxed-in" look, you can turn the Axis line and Mirror on in the case of
X Axis 2 (Y Axis 2) and also turn the Zero line off in both cases.

![Axis Line/Mirror X](http://i.imgur.com/SPOEO1T.png)

![Axis Line/Mirror Y](http://i.imgur.com/ioJwK42.png)

### Step 5 - Finalizing Your Graph

Your plot should now look something like this. In order to get the graph at the top of the tutorial, you’ll need to style it a little more.

![Final](http://i.imgur.com/xH25cQC.png)

We used a note to link to our source data.

You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the "Share" button. Download an image of your Plotly graph by clicking EXPORT on the toolbar. To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version.

![Excel workbook](http://i.imgur.com/x6jTJ47.png)
