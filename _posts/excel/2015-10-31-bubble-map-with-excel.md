---
layout: single
title: Make a Bubble Map with Excel
subtitle: Chart Studio with Excel
permalink: /excel/bubble-map/
imageurl: static/images/bubble-map.png
state: inactive
tags: excel
meta_description: A tutorial on how to make a bubble map with Excel. Chart Studio is the easiest and fastest way to  make and share graphs online.
actioncall: Make a Bubble Map
---

<div>
    <a href="https://plot.ly/~Dreamshot/6575/" target="_blank" title="City Populations" style="display: block;
    text-align: center;"><img src="https://plot.ly/~Dreamshot/6575.png" alt="City Populations" style="max-width: 100%;width:
    600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="Dreamshot:6575" src="https://plot.ly/embed.js" async></script>
</div>

Follow along below to make a bubble map of your own.

### Step 1 - Upload your Excel data to Chart Studio's grid

Open the data file for this tutorial in Excel. You can download the file here in
<a href="https://raw.githubusercontent.com/plotly/datasets/master/2014_us_cities.csv">CSV</a>
format.

![Data](http://i.imgur.com/Xv1qmsQ.png)

### Step 2 - Head to Chart Studio

Head to the Chart Studio Workspace at <a class="link--impt" href="/plot">https://plot.ly/plot</a> and sign into your free
Chart Studio account. Go to "Import," click "Upload a file," then choose your Excel file to upload. Your Excel file will
now open in Chart Studio's grid. For more about Chart Studio's grid, see the tutorial: <a class="link--impt"
href="/add-data-to-the-plotly-grid/">https://plot.ly/add-data-to-the-plotly-grid/</a>

### Step 3 - Creating Your Chart

Label your columns like we did below. You'll have a column for latitude and longitude. Then, click both the
"Size By" and "Text" options on the left; assign "Text" to the city and "Size By" to the population.

Select “Bubble map” from the MAKE A PLOT menu and then click bubble map in the bottom left.

![Plotting](http://i.imgur.com/u8fMJG1.png)

Your plot would initially look something like this.

![Original](http://i.imgur.com/CLVEdB1.png)

Since our data only encompasses the U.S., we can change the map layout to focus on the Lower 48, Alaska and Hawaii.
Head to the LAYOUT popover, then select the "Geo layout" option and select "USA" within the scope dropdown.

![Domain](http://i.imgur.com/abvC6TF.png)

You can just the "Type" of layout within the dropdown. We suggest going with "Albers usa" for this plot.

![Type](http://i.imgur.com/mo5ncke.png)

### Step 5 - Finalizing Your Graph

We’ve titled our chart. You can too. We came up with "2014 U.S. City Populations."

![Title](http://i.imgur.com/Iu8cKIY.png)

You can download your finished Chart Studio graph to embed in your Excel workbook. We also recommend including the Chart Studio link to the graph inside your Excel workbook for easy access to the interactive Chart Studio version. Get the link to your graph by clicking the "Share" button. Download an image of your Chart Studio graph by clicking EXPORT on the toolbar.

![Export](http://i.imgur.com/Xre9YPA.png)

To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Chart Studio graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Chart Studio graph link in a cell for easy access to the interactive Chart Studio version.

![Excel workbook](http://i.imgur.com/96NPoql.png)
