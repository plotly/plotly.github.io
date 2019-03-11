---
layout: single
title: Make a Bubble Chart
subtitle: A Step by Step Guide to Bubble Charts
permalink: /make-a-bubble-chart/
redirect_to: https://help.plot.ly/tutorials/
imageurl: /static/images/bubble-chart/thum-bubble-chart.png
state: active
tags: plotly1
meta_description: A bubble chart is a variation of a scatter plot, where each point can have a different radius, representing an extra dimension of data. Learn to make a bubble chart online.
popularity: frontpage
actioncall: Make a Bubble Chart
---

# Make a Bubble Chart

<div>
    <a href="https://plot.ly/~cimar/211/" target="_blank" title="Life Expectancy v. Per Capita GDP, 2007" style="display: block; text-align: center;"><img src="https://plot.ly/~cimar/211.png" alt="Life Expectancy v. Per Capita GDP, 2007" style="max-width: 100%;width: 560px;"  width="560" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="cimar:211" src="https://plot.ly/embed.js" async></script>
</div>


## Step 1: Set up the grid

This is one way you could set up Chart Studio’s grid to make the graph above. Select the (T)ext column, (x) column, (y) column, and (S)ize as shown in the image for the different traces. The different colors represent different traces on the plot. Learn more about the grid [here](https://plot.ly/add-data-to-the-plotly-grid) and copy the data [here](https://plot.ly/~cimar/212). | ![Bubble chart grid](/static/images/bubble-chart/bubble-chart-grid.png)

Select **Bubble charts** from the **MAKE A PLOT** menu. Note: choosing a plot type will update the available options in the grid. | ![Bubble charts in make a plot menu](/static/images/bubble-chart/bubble-charts-in-make-a-plot-menu.png)
Click the **Size by** option in the sidebar, and the **Text** option. | ![Bubble chart options](/static/images/bubble-chart/bubble-chart-options.png)
For every set of x and y coordinates you select, select a column of values ("Choose as S") to set the size of the markers&#8230; | ![How to make a bubble chart online](/static/images/bubble-chart/choose-as-s.png)
&#8230;and a column of text notations ("Choose as T") for every marker, (text notations are not required to make a bubble chart.) | ![How to make a bubble chart online](/static/images/bubble-chart/choose-as-t.png)
Click the blue plot button in the sidebar to create the chart.  (For more help with the grid see: [https://plot.ly/add-data-to-the-plotly-grid](https://plot.ly/add-data-to-the-plotly-grid) ) |  ![Blue plot button](/static/images/bubble-chart/blue-plot-button.png)

## Step 2: Sizing and Log Axis

Your plot should look something like this.  Open the **TRACES** popover in the toolbar. |  ![Initial bubble chart](/static/images/bubble-chart/initial-bubble-chart.png) ![How to make a bubble chart online](/static/images/bubble-chart/traces-popover.png)
This is what the **Style** tab of the **TRACES** popover should look like for “All Traces (Scatter)”.We’ve set the **Size** field to scale the bubbles’ diameter, not area. And we’ve evened out the pixel-to-value ratio (the higher the value in the box, the smaller the bubbles will be). We’ve also increased the weight of the white bubble outlines. |  ![Style tab adjusted](/static/images/bubble-chart/style-tab-adjusted.png)
Now, open the **AXES** popover in the toolbar. This is what the **Range** tab for the X Axis looks like. From looking at this y vs x bubble chart, it seems there could be an exponential relationship between y and x (y as a function of x). If that's the case, then there is a linear relationship between y and log(x). Indeed, if you use a log scale for the X Axis, the bubbles appear more linear. |  ![Axes icon](/static/images/bubble-chart/axes-icon.png)  ![How to make a bubble chart online](/static/images/bubble-chart/log-option.png)

## Step 3: Style and annotate!

For more on bubble charts, check out our [blog post](http://blog.plot.ly/post/71637573256/the-power-of-bubble-charts)

Your plot should now look something like this. In order to get the graph at the top of the chart, you’ll need to style it a little more. |  ![Log bubble chart](/static/images/bubble-chart/log-bubble-chart.png)
This is what the **General** and **Margins** tabs of the **LAYOUT** popover should look like. We’re giving our plot a grey background, and we’ve changed some of the font options. |  ![General layout options](/static/images/bubble-chart/general-layout-options.png)  ![Layout margins](/static/images/bubble-chart/layout-margins.png)
This is what the **Lines** tab of the **AXES** popover looks like. We’ve changed the grey grid to white, and increased the line weight. | ![Grid lines](/static/images/bubble-chart/grid-lines.png)
This is what the **LEGEND** popover looks like.  We’ve set its background to grey, too. |  ![Legend background](/static/images/bubble-chart/legend-background.png)
We’ve titled our chart and axes.  And we’re using markup to link to our source data using the **NOTES** popover. Select the **Page** option, and hide the arrow. Because our note has nothing to do with specific data points, we’re going to nestle it below the x-axis.Now drag it to the bottom corner of your plot. |  ![Add annotation](/static/images/bubble-chart/add-annotation.png) ![New text](/static/images/bubble-chart/new-text.png)
Once your note looks like you want it to, use the markdown &lt;a&gt; tag to link to the data source. |  ![Gapminder](/static/images/bubble-chart/gapminder.png) Source: GapMinder

Your finished chart should look something like this:

In order to get your graph looking like the one at the top of the tutorial, you’ll need to style it a little more. |  ![Finished bubble chart](/static/images/bubble-chart/finished-bubble-chart.png)

For more on bubble charts, check out our [blog post](http://blog.plot.ly/post/71637573256/the-power-of-bubble-charts).
