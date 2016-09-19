---
layout: tutorial-single_layout
title: Range Slider and Timescale Buttons in Plotly 2.0
subtitle: Add these great tools to your already interactive plot.
permalink: /range-slider/
imageurl: ../static/images/styling-and-customizing-graphs/rangesliderandtimescalethumb.png
state: active
tags: layout
order: 4
meta_description: A tutorial on the range slider and timescale buttons in Plotly 2.0.
popularity: featured
carouselimageurl:
actioncall: Range slider and timescale buttons in Plotly 2.0
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:190

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/range-slider/) or [R](https://plot.ly/r/range-slider/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/190.embed"></iframe>
live-graph-image:

steps:
 - title: Getting Started
   sub-steps:
    - copy: "An excellent tool, especially for a [time series plot](http://help.plot.ly/make-a-time-series-graph/), the range slider and timescale buttons feature is a way to display a specific range within your chart. This interactive slider allows you to experience your graphs on a whole other level."

 - title: Add Your Data
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/alpha/workspace/) and [add your data](http://help.plot.ly/add-data-to-the-plotly-grid/). "

 - title: Create Your Plot
   sub-steps:
    - copy: "After your data's been added, go to GRAPH on the left-hand side, then 'Create'. Choose your 'Chart type', and add your traces using the X and Y dropdown (this section is different depending on the chart type)."
    - copy: "If you're creating a plot with dates and/or times, it's very important to format your data correctly, so make sure to check out [this](http://help.plot.ly/date-format-and-time-series/) page first."
    - copy: "Like the way we've styled this plot? For more styling tips, see [this](http://help.plot.ly/style-your-plots/) tutorial!"

 - title: Add Your Range Slider
   sub-steps:
    - copy: "After you've [plotted](http://help.plot.ly/tutorials/#basic) and [styled](http://help.plot.ly/style-your-plots/) your chart, you're ready to add the range slider feature."
    - copy: "In the same 'Axes' section, go to the 'Range Slider' sub-tab and click on 'Show'."
      img: "![Range slider tab](../static/images/styling-and-customizing-graphs/range-slider.png)"
    - copy: "The range slider will appear under your plot."
      img: "![Range slider](../static/images/styling-and-customizing-graphs/rangesliderunderchart2.png)"    
    - copy: "The height of the slider can be adjusted to your liking, and you can choose the slider background color, border color and width."
      img: "![Range slider attributes](../static/images/styling-and-customizing-graphs/rangesliderattributes.png)"
  
 - title: Add Your Timescale Button
   sub-steps:
    - copy: "Next is adding your timescale button(s). If you're plotting a time series chart, it's important to set your times and dates in the proper format, otherwise this feature won't appear in your workspace. Refer to [this](http://help.plot.ly/date-format-and-time-series/) helpful page for more information."
    - copy: "After formatting your time and/or dates, click on the 'Timescale Buttons' subtab (it's just underneath the 'Range Slider' subtab) in the same 'Axes' section. Then click the blue '+Button' button."
      img: "![Timescale](../static/images/styling-and-customizing-graphs/timescale.png)"
    - copy: "You'll notice these two buttons will appear on your plot. The 'reset' button is there by default, and it's to reset your setting after you've clicked on a specific timescale button."
      img: "![Reset button](../static/images/styling-and-customizing-graphs/reset button.png)"
    - copy: "The button next to it is the one you'll set up. We'll start with adding a timescale set for one month. Double-click on the field next to LABEL to add your own."
      img: "![First button](../static/images/styling-and-customizing-graphs/1 month.png)"
    - copy: "Click on the STEP field and select from the dropdown menu."
      img: "![First button](../static/images/styling-and-customizing-graphs/step.png)"
    - copy: "For our 6-month timescale, we've chose the 'Month' as the STEP, and the number 6 as the COUNT. The STEPMODE has been selected to 'Backward'."
      img: "![Six months](../static/images/styling-and-customizing-graphs/6 months.png)"
    - copy: "Add more buttons by clicking the blue '+Button' button."  
      img: "![Adding more buttons](../static/images/styling-and-customizing-graphs/addingbuttons.png)"
    - copy: "What's left now is to play with the style of the timescale buttons, including the background color, border width and its color, and text. You can also adjust the position of the buttons by clicking on the arrows next to the horizontal and vertical position fields."  
      img: "![Timescale attributes](../static/images/styling-and-customizing-graphs/Timescale Attributes.png)"
    - copy: "Your chart is now ready!"
      img: "![Range slider attributes](../static/images/styling-and-customizing-graphs/Range Slider and Timescale.gif)"  
---
