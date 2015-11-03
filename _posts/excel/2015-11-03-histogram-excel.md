---
layout: excel-tutorial-single_layout
title: Make a Histogram Chart Online with Plotly and Excel
subtitle: Histrograms with Plotly
permalink: /excel/histogram
imageurl: https://plot.ly/~cimar/214/_2013-nhl-player-height.png
state: active
tags: excel
section: Basic Charts
meta_description: A tutorial on how to make a histrogram online with Excel.
popularity: featured
carouselimageurl: https://plot.ly/~cimar/214/_2013-nhl-player-height.png
actioncall: Make this histogram
actioncall-url: https://plot.ly/~cimar/214/_2013-nhl-player-height
download-url: https://plot.ly/~cimar/214/_2013-nhl-player-height.csv

similar:
 - title: Tutorial 1
   url: http://link.com
   imgurl: http://i.imgur.com/uhxCioO.png
 - title: Tutorial 2
   url: http://link.com
   imgurl: http://i.imgur.com/uhxCioO.png
 - title: Tutorial 3
   url: http://link.com
   imgurl: http://i.imgur.com/uhxCioO.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/histograms/) or [R](https://plot.ly/r/histograms/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~cimar/214/_2013-nhl-player-height.embed"></iframe>

steps:
 - title: Upload your Excel data to Plotly's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/bubble_chart_tutorial.csv)"
      img: "![Excel view](http://i.imgur.com/5ON7Ypp.png)"
 - title: Head to Plotly
   sub-steps:
    - copy: "Head to [Plotly's Workspace](https://plot.ly/plot) and sign into your free Plotly account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see [this tutorial](help.plot.ly/add-data-to-the-plotly-grid/)"
      img: "![Import data](http://i.imgur.com/eQjmxGp.png)"
    - copy: "Select 'Histogram' from the MAKE A PLOT menu."
      img: "![How to make a histogram with excel](/static/images/histogram-with-excel/image18.png)"
    - copy: "Select only one column of data for a basic histogram (two with the ‘group by’ option)…"
      img: "![Single data column](/static/images/histogram-with-excel/image05.png)"
    - copy: "...These values will appear on our x-axis.  The heights of the bars of our histogram will denote how many times each value or “bin” of values appears in the column. To learn more see: [/histogram/](https://plot.ly/histogram/)"
      img: "![Histograpm with plotly](/static/images/histogram-with-excel/image15.gif)"
    - copy: "Click the blue plot button in the sidebar to create the chart.  (For more help with the grid see: [here](/add-data-to-the-plotly-grid/)"
      img: "![Histogram button](/static/images/histogram-with-excel/image21.png)"
 - title: Drawing the Curve
   sub-steps:
    - copy: "Your plot should look something like this.  Open the FIT DATA popover in the toolbar."
      img: "![Histrogram Chart](/static/images/histogram-with-excel/image20.png)"
      img: "![Fitting data](/static/images/histogram-with-excel/image27.png)"
    - copy: "Click through to add a fit to the 'Height' trace. Set up the 'Basic' tab to draw a [Gaussian Peak](http://en.wikipedia.org/wiki/Gaussian_function) based on the data. Leave the other options blank and click the 'Run this fit' button at the bottom."
      img: "![Choosing a fit](/static/images/histogram-with-excel/image04.png)"
      img: "![Running a fit](/static/images/histogram-with-excel/image09.png)"
    - copy: "Voila, a curve!"
      img: "![Histogram with curve](/static/images/histogram-with-excel/image03.png)"
    - copy: "The popup now shows the fit statistics and parameters in the curve’s equation, a+h*exp(-(x-x0)^2/(2*w^2))."
      img: "![Fit statistics](/static/images/histogram-with-excel/image14.png)"
    - copy: "(Alternative: if you want to group your values more or less than Plotly has by default, do so in the 'Range/bins' tab of the TRACES popover. You’ll probably want to remake your fit with the revised trace.)"
      img: "![Bin size](/static/images/histogram-with-excel/image11.png)"
      img: "![Firs trace change](/static/images/histogram-with-excel/image06.png)"
 - title: Style and Annotate
   sub-steps:
    - copy: "Your plot should now look something like this. In order to get the graph at the top of the chart, you’ll need to style and annotate it. Open the NOTES popover."
      img: "![Histogram with Excel](/static/images/histogram-with-excel/image03.png)"
      img: "![Notes menu item](/static/images/histogram-with-excel/image22.png)"
    - copy: "This is what the NOTES popover looks like. The '+' sign adds new notes. Hide the arrow. Set the 'Move with' option to 'Data', as the note refers to a specific pair of points on the plot."
      img: "![Adding an annotation with Plotly](/static/images/histogram-with-excel/image24.png)"
    - copy: "Find the note on the plot, and drag it to where you want it. Click the note to edit its text. Use markup to style and format it. &lt;b&gt;MEAN: 72.8'&lt;br&gt;MEDIAN:73'&lt;/b&gt;"
      img: "![Graph markup](/static/images/histogram-with-excel/image17.png)"
    - copy: "Click the plot title and axis titles to edit their text. Use markup to link to your source."
      img: "![Adding titles](/static/images/histogram-with-excel/image00.png)"
    - copy: "&lt;b&gt;HEIGHT (INCHES)&lt;/b&gt;&lt;br&gt;&lt;a href=&quot;http://theleafsnation.com/2014/5/25/justin-s-nhl-draftbook-2013-1963&quot;&gt;NHL Draftbook, Justin Fisher&lt;/a&gt;"
    - copy: "This is what the 'Style' tab of the TRACES popover looks like for the 'Height' trace. We’ve changed the bar color and made them narrower."
      img: "![Trace styling](/static/images/histogram-with-excel/image13.png)"
      img: "![Fill color](/static/images/histogram-with-excel/image26.png)"
    - copy: "This is what the 'Style' tab of the TRACES popover looks like for the 'Height - fit' trace. We’ve changed the line color and stroke."
      img: "![Height](/static/images/histogram-with-excel/image07.png)"
    - copy: "This is what the 'General' and 'Margins' tabs of the LAYOUT popover should look like. We’re giving our plot a grey background, and we’ve changed some of the font "
      img: "![Layout Options](/static/images/histogram-with-excel/image23.png)"
      img: "![Styling margins](/static/images/histogram-with-excel/image02.png)"
    - copy: "This is what the 'Lines' tab of the AXES popover looks like. We’re hiding the body grid lines, and colored the zero line red."
      img: "![Styling Axes](/static/images/histogram-with-excel/image19.png)"
    - copy: "We’re removing the legend from the sidebar in the LEGEND popover."
      img: "![Removing the legend](/static/images/histogram-with-excel/image12.png)"
 - title: Export & Share
   sub-steps:
    - copy: "Download an image of your Plotly graph by clicking EXPORT on the toolbar."
      img: "![Export](http://i.imgur.com/tIGzmyp.png)"
    - copy: "Your finished chart should look something like this:"
      img: "![Finished](/static/images/histogram-with-excel/image08.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version."
      img: "![Excel](/static/images/histogram-with-excel/image32.png)"

---
