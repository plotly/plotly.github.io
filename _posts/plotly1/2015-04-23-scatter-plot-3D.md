---
layout: single
title: Make a 3D Scatter Plot
subtitle: A Step by Step Guide to Making a 3D Scatter Plot
permalink: /plotly1/make-a-3d-scatter-plot/
redirect_to: https://help.plot.ly/make-a-3d-scatter-plot/
imageurl: /static/images/scatter-plot-3D/thum-scatter-plot-3D.png
state: active
tags: plotly1
meta_description: A tutorial on how to make a 3d scatter plot. Chart Studio is the easiest and fastest way to make and share graphs online.
actioncall: Make a 3D Scatter Plot
---

# Making a 3D Scatter Plot

<div>
    <a href="https://plot.ly/~mariahh/90/" target="_blank" title="Income, education, gender and prestige" style="display: block; text-align: center;"><img src="https://plot.ly/~mariahh/90.png" alt="Income, education, gender and prestige" style="max-width: 100%;width: 1031px;"  width="1031" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="mariahh:90" src="https://plot.ly/embed.js" async></script>
</div>

Most graphs have two axes, referred to often as the $ x $ axis and the $ y $ axis. We use a graph to understand the relationship between these two variables. A three-dimensional graph lets you introduce a third axis, typically called the $ z $ axis, and can help you understand the relationship between three variables.

Three-dimensional scatter plots are best when you have at least three features that you want to highlight in your graph. Using color and size you can highlight two additional features in your graph. Chart Studio’s interactive tools also let you explore your plot by zooming, hovering, and rotating your plot.

For this tutorial, we’re using the “Prestige” dataset from R’s “car” package. The data set contains information about status (quantified with the Pineo-Porter index), salary, years of schooling, and gender for job categories in the 1970s. You can learn more in [this document](http://www.princeton.edu/~otorres/Regression101R.pdf). If you follow along with the R tutorial at the link, you can take advantage of Chart Studio’s awesome [styling](http://vimeo.com/94000688), collaboration and [sharing](https://plot.ly/how-to-share-and-print-plotly-graphs/) tools. If you want to know about integrating Chart Studio with R, we have [excellent documentation](http://plot.ly/R)!

### Step 1: Set up the grid

For this tutorial, go to: [https://plot.ly/~mariahh/85](https://plot.ly/~mariahh/85). Click on **Fork and edit** to open this data set in your workspace. | ![Prestige grid](/static/images/scatter-plot-3D/prestige-grid.png)
Select 3d scatter plots from the **MAKE A PLOT** menu. We’re going to compare education, income and prestige. We’ll put “income (1971)” on the x axis by selecting *choose as x* and “education” (this is the number of years of education required for a certain job) on the y axis by selecting *choose as y*. Finally, we put “Pineo-Porter prestige score” on the z axis by selecting *choose as z*. | ![Set up grid](/static/images/scatter-plot-3D/set-up-grid.png)
We can assign color as a variable for “gender” in our 3d plot with the **Group by** option, located in the sidebar. Select **choose as G** in the column labeled “gender”. Click the blue **3d scatter plot** button, in the sidebar, to create the chart. This will automatically save it and prompt you with the option to share it. If you make your graph public, you can share it via Facebook, Twitter or Google+. Need help embedding your graph in a website or blog? We have a [tutorial](https://plot.ly/how-to-embed-plotly-graphs-in-websites/) for that. | ![Add G in chart](/static/images/scatter-plot-3D/add-g.png) | ![Share dialog](/static/images/scatter-plot-3D/share-dialog.png)

### Step 2: Style it

Your plot should look something like this. | ![3d scatter plot](/static/images/scatter-plot-3D/3d-scatter-plot.png)
Open the **TRACES** popover in the toolbar. Using the **Style** tab you can change the style, thickness, and color of the data points. Here we’ve made the jobs dominated by women blue and those dominated by men green. To close the **Traces** popover, click the X in the upper right. | ![Change style](/static/images/scatter-plot-3D/change-style.png)
You can add a title by clicking on **Click to enter Plot title**. You can change the font and size of the title and other annotations using the **LAYOUT** popover, and **Global Font**. | ![Change font](/static/images/scatter-plot-3D/change-font.png)
Still in the **LAYOUT** popover, we can change the Scene color, the margin color, and more. | ![Set margin color](/static/images/scatter-plot-3D/set-margin-color.png)

### Step 3: It’s interactive!

Love what you made? You can [share, download](https://plot.ly/how-to-share-and-print-plotly-graphs/) and [embed](https://plot.ly/how-to-embed-plotly-graphs-in-websites/) your plots. You can find the graph used in this tutorial, and the underlying data at: [https://plot.ly/~mariahh/90](https://plot.ly/~mariahh/90)

Your 3d scatter plot is interactive! Different views help us understand different information contained in the data set. In this view, we can see information about prestige and years of schooling. We can see that the number of years of schooling is correlated to prestige. This relationship appears to hold true for jobs dominated by both men (in green) and women (in blue). | ![How to make a 3d scatter plot online](/static/images/scatter-plot-3D/prestige-plot.png)
Changing the view allows us to compare salary and schooling. In this view we see clearly that jobs dominated by women tend to be lower wage jobs. | ![Alternate view of plot](/static/images/scatter-plot-3D/alt-view-of-plot.png)
