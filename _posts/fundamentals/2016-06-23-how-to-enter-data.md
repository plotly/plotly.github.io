---
layout: tutorial-single_layout
title: How to Add Data in Chart Studio
subtitle: A step-by-step guide to entering or importing data.
permalink: /add-data-to-the-plotly-grid/
redirect_from: /plotly1/add-data-to-the-plotly1-grid/
imageurl: ../static/images/enter-data-in-the-grid/enter-date-thumb.png
state: active
tags: fundamentals
order: 2
meta_description: A tutorial on how to enter data in Chart Studio.
popularity: featured
carouselimageurl: /static/images/enter-data-in-the-grid/thum-enter-data-in-the-grid.png
actioncall: How to Enter Data in Chart Studio

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/plot-data-from-csv/) or [R](https://plot.ly/r/getting-started/).


steps:
 - title: Option 1 - Enter Your Data in the Grid
   sub-steps:
    - copy: "The first step to making any Chart Studio graph is adding data to the grid. You can type your data directly into the grid, or copy it from a spreadsheet and paste it in."
    - copy: "You can also type directly into the cells, or use your keyboard shortcuts to paste in clipboard content."
      img: "![Enter data in grid](../static/images/enter-data-in-the-grid/Enter_Data_in_Grid.png)"

 - title: Option 2 - Import Your Data File
   sub-steps:
    - copy: "You can import .xls, .xlsx, or .csv files directly into Chart Studio. Upload a file using the IMPORT DATA tab."
      img: "![Import data main shot](../static/images/enter-data-in-the-grid/Import_Data_Main_Shot.png)"
      img: "![Import data second shot](../static/images/enter-data-in-the-grid/import-data-tab.png)"
    - copy: "You have the option to drag and drop your file, or select “click to upload”."
      img: "![Upload files](../static/images/enter-data-in-the-grid/Upload_Files.png)"

 - title: Option 3 - Import Data from a URL
   sub-steps:
    - copy: "You can also upload data by entering the URL of an online data set. Please note we only support cdv and excel files at this time."
      img: "![Enter data by URL](../static/images/enter-data-in-the-grid/Import_Data_by_URL.png)"

 - title: Option 4 - Import Data from a URL Using Chart Studio's External Endpoint
   sub-steps:
    - copy: "You can also upload data from a URL using Chart Studio's external endpoint. Entering https://plot.ly/external/?url=YOUR_URL in your browser will open your data in Chart Studio's workspace. This method for uploading and parsing your data doesn't impose the same SSL restrictions that you may encounter with the above import method. For example, open this link to load data from [Chart Studio's dataset repo](https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv) into Chart Studio's online workspace:  [https://plot.ly/external/?url=https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv](https://plot.ly/external/?url=https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv)."

 - title: Option 5 - Import Using our Samples
   sub-steps:
    - copy: "Additionally, you can use the examples provided here at Chart Studio. Choose any of these to get started!"
      img: "![Import with examples](../static/images/enter-data-in-the-grid/Import_Using_Examples.png)"

 - title: Update Your Data
   sub-steps:
    - copy: "Did you know that when you edit your data, your plot automatically updates?"
    - copy: "You can see in the image below that we want to add two more rows of data, and we do so by typing directly in the grid. It's that simple!"
      img: "![Update data](../static/images/enter-data-in-the-grid/update-data.gif)"

 - title: Working with Multiple Grids
   sub-steps:
    - copy: "If you're working with multiple grids, there's a specific way to select your values. Let's say you have two grids open, each with their own dataset. Click on GRAPH, then 'Create'. When you select the X and Y values from their dropdown, select them under their specific grid (the grid label is grayed out). In the image below, you'll see that we've added values from Grid 2."
      img: "![Grid dropdown](../static/images/enter-data-in-the-grid/grid-2.png)"
    - copy: "Another important thing to remember if you want to save your plot with all your grids is that you must include data from each grid into a trace. If you miss this step, your saved plot will open with certain grids missing."
    - copy: "Click the blue '+ Trace' button at the top right-hand side of that panel; this will add another trace to your plot. Select the X and Y values using the data from another grid. Since we've already selected Grid 2 values, we'll now add them from Grid 3. Repeat these steps until you've added values from all your grids."
      img: "![grid 3](../static/images/enter-data-in-the-grid/grid-3.png)"
    - copy: "Don't forget to [save](http://help.plot.ly/save-share-and-export-in-plotly/) your plot and name your file!"
    - copy: "We're currently busy adding new features to our Chart Studio workspace. At the moment, the option of deleting grids  isn't available. Both these features will be available in the near future, so check back soon!"
---
