---
layout: two_column_layout
title: Make a Bubble Chart with Excel
subtitle: Plotly with Excel
permalink: /excel/bubble-chart
imageurl: /static/images/bubble-chart-with-excel/thum-bubble-chart-with-excel.png
state: active
tags: excel
meta_description: A tutorial on how to make a bubble chart with Excel. Plotly is the easiest and fastest way to make and share graphs online.
popularity: featured
actioncall: Make a Bubble Chart
carouselimageurl: /static/images/bubble-chart-with-excel/thum-bubble-chart-with-excel.png
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

 <table>
  <tbody>
   <tr>
    <td>
      Open the data file for this tutorial in Excel. You can download the file here in
      <a class="link--impt" href="https://www.dropbox.com/s/9a4xvg5opx65m4l/Bubble%20Chat%20Data%20copy.xls?raw=1" target="_blank">
       xls
      </a>
      or
      <a class="link--impt" href="https://www.dropbox.com/s/wnq5oxzpgzlel5p/Bubble%20Chat%20Data.xlsx?raw=1" target="_blank">
       xlsx
      </a>
      formats.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 24" src="/static/images/bubble-chart-with-excel/image24.png" title=""/>
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
       <img alt="How to make a bubble chart with excel 22" src="/static/images/bubble-chart-with-excel/image22.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      Select “Bubble charts” from the
      MAKE A PLOT
      menu.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 10" src="/static/images/bubble-chart-with-excel/image10.png" title=""/>
     </p>
    </td>
   </tr>
   <tr>
    <td>
      Click the “Size by” option in the sidebar, and the “Text” option.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 02" src="/static/images/bubble-chart-with-excel/image02.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      For every set of x and y coordinates you select, select a column of values to set the size of the markers...
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 19" src="/static/images/bubble-chart-with-excel/image19.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      ...and a column of text notations for every marker, (text notations are not required to make a bubble chart.)
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 03" src="/static/images/bubble-chart-with-excel/image03.png" title=""/>
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
       <img alt="How to make a bubble chart with excel 15" src="/static/images/bubble-chart-with-excel/image15.png" title=""/>
    </td>
   </tr>
  </tbody>
 </table>

###Step 2: Sizing and Log Axis

 <table>
  <tbody>
   <tr>
    <td>
      Your plot should look something like this.  Open the
      TRACES
      popover in the toolbar.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 13" src="/static/images/bubble-chart-with-excel/image13.png" title=""/>
       <img alt="How to make a bubble chart with excel 11" src="/static/images/bubble-chart-with-excel/image11.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      This is what the “Style” tab of the
      TRACES
      popover should look like for “All Traces (Bubble)”.
      We’ve set the “Size” field to scale the bubbles’ diameter, not area.  And we’ve evened out the pixel-to-value ratio (the higher the value in the box, the smaller the bubbles will be).
      We’ve also increased the weight of the white bubble outlines.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 20" src="/static/images/bubble-chart-with-excel/image20.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      Now, open the
      AXES
      popover in the toolbar.
      This is what the “Range” tab for the X Axis looks like. We’re opting for a log scale, which will result in a more linear plot.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 04" src="/static/images/bubble-chart-with-excel/image04.png" title=""/>
       <img alt="How to make a bubble chart with excel 18" src="/static/images/bubble-chart-with-excel/image18.png" title=""/>
    </td>
   </tr>
  </tbody>
 </table>

###Step 3: Style and annotate!

<table>
  <tbody>
   <tr>
    <td>
      Your plot should now look something like this. In order to get the graph at the top of the chart, you’ll need to style it a little more.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 12" src="/static/images/bubble-chart-with-excel/image12.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      This is what the “General” and “Margins” tabs of the
      LAYOUT
      popover should look like. We’re giving our plot a grey background, and we’ve changed some of the font options.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 07" src="/static/images/bubble-chart-with-excel/image07.png" title=""/>
       <img alt="How to make a bubble chart with excel 00" src="/static/images/bubble-chart-with-excel/image00.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      This is what the “Lines” tab of the
      AXES
      popover looks like. We’ve changed the grey grid to white, and increased the line weight.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 17" src="/static/images/bubble-chart-with-excel/image17.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      This is what the
      LEGEND
      popover looks like.  We’ve set its background to grey, too.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 09" src="/static/images/bubble-chart-with-excel/image09.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      We’ve titled our chart and axes.  And we’re using markup to link to our source data using the
      NOTES
      popover.
      Select the “Page” option, and hide the arrow. Because our note has nothing to do with specific data points, we’re going to nestle it below the x-axis.
      Now drag it to the bottom corner of your plot.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 16" src="/static/images/bubble-chart-with-excel/image16.png" title=""/>
       <img alt="How to make a bubble chart with excel 01" src="/static/images/bubble-chart-with-excel/image01.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      Once your note looks like you want it to, use the markdown &lt;a&gt; tag to link to the data source.
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 14" src="/static/images/bubble-chart-with-excel/image14.png" title=""/>
      Source: GapMinder via &lt;a href="https://plot.ly/bchartoff/707"&gt;bchartoff&lt;/a&gt;
    </td>
   </tr>
   <tr>
    <td>
      You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the blue "Share" button. Download an image of your Plotly graph by clicking
      DOWNLOAD
      on the toolbar
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 25" src="/static/images/bubble-chart-with-excel/image25.png" title=""/>
       <img alt="How to make a bubble chart with excel 23" src="/static/images/bubble-chart-with-excel/image23.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
      Your finished chart should look something like this:
    </td>
    <td>
       <img alt="How to make a bubble chart with excel 06" src="/static/images/bubble-chart-with-excel/image06.png" title=""/>
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
       <img alt="How to make a bubble chart with excel 26" src="/static/images/bubble-chart-with-excel/image26.png" title=""/>
    </td>
   </tr>
  </tbody>
 </table>
