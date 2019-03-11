---
layout: single
title: Make a Graph with Error Bars
subtitle: A Step by Step Guide to Graphs with Error Bars
permalink: /plotly1/make-a-graph-with-error-bars/
redirect_to: https://help.plot.ly/make-a-graph-with-error-bars/
imageurl: /static/images/graph-with-error-bars/thum-graph-with-error-bars.png
state: active
tags: plotly1
meta_description: A tutorial on how to make a graph with error bars online. Chart Studio is the easiest and fastest way to make and share graphs online.
popularity: frontpage
actioncall: Make a Graph with Error Bars
---

# Make a Graph with Error Bars

<div>
    <a href="https://plot.ly/~Dreamshot/1151/" target="_blank" title="Points Scored in First Seven Games of Season" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/1151.png" alt="Points Scored in First Seven Games of Season" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="Dreamshot:1151" src="https://plot.ly/embed.js" async></script>
</div>


### Step 1: Set up the grid

This is one way you could set up Chart Studio’s grid to make the graph above (data here: [https://plot.ly/~cimar/209](https://plot.ly/~cimar/209) ). | ![plotly grid](/static/images/graph-with-error-bars/plotly-grid.png)
Select **Scatter plot** from the **MAKE A PLOT** menu. You can also add error bars to line plots and bar charts. | ![select scatter plot](/static/images/graph-with-error-bars/scatter-plot.png)
Click the **Error bars** option in the sidebar.| ![Error bars option](/static/images/graph-with-error-bars/options-error-bars.png)
Select the column of error values that correspond to your y-values. | ![Select error values Y](/static/images/graph-with-error-bars/select-error-values-y.png)
(Alternatives: you can also select error values to correspond to your x-values, or... | ![choose as error x](/static/images/graph-with-error-bars/alternative-choose-as-ex.png)
...by selecting the **Asymmetric errors** option instead, you can set two different sets of error values for each coordinate. “Ey-” sets the length of the bar extending beneath each point, and “Ey” sets the length of the bar extending out from above it.) | ![Asymmetric errors option](/static/images/graph-with-error-bars/asymmetric-errors-option.png) ![Select four columns](/static/images/graph-with-error-bars/select-four-columns.png)
Click the blue plot button in the sidebar to create the chart.  (For more help with the grid see: [https://plot.ly/add-data-to-the-plotly-grid/](https://plot.ly/add-data-to-the-plotly-grid/) | ![Make scatter plot](/static/images/graph-with-error-bars/make-scatter-plot.png)

### Step 2: Edit the error bars


Your plot should look something like this. Open the **TRACES** popover in the toolbar. | ![First scatter plot](/static/images/graph-with-error-bars/first-scatter-plot.png) ![Style tab](/static/images/graph-with-error-bars/style-tab.png)
This is what the **Error bars** tab of the **TRACES** popover should look like. We changed the weight of the bars, and made their feet a little wider. | ![How to make a graph with error bars online](/static/images/graph-with-error-bars/error-bars-tab.png)
(Alternative: you can add new error bars to a line plot, scatter plot, or bar chart from the **TRACES** popover. For example, you can add red error bars to the x-coordinates of every point, and set their length to 4% of the x-coordinate’s value.) | ![More error bars settings](/static/images/graph-with-error-bars/more-error-bars-settings.png) ![Red error bars](/static/images/graph-with-error-bars/red-error-bars.png)

### Step 3: Style and annotate!

Your plot should look something like this. In order to get the graph at the top of the chart, you’ll need to style it. | ![Second scatter plot](/static/images/graph-with-error-bars/second-scatter-plot.png) ![Style tab](/static/images/graph-with-error-bars/style-tab.png)
This is what the **Mode** and **Style** tabs of the **TRACES** popover should look like for **Mean**. For more information on styling line and scatter charts, check out: [http://help.plot.ly/make-a-line-or-scatter-graph/](/make-a-line-or-scatter-graph/) | ![Make a plot scatter plots](/static/images/graph-with-error-bars/make-a-plot-scatter-plots.png) ![Line and marker options](/static/images/graph-with-error-bars/line-and-marker-options.png)
Here’s how the **LAYOUT** popover should look. We’ve nudged the top margin, and we’re giving our chart a grey background. We’ve also changed the font. | ![Font and color options](/static/images/graph-with-error-bars/font-and-color-options.png) ![Margins options](/static/images/graph-with-error-bars/margins-options.png)
This is what the **Lines** tab of the **AXES** popover looks like for **All Axes**. We’ve made the grid lines white. | ![Grid lines colors](/static/images/graph-with-error-bars/grid-lines-color.png)
We’re hiding the legend in the **LEGEND** popover. | ![Hide legend](/static/images/graph-with-error-bars/hide-legend.png)
Your finished chart should look something like this: | ![Finished error bars chart](/static/images/graph-with-error-bars/finished-chart.png)
