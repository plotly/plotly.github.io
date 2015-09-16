---
layout: two_column_layout
title: How to Make a Bar Chart in Excel 
subtitle: Plotly with Excel
permalink: /excel/bar-chart
imageurl: /static/images/bar-chart-with-excel/thum-bar-chart-with-excel.png
state: active
tags: excel
meta_description: A tutorial on how to make an bar chart with Excel. Plotly is the easiest and fastest way to make and share graphs online.
actioncall: Make a Bar Chart
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
<img alt="Initial data" src="/static/images/bar-chart-with-excel/initial-data.png" title=""/>
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
<img alt="Import and upload file" src="/static/images/bar-chart-with-excel/import-upload-file.png" title=""/>
</td>
</tr>
<tr>
<td>
Select “Bar charts” from the
MAKE A PLOT
menu.
</td>
<td>
<img alt="Bar charts in Make a Plot menu" src="/static/images/bar-chart-with-excel/bar-charts-in-make-a-plot-menu.png" title=""/>
</td>
</tr>
<tr>
<td>
Click the blue plot button in the sidebar to create the chart.
</td>
<td>
<img alt="Plot button to make bar chart" src="/static/images/bar-chart-with-excel/bar-chart.png" title=""/>
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
<img alt="Initial data" src="/static/images/bar-chart-with-excel/initial-data-2.png" title=""/>
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
<img alt="Import upload file" src="/static/images/bar-chart-with-excel/import-upload-file.png" title=""/>
</td>
</tr>
<tr>
<td>
Select “Bar charts” from the
MAKE A PLOT
menu.
</td>
<td>
<img alt="Bar charts in Make a Plot menu" src="/static/images/bar-chart-with-excel/bar-charts-in-make-a-plot-menu.png" title=""/>
</td>
</tr>
<tr>
<td>
Select “Group by” from the
OPTIONS
in the sidebar, and select your options column.
</td>
<td>
<img alt="Options Group by" src="/static/images/bar-chart-with-excel/options-group-by.png" title=""/>
<img alt="Choose as G" src="/static/images/bar-chart-with-excel/choose-as-g.png" title=""/>
</td>
</tr>
<tr>
<td>
Click the blue plot button in the sidebar to create the chart.
</td>
<td>
<img alt="Plot button to make bar chart" src="/static/images/bar-chart-with-excel/bar-chart.png" title=""/>
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
<img alt="Giraffes Orangutans Monkeys" src="/static/images/bar-chart-with-excel/giraffes-orangutans-monkeys.png" title=""/>
<img alt="Traces popover" src="/static/images/bar-chart-with-excel/traces-popover.png" title=""/>
</td>
</tr>
<tr>
<td>
Here’s how the “Mode” tab of the
TRACES
popover for “All Traces (Bar)” should look.
</td>
<td>
<img alt="All traces" src="/static/images/bar-chart-with-excel/all-traces.png" title=""/>
<img alt="Chart style horizontal" src="/static/images/bar-chart-with-excel/mode-horizontal.png" title=""/>
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
<img alt="Style mode" src="/static/images/bar-chart-with-excel/style-mode.png" title=""/>
<img alt="Stacked bar chart" src="/static/images/bar-chart-with-excel/stacked-bar-chart.png" title=""/>
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
<img alt="Grouped horizontal bar chart" src="/static/images/bar-chart-with-excel/grouped-horizontal-bar-chart.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the “Style” tab of the
TRACES
popover on “LA Zoo” should look. We’ve altered
every
option in this panel: Opacity, Bar Gap, Group Gap, Fill, and Outline.
</td>
<td>
<img alt="Style tab of Traces popover" src="/static/images/bar-chart-with-excel/style-tab-of-traces-popover.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the “Style” tab of the
TRACES
popover on “SF Zoo” should look.  These are the same as for LA Zoo, but fill and outline are different colors.
</td>
<td>
<img alt="Style tab options" src="/static/images/bar-chart-with-excel/style-options.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the
LAYOUT
popover should look. We’re changing the font throughout the plot.  We’re also giving the plot a grey background, and nudging the margins.
</td>
<td>
<img alt="Layout popover general options" src="/static/images/bar-chart-with-excel/layout-general.png" title=""/>
<img alt="Layout popover margin options" src="/static/images/bar-chart-with-excel/layout-margin-options.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the
AXES
popover should look.  We’re giving the plot thicker white gridlines.
</td>
<td>
<img alt="increase gridline thickness" src="/static/images/bar-chart-with-excel/gridlines-thickness.png" title=""/>
</td>
</tr>
<tr>
<td>
This is how the
LEGEND
popover should look, we’re giving it a grey background, too.
</td>
<td>
<img alt="legend popover background color" src="/static/images/bar-chart-with-excel/legend-background-color.png" title=""/>
</td>
</tr>
<tr>
<td>
You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking
EXPORT
on the toolbar.
</td>
<td>
<img alt="Export button" src="/static/images/bar-chart-with-excel/export-button.png" title=""/>
<img alt="Download and export" src="/static/images/bar-chart-with-excel/download-export.png" title=""/>
</td>
</tr>
<tr>
<td>
Your finished chart should look something like this.
</td>
<td>
<img alt="Finished bar chart" src="/static/images/bar-chart-with-excel/finished-bar-chart.png" title=""/>
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
<img alt="Chart in excel" src="/static/images/bar-chart-with-excel/chart-in-excel.png" title=""/>
</td>
</tr>
</tbody>
</table>
