---
layout: excel-tutorial-single_layout
title: Make a Bar Chart Online with Chart Studio and Excel
subtitle: Bar charts with Chart Studio
permalink: /excel/bar-chart/
imageurl: https://images.plot.ly/excel/bar-charts/thum-bar-chart-with-excel.png
state: active
tags: excel
section: BasicCharts
meta_description: A tutorial on how to make a bar chart online with Excel.
popularity: featured
actioncall-url: https://plot.ly/15093/~jackp/?plot_type=Bar%20chart
download-url: https://plot.ly/~cimar/197/la-zoo-vs-sf-zoo.csv

similar:
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png
 - title: Make a Histogram
   url: /excel/histogram
   imgurl: https://images.plot.ly/excel/histogram/thum-histogram-with-excel.png
 - title: Make a Heatmap
   url: /excel/heatmap
   imgurl: /static/images/heat-map-with-excel/thum-heat-map-with-excel.png


otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/bar-charts/) or [R](https://plot.ly/r/bar-charts/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~cimar/197/la-zoo-vs-sf-zoo.embed"></iframe>

steps:
 - title: Upload your Excel Data to Chart Studio's Grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://plot.ly/~cimar/197/la-zoo-vs-sf-zoo.csv)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/bar-charts/import-data-bar-chart.png)"
 - title: Upload your Excel Data to Chart Studio&apos;s Grid &lpar;two traces&rpar;
   sub-steps:
    - copy: "The first option is to arrange these two data sets into two different columns."
      img: "![Two different columns](/static/images/bar-chart-with-excel/initial-data.png)"
    - copy: "Select 'Bar Charts' from the MAKE A PLOT menu"
      img: "![Labeling](/static/images/bar-chart-with-excel/bar-charts-in-make-a-plot-menu.png)"
    - copy: "Click the blue plot button in the sidebar to create the chart."
      img: "![Original](/static/images/bar-chart-with-excel/bar-chart.png)"
 - title: Upload your Excel data to Chart Studio&apos;s Grid &lpar;group by&rpar;
   sub-steps:
    - copy: "Your second option is to have a column of variables identifying which dataset each row belongs to, and then 'grouping by' this column."
      img: "![Domain](/static/images/bar-chart-with-excel/initial-data-2.png)"
    - copy: "Select 'Group by' from the OPTIONS in the sidebar, and select your options column."
      img: "![Group by option](/static/images/bar-chart-with-excel/options-group-by.png)"
      img: "![Choose as G](/static/images/bar-chart-with-excel/choose-as-g.png)"
    - copy: "Click the blue plot button in the sidebar to create the chart."
      img: "![Bar Chart](/static/images/bar-chart-with-excel/bar-chart.png)"
 - title: Setting the Traces
   sub-steps:
    - copy: "Your plot should look something like this."
      img: "![Traces](/static/images/bar-chart-with-excel/giraffes-orangutans-monkeys.png)"
    - copy: "The first step to styling it into the horizontal bar graph above is to open the TRACES popover in the toolbar."
      img: "![Traces popover](/static/images/bar-chart-with-excel/traces-popover.png)"
    - copy: "Here's how the MODE tab of the TRACES popover for 'All Traces (Bar)' should look."
      img: "![All traces](/static/images/bar-chart-with-excel/all-traces.png)"
      img: "![Chart Style Horizontal](/static/images/bar-chart-with-excel/mode-horizontal.png)"
    - copy: "(Alternative: if you want to stack or overlay your bars, instead of grouping them, just change the 'Mode' setting.)"
      img: "![Style mode](/static/images/bar-chart-with-excel/style-mode.png)"
    - copy: "Stacked"
      img: "![Stacked bar chart](/static/images/bar-chart-with-excel/stacked-bar-chart.png)"
 - title: Style it!
   sub-steps:
    - copy: "Now your plot should look something like this: a grouped horizontal bar chart. We still have some styling to do to get the plot at the top of this tutorial! Open TRACES again."
      img: "![Grouped horizontal bar chart](/static/images/bar-chart-with-excel/grouped-horizontal-bar-chart.png)"
    - copy: "This is how the STYLE tab of the TRACES popover on LA Zoo should look. We've altered every option in this panel Opacity, Bar Gap, Group Gap, Fill, and Outline."
      img: "![Style tab of Traces popover](/static/images/bar-chart-with-excel/style-tab-of-traces-popover.png)"
    - copy: "This is how the 'Style' tab of the TRACES popover on 'SF Zoo' should look. These are the same as for LA Zoo, but fill and outline are different colors."
      img: "![Style tab options](/static/images/bar-chart-with-excel/style-options.png)"
    - copy: "This is how the LAYOUT popover should look. We're changing the font throughout the plot."
      img: "![Layout popover general options](/static/images/bar-chart-with-excel/layout-general.png)"
    - copy: "We're also giving the plot a grey background, and nudging the margins."
      img: "![Layout popover margin options](/static/images/bar-chart-with-excel/layout-margin-options.png)"
    - copy: "This is how the AXES popover should look.  We're giving the plot thicker white gridlines."
      img: "![Increase gridline thickness](/static/images/bar-chart-with-excel/gridlines-thickness.png)"
    - copy: "This is how the LEGEND popover should look, we're giving it a grey background, too."
      img: "![Legend popover background color](/static/images/bar-chart-with-excel/legend-background-color.png)"
 - title: Export and Share
   sub-steps:
    - copy: "You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the 'Share' button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar."
      img: "![Export](https://s3-us-west-1.amazonaws.com/plotly-tutorials/excel/bubble-maps/export-bubble-map.png)"
    - copy: "Your finished chart should look something like this"
      img: "![Bar chart](/static/images/bar-chart-with-excel/finished-bar-chart.png)"
    - copy: "To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version."
      img: "![Excel](/static/images/bar-chart-with-excel/chart-in-excel.png)"
---
