---
layout: two_column_layout
title: How to Make a Bar Chart in Excel 
subtitle: Plotly with Excel
permalink: how-to-make-a-bar-chart-with-excel/
imageurl: 
state: inactive
tags: excel
---

#How to Make a Bar Chart in Excel

<div>
<a href="https://plot.ly/~cimar/197/" target="_blank" title="LA Zoo vs SF Zoo" style="display: block; text-align: center;"><img src="https://plot.ly/~cimar/197.png" alt="LA Zoo vs SF Zoo" style="max-width: 100%;width: 1619px;"  width="1619" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
<script data-plotly="cimar:197" src="https://plot.ly/embed.js" async></script>
</div>

If you’re trying to make a bar chart like the one above, which compares two different sets of numbers in the same categories, you have options getting started.


###Step 1A: Upload your Excel data to Plotly's Grid (two traces)

The first option is to arrange these two data sets into two different columns.

<table>
<tbody>
<tr>
<td>
Open the data file for this tutorial in Excel. You can download the file here in
<a class="link--impt" href="https://www.dropbox.com/s/2w5lqb8ksyo2it6/Bar%20Chart%20%28two%20traces%29%20Data%20copy.xls?raw=1" target="_blank">
xls
</a>
or
<a class="link--impt" href="https://www.dropbox.com/s/xvwasw9g70ujf3q/Bar%20Chart%20%28two%20traces%29%20Data.xlsx?raw=1" target="_blank">
xlsx
</a>
formats.
</td>
<td>
<img alt="How to make a bar chart with excel 26" src="/static/images/bar-chart-with-excel/image26.png" title=""/>
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
https://plot.ly/add-data-to-the-plotly-grid/
</a>

</td>
<td>
<img alt="How to make a bar chart with excel 24" src="/static/images/bar-chart-with-excel/image24.png" title=""/>
</td>
</tr>
<tr>
<td>
Select “Bar plot” from the
MAKE A PLOT
menu.
</td>
<td>
<img alt="How to make a bar chart with excel 02" src="/static/images/bar-chart-with-excel/image02.png" title=""/>
</td>
</tr>
<tr>
<td>
Click the blue plot button in the sidebar to create the chart.
</td>
<td>
<img alt="How to make a bar chart with excel 11" src="/static/images/bar-chart-with-excel/image11.png" title=""/>
</td>
</tr>
</tbody>
</table>

###Step 1B: Upload your Excel data to Plotly's Grid ("group by")

Your second option is to have a column of variables identifying which dataset each row belongs to, and then “grouping by” this column.

<table>
<tbody>
<tr>
<td>
Open the data file for the "group by" grid in Excel. You can download the file here in
<a class="link--impt" href="https://www.dropbox.com/s/23el2xwsb597x3r/Bar%20Chart%20%28_group%20by_%29%20Data%20copy.xls?raw=1" target="_blank">
xls
</a>
or
<a class="link--impt" href="https://www.dropbox.com/s/bf87qkdv6k79z1t/Bar%20Chart%20%28_group%20by_%29%20Data.xlsx?raw=1" target="_blank">
xlsx
</a>
formats
</td>
<td>
<img alt="How to make a bar chart with excel 27" src="/static/images/bar-chart-with-excel/image27.png" title=""/>
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
https://plot.ly/add-data-to-the-plotly-grid/
</a>
</td>
<td>
<img alt="How to make a bar chart with excel 24" src="/static/images/bar-chart-with-excel/image24.png" title=""/>
</td>
</tr>
<tr>
<td>
Select “Bar plot” from the
MAKE A PLOT
menu.
</td>
<td>
<img alt="How to make a bar chart with excel 19" src="/static/images/bar-chart-with-excel/image19.png" title=""/>
</td>
</tr>
<tr>
<td>
Select “Group by” from the
OPTIONS
in the sidebar, and select your options column.
</td>
<td>
<img alt="How to make a bar chart with excel 12" src="/static/images/bar-chart-with-excel/image12.png" title=""/>
<img alt="How to make a bar chart with excel 06" src="/static/images/bar-chart-with-excel/image06.png" title=""/>
</td>
</tr>
<tr>
<td>
Click the blue plot button in the sidebar to create the chart.
</td>
<td>
<img alt="How to make a bar chart with excel 11" src="/static/images/bar-chart-with-excel/image11.png" title=""/>
</td>
</tr>
</tbody>
</table>

###Step 2: Setting the Traces

<table>
<tbody>
<tr>
<td>
Your plot should look something like this.  The first step to styling it into the horizontal bar graph above is to open the
TRACES
popover in the toolbar.
</td>
<td>
<img alt="How to make a bar chart with excel 20" src="/static/images/bar-chart-with-excel/image20.png" title=""/>
<img alt="How to make a bar chart with excel 14" src="/static/images/bar-chart-with-excel/image14.png" title=""/>
</td>
</tr>
<tr>
<td>
Here’s how the “Mode” tab of the
TRACES
popover for “All Traces (Bar)” should look.
</td>
<td>
<img alt="How to make a bar chart with excel 01" src="/static/images/bar-chart-with-excel/image01.png" title=""/>
<img alt="How to make a bar chart with excel 08" src="/static/images/bar-chart-with-excel/image08.png" title=""/>
</td>
</tr>
<tr>
<td>
(Alternative: if you want to
stack
or
overlay
your bars, instead of grouping them, just change the “Mode” setting.)
</td>
<td>
<img alt="How to make a bar chart with excel 04" src="/static/images/bar-chart-with-excel/image04.png" title=""/>
<img alt="How to make a bar chart with excel 23" src="/static/images/bar-chart-with-excel/image23.png" title=""/>
</td>
</tr>
</tbody>
</table>

##Step 3: Style it!

<table>
<tbody>
<tr>
<td>
Now your plot should look something like this: a grouped horizontal bar chart. We still have some styling to do to get the plot at the top of this tutorial! Open
TRACES
again.
</td>
<td>
<img alt="How to make a bar chart with excel 00" src="/static/images/bar-chart-with-excel/image00.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the “Style” tab of the
TRACES
popover on “LA Zoo” should look. We’ve altered
every
option in this panel: Opacity, Bar Gap, Group Gap, Fill, and Border.
</td>
<td>
<img alt="How to make a bar chart with excel 17" src="/static/images/bar-chart-with-excel/image17.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the “Style” tab of the
TRACES
popover on “SF Zoo” should look.  These are the same as for LA Zoo, but fill and border are different colors.
</td>
<td>
<img alt="How to make a bar chart with excel 03" src="/static/images/bar-chart-with-excel/image03.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the
LAYOUT
popover should look. We’re changing the font throughout the plot.  We’re also giving the plot a grey background, and nudging the margins.
</td>
<td>
<img alt="How to make a bar chart with excel 07" src="/static/images/bar-chart-with-excel/image07.png" title=""/>
<img alt="How to make a bar chart with excel 13" src="/static/images/bar-chart-with-excel/image13.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the
AXES
popover should look.  We’re giving the plot thicker white gridlines.
</td>
<td>
<img alt="How to make a bar chart with excel 09" src="/static/images/bar-chart-with-excel/image09.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the
LEGEND
popover should look, we’re giving it a grey background, too.
</td>
<td>
<img alt="How to make a bar chart with excel 18" src="/static/images/bar-chart-with-excel/image18.png" title=""/>
</td>
</tr>
<tr>
<td>
You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking
DOWNLOAD
on the toolbar.
</td>
<td>
<img alt="How to make a bar chart with excel 28" src="/static/images/bar-chart-with-excel/image28.png" title=""/>
<img alt="How to make a bar chart with excel 25" src="/static/images/bar-chart-with-excel/image25.png" title=""/>
</td>
</tr>
<tr>
<td>
Your finished chart should look something like this.
</td>
<td>
<img alt="How to make a bar chart with excel 22" src="/static/images/bar-chart-with-excel/image22.png" title=""/>
</td>
</tr>
<tr>
<td>
To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the
INSERT
tab inside Excel, in the
ILLUSTRATIONS
group, click
PICTURE
Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version.
</td>
<td>
<img alt="How to make a bar chart with excel 29" src="/static/images/bar-chart-with-excel/image29.png" title=""/>
</td>
</tr>
</tbody>
</table>
