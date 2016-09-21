---
layout: tutorial-single_layout
title: How to Add Data in Plotly 2.0
subtitle: A step-by-step guide to entering or importing data into the Plotly data visualization tool
permalink: /add-data-to-the-plotly-grid/
imageurl: ../static/images/enter-data-in-the-grid/enter-date-thumb.png
state: active
tags: fundamentals
order: 2
meta_description: A tutorial on how to enter data into the Plotly 2.0 data visualization tool
popularity: featured
carouselimageurl: /static/images/enter-data-in-the-grid/thum-enter-data-in-the-grid.png
actioncall: How to Enter Data in Plotly 2.0

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/plot-data-from-csv/) or [R](https://plot.ly/r/getting-started/).


steps:
 - title: Option 1 - Type or Paste Your Data in the Grid
   sub-steps:
    - copy: "The first step to making any Plotly graph is adding data to the grid. You can type your data directly into the grid, or copy it from a spreadsheet and paste it in."
    - copy: "You can also type directly into the cells, or use your keyboard shortcuts to paste in clipboard content."
      img: "![Enter data in grid](../static/images/enter-data-in-the-grid/Enter_Data_in_Grid.png)"

 - title: Option 2 - Import Your Data File
   sub-steps:
    - copy: "You can import .xls, .xlsx, or .csv files directly into Plotly. Upload a file using the IMPORT DATA tab."
      img: "![Import data main shot](../static/images/enter-data-in-the-grid/Import_Data_Main_Shot.png)"
      img: "![Import data second shot](../static/images/enter-data-in-the-grid/import-data-tab.png)"
    - copy: "You have the option to drag and drop your file, or select “click to upload”."
      img: "![Upload files](../static/images/enter-data-in-the-grid/Upload_Files.png)"

 - title: Option 3 - Import Data from a URL
   sub-steps:
    - copy: "You can also upload data by entering the URL of an online data set."
      img: "![Enter data by URL](../static/images/enter-data-in-the-grid/Import_Data_by_URL.png)"

 - title: Option 4 - Import Using our Samples
   sub-steps:
    - copy: "Additionally, you can use the examples provided here at Plotly. Choose any of these to get started!"
      img: "![Import with examples](../static/images/enter-data-in-the-grid/Import_Using_Examples.png)"

 - title: Working with Multiple Grids
   sub-steps:
    - copy: "If you're working with multiple grids, there's a specific way to select your values. Let's say you have two grids open, each with their own dataset. Click on GRAPH, then 'Create'. When you select the X and Y values from their dropdown, select them under their specific grid (the grid label is grayed out). In the image below, you'll see that we've added values from Grid 2."
      img: "![Grid dropdown](../static/images/enter-data-in-the-grid/grid-2.png)"
    - copy: "Another important thing to remember if you want to save your plot with all your grids is that you must include data from each grid into a trace. If you miss this step, your saved plot will open with certain grids missing."
    - copy: "Click the blue '+ Trace' button at the top right-hand side of that panel; this will add another trace to your plot. Select the X and Y values using the data from another grid. Since we've already selected Grid 2 values, we'll now add them from Grid 3. Repeat these steps until you've added values from all your grids."
      img: "![](../static/images/enter-data-in-the-grid/grid-3.png)"
    - copy: "Don't forget to [save](http://help.plot.ly/save-share-and-export-in-plotly/) your plot and name your file!"
    - copy: "We're currently busy adding new features to our Plotly 2 workspace. At the moment, the option of deleting grids or changing the title of the columns isn't available. Both these features will be available in the near future, so check back soon!"
---
