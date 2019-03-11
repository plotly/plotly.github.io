---
layout: single
title: Make an Area Graph
subtitle: A Step by Step Guide to Making an Area Graph
permalink: /make-an-area-graph/
imageurl: /static/images/How-to-make-an-area-graph/thum-How-to-make-an-area-graph.png
state: active
tags: plotly1
meta_description: An area graph is a type of line graph where the area between the lines and the x-axis is filled with color or texture. In this step-by-step tutorial, learn to make a area graph online.
actioncall: Make an Area Graph
---

# Make an Area Graph

<div>
    <a href="https://plot.ly/~Dreamshot/564/" target="_blank" title="&lt;br&gt;NYC vs. LA: Population 1900-2010" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/564.png" alt="&lt;br&gt;NYC vs. LA: Population 1900-2010" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="Dreamshot:564" src="https://plot.ly/embed.js" async></script>
</div>


Area plots are the same as scatter and line plots, but with different trace options selected to fill the area under the curve. Follow along below to make an area plot in Chart Studio.

### Step 1: Setting up the data in the grid


This is how you would set up Chart Studio’s grid to make the graph above (you can grab the data [here](https://plot.ly/~Dreamshot/566)). Select **choose as X** for Column 1 and select **choose as Y** for both Columns 2 and 3, then click the blue plot button to create the chart. | ![LA vs NY population](/static/images/How-to-make-an-area-graph/la-vs-ny-population.png)

### Step 2: Adding fill under traces

To make an area plot from a line plot, edit the **Fill To** attribute in the Mode tab of the **TRACES** popover.

Here’s how the **TRACES** popover for “trace 0” looks. Notice **Fill To** has been set to “Y=0”. | ![Trace 0 mode](/static/images/How-to-make-an-area-graph/trace-0-mode.png)
Here’s how the **TRACES** popover for “trace 1” looks. Notice **Fill To** has been set to “Next Y”. | ![Trace 1 mode](/static/images/How-to-make-an-area-graph/trace-1-mode.png)

### Step 3: Optional styling to make your plot prettier

Nice! Now you have your area plot. If you want, you can change the colors and apply smoothing to the lines to get a chart that looks like one at the top of the tutorial.

Here’s how your area chart looks before styling. | ![Chart before styling](/static/images/How-to-make-an-area-graph/chart-before-styling.png)
Here’s how the **TRACES** popover looks with smoothing and the change of colors. The smoothing button is highlighted in red. | ![Smoothing button highlighted](/static/images/How-to-make-an-area-graph/smoothing-button-highlighted.png) ![Trace 1 Style](/static/images/How-to-make-an-area-graph/trace-1-style.png)
Here’s how the **AXES** popover looks with the axes lines thickened and made white. | ![All axes lines thickened](/static/images/How-to-make-an-area-graph/all-axes-lines-thickened.png)
Here’s how the **LAYOUT** popover looks with the plot and margin background color changed to grey. |![Grey layout popover](/static/images/How-to-make-an-area-graph/grey-layout-popover.png)
Your finished chart should look something like this. | ![Finished area graph](/static/images/How-to-make-an-area-graph/finished-area-graph.png)
