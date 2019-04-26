---
layout: tutorial-single_layout
title: Formatting Dates, Time Series, and Timestamps
subtitle: Dates and Times in Chart Studio
permalink: /date-format-and-time-series/
imageurl: ../static/images/dates-time-series-and-timestamp/thum-dates-time-series-and-timestamp.png
state: active
tags: fundamentals
order: 9
meta_description: Learn how to use dates, time series, and timestamp formats with Chart Studio graphs. Chart Studio is the easiest and fastest way to make and share graphs online.
popularity: featured
carouselimageurl:
actioncall: How to use dates, time series, and timestamp formats in Chart Studio
actioncall-url: https://plot.ly/alpha/workspace/?fid=empet:55

otherlang: Know how to program? Learn more about time series for [Python](https://plot.ly/python/time-series/) or [R](https://plot.ly/r/time-series/).

live-graph: <iframe width="800" height="700" frameborder="0" scrolling="no" src="https://plot.ly/~empet/55.embed"></iframe>
live-graph-image:

steps:
 - title: Dates, Time Series and Timestamp Format in Chart Studio
   sub-steps:
    - copy: "Making a graph with dates and times?"
    - copy: "If you’re [uploading data](http://help.plot.ly/add-data-to-the-plotly-grid/) into the grid, our parsing algorithm checks your data against more than 400 date formats to find the best match, even when your dates are in several styles. Read more below to learn how to enter dates and times in the grid, and how to change the format displayed on your graph."
    - copy: "Chart Studio’s date format is 'yyyy-mm-dd HH:MM:SS.ssssss'. You can enter this format directly, or depending on your data entry method, use our parsers to convert for you."
    - copy: "For our API users, we have guides for time series in [MATLAB](https://plot.ly/matlab/time-series/), [Python](https://plot.ly/python/time-series/), and [R](https://plot.ly/r/time-series/). If you’re using Python, we accept 'datetime.date' and 'datetime.datetime' formats. For plotly.js, we support JavaScript Date objects. Using MATLAB, you can specify the date format directly so our parser knows what to do. In R, we support R’s classes Date, POSIXlt and POSIXct in our ggplot2 to Chart Studio conversion."

 - title: Entering dates and times in Chart Studio’s grid
   sub-steps:
    - copy: "To enter dates directly in the grid, you’ll need to use the format: yyyy-mm-dd HH:MM:SS.ssssss. Note that the hour must be a number between 00 and 23, with hours 12 through 23 reserved for PM. Your entry must include the four-digit year."
      img: "![dateandtime](../static/images/dates-time-series-and-timestamp/dates and times.png)"
    - copy: "You can truncate the fractional seconds to any number of digits. All other truncations require you to keep entire fields. Here are a few common mistakes to avoid."
      img: "![fractional seconds](../static/images/dates-time-series-and-timestamp/fractional seconds.png)"

 - title: Importing files with dates and times
   sub-steps:
    - copy: "Uploading a data set into the grid from your computer, Google Drive, or Dropbox? Chart Studio will parse the data for you into our native format so you’re ready to customize your graph."
      img: "![Date format and time series](../static/images/dates-time-series-and-timestamp/import-data-file.png)"

 - title: Custom formats for your graph
   sub-steps:
    - copy: "When you make a graph in Chart Studio with dates and times, the default labelling picks spacing that fits the graph. Here our dates included both year and month, but as you can see, Chart Studio displays years on the x axis."
      img: "![Date format and time series](../static/images/dates-time-series-and-timestamp/ted-talks-visualized.png)"
    - copy: "To customize, we select AXES in the toolbar. In the popover, select the axis you wish to modify."
      img: "![Date format and time series](../static/images/dates-time-series-and-timestamp/select-axis.png)"
    - copy: "Select the Labels tab to reveal options for a Custom date format and Hover format. We use the time format [here](https://github.com/mbostock/d3/wiki/Time-Formatting) (see the table below for some of the most used examples). For example, in Custom date format, '%b %Y' tells Chart Studio to display an abbreviated month and the year with century. One extra option: '%{n}f' allows you to show fractional seconds, where 'n' tells us the number of digits to include."
      img: "![Date format and time series](../static/images/dates-time-series-and-timestamp/axes-labels.png)"
    - copy: "The Hover format, '%B %Y', tells Chart Studio to show the full month name and year with century when using the hover feature to explore the data."
      img: "![Date format and time series](../static/images/dates-time-series-and-timestamp/hover-format.png)"
    - copy: "To change the number of values displayed on the time axis, use the Ticks tab in the AXES popover. Pick a 'Max #' of dates to display, and Chart Studio automatically finds the greatest lower bound to be evenly spaced along the axis."
      img: "![Date format and time series](../static/images/dates-time-series-and-timestamp/axes-ticks.png)"
    - copy: "If you don’t specify any Custom date format, Chart Studio will choose the format depending on your zoom level. As your viewer zooms in, new levels of detail will be included on the x axis."
      img: "![Date format and time series](../static/images/dates-time-series-and-timestamp/zoom-level.gif)"
    - copy: "Some common date and time formats are included in the table below."
      img: "![Table](../static/images/dates-time-series-and-timestamp/format-table.png)"
---
