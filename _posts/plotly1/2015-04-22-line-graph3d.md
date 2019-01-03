---
layout: single
title: Make a 3D Line Graph
subtitle: A Step by Step Guide to Making a 3D Line Graph
permalink: /make-a-3d-line-chart/
redirect_to: https://help.plot.ly/make-a-3d-line-plot/
imageurl: /static/images/line-graph3d/line-graph3d.png
state: active
tags: plotly1
meta_description: A tutorial on how to make a 3d chart online. Chart Studio is the easiest and fastest way to make and share graphs online.
actioncall: Make a 3D Line Graph
---

# Make a 3D Line Graph

<div>
    <a href="https://plot.ly/~mariahh/72/" target="_blank" title="Helix" style="display: block; text-align: center;"><img src="https://plot.ly/~mariahh/72.png" alt="Helix" style="max-width: 100%;width: 742px;"  width="742" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="mariahh:72" src="https://plot.ly/embed.js" async></script>
</div>

Most graphs have two axes, often referred to as the x and y axis. We use a graph to understand the relationship between these two variables. A 3-dimensional graph lets you introduce a third axis, typically called the z axis, and can help you to understand the relationship between all three variables.

Three-dimensional line graphs are often used by mathematicians and scientists to draw functions of two variables. For example, a helix is a smooth curve in 3 dimensions with a spiral shape that is common in biology. Mathematically, we can describe a helix using parametric equations, that is, as three functions of a single parameter, often labeled $ t $. The example that we’ll use in this tutorial is the following:

<p>$ \begin{equation} \left\{ \begin{aligned} x(t) &amp;= \cos(t) \quad\\ y(t) &amp;= \sin(t) \quad\\ z(t) &amp;= t \end{aligned} \right. \end{equation} $</p>

### Step 1: Set up the grid

We’re going to set up the grid with three columns of data, each representing one of the functions of $ t $ above. If you want a shortcut, you can find the data at: [https://plot.ly/~mariahh/71.](https://plot.ly/~mariahh/71)

To start, visit the Chart Studio workspace at [https://plot.ly/plotSelect](https://plot.ly/plot) +NEW, and then Grid. | ![How to make a 3d line chart online](/static/images/line-graph3d/image10.png)
Select 3d line plots from the MAKE A PLOT menu.The instructions in the sidebar explain the structure of the data we will need to produce. | ![How to make a 3d line chart online](/static/images/line-graph3d/image05.png)
First, we will generate the $ z(t)=t $ values using the *Generate x-values* option in the DATA TOOLS menu. | ![How to make a 3d line chart online](/static/images/line-graph3d/image04.png)
We’re going to plot two periods of the helix. Since the helix described above has period $ t $ values between 0 and ~12.57. We generate 200 values. | ![How to make a 3d line chart online](/static/images/line-graph3d/image09.png)
We can rename the column of data by clicking on the arrow next to the title “Linear scale”. Select Rename, and type in the label for your column. | ![How to make a 3d line chart online](/static/images/line-graph3d/image02.png)
To generate values for $ y(t) $, we will again use Chart Studio’s built-in data tools. From the DATA TOOLS menu, select *Formulas f(x)*.| ![How to make a 3d line chart online](/static/images/line-graph3d/image01.png)
To generate the values for $ x=t $. To tell Chart Studio which values we want to apply the cosine function to, we select choose as x just below the label “t” in the first column of the grid.Click *Run* in the Formulas f(x)sidebar to generate the $ x(t) $ values.We follow the same steps to produce the values for $ \sin(x) $ in the sidebar. | ![How to make a 3d line chart online](/static/images/line-graph3d/image01.png)
Finally, select 3d line plots from the MAKE A PLOT menu. Choose the column “t” as z, column “sin(t)” as y, and “cos(t)” as x.Click the blue button in the sidebar to create the plot. | ![How to make a 3d line chart online](/static/images/line-graph3d/image07.png)

### Step 2: Style it

Your plot should look something like this. | ![How to make a 3d line chart online](/static/images/line-graph3d/image08.png)

Open the TRACES popover in the toolbar. Using the *Style* tab you can change the style, thickness and color of the helix.To close the Traces popover, click on the “X” in the upper right. | ![How to make a 3d line chart online](/static/images/line-graph3d/image00.png)

You can add a title by clicking on *Click to enter Plot title*. | ![How to make a 3d line chart online](/static/images/line-graph3d/image03.png)

Wait, there’s more! In the LAYOUT popover, we can change the Scene color, the margin color, the font of the title and more. | ![How to make a 3d line chart online](/static/images/line-graph3d/image12.png)

Want to see the original points that generated your 3d line plot? Go back to the TRACES popover. Change the Lines/Markers to the dot with line. | ![How to make a 3d line chart online](/static/images/line-graph3d/image11.png)

Don’t forget to save your work by clicking on SAVE in the toolbar above your graph.Once you’ve saved your graph, you can use the Share popover to add collaborators (they’ll have access to both your graph and your data).If you make your graph public, you can share using Facebook, Twitter or Google+. Need help embedding your graph in your website or blog? We have a [tutorial for that.](https://plot.ly/how-to-embed-plotly-graphs-in-websites/) | ![How to make a 3d line chart online](/static/images/line-graph3d/image06.png)

Don’t forget, your graph is interactive! Using your mouse, you can drag the helix to change perspective. | ![How to make a 3d line chart online](/static/images/line-graph3d/image13.png)

Love what you made? You can [share, download](https://plot.ly/share-print/) and [embed](https://plot.ly/embed/) your plots.You can find the graph used in this tutorial, and the underlying data at: [https://plot.ly/~mariahh/72](https://plot.ly/~mariahh/72)
