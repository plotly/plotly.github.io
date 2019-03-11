---
layout: single
title: Multiple Y Axes Graph
subtitle: A Step by Step Guide to Making a Graph with Multiple Y Axes
permalink: /make-a-graph-with-multiple-axes/
redirect_to: https://help.plot.ly/multiple-y-axes/
imageurl: /static/images/multiple-y-axes/thum-multiple-y-axes.png
state: active
tags: plotly1
meta_description: Create a graph with 2 or more traces, with a separate y-axis for each trace. Follow our step-by-step tutorial to make a multiple axes graph for free and online with Chart Studio.
actioncall: Make a Graph with Mulitple Y Axes
---

# Multiple Y Axes Graph

<div>
    <a href="https://plot.ly/~Dreamshot/575/" target="_blank" title="Orange Trace vs x-axis" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/575.png" alt="Orange Trace vs x-axis" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="Dreamshot:575" src="https://plot.ly/embed.js" async></script>
</div>

In this tutorial, you will learn how to make multiple-axes charts, like the one above with 3 y-axes.

### Step 1: Create a graph with multiple traces

Create a Chart Studio graph or open a graph with 2 or more traces, like the one to the right. We will create a separate y-axis for each of these 3 traces. You can follow along by using this Chart Studio graph: [https://plot.ly/~Dreamshot/575](https://plot.ly/~Dreamshot/575) | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image06.png)

### Step 2: Adding a second y-axis

Now, we’ll add a second y-axis to the right-hand-side of this plot. Make sure that your browser is pointed to [https://plot.ly/plot](https://plot.ly/plot) and that you have this chart &#8211; [https://plot.ly/~Dreamshot/575](https://plot.ly/~Dreamshot/575) &#8211; or another one open for editing.

Click on the AXES icon on the Chart Studio toolbar to open the AXES editing popover. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image11.png)

The AXES popover appears. Here’s what it looks like. Click on the “+” to add a new axis. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image10.png)

Here is where we add an extra y-axis to the right-hand-side of the graph. Select “Right” like in the screenshot, and click the blue “Go” button. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image15.png)

Close the AXES popover and take a look at our chart &#8211; It now has a second y-axis! Click on the second y-axis label to give it a name. In this chart, I named it “Y-Axis Number 2”. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image07.png)

### Step 3: Assign a data trace to the new y-axis

High five! You’ve created a second y-axis (on the right), but all three of the data traces still scale with the first y-axis (on the left). What gives? This is because all three traces are still assigned to the first y-axis. You need to assign a trace to the new y-axis in order for its data to scale with it &#8211; the steps below show you how.

First, click on the TRACES icon on the Chart Studio toolbar to open the TRACES popover. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image11.png)
Select the green trace from the traces dropdown. Then, click “Y2” under “Axes” to assign the green trace to the new y-axis. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image08.png)
Close the AXES popover to inspect your chart. Notice that the green trace now scales with second y-axis on the right-hand-side. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image00.png)

### Step 4: Adjusting the y-axis range visually

If you’re reading this, you probably know that the range of each of your x and y axes can be precisely adjusted in the AXES popover. It is often faster and easier, however, to adjust the axes range visually by clicking-and-dragging the corners of your graph. See the screenshots below for a preview of how to do this.

Notice that the last green point overlaps the the last blue point. It would be clearer if there was a separation between these points. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image00.png)
Move your cursor around the bottom-corner of your chart until the cursor icon changes to a downward-facing arrow. Then, click and drag downwards. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image14.png)
Nice! The range of the 2nd y-axis is now adjusted, and there is more space between the blue and green traces. Looking much better! | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image13.png)

### Step 5: Adding a third y-axis

To add a third y-axis, follow same the steps above in “Adding a second y-axis.” This time, assign the blue data trace to the third y-axis. When you’re done, your chart might look like the chart on the right. Notice that the second and third y-axes on the right are overlapping. Don’t worry, we’ll clean this up in the next section. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image02.png)

### Step 6: Adjust space between 2nd and 3rd y-axes

In this chart, the 2nd and 3rd y-axes are overlapping. Ugly! These steps will show you how to space them apart. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image02.png)
Open the AXES popover again and select “X Axis” in the dropdown. Go to the “Layout” tab and change the span of the x-axis to 0 through 0.8. This will create extra space on the right-hand-side of the plot for our new y-axis. Nice! | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image12.png)
Finally, go back to our newest y-axis (“Y Axis 3”) in the AXES popover. Change its “Anchor to” attribute to “Free” and “Position” to 1 (see screenshot). | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image01.png)
There should now be a nice space between your 2 y-axes on the right-hand-side. Your chart should look something like the one on the right. If you have a legend and its overlapping the 3rd y-axis, you can click-and-drag the legend to move it more to the right of the chart. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image03.png)
If you haven’t already, you can assign the blue data trace to the third y-axis. Now, every data trace has its own y-axis. The set-up for how to do this in the TRACES popover is shown on the right. | ![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image16.png)


Your finished graph should look something like the one below. Notice that I added tick marks and colored the axes lines and labels to match the trace colors. Check out our video [styling](http://vimeo.com/94000688) tutorial to learn more. You can do this yourself under the “Lines” and “Labels” tabs for each y-axes in the AXES popover. Questions? Email education@plot.ly


![How to make a graph with multiple axes online](/static/images/multiple-y-axes/image05.png)
