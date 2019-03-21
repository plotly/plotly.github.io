---
layout: tutorial-single_layout
title: Import Data
subtitle: A step-by-step guide for entering or importing data into the Chart Studio Workspace.
permalink: /add-data-to-the-plotly-grid/
redirect_from: /plotly1/add-data-to-the-plotly1-grid/
imageurl: ../static/images/import-data/import-data.png
state: active
tags: fundamentals
order: 2
meta_description: A tutorial on how to enter data in Chart Studio.
popularity: featured
carouselimageurl: /static/images/import-data/thumbnail.png
actioncall: How to enter data in Chart Studio

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/plot-data-from-csv/) or [R](https://plot.ly/r/getting-started/).


steps:
 - title: Option 1 - Enter the Data directly into the Grid
   sub-steps:
    - copy: "The first step to making any Chart Studio graph is adding data to the grid. You can type your data directly into the grid, or copy it from a spreadsheet and paste it in."
    - copy: "You can also type directly into the cells, or use your keyboard shortcuts to paste in clipboard content."
      img: "![Enter data in grid](../static/images/import-data/copy-from-clipboard.gif)"

 - title: Option 2 - Import a Data File
   sub-steps:
    - copy: "You can import .xls, .xlsx, or .csv files directly into Chart Studio. Head to [Chart Studio Workspace](https://plot.ly/create) and click on the 'Import' button next to your username in the top-right corner of the workspace."
      img: "![Import button](../static/images/import-data/import_data.png)"
    - copy: "The 'Import' modal will appear, where you can upload your local data-file saved in the above mentioned format under the 'Upload' tab. You can either click the 'Upload' button or simply drag and drop the file into the window within the modal."
      img: "![Upload files](../static/images/import-data/upload.gif)"

 - title: Option 3 - Import Data from a URL
   sub-steps:
    - copy: "You can upload data by entering the URL of an online data set. Please note that Chart Studio supports only secured URLs (HTTPS) and accepted file formats are same as mentioned above: .xls, .xlsx, or .csv."
      img: "![Enter data by URL](../static/images/import-data/import_data_url.png)"

 - title: Option 4 - Import Data via Falcon SQL Client
   sub-steps:
    - copy: "You can import data by connecting to your SQL database through the [Falcon SQL client](https://plot.ly/free-sql-client-download/). To learn more about how to connect your databases to your chart via Falcon, check out [this](https://help.plot.ly/database-connectors/) section."
      img: "![Import from SQL](../static/images/import-data/import_sql.png)"

 - title: Option 5 - Import Data from the Examples
   sub-steps:
    - copy: "You can also use the example data provided under the 'Examples' tab in the 'Import' modal. Choose any of these examples to get started!"
      img: "![Import from Examples](../static/images/import-data/import_data_examples.png)"

 - title: Option 6 - Import Data from a URL using Chart Studio's External Endpoint
   sub-steps:
    - copy: "Additionally, you can upload data from a URL using Chart Studio's external endpoint. Entering https://plot.ly/external/?url=YOUR_URL in your browser will open your data in Chart Studio's workspace. This method for uploading and parsing your data doesn't impose the same SSL restrictions that you may encounter with the above import method. For example, open this link to load data from [Chart Studio's dataset repo](https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv) into Chart Studio's online workspace: [https://plot.ly/external/?url=https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv](https://plot.ly/external/?url=https://raw.githubusercontent.com/plotly/datasets/master/2011_us_ag_exports.csv)."

 - title: Update Data
   sub-steps:
    - copy: "When you edit the data in the grid, your plot will update automatically."
    - copy: "The folowing video illustrates a simple use case where the plot updates when a data point is typed directly into the grid."
      img: "![Update data](../static/images/import-data/update-data.gif)"

 - title: Work with Multiple Grids
   sub-steps:
    - copy: "You can also work with multiple grids with each grid containing data imported from any of the above mentioned sources. After adding all the necessary data required for the chart, click on the '+ Trace' button at the top right-hand side of the Chart Studio Workspace panel and then choose the 'Type' of trace you'd like to work with."
      img: "![Add Trace](../static/images/import-data/trace_button.png)"
    - copy: "When you select the X and Y values from their dropdown, make sure to select them under their specific grid. In the image below, you'll see that we've added 'X' values from Grid 2 and 'Y' values from Grid 1."
      img: "![Grid dropdown](../static/images/import-data/trace_data.png)"
    - copy: "In addition to adding your data from different grids to the trace, you can also associate them to the trace's style attributes such as marker size, marker color, colorscale, etc."
      img: "![Style Attributes](../static/images/import-data/style.png)"
    - copy: "Note that if you want to save your plot with all your grids, you must include data from each grid into a trace. If not, your saved plot will open with only the grids that are associated to it."
    - copy: "Don't forget to [save](http://help.plot.ly/save-share-and-export-in-plotly/) your plot and name your file!"
      img: "![Save Plot](../static/images/import-data/save.png)"
---
