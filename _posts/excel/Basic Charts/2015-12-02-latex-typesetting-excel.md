---
layout: excel-tutorial-single_layout
title: LaTeX Typesetting Online with Chart Studio and Excel
subtitle: LaTeX Typesetting with Chart Studio
permalink: /excel/LaTeX/
imageurl: https://images.plot.ly/excel/latex-typesetting-excel/thum-latex-typesetting-in-excel.jpg
state: active
tags: excel
section: BasicCharts
meta_description: A tutorial on how to add latex typesetting online with Excel.
popularity: featured
actioncall-url: https://plot.ly/795/~tarzzz/
download-url: https://raw.githubusercontent.com/plotly/datasets/master/latex-typesetting-with-excel.csv

similar:
 - title: Make a Heatmap
   url: /excel/heatmap
   imgurl: /static/images/heat-map-with-excel/thum-heat-map-with-excel.png
 - title: Make a Choropleth Map
   url: /excel/choropleth-maps
   imgurl: /static/images/choropleth-map-with-excel/choropleth-map-thumb.png
 - title: Make a Bar Chart
   url: /excel/bar-chart
   imgurl: https://images.plot.ly/excel/bar-charts/thum-bar-chart-with-excel.png

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/LaTeX/) or [R](https://plot.ly/r/LaTeX/).

live-graph: <iframe width="100%" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~tarzzz/813.embed"></iframe>

steps:
 - title: Upload your Excel data to Chart Studio's grid
   sub-steps:
    - copy: "Open the data file for this tutorial in Excel. You can download the file here in [CSV format](https://raw.githubusercontent.com/plotly/datasets/master/latex-typesetting-with-excel.csv)"
      img: "![Excel view](https://images.plot.ly/excel/latex-typesetting-excel/excel-data.jpg)"
 - title: Head to Chart Studio
   sub-steps:
    - copy: "Head to [the Chart Studio Workspace](https://plot.ly/plot) and sign into your free Chart Studio account. Go to 'Import', click 'Upload a file', then choose your Excel file to upload. Your Excel file will now open in Chart Studio's grid. For more about Chart Studio's grid, see [this tutorial](/add-data-to-the-plotly-grid/)"
      img: "![Import data](https://images.plot.ly/excel/latex-typesetting-excel/import-data.jpg)"
 - title: Creating the Chart
   sub-steps:
    - copy: "After importing the data, select the 'Line Plot' option from 'Choose Plot Type' dropdown. Set the data shape as shown in figure below, and click on 'Line Chart' button to create the chart."
      img: "![Create Chart](https://images.plot.ly/excel/latex-typesetting-excel/create-chart.jpg)"
 - title: Adding LaTeX Axis Title
   sub-steps:
    - copy: "To add the Axis Title, click on the title box, and paste this LaTeX Code: `$\\sqrt{(n_\\text{c}(t|{T_\\text{early}}))}$` in the text box."
      img: "![Add Axis Title](https://images.plot.ly/excel/latex-typesetting-excel/adding-x-axis-title1.gif)"
 - title: Adding LaTeX Annotations
   sub-steps:
    - copy: "To Add the Annotations, Go to 'Notes' popover. Click on the '+' button to create a new annotation box in the chart. We can also modify the properties of the annotations box (like position, font etc.) from the 'Text' tab."
      img: "![Adding Annotations](https://images.plot.ly/excel/latex-typesetting-excel/adding-annotations.jpg)"
    - copy: "Copy this code: `$\\beta_{1c} = 25 \\pm 11 \\text{ km s}^{-1}$` to the annotation text box, and hit enter to render the LaTeX text in the annotations, as shown in figure below."
      img: "![Adding Annotations](https://images.plot.ly/excel/latex-typesetting-excel/adding-annotations.gif)"

---
