---
layout: two_column_layout
title: How to Make a Graph with Error Bars with Excel 
subtitle: Plotly with Excel
permalink: /excel/graph-with-error-bars
imageurl: /static/images/graph-with-error-bars-with-excel/thum-graph-with-error-bars-with-excel.png
state: active
tags: excel
meta_description: A tutorial on how to make a graph with error bars with Excel. Plotly is the easiest and fastest way to make and share graphs online.
popularity: featured
actioncall: Make a Graph with Error Bars
carouselimageurl: /static/images/graph-with-error-bars-with-excel/thum-graph-with-error-bars-with-excel.png
---

#How to Make a Graph with Error Bars with Excel 

<div>
	<a href="https://plot.ly/~cimar/208/" target="_blank" title="Mean" style="display: block; text-align: center;"><img src="https://plot.ly/~cimar/208.png" alt="Mean" style="max-width: 100%;width: 1218px;"  width="1218" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
	<script data-plotly="cimar:208" src="https://plot.ly/embed.js" async></script>
</div>

###Step 1: Upload your Excel data to Plotly's grid

<table>
<tbody>
<tr>
 <td>
   Open the data file for this tutorial in Excel. You can download the file here in
   <a class="link--impt" href="https://www.dropbox.com/s/yv3k05g5yl0rc47/Data.xls?raw=1" target="_blank">
	xls
   </a>
   or
   <a class="link--impt" href="https://www.dropbox.com/s/zwebbbjsegp1fqs/Data.xlsx?raw=1" target="_blank">
	xlsx
   </a>
   formats.
 </td>
 <td>
   <a data-lightbox="image24" href="/static/images/graph-with-error-bars-with-excel/image24.png">
	<img alt="How to make a graph with error bars with excel 24" src="/static/images/graph-with-error-bars-with-excel/image24.png" title=""/>
   </a>
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
	<img alt="How to make a graph with error bars with excel 25" src="/static/images/graph-with-error-bars-with-excel/image25.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Select “Scatter plot” from the
   MAKE A PLOT
   menu. You can also add error bars to line plots and bar charts.
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 16" src="/static/images/graph-with-error-bars-with-excel/image16.png" title=""/>
   <tr>
	<td>
	  Click the “Error bars” option in the sidebar.
	</td>
	<td>
	   <img alt="How to make a graph with error bars with excel 15" src="/static/images/graph-with-error-bars-with-excel/image15.png" title=""/>
	</td>
   </tr>
   <tr>
	<td>
	  Select the column of error values that correspond to your y-values.
	</td>
	<td>
	   <img alt="How to make a graph with error bars with excel 20" src="/static/images/graph-with-error-bars-with-excel/image20.png" title=""/>
	</td>
   </tr>
   <tr>
	<td>
	  (Alternatives: you can also select error values to correspond to your x-values or...
	</td>
	<td>
	   <img alt="How to make a graph with error bars with excel 13" src="/static/images/graph-with-error-bars-with-excel/image13.png" title=""/>
	</td>
   </tr>
   <tr>
	<td>
	  ...by selecting  the“Asymmetric errors” option instead, you can set two different sets of error values for each coordinate. “Ey-” sets the length of the bar extending beneath each point, and “Ey” sets the length of the bar extending out from above it.)
	</td>
	<td>
	   <img alt="How to make a graph with error bars with excel 23" src="/static/images/graph-with-error-bars-with-excel/image23.png" title=""/>
	   <img alt="How to make a graph with error bars with excel 07" src="/static/images/graph-with-error-bars-with-excel/image07.png" title=""/>
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
	   <img alt="How to make a graph with error bars with excel 18" src="/static/images/graph-with-error-bars-with-excel/image18.png" title=""/>
	</td>
   </tr>
 </td>
</tr>
</tbody>
</table>

###Step 2: Edit the error bars

<table>
<tbody>
<tr>
 <td>
   Your plot should look something like this. Open the
   TRACES
   popover in the toolbar.
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 00" src="/static/images/graph-with-error-bars-with-excel/image00.png" title=""/>
	<img alt="How to make a graph with error bars with excel 12" src="/static/images/graph-with-error-bars-with-excel/image12.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   This is what the “Error bars” tab of the
   TRACES
   popover should look like. We changed the weight of the bars, and made their feet a little wider.
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 11" src="/static/images/graph-with-error-bars-with-excel/image11.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   (Alternative: you can add new error bars to a line plot, scatter plot, or bar chart from the
   TRACES
   popover.
   For example, you can add red error bars to the x-coordinates of every point, and set their length to 4% of the x-coordinate’s value.)
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 05" src="/static/images/graph-with-error-bars-with-excel/image05.png" title=""/>
	<img alt="How to make a graph with error bars with excel 21" src="/static/images/graph-with-error-bars-with-excel/image21.png" title=""/>
 </td>
</tr>
</tbody>
</table>

###Step 3: Style and annotate!

<table>
<tbody>
<tr>
 <td>
   Your plot should look something like this. In order to get the graph at the top of the chart, you’ll need to style it.
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 14" src="/static/images/graph-with-error-bars-with-excel/image14.png" title=""/>
	<img alt="How to make a graph with error bars with excel 12" src="/static/images/graph-with-error-bars-with-excel/image12.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   This is what the “Mode” and “Style” tabs of the
   TRACES
   popover should look like for “Mean”.
   For more information on styling line and scatter charts, check out:
   <a class="link--impt" href="/how-to-make-a-line-graph-and-scatter-plot/">
	https://plot.ly/how-to-make-a-line-graph-and-scatter-plot/
   </a>
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 17" src="/static/images/graph-with-error-bars-with-excel/image17.png" title=""/>
	<img alt="How to make a graph with error bars with excel 08" src="/static/images/graph-with-error-bars-with-excel/image08.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Here’s how the
   LAYOUT
   popover should look. We’ve nudged the top margin, and we’re giving our chart a grey background. We’ve also changed the font.
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 02" src="/static/images/graph-with-error-bars-with-excel/image02.png" title=""/>
	<img alt="How to make a graph with error bars with excel 03" src="/static/images/graph-with-error-bars-with-excel/image03.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   This is what the “Lines” tab of the
   AXES
   popover looks like for “All Axes”. We’ve made the grid lines white.
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 22" src="/static/images/graph-with-error-bars-with-excel/image22.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   We’re hiding the legend in the
   LEGEND
   popover.
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 06" src="/static/images/graph-with-error-bars-with-excel/image06.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking
   DOWNLOAD
   on the toolbar.
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 27" src="/static/images/graph-with-error-bars-with-excel/image27.png" title=""/>
	<img alt="How to make a graph with error bars with excel 26" src="/static/images/graph-with-error-bars-with-excel/image26.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Your finished chart should look something like this:
 </td>
 <td>
	<img alt="How to make a graph with error bars with excel 01" src="/static/images/graph-with-error-bars-with-excel/image01.png" title=""/>
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
	<img alt="How to make a graph with error bars with excel 28" src="/static/images/graph-with-error-bars-with-excel/image28.png" title=""/>
 </td>
</tr>
</tbody>
</table>
