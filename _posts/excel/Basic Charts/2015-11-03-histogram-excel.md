---
layout: excel-tutorial-single_layout
title: Make a Histogram Chart Online with Chart Studio and Excel
subtitle: Histrograms with Chart Studio
permalink: /excel/histogram/
imageurl: https://images.plot.ly/excel/histogram/thum-histogram-with-excel.png
state: active
tags: excel
section: Statistical
meta_description: A tutorial on how to make a histrogram online with Excel.
popularity: featured
actioncall-url: https://plot.ly/15176/~jackp/?plot_type=Histogram
download-url: https://github.com/plotly/datasets/raw/master/nhl_draft_2013_%40thejustinfisher.csv.zip

similar:
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png
 - title: Make a Bar Chart
   url: /excel/bar-chart/
   imgurl: https://images.plot.ly/excel/bar-charts/thum-bar-chart-with-excel.png
 - title: Adding Charts to Dashboards
   url: /excel/dashboards
   imgurl: https://images.plot.ly/excel/dashboards/dashboards-thumbnail.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/histograms/) or [R](https://plot.ly/r/histograms/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~Dreamshot/6903/_2013-nhl-player-height.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://plot.ly/~cimar/214/_2013-nhl-player-height.csv)"
      img: "![Data view](https://images.plot.ly/excel/histogram/excel-view-histogram.png)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/histogram/import-data-histogram.png)"
    - copy: "Select 'Histogram' from the MAKE A PLOT menu."
      img: "![How to make a histogram with excel](/static/images/histogram-with-excel/image18.png)"
    - copy: "Select only one column of data for a basic histogram (two with the 'group by' option)."
      img: "![Single data column](/static/images/histogram-with-excel/image05.png)"
    - copy: "These values will appear on our x-axis.  The heights of the bars of our histogram will denote how many times each value or 'bin' of values appears in the column. To learn more see: [histogram](https://plot.ly/histogram/)"
      img: "![Histograpm with plotly](/static/images/histogram-with-excel/image15.gif)"
    - copy: "Click the blue plot button in the sidebar to create the chart.  (For more help with the grid see: [here](/add-data-to-the-plotly-grid/)"
      img: "![Histogram button](/static/images/histogram-with-excel/image21.png)"
 - title: Drawing the Curve
   sub-steps:
    - copy: "Your plot should look something like this."
      img: "![Histogram chart](/static/images/histogram-with-excel/image20.png)"
    - copy: "Open the FIT DATA popover in the toolbar."
      img: "![Fitting data](/static/images/histogram-with-excel/image27.png)"
    - copy: "Click through to add a fit to the 'Height' trace."
      img: "![Choosing a fit](/static/images/histogram-with-excel/image04.png)"
    - copy: "Set up the 'Basic' tab to draw a [Gaussian Peak](http://en.wikipedia.org/wiki/Gaussian_function) based on the data. Leave the other options blank and click the 'Run this fit' button at the bottom."
      img: "![Running a fit](/static/images/histogram-with-excel/image09.png)"
    - copy: "Voila, a curve!"
      img: "![Histogram with curve](/static/images/histogram-with-excel/image03.png)"
    - copy: "The popup now shows the fit statistics and parameters in the curve's equation, a+h*exp(-(x-x0)^2/(2*w^2))."
      img: "![Fit statistics](/static/images/histogram-with-excel/image14.png)"
    - copy: "(Alternative: if you want to group your values more or less than Chart Studio has by default, do so in the 'Range/bins' tab of the TRACES popover.)"
      img: "![Bin size](/static/images/histogram-with-excel/image11.png)"
    - copy: "You'll probably want to remake your fit with the revised trace."
      img: "![Firs trace change](/static/images/histogram-with-excel/image06.png)"
 - title: Style and Annotate
   sub-steps:
    - copy: "Your plot should now look something like this. In order to get the graph at the top of the chart, you'll need to style and annotate it."
      img: "![Histogram with Excel](/static/images/histogram-with-excel/image03.png)"
    - copy: "Open the NOTES popover."
      img: "![Notes menu item](/static/images/histogram-with-excel/image22.png)"
    - copy: "This is what the NOTES popover looks like. The '+' sign adds new notes. Hide the arrow. Set the 'Move with' option to 'Data', as the note refers to a specific pair of points on the plot."
      img: "![Adding an annotation with Chart Studio](/static/images/histogram-with-excel/image24.png)"
    - copy: "Find the note on the plot, and drag it to where you want it. Click the note to edit its text. Use markup to style and format it. <b>MEAN: 72.8''<br>MEDIAN:73''</b>"
      img: "![Graph markup](https://images.plot.ly/excel/histogram/note-histogram.png)"
    - copy: "Click the plot title and axis titles to edit their text. Use markup to link to your source."
      img: "![Adding titles](https://images.plot.ly/excel/histogram/source-histogram.png)"
    - copy: "<b>HEIGHT (INCHES)</b><br><a href=''http://theleafsnation.com/2014/5/25/justin-s-nhl-draftbook-2013-1963''>NHL Draftbook, Justin Fisher</a>"
    - copy: "Select the TRACES menu."
      img: "![Trace styling](/static/images/histogram-with-excel/image13.png)"
    - copy: "This is what the 'Style' tab of the TRACES popover looks like for the 'Height' trace. We've changed the bar color and made them narrower."
      img: "![Fill color](https://images.plot.ly/excel/histogram/style-histogram.png)"
    - copy: "This is what the 'Style' tab of the TRACES popover looks like for the 'Height - fit' trace. We've changed the line color and stroke."
      img: "![Height](https://images.plot.ly/excel/histogram/style2-histogram.png)"
    - copy: "This is what the 'General' and 'Margins' tabs of the LAYOUT popover should look like."
      img: "![Layout Options](/static/images/histogram-with-excel/image23.png)"
    - copy: "We're giving our plot a grey background, and we've changed some of the font "
      img: "![Styling margins](/static/images/histogram-with-excel/image02.png)"
    - copy: "This is what the 'Lines' tab of the AXES popover looks like. We're hiding the body grid lines, and turned the zero line off."
      img: "![Styling Axes](https://images.plot.ly/excel/histogram/lines-histogram.png)"
    - copy: "We're removing the legend from the sidebar in the LEGEND popover."
      img: "![Removing the legend](/static/images/histogram-with-excel/image12.png)"
 - title: Export & Share
   sub-steps:
    - copy: "Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](http://i.imgur.com/tIGzmyp.png)"
    - copy: "Your finished chart should look something like this:"
      img: "![Finished](https://images.plot.ly/excel/histogram/final-histogram.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel](https://images.plot.ly/excel/histogram/excel-histogram.png)"

---
