---
layout: two_column_layout
title: Label Points With Text in a Scatter Plot
subtitle: A Step-by-Step Guide to Labeling Points With Text in a Scatter Plot
permalink: /label-points-with-text-in-a-scatter-plot
imageurl: 
state: inactive
tags: basic
meta_description: Add text labels to points in a scatter plot. Easily make interactive graphs online and for free with Plotly.
actioncall: Make a scatter plot
---

#How To Label Points With Text in a Scatter Plot

<div>
    <a href="https://plot.ly/~Dreamshot/3318" target="_blank" title="Company Losses" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/3318.png" alt="Company Losses" style="max-width: 100%;width: 1154px;"  width="1154" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="Dreamshot:3318" src="https://plot.ly/embed.js" async></script>
</div>

### **Step 1:** Set up the grid

The graph above lets you compare relative losses with absolute losses for certain companies after the 2008 crash. We’ve already entered the [loss data](https://plot.ly/~Dreamshot/3163) into Plotly. You can click the link to open the data set. Once the data loads, click **Fork and edit** to load the data into your Plotly workspace.| ![Loss data loaded in your workspace for graphing](http://imgur.com/kgcUpBv.png)

### **Step 2:** Associating text to each data point

Once you've loaded the data in Plotly, select **Scatter plot** from the **MAKE A PLOT** menu. Look for the **text** option in the sidebar. This will enable you to select columns that associate text with corresponding data points. For each group of data that you want to plot, you'll need to select a column of $x$-values, a column of $y$-values, and a column for the text labels.
When you're finsihed, click on the blue **Scatter plot** button in the sidebar. | ![Making a scatter plot with text associated to each data point.](http://imgur.com/FYbjZty.png)

### **Step 3:** Adding text labels to the points of a graph 

Your scatter plot should look something like this: | ![Scatter plot before adding text labels to data points](http://imgur.com/Djfz4y0)
To add text labels, open the Traces popover by selecting **TRACES** from the toolbar. You can add labels to an individual trace by selecting that trace from the dropdown menu, or select **All traces (scatter)** to label all the points in your scatter plot. Here we position the labels on individual traces in order to avoid overlapping labels. We start with Col1. In the Mode tab, look for "Lines/Markers" and select the option of text over a point. | ![Labeling points in the TRACES popover.](http://i.imgur.com/RR6XEB0.png)<a href="http://imgur.com/RR6XEB0"><img src="http://i.imgur.com/RR6XEB0.png" title="Text Overlay" /></a>
To position the labels, click on the **Style** tab in the Traces popover. In order to have the lables appear directly above the data points, click on the arrow that points up in the "...Position" option. | ![Options for positioning the text labels.](http://i.imgur.com/jZBxIkZ.png)
Repeat this process for Col4 and Col7. For Col4, we position the text labels below the scatter points. For Col7, we position them above the scatter points. | ![Position text labels below data points](http://i.imgur.com/zoxrGNi.png)

### **Step 4:** Styling Your Graph

Your graph should now look something like this: | ![Image of default graph with point labels](http://i.imgur.com/IMdRjip.png)
To make your scatter points all have the same color, head to **TRACES**, then in the drop down menu select the tab called **All traces (scatter)**. Go to the **Style** tab and set the marker color to your liking. | ![Style scatter markers options](http://i.imgur.com/PNQvQjz.png)
You can label your axes by clicking on the **Click to enter X axis title** and **Click to enter Y axis title** on your graph. The finished product should look something like this: | ![Finished graph with labeled points.](http://i.imgur.com/88Yl3n2.png)

