---
layout: one_column_layout
title: Three Y Axes Graph
subtitle: A Step by Step Guide to Making a Graph with Three Y Axes
permalink: /make-a-graph-with-three-y-axes
imageurl: /static/images/multiple-y-axes/thum-multiple-y-axes.png
state: inactive
tags: basic
meta_description: Create a graph with 3 traces, with a separate y-axis for each trace. Follow our step-by-step tutorial to make a three axes graph for free and online with Plotly.
actioncall: Make a Graph with Three Y Axes
---

#Three Y Axes Graph

<div>
    <a href="https://plot.ly/~Dreamshot/6499/" target="_blank" title="Business Data" style="display: block; 
    text-align: center;"><img src="https://plot.ly/~Dreamshot/6499.png" alt="Business Data" style="max-width: 100%;width: 
    600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="Dreamshot:6499" src="https://plot.ly/embed.js" async></script>
</div>

Follow along below to make a pie chart of your own.

### Step 1 - Upload your Excel data to Plotly's grid

Open the data file for this tutorial in Excel. You can download the file here in <a href="https://raw.githubusercontent.com/plotly/datasets/master/cost_output_defective.csv">CSV</a>
format.

![Data](http://i.imgur.com/o0r1tGj.png)

### Step 2 - Head to Plotly
      
Head to Plotly's Workspace at <a class="link--impt" href="/plot">https://plot.ly/plot</a> and sign into your free 
Plotly account. Go to "Import," click "Upload a file," then choose your Excel file to upload. Your Excel file will 
now open in Plotly's grid. For more about Plotly's grid, see the tutorial: <a class="link--impt" 
href="/add-data-to-the-plotly-grid/">https://plot.ly/add-data-to-the-plotly-grid/</a>

### Step 3 - Creating Your Chart

Label your columns like we did below. You'll have three y-axis columns (cost, output, defective) and one x-axis 
column (date). Select “Line plots” from the MAKE A PLOT menu and then click line plot in the 
bottom left.

![Plotting](http://i.imgur.com/pX7MAS1.png)

Your plot would initially look something like this.

![Original](http://i.imgur.com/fgyLUku.png)

Head to the TRACES popover and access Col2. Prepare to add the second y-axis. Click "New Axis/Subplot..."

![New Axis](http://i.imgur.com/0wG9oM6.png)

You'll want to apply your new y-axis to the right side of the graph.

![Right](http://i.imgur.com/QcRkOf0.png)

Your graph should now look something like this:

![Progress](http://i.imgur.com/IYQcLUA.png)

Now, we'll peform a similar process for Col3. Instead of applying third y-axis to the right side of the graph,
choose "free left" instead. 

![Free left](http://i.imgur.com/q1BRAeF.png)

Your graph should now look something like this:

![Progress](http://i.imgur.com/p19DIG2.png)

A little messy, but not to worry; we'll clean it up!

### Step 4 - Sizing and Styling!

You might notice that the y-axis is busy with grid lines. Open the AXES popover, then Lines in the toolbar to clean 
this up. Select the first and second y-axes and turn grid lines "off."

![Grid lines](http://i.imgur.com/4BV5Pfr.png)

Next, ensure that all your y-axes range starts at 0. Open the Axes popover, then Range and adjust it to 0. Do this
for all y-axes.

![Range](http://i.imgur.com/QG1T8hA.png)

Your graph should now look something like this:

![Progress](http://i.imgur.com/Y4f1J7K.png)
