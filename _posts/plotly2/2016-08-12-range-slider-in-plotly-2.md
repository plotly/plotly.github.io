---
layout: tutorial-single_layout
title: Range Slider and Selector in Plotly 2.0
subtitle: Range slider and selector in Plotly 2.0
permalink: /make-a-line-of-best-fit/
imageurl: ../static/images/line-of-best-fit/best-fit-thumb.png
state: active
tags: layout
order: 1
meta_description: A tutorial on the range slider and selector in Plotly 2.0.
popularity: featured
carouselimageurl:
actioncall: Range slider and selector in Plotly 2.0
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:125

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/range-slider/) or [R](https://plot.ly/r/range-slider/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/125.embed"></iframe>
live-graph-image:

steps:
 - title: Getting Started
   sub-steps:
    - copy: "An excellent tool, especially for a [time series plot](http://help.plot.ly/make-a-time-series-graph/), the range slider and selector is a way to display a specific range within your chart. This interactive slider allows you to experience your graphs on a whole other level."

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
    - copy: "Before you add your slider, you should set your markers the way you'd like them to appear on your axis. Go to 'Axes' under STYLE, then the 'Tick Markers' sub-tab. Select 'Custom' under 'Number of Markers' and enter the number of markers you want to show on your plot. Our data is from 1937-1960, and in the image below you can see that we have a marker for every two years."
      img: "![Tick markers](../static/images/styling-and-customizing-graphs/tick-marker.png)"
    - copy: "Here's where the fun starts. In the same 'Axes' section, go to the 'Range Slider' sub-tab and click on 'Show'."
      img: "![Range slider](../static/images/styling-and-customizing-graphs/range-slider.png)"
    - copy: "The height of the slider can be adjusted to your liking, and you can choose "
      img: "![Range slider attributes](../)"
---
