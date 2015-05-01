---
layout: two_column_layout
title: How to Make a Heatmap with Excel
subtitle: Plotly with Excel
permalink: /how-to-make-a-heatmap-with-excel
imageurl: 
state: inactive
tags: excel
---

<div>
    <a href="https://plot.ly/~cimar/200/" target="_blank" title="OKCupid Compatibility by Religion&lt;br&gt;Source: &lt;a href=&quot;http://blog.okcupid.com/index.php/how-races-and-religions-match-in-online-dating/&quot;&gt;OKTrends, 2009&lt;/a&gt;" style="display: block; text-align: center;"><img src="https://plot.ly/~cimar/200.png" alt="OKCupid Compatibility by Religion&lt;br&gt;Source: &lt;a href=&quot;http://blog.okcupid.com/index.php/how-races-and-religions-match-in-online-dating/&quot;&gt;OKTrends, 2009&lt;/a&gt;" style="max-width: 100%;width: 1619px;"  width="1619" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="cimar:200" src="https://plot.ly/embed.js" async></script>
</div>

Follow along below to make a heatmap in Plotly.

###Step 1: Upload your Excel data to Plotly's grid

<table>
<tbody>
<tr>
 <td>
   Open the data file for this tutorial in Excel. You can download the file here in
   <a class="link--impt" href="https://www.dropbox.com/s/wpyegg34jybgnok/Heat%20Map%20Data.xls?raw=1" target="_blank">
	xls
   </a>
   or
   <a class="link--impt" href="https://www.dropbox.com/s/nf6xhyswqdeu7j9/Heat%20Map%20Data.xlsx?raw=1" target="_blank">
	xlsx
   </a>
   formats.
   The rows and columns of the grid will correspond to the rows and columns of the heat map.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 21" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image21.png" title=""/>
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
	<img alt="How to make a heatmap with excel 19" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image19.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Select “Heat map” from the
   MAKE A PLOT
   menu.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 06" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image06.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Select the “Column names” button from the
   X-AXIS
   options in the sidebar and click “Select all columns” button.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 10" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image10.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Deselect any columns you don’t want to plot, and your row names column if you have one. This will be your “y” value.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 02" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image02.png" title=""/>
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
	<img alt="How to make a heatmap with excel 07" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image07.png" title=""/>
 </td>
</tr>
</tbody>
</table>

### Step 2: Traces

<table>
<tbody>
<tr>
 <td>
   Your plot should look something like this.  The first step to styling it into the heatmap above is to open the
   TRACES
   popover in the toolbar.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 00" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image00.png" title=""/>
	<img alt="How to make a heatmap with excel 12" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image12.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   This is what the “Style” tab of the
   TRACES
   popover should look like. We’ve selected one of the default gradients,
   red-yellow-blue.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 14" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image14.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   For this particular data, we also want to center our gradient so that yellow correlates to a value of 60.2, and everything above or below is a little red or green. The easiest way to do this is by nudging the “Z range” values in the “Range/bins” tab to converge on our desired midpoint  -- we compressed our range, but you can also stretch it if you prefer the effect.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 03" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image03.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   (Alternative: if you want to make a
   contour plot
   , just change the “Type” setting in the “Mode” tab.)
 </td>
 <td>
	<img alt="How to make a heatmap with excel 13" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image13.png" title=""/>
	<img alt="How to make a heatmap with excel 01" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image01.png" title=""/>
 </td>
</tr>
</tbody>
</table>

###Step 3: Style and annotate!

<table>
<tbody>
<tr>
 <td>
   Your plot should look something like this.  There’s a little more styling you need to do to get the graph at the top of the chart.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 16" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image16.png" title=""/>
	<img alt="How to make a heatmap with excel 12" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image12.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Here’s how the
   LAYOUT
   popover should look. We’ve nudged the margins to accommodate the y-axis labels, and we’re giving our chart a grey background.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 11" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image11.png" title=""/>
	<img alt="How to make a heatmap with excel 04" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image04.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   We’ve titled our chart, and used markup to format our text and source our data.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 09" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image09.png" title=""/>
   OKCupid Compatibility by Religion&lt;br&gt;Source: &lt;a href=”
   <a class="link--impt" href="http://blog.okcupid.com/index.php/how-races-and-religions-match-in-online-dating" target="_blank">
	http://blog.okcupid.com/index.php/how-races-and-religions-match-in-online-dating
   </a>
   ”&gt;OKTrends, 2009&lt;/a&gt;
 </td>
</tr>
<tr>
 <td>
   You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking
   DOWNLOAD
   on the toolbar.
 </td>
 <td>
	<img alt="How to make a heatmap with excel 22" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image22.png" title=""/>
	<img alt="How to make a heatmap with excel 20" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image20.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Your finished chart should look something like this:
 </td>
 <td>
	<img alt="How to make a heatmap with excel 15" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image15.png" title=""/>
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
	<img alt="How to make a heatmap with excel 23" src="/static/learn/images/excel_tutorials/how-to-make-a-heatmap-with-excel/image23.png" title=""/>
 </td>
</tr>
</tbody>
</table>
