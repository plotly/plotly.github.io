---
layout: two_column_layout
title: Make a Histogram with Excel 
subtitle: Plotly with Excel
permalink: /excel/histogram
imageurl: /static/images/histogram-with-excel/thum-histogram-with-excel.png
state: active
tags: excel
meta_description: A tutorial on how to make a histogram with Excel. Plotly is the easiest and fastest way to make and share graphs online.
---

# Make a Histogram with Excel 

<div>
    <a href="https://plot.ly/~cimar/214/" target="_blank" title="&lt;b&gt;2013 NHL PLAYER HEIGHT&lt;/b&gt;" style="display: block; text-align: center;"><img src="https://plot.ly/~cimar/214.png" alt="&lt;b&gt;2013 NHL PLAYER HEIGHT&lt;/b&gt;" style="max-width: 100%;width: 1360px;"  width="1360" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="cimar:214" src="https://plot.ly/embed.js" async></script>
</div>

Follow along below to make a histogram of your own. If you’re unfamiliar with histograms, check out this article:
<a class="link--impt" href="/histogram/">
https://plot.ly/histogram/
</a>


### Step 1: Upload your Excel data to Plotly's grid

<table>
<tbody>
<tr>
<td>
Open the data file for this tutorial in Excel. You can download the file here in
<a class="link--impt" href="https://www.dropbox.com/s/le5t1ksw2krfvj7/Histogram%20Data.xls?raw=1" target="_blank">
xls
</a>
or
<a class="link--impt" href="https://www.dropbox.com/s/m8o2l8au638bhiw/Histogram%20Data.xlsx?raw=1" target="_blank">
xlsx
</a>
formats
</td>
<td>
<img alt="How to make a histogram with excel 30" src="/static/images/histogram-with-excel/image30.png" title=""/>
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
<img alt="How to make a histogram with excel 28" src="/static/images/histogram-with-excel/image28.png" title=""/>
</td>
</tr>
<tr>
<td>
Select “Histogram” from the
MAKE A PLOT
menu.
</td>
<td>
<img alt="How to make a histogram with excel 18" src="/static/images/histogram-with-excel/image18.png" title=""/>
</td>
</tr>
<tr>
<td>
Select only
one
column of data for a basic histogram (two with the ‘group by’ option)…
</td>
<td>
<img alt="How to make a histogram with excel 05" src="/static/images/histogram-with-excel/image05.png" title=""/>
</td>
</tr>
<tr>
<td>
...These values will appear on our x-axis.  The heights of the bars of our histogram will denote how many times each value or “bin” of values appears in the column. To learn more see:
<a class="link--impt" href="/histogram/">
https://plot.ly/histogram/
</a>
</td>
<td>
<img alt="How to make a histogram with excel 15" src="/static/images/histogram-with-excel/image15.gif" title=""/>
</td>
</tr>
<tr>
<td>
Click the blue plot button in the sidebar to create the chart.  (For more help with the grid see:
<a class="link--impt" href="/add-data-to-the-plotly-grid/">
https://plot.ly/add-data-to-the-plotly-grid/</a>)
</td>
<td>
<img alt="How to make a histogram with excel 21" src="/static/images/histogram-with-excel/image21.png" title=""/>
</td>
</tr>
</tbody>
</table>

###Step 2: Drawing the curve

<table>
<tbody>
<tr>
<td>
Your plot should look something like this.  Open the FIT DATA popover in the toolbar.
</td>
<td>
<img alt="How to make a histogram with excel 20" src="/static/images/histogram-with-excel/image20.png" title=""/>
<img alt="How to make a histogram with excel 27" src="/static/images/histogram-with-excel/image27.png" title=""/>
</td>
</tr>
<tr>
<td>
Click through to add a fit to the “Height” trace.
Set up the “Basic” tab to draw a
<a class="link--impt" href="http://en.wikipedia.org/wiki/Gaussian_function" target="_blank"> Gaussian Peak </a> based on the data. Leave the other options blank and click the “Run this fit” button at the bottom.
</td>
<td>
<img alt="How to make a histogram with excel 04" src="/static/images/histogram-with-excel/image04.png" title=""/>
<img alt="How to make a histogram with excel 09" src="/static/images/histogram-with-excel/image09.png" title=""/>
</td>
</tr>
<tr>
<td>
Voila, a curve!
</td>
<td>
<img alt="How to make a histogram with excel 03" src="/static/images/histogram-with-excel/image03.png" title=""/>
</td>
</tr>
<tr>
<td>
The popup now shows the fit statistics and parameters in the curve’s equation,
a+h*exp( -(x-x0)^2/(2*w^2))
.
</td>
<td>
<p class="push-half--ends">
<img alt="How to make a histogram with excel 14" src="/static/images/histogram-with-excel/image14.png" title=""/>
</td>
</tr>
<tr>
<td>
(Alternative: if you want to group your values more or less than Plotly has by default, do so in the “Range/bins” tab of the
TRACES
popover. You’ll probably want to remake your fit with the revised trace.)
</td>
<td>
<img alt="How to make a histogram with excel 11" src="/static/images/histogram-with-excel/image11.png" title=""/>
<img alt="How to make a histogram with excel 06" src="/static/images/histogram-with-excel/image06.png" title=""/>
</td>
</tr>
</tbody>

###Step 3: Style and annotate

<table>
<tbody>
<tr>
<td>
Your plot should now look something like this. In order to get the graph at the top of the chart, you’ll need to style and annotate it. Open the NOTES popover.
</td>
<td>
<img alt="How to make a histogram with excel 03" src="/static/images/histogram-with-excel/image03.png" title=""/>
<img alt="How to make a histogram with excel 22" src="/static/images/histogram-with-excel/image22.png" title=""/>
</td>
</tr>
<tr>
<td>
This is what the NOTES popover looks like. The “+” sign adds new notes.
Hide the arrow. Set the “Move with” option to “Data”, as the note refers to a specific pair of points on the plot.
</td>
<td>
<img alt="How to make a histogram with excel 24" src="/static/images/histogram-with-excel/image24.png" title=""/>
</td>
</tr>
<tr>
<td>
Find the note on the plot, and drag it to where you want it. Click the note to edit its text. Use markup to style and format it.
</td>
<td>
<img alt="How to make a histogram with excel 17" src="/static/images/histogram-with-excel/image17.png" title=""/>
&lt;b&gt;MEAN: 72.8"&lt;br&gt;MEDIAN:73"&lt;/b&gt;
</td>
</tr>
<tr>
<td>
Click the plot title and axis titles to edit their text. Use markup to link to your source.
</td>
<td>
<img alt="How to make a histogram with excel 00" src="/static/images/histogram-with-excel/image00.png" title=""/>
&lt;b&gt;HEIGHT (INCHES)&lt;/b&gt;&lt;br&gt;&lt;a href="http://theleafsnation.com/2014/5/25/justin-s-nhl-draftbook-2013-1963"&gt;NHL Draftbook, Justin Fisher&lt;/a&gt;
</td>
</tr>
<tr>
<td>
This is what the “Style” tab of the TRACES popover looks like for the “Height” trace. We’ve changed the bar color and made them narrower.
</td>
<td>
<img alt="How to make a histogram with excel 13" src="/static/images/histogram-with-excel/image13.png" title=""/>
<img alt="How to make a histogram with excel 26" src="/static/images/histogram-with-excel/image26.png" title=""/>
</td>
</tr>
<tr>
<td>
This is what the “Style” tab of the TRACES popover looks like for the “Height - fit” trace. We’ve changed the line color and stroke.
</td>
<td>
<img alt="How to make a histogram with excel 07" src="/static/images/histogram-with-excel/image07.png" title=""/>
</td>
</tr>
<tr>
<td>
This is what the “General” and “Margins” tabs of the LAYOUT popover should look like. We’re giving our plot a grey background, and we’ve changed some of the font options.
</td>
<td>
<img alt="How to make a histogram with excel 23" src="/static/images/histogram-with-excel/image23.png" title=""/>
<img alt="How to make a histogram with excel 02" src="/static/images/histogram-with-excel/image02.png" title=""/>
</td>
</tr>
<tr>
<td>
This is what the “Lines” tab of the AXES popover looks like. We’re hiding the body grid lines, and colored the zero line red.
</td>
<td>
<img alt="How to make a histogram with excel 19" src="/static/images/histogram-with-excel/image19.png" title=""/>
</td>
</tr>
<tr>
<td>
We’re removing the legend from the sidebar in the LEGEND popover.
</td>
<td>
<img alt="How to make a histogram with excel 12" src="/static/images/histogram-with-excel/image12.png" title=""/>
</td>
</tr>
<tr>
<td>
You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking DOWNLOAD on the toolbar.
</td>
<td>
<img alt="How to make a histogram with excel 31" src="/static/images/histogram-with-excel/image31.png" title=""/>
<img alt="How to make a histogram with excel 29" src="/static/images/histogram-with-excel/image29.png" title=""/>
</td>
</tr>
<tr>
<td>
Your finished chart should look something like this:
</td>
<td>
<img alt="How to make a histogram with excel 08" src="/static/images/histogram-with-excel/image08.png" title=""/>
</td>
</tr>
<tr>
<td>
To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version.
</td>
<td>
<img alt="How to make a histogram with excel 32" src="/static/images/histogram-with-excel/image32.png" title=""/>
</td>
</tr>
</tbody>
</table>
