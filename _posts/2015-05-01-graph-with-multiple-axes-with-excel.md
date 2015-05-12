---
layout: two_column_layout
title: How to Make a Graph with Multiple Axes with Excel 
subtitle: Plotly with Excel
permalink: /how-to-make-a-graph-with-multiple-axes-with-excel
imageurl: /static/images/graph-with-multiple-axes-with-excel/thum-graph-with-multiple-axes-with-excel.png
state: active
tags: excel
meta_description: make a graph with multiple axes with excel online
---

#How to Make a Graph with Multiple Axes with Excel

<div>
    <a href="https://plot.ly/~Dreamshot/575/" target="_blank" title="Orange Trace vs x-axis" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/575.png" alt="Orange Trace vs x-axis" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="Dreamshot:575" src="https://plot.ly/embed.js" async></script>
</div>

In this tutorial, you will learn how to make multiple-axes charts, like the one above with 3 y-axes.

###Step 1: Upload your Excel data to Plotly's grid

<table>
<tbody>
<tr>
 <td>
   Open the data file for this tutorial in Excel. You can download the file here in
   <a class="link--impt" href="https://www.dropbox.com/s/l67ruy47mlyqmdw/Multiple%20Axes%20Data%20copy.xls?raw=1" target="_blank">
	xls
   </a>
   or
   <a class="link--impt" href="https://www.dropbox.com/s/n5802j9h99jv17x/Multiple%20Axes%20Data.xlsx?raw=1" target="_blank">
	xlsx
   </a>
   formats.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 19" src="/static/images/graph-with-multiple-axes-with-excel/image19.png" title=""/>
 </td>
</tr>
<tr>
<td>
  Head to Plotly's Workspace at
  <a class="link--impt" href="/plot">
   https://plot.ly/plot
  </a>
  and sign into your free Plotly account. Go to "Import," click "Upload a file," then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see the tutorial:
  <a class="link--impt" href="/add-data-to-the-plotly-grid">
   https://plot.ly/add-data-to-the-plotly-grid/
  </a>
  You can also follow along by using this Plotly graph:
  <a class="link--impt" href="https://plot.ly/~Dreamshot/575" target="_blank">
   https://plot.ly/~Dreamshot/575
  </a>
</td>
<td>
   <img alt="How to make a graph with multiple axes with excel 17" src="/static/images/graph-with-multiple-axes-with-excel/image17.png" title=""/>
</td>
</tr>
</tbody>
</table>

###Step 2: Adding a second y-axis

Now, we’ll add a second y-axis to the right-hand-side of this plot. Make sure that your browser is pointed to <a class="link--impt" href="/plot">
https://plot.ly/plot </a> and that you have this chart - <a class="link--impt" href="https://plot.ly/~Dreamshot/575" target="_blank">
https://plot.ly/~Dreamshot/575 </a>

<table>
<tbody>
<tr>
 <td>
   Click on the
   AXES
   icon on the Plotly toolbar to open the
   AXES
   editing popover.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 11" src="/static/images/graph-with-multiple-axes-with-excel/image11.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   The
   AXES
   popover appears.
   Here’s what it looks like. Click on the
   “
   +
   ” to add a new axis.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 10" src="/static/images/graph-with-multiple-axes-with-excel/image10.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Here is where we add an extra y-axis to the right-hand-side of the graph. Select “Right” like in the screenshot, and click the blue “Go” button.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 15" src="/static/images/graph-with-multiple-axes-with-excel/image15.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Close the
   AXES
   popover and take a look at our chart - It now has a second y-axis! Click on the second y-axis label to give it a name. In this chart, I named it “Y-Axis Number 2”.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 07" src="/static/images/graph-with-multiple-axes-with-excel/image07.png" title=""/>
 </td>
</tr>
</tbody>
</table>

###Step 3: Assign a data trace to the new y-axis

High five! You’ve created a second y-axis (on the right), but all three of the data traces still scale with the first y-axis (on the left). What gives? This is because all three traces are still assigned to the first y-axis. You need to assign a trace to the new y-axis in order for its data to scale with it - the steps below show you how.

<table>
<tbody>
<tr>
 <td>
   First, click on the
   TRACES
   icon on the Plotly toolbar to open the
   TRACES
   popover.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 11" src="/static/images/graph-with-multiple-axes-with-excel/image11.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Select the green trace from the traces dropdown. Then, click “Y2” under “Axes” to assign the green trace to the new y-axis.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 08" src="/static/images/graph-with-multiple-axes-with-excel/image08.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Close the
   AXES
   popover to inspect your chart. Notice that the green trace now scales with second y-axis on the right-hand-side.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 00" src="/static/images/graph-with-multiple-axes-with-excel/image00.png" title=""/>
 </td>
</tr>
</tbody>
</table>

###Step 4:
Adjusting the y-axis range visually
If you’re reading this, you probably know that the range of each of your x and y axes can be precisely adjusted in the AXES popover. It is often faster and easier, however, to adjust the axes range visually by clicking-and-dragging the corners of your graph. See the screenshots below for a preview of how to do this.

<table>
<tbody>
<tr>
 <td>
   Notice that the last green point overlaps the the last blue point. It would be clearer if there was a separation between these points.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 00" src="/static/images/graph-with-multiple-axes-with-excel/image00.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Move your cursor around the bottom-corner of your chart until the cursor icon changes to a downward-facing arrow. Then, click and drag downwards.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 14" src="/static/images/graph-with-multiple-axes-with-excel/image14.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Nice! The range of the 2nd y-axis is now adjusted, and there is more space between the blue and green traces. Looking much better!
  <p class="push-half--ends">
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 13" src="/static/images/graph-with-multiple-axes-with-excel/image13.png" title=""/>
 </td>
</tr>
</tbody>
</table>

### Step 5: Adding a third y-axis

<table>
<tbody>
<tr>
 <td>
   To add a third y-axis, follow same the steps above in “Adding a second y-axis.” This time, assign the blue data trace to the third y-axis. When you’re done, your chart might look like the chart on the right. Notice that the second and third y-axes on the right are overlapping. Don’t worry, we’ll clean this up in the next section.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 02" src="/static/images/graph-with-multiple-axes-with-excel/image02.png" title=""/>
 </td>
</tr>
</tbody>
</table>

###Step 6: Adjust space between 2nd and 3rd y-axes

<table>
<tbody>
<tr>
 <td>
   In this chart, the 2nd and 3rd y-axes are overlapping. Ugly! These steps will show you how to space them apart.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 02" src="/static/images/graph-with-multiple-axes-with-excel/image02.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   Open the
   AXES
   popover again and select “X Axis” in the dropdown. Go to the “Layout” tab and change the span of the x-axis to 0 through 0.8. This will create extra space on the right-hand-side of the plot for our new y-axis. Nice!
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 12" src="/static/images/graph-with-multiple-axes-with-excel/image12.png" title=""/>
 </td>
</tr>
<tr>
 <td>
 </td>
 <td>
 </td>
</tr>
<tr>
 <td>
   Finally, go back to our newest y-axis (“Y Axis 3”) in the
   AXES
   popover. Change its “Anchor to” attribute to “Free” and “Position” to 1 (see screenshot).
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 01" src="/static/images/graph-with-multiple-axes-with-excel/image01.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   There should now be a nice space between your 2 y-axes on the right-hand-side. Your chart should look something like the one on the right. If you have a legend and its overlapping the 3rd y-axis, you can click-and-drag the legend to move it more to the right of the chart.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 03" src="/static/images/graph-with-multiple-axes-with-excel/image03.png" title=""/>
 </td>
</tr>
<tr>
 <td>
   If you haven’t already, you can assign the blue data trace to the third y-axis. Now, every data trace has its own y-axis. The set-up for how to do this in the TRACES popover is shown on the right.
 </td>
 <td>
	<img alt="How to make a graph with multiple axes with excel 16" src="/static/images/graph-with-multiple-axes-with-excel/image16.png" title=""/>
 </td>
</tr>
</tbody>
</table>

<table>
  <tbody>
   <tr>
   <td>
     You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking
     DOWNLOAD
     on the toolbar.
   </td>
   <td>
      <img alt="How to make a graph with multiple axes with excel 20" src="/static/images/graph-with-multiple-axes-with-excel/image20.png" title=""/>
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
      <img alt="How to make a graph with multiple axes with excel 21" src="/static/images/graph-with-multiple-axes-with-excel/image21.png" title=""/>
   </td>
  </tr>
<td>
   Your finished graph should look something like the one below. Notice that I added tick marks and colored the
   axes lines and labels to match the trace colors. Check out our
   <a class="link--impt" href="http://vimeo.com/94000688" target="_blank">
    styling tutorial
   </a>
   to learn more. You can do this yourself under the “Lines” and “Labels” tabs for each y-axes in the
   AXES
   popover. Questions? Email
   rosie@plot.ly
</td><td>
   <img alt="How to make a graph with multiple axes with excel 05" src="/static/images/graph-with-multiple-axes-with-excel/image05.png" title=""/>
</td></tr>
</tbody>
   </table>
