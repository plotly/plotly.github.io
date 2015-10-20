---
layout: one_column_layout
title: Multiple Y Axes Graph
subtitle: A Step by Step Guide to Making a Graph with Multiple Y Axes
permalink: /make-a-graph-with-multiple-axes
imageurl: /static/images/multiple-y-axes/thum-multiple-y-axes.png
state: incactive
tags: basic
meta_description: Create a graph with 2 or more traces, with a separate y-axis for each trace. Follow our step-by-step tutorial to make a multiple axes graph for free and online with Plotly.
actioncall: Make a Graph with Mulitple Y Axes
---

#Multiple Y Axes Graph

<div>
    <a href="https://plot.ly/~Dreamshot/4437/" target="_blank" title="Online Dating" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/4437.png" alt="Online Dating" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="Dreamshot:4437" src="https://plot.ly/embed.js" async></script>
</div>

In this tutorial, you will learn how to make multiple-axes charts, like the one above with 2 y-axes.

### Step 1 - Create a Graph With Multiple Traces

Create a Plotly graph or open a graph with 2 or more traces, like the one below. We will create a separate y-axis for each of these traces. You can follow along by using this Plotly graph: https://plot.ly/~Dreamshot/4437 and find the data here.

![Graph](http://i.imgur.com/Rr5gRi2.png)

### Step 2 - Adding a Second Y-Axis

Now, we’ll add a second y-axis to the right-hand-side of this plot. Make sure that your browser is pointed to [https://plot.ly/plot](https://plot.ly/plot) and that you have this chart &#8211; [https://plot.ly/~Dreamshot/575](https://plot.ly/~Dreamshot/575) &#8211; or another one open for editing.

Click on the AXES icon on the Plotly toolbar to open the AXES editing popover. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image11.png)

The AXES popover appears. Here’s what it looks like. Click on the “+” to add a new axis. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image10.png)

Here is where we add an extra y-axis to the right-hand-side of the graph. Select “Right” like in the screenshot, and click the blue “Go” button. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image15.png) 

Close the AXES popover and take a look at our chart &#8211; It now has a second y-axis! Click on the second y-axis label to give it a name. In this chart, I named it “Y-Axis Number 2”. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image07.png)

### Step 3 - Assign a Data Trace to the New Y-Axis

High five! You’ve created a second y-axis (on the right), but all three of the data traces still scale with the first y-axis (on the left). What gives? This is because all three traces are still assigned to the first y-axis. You need to assign a trace to the new y-axis in order for its data to scale with it &#8211; the steps below show you how.

First, click on the TRACES icon on the Plotly toolbar to open the TRACES popover. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image11.png)
Select the green trace from the traces dropdown. Then, click “Y2” under “Axes” to assign the green trace to the new y-axis. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image08.png)
Close the AXES popover to inspect your chart. Notice that the green trace now scales with second y-axis on the right-hand-side. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image00.png)

###Step 4 - Adjusting the Y-Axis Range Visually

If you’re reading this, you probably know that the range of each of your x and y axes can be precisely adjusted in the AXES popover. It is often faster and easier, however, to adjust the axes range visually by clicking-and-dragging the corners of your graph. See the screenshots below for a preview of how to do this.

Notice that the last green point overlaps the the last blue point. It would be clearer if there was a separation between these points. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image00.png)
Move your cursor around the bottom-corner of your chart until the cursor icon changes to a downward-facing arrow. Then, click and drag downwards. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image14.png)
Nice! The range of the 2nd y-axis is now adjusted, and there is more space between the blue and green traces. Looking much better! | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image13.png)

### Step 5 - Finalizing Your Graph

Your plot should now look something like this. In order to get the graph at the top of the chart, you’ll need to style it a little more.

We’ve titled our chart. And we’ve linked to our source data in the x-axis label area.

You can download your finished Plotly graph to embed in your Excel workbook. We also recommend including the Plotly link to the graph inside your Excel workbook for easy access to the interactive Plotly version. Get the link to your graph by clicking the "Share" button. Download an image of your Plotly graph by clicking EXPORT on the toolbar.

Your finished chart should look something like this:

![Final chart]()

To add the Excel file to your workbook, click where you want to insert the picture inside Excel. On the INSERT tab inside Excel, in the ILLUSTRATIONS group, click PICTURE. Locate the Plotly graph image that you downloaded and then double-click it. Notice that we also copy-pasted the Plotly graph link in a cell for easy access to the interactive Plotly version.

![Excel workbook]()
