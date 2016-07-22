---
layout: tutorial-single_layout.html
title: Style Your Plots in Plotly 2.0
subtitle: How to style your plots.
permalink: /style-your-plots/
imageurl: ../static/images/styling-and-customizing-graphs/style-thumb.png
state: active
tags: layout
order: 1
meta_description: A tutorial on how to style your plots in Plotly 2.0.
popularity: featured
carouselimageurl: ../static/images/styling-and-customizing-graphs/style-thumb.png
actioncall: How to Style Your Plots in Plotly 2.0

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/57.embed"></iframe>
live-graph-image:

steps: 
 - title: Getting Started
   sub-steps:
    - copy: "You've added your data, you've chosen your chart type, but how do you style your plot?"
    - copy: "For this styling tutorial, we'll be looking at different chart types and using various examples. If you've chosen a chart type but don't have specific data to work with, click the 'try an example' button to get a sample chart."
      img: "![Getting started](../static/images/styling-and-customizing-graphs/getting-started.gif)"

 - title: The STYLE section
   sub-steps: 
    - copy: "Once you've opened your [workspace](https://plot.ly/alpha/workspace/) and have your data in the grid, you'll have to do a few things to make your plot look just the way you want it."
    - copy: "The STYLE section on the right-hand side of your workspace is where you'll spend most of your time styling your plot."
      img: "![Style main](../static/images/styling-and-customizing-graphs/style-main-pic.png)"
    - copy: "Click on STYLE to open that panel. Each chart type is unique with its own attributes, so each section under the STYLE tab will have different selections depending on the chart you choose."
      img: "![Style panel](../static/images/styling-and-customizing-graphs/style-panel-main.png)"

 - title: Traces
   sub-steps: 
    - copy: "The 'Traces' section displays the attributes of the values and/or labels of your chart. For basic plots such as line and scatter, this is where you change the color and thickness of your lines. You can also play with the color, diameter and symbol of your points."
      img: "![Traces line and scatter](../static/images/styling-and-customizing-graphs/style-traces-line.gif)"
    - copy: "Your lines don't have to plain straight ones! Click on the TYPE dropdown to see the different dashes to spruce up your plot. The same can be done in a contour plot."
      img: "![Traces dashes](../static/images/styling-and-customizing-graphs/style-traces-dashes.gif)"  
    - copy: "If you're working with a bar chart or histogram, this is where you can change the size and spacing between each bar, as well as the bin size (the width of each bin on the number line) of your histogram. The two images below are examples of this."
      img: "![Traces bars](../static/images/styling-and-customizing-graphs/traces-bars.png)"
      img: "![Traces histogram](../static/images/styling-and-customizing-graphs/traces-histogram.png)"
    - copy: "For maps, contour plots and choropleths, this is where you'll find the colorscale. The heatmap has a 'Smoothing' option, which will create a continuous heatmap instead of color blocks."
      img: "![Traces smoothing](../static/images/styling-and-customizing-graphs/style-smoothing.gif)"
    - copy: "Plotly is all about interative charts, so you can hover over the plot to see the values of that plot. Depending on what values you want to appear when you hover, can click on the 'X', 'Y', 'Z' or ‘Name' under 'Values Shown on Hover'."
      img: "![Hover values](../static/images/styling-and-customizing-graphs/values-on-hover.png)" 

 - title: Layout
   sub-steps:    
    - copy: "The 'Layout' area is where you choose your colors, text position, or typeface. Certain colors and typeface are only available with a PRO subscription, so click [here](https://plot.ly/products/cloud/) to upgrade!"
    - copy: "The 'Canvas' tab is the background of your plot. You can change the width and height of your plot, as well as the background color."
      img: "![Canvas](../static/images/styling-and-customizing-graphs/style-canvas-.png)" 
    - copy: "When you click on the background color field, this is what appears."   
      img: "![Colour main](../static/images/styling-and-customizing-graphs/style-colour.png)" 
    - copy: "The 'Text' tab is where you add your plot title, and change the font, font color and font size of the title. The global text section controls all text of your plot (the title, the axes and legend labels). If you'd like a specific font for yout title, you change it in the fields below the text box."
      img: "![Title panel](../static/images/styling-and-customizing-graphs/style-title.png)" 
    - copy: "You can also change the margins and padding of your plot, as well as enable and disable your hover interaction."
      img: "![Padding and hover](../static/images/styling-and-customizing-graphs/Layout-padding-hover.png)" 

 - title: Notes
   sub-steps:     
    - copy: "If you want to add annotations to your plot, the 'Notes' section is the place. Click the blue '+ Annotation' button at the top right-hand side to add general notes, subtitles, the source of your data, and to automatically mark your data points."
      img: "![Notes](../static/images/styling-and-customizing-graphs/notes-section.gif)" 

 - title: Axes
   sub-steps:     
    - copy: "The 'Axes' section has sub-tabs that relate to the values and labels of your plot. The 'Titles' sub-tab is where you can label your axes by clicking on 'All', 'X', or 'Y', and just like the plot title, you're also able to change the font, font color and font size of the axes labels."
      img: "![Axes labels](../static/images/styling-and-customizing-graphs/style-axes-title.png)" 
    - copy: "To change the range of your axes, you'll need to visit the 'Range' sub-tab. You can leave it as auto, or click on 'Custom' and add the unix timestamps in the 'X-MIN' and 'X-MAX' fields under 'Selection. The range and axis specifications are done in unix timestamps."
      img: "![Axes range](../static/images/dates-time-series-and-timestamp/time-range.png)"
    - copy: "What does this mean? Say your plot shows a tick every two years, but you need the x-axis to show a tick mark every year. You have to set that step size and step offset variable, and to set those values, we need to use the unix timestamp. When you work with axis specifications, you have to convert the date to unix time in milliseconds for the step size, using [this](http://www.timestampconvert.com/) tool to convert our dates. Go to the 'Tick Markers' sub-tab, then select 'Linear' under 'Number of Markers', then add the unix timestamp to the step size and step offset fields."
      img: "![Time step size](../static/images/dates-time-series-and-timestamp/time-step-size.png)" 
    - copy: "Another option is to select 'Custom' in the same section, and enter the number of markers you want to show on your plot. If your plot sets the dates as biannual, but you want to show every consecutive year, this is the other place to set that up."
      img: "![Axes panel](../static/images/dates-time-series-and-timestamp/time-tick-marker.png)"
    - copy: "Let's go back a few sub-tabs, to 'Lines'. This is where you can add grid lines and zero lines to your plot. You have the option of selecting 'All' for both your x and y axes, or select them individually. If you click on 'Show' under the first 'Line', you can position these lines at the top or bottom, or left or right of your plot. The 'Grid Lines' option displays a grid behind your graph. The zero line shows where '0' is on your plot, which could be helpful if you have both positive and negative values. You can choose the thickness and color for all these lines."
      img: "![Axes lines](../static/images/styling-and-customizing-graphs/style-lines.gif)"

 - title: Legend
   sub-steps:    
    - copy: "If you'd like to show your legend on your plot, click on 'Legend', and select 'Show'. The Text area is where you can change the font, font color and font size of the labels of your legend. You can also create a border around your legend, adjust the border width, play around with the color of its edges and its background. The positioning of the legend can be changed as well, along with the orientation. You also have two options for the trace order in your legend; showing your traces as is, or reversing the order."
      img: "![Legend](../static/images/styling-and-customizing-graphs/style-legend.png)"

 - title: Shapes
   sub-steps: 
    - copy: "The 'Shapes' section is where you can add shapes to your plot. Click the blue '+ Shape' button on the top right-hand side. You have a few options to choose from, including vertical and horizontal lines and bands, custom lines and rectangles, and circles. Below, we show you how to add a circle to your graph."
      img: "![Shapes](../static/images/styling-and-customizing-graphs/style-shapes.gif)"   

 - title: Tips and Tricks
   sub-steps: 
    - copy: "Did you know that you can also use HTML syntax to your title and labels? To learn more about HTML and how to add tags and codes to your text, visit [this](http://help.plot.ly/adding-HTML-and-links-to-charts/) page!"
---


