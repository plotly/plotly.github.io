---
layout: single
title: Make a Box Plot in Chart Studio
subtitle: A Step by Step Guide to Making a Box Plot
permalink: /plotly1/make-a-box-plot/
redirect_to: https://help.plot.ly/make-a-box-plot/
imageurl: /static/images/how-to-make-a-boxplot/thum-how-to-make-a-boxplot.png
state: active
tags: plotly1
meta_description: Box plots are used to better understand how values are spaced out in different sets of data. Follow this step-by-step tutorial to make a box plot for free and online with Chart Studio.
popularity: frontpage
actioncall: Make a Box Plot in Chart Studio
---

# Make a Box Plot

<div>
    <a href="https://plot.ly/~Nicole_G/22/" target="_blank" title="Points Scored per NBA Game&lt;br&gt;data taken from &lt;i&gt;&lt;a href=&quot;https://plot.ly/jackp/969&quot;&gt;Points Scored by the Top 50 Scoring NBA Players in 2012&lt;/a&gt;&lt;/i&gt;" style="display: block; text-align: center;"><img src="https://plot.ly/~Nicole_G/22.png" alt="Points Scored per NBA Game&lt;br&gt;data taken from &lt;i&gt;&lt;a href=&quot;https://plot.ly/jackp/969&quot;&gt;Points Scored by the Top 50 Scoring NBA Players in 2012&lt;/a&gt;&lt;/i&gt;" style="max-width: 100%;width: 854px;"  width="854" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="Nicole_G:22" src="https://plot.ly/embed.js" async></script>
</div>


If you think you want to know more about what box plots are, read this dataliteracy article by Ben Chartoff: [Make a Box Plot](http://help.plot.ly/make-a-box-plot/). Follow along below to make a box plot of your own.

### Step 1: Set up the grid

This is one way you could set up Chart Studio’s grid to make the graph above. Grab the data set [here](https://plot.ly/~cimar/205). | ![Data set in grid](/static/images/how-to-make-a-boxplot/data-set-in-grid.png)
Select **Box plots** from the **MAKE A PLOT** menu. | ![Box plot in Make a Plot menu](/static/images/how-to-make-a-boxplot/box-plot-in-make-a-plot-menu.png)
Select **Choose as Y** for each column and click the blue **Plot** button in the sidebar to create the chart.  (For more help with the grid see [Add Data to the Chart Studio Grid](https://plot.ly/add-data-to-the-plotly-grid/) ) | ![Blue plot button](/static/images/how-to-make-a-boxplot/blue-plot-button.png)

### Step 2: Traces

Your plot should look something like this.  Open the **TRACES** popover in the toolbar. | ![Default box plot](/static/images/how-to-make-a-boxplot/default-box-plot.png) ![Traces popover in toolbar](/static/images/how-to-make-a-boxplot/traces-popover-in-toolbar.png)
This is what the **Mode** tab of the **TRACES** popover should look like for “All Traces (Box)”. We’ve elected to show all points alongside our boxes, not just the outliers. | ![Mode tab show points](/static/images/how-to-make-a-boxplot/mode-tab-show-points.png)

### Step 3: Style and annotate!

Your plot should look something like this. In order to get the graph at the top of the chart, you’ll need to style it more. | ![Box plot all points](/static/images/how-to-make-a-boxplot/box-plot-all-points.png) ![Style tab](/static/images/how-to-make-a-boxplot/style-tab.png)
This is what the **Style** tab of the **TRACES** popover should look like for “All Traces (Box)”.We’ve narrowed our boxes, spread them out more, and stroked them with a thinner weight. We’ve also made the accompanying points smaller and more spread-out. | ![Style tab all traces](/static/images/how-to-make-a-boxplot/style-tab-all-traces.png)
We’ve also changed the fill color of each trace in the **Mode** tab of the **TRACES** popover. This is what the tab looks like for “Carmelo Anthony”. | ![Change fill color](/static/images/how-to-make-a-boxplot/change-fill-color.png)
(Alternative: We didn’t, but you can also change the color of the box plot strokes, in the **Style** tab of the **TRACES** popover.) | ![How to make a box plot online](/static/images/how-to-make-a-boxplot/change-stroke-color.png)
Here’s how the **LAYOUT** popover should look. We’ve nudged the top margin, and we’re giving our chart a grey background. We’ve also changed the font. | ![Layout popover changes](/static/images/how-to-make-a-boxplot/layout-popover-changes.png) ![Layout margins changes](/static/images/how-to-make-a-boxplot/layout-margins-changes.png)
This is what the **Lines** tab of the **AXES** popover looks like for “All Axes”. We’ve made the grid lines white, and the x-axis a little heavier. | ![Lines tab of Axes popover all Axes](/static/images/how-to-make-a-boxplot/lines-tab-axes-popover-all-axes.png)
This is what the **Labels** tab of the **AXES** popover looks like for “X Axis”. We’ve rotated the labels. | ![Lines popover X axis](/static/images/how-to-make-a-boxplot/lines-tab-axes-popover-x-axis.png)
We’re hiding the legend in the **LEGEND** popover. | ![Legend popover](/static/images/how-to-make-a-boxplot/legend-popover.png)
We’ve titled our chart and used markup to format our text and source our data, which in this case is another plotly graph: [Points Scored by the Top 50 Scoring NBA Players in 2012]((https://plot.ly/online-graphing/tutorials/make-a-box-plot/)). | ![New title](/static/images/how-to-make-a-boxplot/new-title.png)
Your finished chart should look something like this: | ![Finished chart](/static/images/how-to-make-a-boxplot/finished-chart.png)
