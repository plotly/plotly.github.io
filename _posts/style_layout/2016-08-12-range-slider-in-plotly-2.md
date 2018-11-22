---
layout: tutorial-single_layout
title: How to Add a Range Slider
subtitle: Learn to add a range slider and timescale buttons to a time-series chart using Plotly's Chart Studio.
permalink: /range-slider/
redirect_from: /make-a-time-series-graph/
imageurl: ../static/images/range-slider/timescalethumb.png
state: active
tags: layout
order: 4
meta_description: A tutorial on the range slider and timescale buttons in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: Range slider and timescale buttons in Plotly's Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:457

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/range-slider/) or [R](https://plot.ly/r/range-slider/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/457.embed"></iframe>
live-graph-image:

steps:
 - title: Getting Started
   sub-steps:
    - copy: "The interactive range slider allows you to experience your graphs on a whole other level. It is a great way to display a specific range within your chart, especially for time series plots."
    - copy: "You can check out an example by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in Chart Studio the plot and data fatured in this tutorial."

 - title: Add Your Data
   sub-steps:
    - copy: "Head to Plotly's [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

 - title: Create a Chart
   sub-steps:
    - copy: "After adding data, go to the 'Traces' section under the 'Structure' menu on the left-hand side. Choose the 'Type' of trace, then choose 'Line' under 'Simple' chart type."
      img: "![Choose chart](../static/images/range-slider/line-choose-chart.png)"
    - copy: "Next, select the 'X'and 'Y' values from the dropdown menus. This will add a raw line trace to the chart as seen below."
      img: "![Raw Plot](../static/images/range-slider/range-slider-raw.png)"
    - copy: "If you're creating a plot with dates and/or times, it's very important to format your data correctly, so make sure to check out [this page](http://help.plot.ly/date-format-and-time-series/) first."

 - title: Style a Chart
   sub-steps:
    - copy: "The 'Style' menu displays many options to modify characteristics of the overall chart layout or the individual traces. To see more options about styling the chart, visit the [style and layout](https://help.plot.ly/tutorials/#layout) section of the Chart Studio documentation."
    - copy: "Use the 'General' section under the 'Style' menu to change the general style properties such as plot background color, margin color and font sytlings and other layout properties."
    - copy: "To set the plot title, type the title text within the textbox provided under the 'Title' property."
      img: "![Plot Title](../static/images/range-slider/range-slider2.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title."
    - copy: "Use the 'Traces' section under the 'Style' menu to change the trace properties such as line color, width and shape."
      img: "![Trace Properties](../static/images/range-slider/range-slider-trace-properties.png)"
    - copy: "After you've [plotted](http://help.plot.ly/tutorials/#basic) and [styled](https://help.plot.ly/tutorials/#layout) your chart, you're ready to add the range slider to the chart. To do that, go to the 'Axes' section under the 'Style' menu and click 'Show' under the 'Range Slider' property."
      img: "![Range slider tab](../static/images/range-slider/range-slider-show.png)"
    - copy: "This will display the range slider under the plot and the style settings specific to the range slider  under the property itself."
      img: "![Range slider](../static/images/range-slider/range-slider-display.png)"    
    - copy: "In addition to the range slider, you can also add timescale button(s) to your chart. Upon clicking the timescale button allows you to display a specific range of the plot associated with that button. Please not that the timescale button feature is only available when the date axis is properly formatted. Refer to [this helpful page](https://help.plot.ly/date-format-and-time-series/) for more information on formatting dates in Plotly."
    - copy: "After formatting your time and/or dates, click 'Show' under the 'Timescale Buttons' property in the same 'Axes' section. Then click on the '+ Button' button to add a new button."
      img: "![Timescale](../static/images/range-slider/timescale2.png)"
    - copy: "Two buttons will appear on your plot. The 'reset' button is added by default to reset your slider range after you've clicked on a specific timescale button."
      img: "![Reset button](../static/images/range-slider/reset button3.png)"
    - copy: "The button next to it is the one you'll set up. We'll start with adding a timescale set for one year. Double-click on the field next to LABEL to add your own."
      img: "![First button](../static/images/range-slider/1 year2.png)"
    - copy: "Click on the STEP dropdown menu to change the timescale interval."
      img: "![Step](../static/images/range-slider/step2.png)"
    - copy: "For our 5-year timescale, we've chose the 'Year' as the STEP, and the number 5 as the COUNT. The STEPMODE has been selected to 'Backward'."
      img: "![5 years](../static/images/range-slider/5 years2.png)"
    - copy: "Add more buttons by clicking the blue '+Button' button."  
      img: "![Adding more buttons](../static/images/range-slider/addingbuttons2.png)"
    - copy: "The 'YTD' represents the year-to-date, which is the most recent date in your plot, and going back one year (from the month of January). This is where you'd select 'To Date' in your 'Stepmode'."
    - copy: "What's left now is to play with the style of the timescale buttons, including the background color, border width and its color, and text. You can also adjust the position of the buttons by clicking on the arrows next to the horizontal and vertical position fields."  
      img: "![Timescale attributes](../static/images/range-slider/Timescale Attributes2.png)"
    - copy: "Your chart is now ready!"
      img: "![Range slider attributes](../static/images/range-slider/timescalegif.gif)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/range-slider/range-slider-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Plotly's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
