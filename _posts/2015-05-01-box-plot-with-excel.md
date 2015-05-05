---
layout: two_column_layout
title: How to Make a Box Plot with Excel 
subtitle: Plotly with Excel
permalink: /how-to-make-a-box-plot-with-excel
imageurl: 
state: active
tags: excel
---

# How to Make a Box Plot with Excel 

<div>
    <a href="https://plot.ly/~cimar/203/" target="_blank" title="Points Scored per NBA Game&lt;br&gt;data taken from &lt;i&gt;&lt;a href=&quot;https://plot.ly/jackp/969&quot;&gt;Points Scored by the Top 50 Scoring NBA Players in 2012&lt;/a&gt;&lt;/i&gt;" style="display: block; text-align: center;"><img src="https://plot.ly/~cimar/203.png" alt="Points Scored per NBA Game&lt;br&gt;data taken from &lt;i&gt;&lt;a href=&quot;https://plot.ly/jackp/969&quot;&gt;Points Scored by the Top 50 Scoring NBA Players in 2012&lt;/a&gt;&lt;/i&gt;" style="max-width: 100%;width: 1218px;"  width="1218" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="cimar:203" src="https://plot.ly/embed.js" async></script>
</div>

If you think you want to know more about what box plots are, read this data literacy article by Ben Chartoff:
<a class="link--impt" href="/boxplot">
http://plot.ly/boxplot
</a>
. Follow along below to make a boxplot of your own.

###Step 1: Upload your Excel data to Plotly's grid

<table>
<tbody>
<tr>
<td>
Open the data file for this tutorial in Excel. You can download the file here in
<a class="link--impt" href="https://www.dropbox.com/s/hcxbel2h3e7f9sw/Boxplot%20Data%20copy.xls?raw=1" target="_blank">
xls
</a>
or
<a class="link--impt" href="https://www.dropbox.com/s/ddyszgs5ifnfp2i/Boxplot%20Data.xlsx?raw=1" target="_blank">
xlsx
</a>
formats.
</td>
<td>
<img alt="How to make a box plot with excel 22" src="/static/images/box-plot-with-excel/image22.png" title=""/>
</td>
</tr>
<tr>
<td>
Head to Plotly's Workspace at
<a class="link--impt" href="/plot">
https://plot.ly/plot
</a>
and sign into your free Plotly account. Go to "Import," click "Upload a file," then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see the tutorial:
<a class="link--impt" href="/add-data-to-the-plotly-grid/">
How to plot from the Grid
</a>
</td>
<td>
<img alt="How to make a box plot with excel 20" src="/static/images/box-plot-with-excel/image20.png" title=""/>
</td>
</tr>
<tr>
<td>
Select “Box plots” from the
MAKE A PLOT
menu.
</td>
<td>
<img alt="How to make a box plot with excel 18" src="/static/images/box-plot-with-excel/image18.png" title=""/>
</td>
</tr>
<tr>
<td>
Click the blue plot button in the sidebar to create the chart.  (For more help with the grid see:
<a class="link--impt" href="/add-data-to-the-plotly-grid/">
https://plot.ly/add-data-to-the-plotly-grid/
</a>
)
</td>
<td>
<img alt="How to make a box plot with excel 09" src="/static/images/box-plot-with-excel/image09.png" title=""/>
</td>
</tr>
</tbody>
</table>

###Step 2: Traces

<table>
<tbody>
<tr>
<td>
Your plot should look something like this.  Open the
TRACES
popover in the toolbar.
</td>
<td>
<img alt="How to make a box plot with excel 12" src="/static/images/box-plot-with-excel/image12.png" title=""/>
<img alt="How to make a box plot with excel 13" src="/static/images/box-plot-with-excel/image13.png" title=""/>
</td>
</tr>
<tr>
<td>
This is what the “Mode” tab of the
TRACES
popover should look like for “All Traces (Box)”. We’ve elected to show all points alongside our boxes, not just the outliers.
</td>
<td>
<img alt="How to make a box plot with excel 02" src="/static/images/box-plot-with-excel/image02.png" title=""/>
</td>
</tr>
</tbody>
</table>

###Step 3: Style and annotate!

<table>
<tbody>
<tr>
<td>
Your plot should look something like this. In order to get the graph at the top of the chart, you’ll need to style it more.
</td>
<td>
<img alt="How to make a box plot with excel 05" src="/static/images/box-plot-with-excel/image05.png" title=""/>
<img alt="How to make a box plot with excel 13" src="/static/images/box-plot-with-excel/image13.png" title=""/>
</td>
</tr>
<tr>
<td>
This is what the “Style” tab of the
TRACES
popover should look like for “All Traces (Box)”.

We’ve narrowed our boxes, spread them out more, and stroked them with a thinner weight. We’ve also made the accompanying points smaller and more spread-out.

</td>
<td>
<img alt="How to make a box plot with excel 10" src="/static/images/box-plot-with-excel/image10.png" title=""/>
</td>
</tr>
<tr>
<td>
We’ve also changed the fill color of each trace in the “Mode” tab of the
TRACES
popover. This is what the tab looks like for “Carmelo Anthony”.
</td>
<td>
<img alt="How to make a box plot with excel 16" src="/static/images/box-plot-with-excel/image16.png" title=""/>
</td>
</tr>
<tr>
<td>
(Alternative: We didn’t, but you can also change the color of the box plot strokes, in the “Style” tab of the
TRACES
popover.)

</td>
<td>
<img alt="How to make a box plot with excel 19" src="/static/images/box-plot-with-excel/image19.png" title=""/>
</td>
</tr>
<tr>
<td>
Here’s how the
LAYOUT
popover should look. We’ve nudged the top margin, and we’re giving our chart a grey background. We’ve also changed the font.
</td>
<td>
<img alt="How to make a box plot with excel 04" src="/static/images/box-plot-with-excel/image04.png" title=""/>
<img alt="How to make a box plot with excel 06" src="/static/images/box-plot-with-excel/image06.png" title=""/>
</td>
</tr>
<tr>
<td>
This is what the “Lines” tab of the
AXES
popover looks like for “All Axes”. We’ve made the grid lines white, and the x-axis a little heavier.
</td>
<td>
<img alt="How to make a box plot with excel 14" src="/static/images/box-plot-with-excel/image14.png" title=""/>
</td>
</tr>
<tr>
<td>
This is what the “Labels” tab of the
AXES
popover looks like for “X Axis”. We’ve rotated the labels.
</td>
<td>
<img alt="How to make a box plot with excel 00" src="/static/images/box-plot-with-excel/image00.png" title=""/>
</td>
</tr>
<tr>
<td>
We’re hiding the legend in the
LEGEND
popover.
</td>
<td>
<img alt="How to make a box plot with excel 08" src="/static/images/box-plot-with-excel/image08.png" title=""/>
</td>
</tr>
<tr>
<td>
We’ve titled our chart, and used markup to format our text and source our data, which in this case is another plotly graph.
</td>
<td>
<img alt="How to make a box plot with excel 07" src="/static/images/box-plot-with-excel/image07.png" title=""/>
Points Scored per NBA Game&lt;br&gt;data taken from &lt;i&gt;&lt;a href="https://plot.ly/jackp/969"&gt;Points Scored by the Top 50 Scoring NBA Players in 2012&lt;/a&gt;&lt;/i&gt;
</td>
</tr>
<tr>
<td>
You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking
DOWNLOAD
on the toolbar.
</td>
<td>
<img alt="How to make a box plot with excel 23" src="/static/images/box-plot-with-excel/image23.png" title=""/>
<img alt="How to make a box plot with excel 21" src="/static/images/box-plot-with-excel/image21.png" title=""/>
</td>
</tr>
<tr>
<td>
Your finished chart should look something like this:
</td>
<td>
<img alt="How to make a box plot with excel 17" src="/static/images/box-plot-with-excel/image17.png" title=""/>
</td>
</tr>
<tr>
<td>
To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the
INSERT
tab inside Excel, in the
ILLUSTRATIONS
group, click
PICTURE.
Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version.
</td>
<td>
<img alt="How to make a box plot with excel 24" src="/static/images/box-plot-with-excel/image24.png" title=""/>
</td>
</tr>
</tbody>
</table>
