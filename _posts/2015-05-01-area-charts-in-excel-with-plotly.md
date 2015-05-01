---
layout: two_column_layout
title: Make an Area Chart in Excel
subtitle: Plotly with Excel
permalink: how-to-make-an-area-chart-with-excel/
imageurl: 
state: inactive
tags: excel
---

##How to make an area chart in Excel 

<div>
    <a href="https://plot.ly/~Dreamshot/564/" target="_blank" title="&lt;br&gt;NYC vs. LA: Population 1900-2010" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/564.png" alt="&lt;br&gt;NYC vs. LA: Population 1900-2010" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="Dreamshot:564" src="https://plot.ly/embed.js" async></script>
</div>

Area plots are the same as scatter and line plots, but with different trace options selected to fill the area under the curve. Follow along below to make an area plot in Plotly.

###Step 1: Upload your Excel data to Plotly's grid

<table>
<tbody>
<tr>
<td>
Open the data file for this tutorial in Excel. You can download the file here in
<a class="link--impt" href="https://www.dropbox.com/s/htpcd8vpljhfxlt/Area%20Chart%20Data%20copy.xls?raw=1" target="_blank">
xls
</a>
or
<a class="link--impt" href="https://www.dropbox.com/s/9kvlgzcteb0bull/Area%20Chart%20Data.xlsx?dl=0?raw=1" target="_blank">
xlsx
</a>
formats
</td>
<td>
<img alt="How to make an area chart with excel 17" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image17.png" title=""/>
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
<img alt="How to make an area chart with excel 12" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image12.png" title=""/>
</td>
</tr>
</tbody>
</table>

###Step 2: Adding fill under traces

To make an area plot from a line plot, edit the “Fill To” attribute in the Mode tab of the TRACES popover.

<table>
<tbody>
<tr>
<td>
Here’s how the
TRACES
popover for “trace 0” looks. Notice “Fill To” has been set to “Y=0”.
</td>
<td>
<img alt="How to make an area chart with excel 09" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image09.png" title=""/>
</td>
</tr>
<tr>
<td>
Here’s how the
TRACES
popover for “trace 1” looks. Notice “Fill To” has been set to “Next Y”.
</td>
<td>
<img alt="How to make an area chart with excel 04" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image04.png" title=""/>
</td>
</tr>
</tbody>
</table>

###Step 3: Optional styling to make your plot prettier

Nice! Now you have your area plot. If you want, you can change the colors and apply smoothing to the lines to get a chart that looks like one at the top of the tutorial.

<table>
<tbody>
<tr>
<td>
Here’s how your area chart looks before styling.
</td>
<td>
<img alt="How to make an area chart with excel 00" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image00.png" title=""/>
</td>
</tr>
<tr>
<td>
Here’s how the TRACES popover looks with smoothing and the change of colors. The smoothing button is highlighted in red.
</td>
<td>
<img alt="How to make an area chart with excel 06" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image06.png" title=""/>
<img alt="How to make an area chart with excel 02" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image02.png" title=""/>
</td>
</tr>
<tr>
<td>
Here’s how the
AXES
popover looks with the axes lines thickened and made white.
</td>
<td>
<img alt="How to make an area chart with excel 07" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image07.png" title=""/>
</td>
</tr>
<tr>
<td>
Here’s how the
LAYOUT
popover looks with the plot and margin background color changed to grey.
</td>
<td>
<img alt="How to make an area chart with excel 03" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image03.png" title=""/>
</td>
</tr>
<tr>
<td>
You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking
DOWNLOAD
on the toolbar.
</td>
<td>
<img alt="How to make an area chart with excel 14" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image14.png" title=""/>
<img alt="How to make an area chart with excel 13" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image13.png" title=""/>
</td>
</tr>
<tr>
<td>
Your finished chart should look something like this.
</td>
<td>
<img alt="How to make an area chart with excel 01" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image01.png" title=""/>
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
<img alt="How to make an area chart with excel 18" src="/static/learn/images/excel_tutorials/how-to-make-an-area-chart-with-excel/image18.png" title=""/>
</td>
</tr>
</tbody>
</table>
