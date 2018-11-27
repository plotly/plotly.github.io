---
layout: tutorial-single_layout
title: Make a Line of Best Fit in Chart Studio
subtitle: How to make a line of best fit in Chart Studio
permalink: /make-a-line-of-best-fit/
redirect_from: /plotly1/make-a-line-of-best-fit/
imageurl: ../static/images/line-of-best-fit/best-fit-thumb.png
state: active
tags: analysis
order: 1
meta_description: A tutorial on how to make a line of best fit in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: How to Make a Line of Best Fit in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:125

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/#fitting-tools).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/125.embed"></iframe>
live-graph-image:

steps:
 - title: Getting Started
   sub-steps:
    - copy: "A line of best fit, also called a trend line or linear regression, is a straight line drawn on a graph that best represents the data on a plot. This line passes through some of the points, all of the points, or none of the points. It can be used to make predictions or to show trends in data. It's a pretty cool feature to add to your plots, so let's get started!"

 - title: Add Your Data
   sub-steps:
    - copy: "The first step is to head to the Chart Studio [workspace](https://plot.ly/create/line-of-best-fit/) and [add your data](http://help.plot.ly/add-data-to-the-plotly-grid/)."

 - title: Create Your Plot
   sub-steps:
    - copy: "After your data's been added, go to GRAPH on the left-hand side, then 'Create'. Choose your 'Chart type', and add your traces using the X and Y dropdown (this section is different depending on the chart type)."
    - copy: "Like the way we've styled this plot? For more styling tips, see [this](http://help.plot.ly/style-your-plots/) tutorial!"

 - title: Select Your Fit
   sub-steps:
    - copy: "When you've finished plotting your data, visit the ANALYSIS section on the left-hand side of your workspace. Click on the blue '+ Analysis' button, then click on the dropdown menu and select 'Fit'."
      img: "![Analysis section](../static/images/line-of-best-fit/analysis-section.png)"
    - copy: "Select your 'Target Trace' (remember, these are the traces you've set up earlier). You'll then have to select the function you want under 'Function Family'. The dropdown menu has a few to choose from including linear, quadratic, polynomial, and exponential to name a few."
      img: "![Common fit function](../static/images/line-of-best-fit/common-fit-function.png)"
    - copy: "Alternatively, you have the option of adding your own fit function by selecting 'Custom fit function' and entering it in the field. You can also enter your parameters in the 'Constant Estimates' fields."
      img: "![Custom fit function](../static/images/line-of-best-fit/custom-fit-function.png)"
    - copy: "Your advanced options include fitting to a specific range and/or displaying your fit over a specific range."
      img: "![Advanced options](../static/images/line-of-best-fit/advanced-options.png)"
    - copy: "The blue 'More' button on the bottom right will display two output options. You have the choice of setting your output with evenly spaced points and using the slider to enter your points, or your points matching your X data."
      img: "![More button](../static/images/line-of-best-fit/more-button.png)"
    - copy: "The last thing to do is click 'RUN' at the bottom. We've chosen the 'Linear' function, and this is what our plot looks like with the line of best fit."
      img: "![Run fit](../static/images/line-of-best-fit/run-function.png)"
    - copy: "Don't forget to save your graph and show it off to your friends by sharing it. For more information on how to save, share, and export, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page!"
---
