---
layout: two_column_layout
title: Make a Bubble Chart
subtitle: A Step by Step Guide to Bubble Charts
permalink: /make-a-bubble-chart
imageurl: http://i.imgur.com/nw806BP.png
state: active
tags: basic
---

#Make a Bubble Chart

<div>
    <a href="https://plot.ly/~cimar/211/" target="_blank" title="Life Expectancy v. Per Capita GDP, 2007" style="display: block; text-align: center;"><img src="https://plot.ly/~cimar/211.png" alt="Life Expectancy v. Per Capita GDP, 2007" style="max-width: 100%;width: 560px;"  width="560" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="cimar:211" src="https://plot.ly/embed.js" async></script>
</div>


##Step 1: Set up the grid

This is one way you could set up Plotly’s grid to make the graph above. Select the (T)ext column, (x) column, (y) column, and (S)ize as shown in the image for the different traces. The different colors represent different traces on the plot. Learn more about the grid [here](https://plot.ly/add-data-to-the-plotly-grid) and copy the data [here](https://plot.ly/~cimar/212). | ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image21.png)

Select “Bubble charts” from the MAKE A PLOT menu. Note: choosing a plot type will update the available options in the grid. | ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image10.png)
Click the “Size by” option in the sidebar, and the “Text” option. | ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image02.png)
For every set of x and y coordinates you select, select a column of values to set the size of the markers&#8230; | ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image19.png)
&#8230;and a column of text notations for every marker, (text notations are not required to make a bubble chart.) | ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image03.png)
Click the blue plot button in the sidebar to create the chart.  (For more help with the grid see: [https://plot.ly/add-data-to-the-plotly-grid](https://plot.ly/add-data-to-the-plotly-grid) ) |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image15.png)

##Step 2: Sizing and Log Axis

Your plot should look something like this.  Open the TRACES popover in the toolbar. |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image13.png) ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image11.png)
This is what the “Style” tab of the TRACES popover should look like for “All Traces (Scatter)”.We’ve set the “Size” field to scale the bubbles’ diameter, not area.  And we’ve evened out the pixel-to-value ratio (the higher the value in the box, the smaller the bubbles will be).We’ve also increased the weight of the white bubble outlines. |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image20.png)
Now, open the AXES popover in the toolbar.This is what the “Range” tab for the X Axis looks like. We’re opting for a log scale, which will result in a more linear plot. |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image04.png)  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image18.png)

##Step 3: Style and annotate!

For more on bubble charts, check out our [blog post](http://blog.plot.ly/post/71637573256/the-power-of-bubble-charts)

Your plot should now look something like this. In order to get the graph at the top of the chart, you’ll need to style it a little more. |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image12.png)
This is what the “General” and “Margins” tabs of the LAYOUT popover should look like. We’re giving our plot a grey background, and we’ve changed some of the font options. |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image07.png)  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image00.png)
This is what the “Lines” tab of the AXES popover looks like. We’ve changed the grey grid to white, and increased the line weight. | ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image17.png)
This is what the LEGEND popover looks like.  We’ve set its background to grey, too. |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image09.png)
We’ve titled our chart and axes.  And we’re using markup to link to our source data using the NOTES popover. Select the “Page” option, and hide the arrow. Because our note has nothing to do with specific data points, we’re going to nestle it below the x-axis.Now drag it to the bottom corner of your plot. |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image16.png) ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image01.png)
Once your note looks like you want it to, use the markdown &lt;a&gt; tag to link to the data source. |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image14.png) Source: GapMinder

Your finished chart should look something like this:

In order to get your graph looking like the one at the top of the tutorial, you’ll need to style it a little more. |  ![How to make a bubble chart online](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image06.png)

For more on bubble charts, check out our [blog post](http://blog.plot.ly/post/71637573256/the-power-of-bubble-charts).
