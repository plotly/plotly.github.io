---
layout: single
title: Color Points of a Scatter Plot by a Third Column
subtitle: A Step by Step Guide to Color Points of a Scatter Plot by a Third Column
permalink: /color-points-of-a-scatter-plot-by-third-column/
redirect_to: https://help.plot.ly/tutorials/
imageurl: /static/images/color-points-of-a-scatter-plot-by-third-column/colored-scatter.png
state: active
tags: plotly1
meta_description: Color points of a scatter plot by groups defined in a column of your data. Use Chart Studio to make interactive graphs for free, online.
actioncall: make a scatter plot
---

# How to Color Points of a Scatter Plot by a Third Column

<div>
    <a href="https://plot.ly/~Dreamshot/3251" target="_blank" title="Iris Plant Traits, by Type" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/3251.png" alt="Iris Plant Traits, by Type" style="max-width: 100%;width: 1154px;"  width="1154" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="Dreamshot:3251" src="https://plot.ly/embed.js" async></script>
</div>

### Step 1 : Set up the grid

[R](www.r-project.org/), a free programming environment for statistical computing and graphics, comes with several sample data sets to give you some data to work with right away. We've entered part of the [sepal and petal data](https://plot.ly/~Dreamshot/3249) into a Chart Studio grid. Our data includes measurements on sepal length and sepal width of 150 different irises, catagorized into three different species.<br><br>Once you've loaded the data, click **Fork and edit** to move the data into your Chart Studio workspace. | ![Load iris data into your Chart Studio workspace.](http://i.imgur.com/FKZKylI.png)

### Step 2: Graph the data

Select **Scatter Plots** from the **MAKE A PLOT** menu. Click **choose as x** and **choose as y** to specify the columns of $x$ and $y$ data. To color the data points by species, select **Group By** in the sidebar. Now you can select **choose as G** above the column of text, where the species information is contained. Click the blue **Scatter plot** button in the sidebar to create your graph. | ![Partitioning data points for a scatter plot](http://i.imgur.com/QBU8Y5D.png)

### Step 3: Editing Your Graph

Your graph should look something like this: | ![Default three trace scatter plot](http://i.imgur.com/cxEk2ST.png)
You can add or modify axis labels and the plot title by clicking and typing. Notice how the legend specifies the species of iris and each species has a different color on the plot. | ![Axis titles and trace legends.](http://i.imgur.com/byvVi9M.png)
Chart Studio graphs are interactive! You can hover over the scatter points for more information. [Styling options](/styling-and-customizing-graphs-video) are contained in the TRACES popover. Learn more about our [interactive features in three short videos](/zoom-pan-hover-controls). | ![The final graph is interactive.](http://i.imgur.com/hGuXkfN.png)
