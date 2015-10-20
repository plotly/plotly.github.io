---
layout: one_column_layout
title: Make a Bubble Chart with Excel
subtitle: Plotly with Excel
permalink: /excel/bubble-chart
imageurl: /static/images/bubble-chart-with-excel/thum-bubble-chart-with-excel.png
state: inactive
tags: excel
meta_description: A tutorial on how to make a bubble chart with Excel. Plotly is the easiest and fastest way to make and share graphs online.
popularity: featured
actioncall: Make a Bubble Chart
---

# Make a Bubble Chart with Excel

<div>
    <a href="https://plot.ly/~cimar/211/" target="_blank" title="Life Expectancy v. Per Capita GDP, 2007" style="display: block; text-align: center;"><img src="https://plot.ly/~cimar/211.png" alt="Life Expectancy v. Per Capita GDP, 2007" style="max-width: 100%;width: 560px;"  width="560" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="cimar:211" src="https://plot.ly/embed.js" async></script>
</div>

Follow along below to make a bubble chart of your own. If you’re unfamiliar with bubble charts, check out this post:
<a class="link--impt" href="http://blog.plot.ly/post/71637573256/the-power-of-bubble-charts" target="_blank">
http://blog.plot.ly/post/71637573256/the-power-of-bubble-charts
</a>

### Step 1: Upload your Excel data to Plotly's grid

Open the data file for this tutorial in Excel. You can download the file here in
<a class="link--impt" href="https://www.dropbox.com/s/9a4xvg5opx65m4l/Bubble%20Chat%20Data%20copy.xls?raw=1" target="_blank">
xls
</a>
or
<a class="link--impt" href="https://www.dropbox.com/s/wnq5oxzpgzlel5p/Bubble%20Chat%20Data.xlsx?raw=1" target="_blank">
xlsx
</a>
formats.

![Excel view](http://i.imgur.com/5ON7Ypp.png)

### Step 2 - Head to Plotly

Head to Plotly's Workspace at <a class="link--impt" href="/plot">https://plot.ly/plot</a> and sign into your free Plotly account. 
Go to "Import," click "Upload a file," then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. 
For more about Plotly's grid, see the tutorial: <a class="link--impt" href="/add-data-to-the-plotly-grid/">https://plot.ly/add-data-to-the-plotly-grid/</a>

![Import](http://i.imgur.com/eQjmxGp.png)

### Step 3 - Creating Your Chart

Select “Bubble charts” from the MAKE A PLOT menu.

![Chart selection](http://i.imgur.com/gaqMhIV.png)

Click the “Size by” option in the sidebar, and the “Text” option.

![Size by](http://i.imgur.com/dpwuIty.png)

For every set of x and y coordinates you select, select a column of values to set the size of the markers...

![Columns](http://i.imgur.com/MsVfJUW.png)

...and a column of text notations for every marker, (text notations are not required to make a bubble chart.)

![Columns2](http://i.imgur.com/Ic59ASj.png)

Click the blue plot button in the sidebar to create the chart. (For more help with the grid see: <a class="link--impt" href="/add-data-to-the-plotly-grid/">
https://plot.ly/add-data-to-the-plotly-grid/</a>

![Plot](http://i.imgur.com/pibqN26.png)

### Step 4 - Sizing and Log Axis

Your plot should look something like this.  Open the TRACES popover in the toolbar.

![Progress](http://i.imgur.com/i0m9Oer.png)

![Traces](http://i.imgur.com/9hkxMs2.png)

This is what the “Style” tab of the TRACES popover should look like for “All Traces (Bubble)”. We’ve set the “Size” field to scale the bubbles’ diameter, not area.  
And we’ve evened out the pixel-to-value ratio (the higher the value in the box, the smaller the bubbles will be). We’ve also increased the weight of the white bubble outlines.

![Style tab](http://i.imgur.com/wKMZtRX.png)

Now, open the AXES popover in the toolbar. This is what the “Range” tab for the X Axis looks like. We’re opting for a log scale, which will result in a more linear plot.

![Axes](http://i.imgur.com/zpmMa1X.png)

![Axes2](http://i.imgur.com/ijOtC0F.png)
 
### Step 5 - Style and annotate!

Your plot should now look something like this. In order to get the graph at the top of the chart, you’ll need to style it a little more.

![Progress3](http://i.imgur.com/ggQMO8z.png)

This is what the “General” and “Margins” tabs of the LAYOUT popover should look like. We’re giving our plot a grey background, and we’ve changed some of the font options.

![General](http://i.imgur.com/OliO8BP.png)

![Margins](http://i.imgur.com/NM144sF.png)

This is what the “Lines” tab of the AXES popover looks like. We’ve changed the grey grid to white, and increased the line weight.

![Lines](http://i.imgur.com/w43GpG1.png)

This is what the LEGEND popover looks like.  We’ve set its background to grey, too.

![Legend](http://i.imgur.com/glczRJ3.png)

We’ve titled our chart and axes. And we’re using markup to link to our source data using the NOTES popover. Select the “Page” option, and hide the arrow. 
Because our note has nothing to do with specific data points, we’re going to nestle it below the x-axis. Now drag it to the bottom corner of your plot.

![Note](http://i.imgur.com/4CI4Lj7.png)

![Note2](http://i.imgur.com/34heJSi.png)

Once your note looks like you want it to, use the markdown &lt;a&gt; tag to link to the data source.

![Source](http://i.imgur.com/hYht3pb.png)

![Source2](http://i.imgur.com/OolkCsB.png)

You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking EXPORT on the toolbar.

![Export](http://i.imgur.com/tIGzmyp.png)

Your finished chart should look something like this:

![Finished](http://i.imgur.com/ff5feZ5.png)

To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. 
Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version.

![Excel](http://i.imgur.com/DpJJbQP.png)
