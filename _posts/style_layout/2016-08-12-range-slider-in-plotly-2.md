---
layout: tutorial-single_layout
title: How to Add a Range Slider
subtitle: Learn to add a range slider and timescale buttons to a time-series chart using Plotly's Chart Studio.
permalink: /range-slider/
redirect_from: /make-a-time-series-graph/
imageurl: ../static/images/range-slider/thumbnail.png
state: active
tags: layout
order: 4
meta_description: A tutorial on the range slider and timescale buttons in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: Range slider and timescale buttons in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:457

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/range-slider/) or [R](https://plot.ly/r/range-slider/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/457.embed"></iframe>
live-graph-image:

steps:
 - title: Getting Started
   sub-steps:
    - copy: "The interactive range slider allows users to select and drilldown into specific areas of the graph. It is a great way to display a specific range within your chart, especially for time series plots."
    - copy: "You can check out an example by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open the plot and data fatured in this tutorial in Chart Studio."

 - title: Add Your Data
   sub-steps:
    - copy: "Head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](https://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."

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
      img: "![Plot Title](../static/images/range-slider/range-slider-plot-title.png)"
    - copy: "Another approach is to click and then enter the title directly on the plot interface. The same can be done for the axes title."
      img: "![Direct Title](../static/images/range-slider/range-slider-plot-title-direct.png)"
    - copy: "Use the 'Traces' section under the 'Style' menu to change the trace properties such as line color, width and shape."
      img: "![Trace Properties](../static/images/range-slider/range-slider-trace-properties.png)"
    - copy: "After you've [plotted](http://help.plot.ly/tutorials/#basic) and [styled](https://help.plot.ly/tutorials/#layout) your chart, you're ready to add the range slider to the chart. To do that, go to the 'Axes' section under the 'Style' menu and click 'Show' under the 'Range Slider' property. This will display the range slider under the plot and the style settings specific to the range slider under the property itself."
      img: "![Range slider show](../static/images/range-slider/range-slider-show.png)"
    - copy: "In addition to range slider, you can also add timescale button(s) to your chart. Timescale buttons, upon clicking them, allows you to display a specific range of the plot associated with that button. Please note that this property is only available when the date axis is properly formatted, refer to [this helpful page](https://help.plot.ly/date-format-and-time-series/) for more information on formatting dates in Chart Studio."
    - copy: "After formatting the date and/or time axis, click 'Show' under the 'Timescale Buttons' property in the same 'Axes' section. This will display the styling options for the timescale buttons which will be added next."
      img: "![Timescale Display](../static/images/range-slider/range-slider-timescale-display.png)"
    - copy: "Now, click on the '+ Button' button to add a new timescale button. This will display a panel containing the attributes associated with that timescale button: 'Label', 'Count', 'Step' and 'Stepmode'."
    - copy: "The atttribute 'Label' represents the text label to appear on the button, 'Count' represents the number of steps to take to update the range, 'Step' represents the unit of measurement, and 'Stepmode' allows to set the range update mode between 'Backward' and 'To Date'."
      img: "![Timescale Display](../static/images/range-slider/range-slider-timescale-button.png)"
    - copy: " If 'Backward' is chosen as 'Stepmode', the range update shifts the start of range back by 'Count' times 'Step'."
      img: "![1Year button](../static/images/range-slider/range-slider-1year-button.png)"
    - copy: " If 'To Date' is chosen, the range update shifts the start of range back to the first timestamp from 'Count' times 'Step' back. For example, with 'Step' set to 'Year' and count set to 1, the range update shifts the start of the range back to January 01 of the current year of the most recent date."
      img: "![YTD button](../static/images/range-slider/range-slider-YTD-button.png)"
    - copy: "Add more buttons by clicking the '+ Button' button." 
      img: "![5and10 Years](../static/images/range-slider/range-slider-5and10yrs-button.png)"
    - copy: "For adding a 'Reset' button that resets the slider's range after you've clicked on a specific timescale button, set the 'Step' attribute to 'All' from the dropdown."
      img: "![Reset button](../static/images/range-slider/range-slider-reset-button.png)"
    - copy: "Finally, set the styling options for the timescale buttons via the attributes available below the button panels."
      img: "![Completed Plot](../static/images/range-slider/range-slider-final.png)"

 - title: Save and Share
   sub-steps:
    - copy: "To save the plot click the 'Save' button on the left-hand side. A save modal will appear, as seen below, where you can specify the filenames and privacy settings for your plot and data grid."
      img: "![Save main](../static/images/range-slider/range-slider-save-main.png)"
    - copy: "For more information on privacy settings and how sharing works, visit Chart Studio's [sharing tutorial](http://help.plot.ly/save-share-and-export-in-plotly/)."
---
