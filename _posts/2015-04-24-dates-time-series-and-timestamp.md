---
layout: single
title: Dates, Time Series and Timestamp Format in Plotly
subtitle: Dates and Times in Plotly
permalink: /date-format-and-time-series/
imageurl: /static/images/dates-time-series-and-timestamp/thum-dates-time-series-and-timestamp.png
state: active
tags: textandlinks basic
meta_description: Learn how to use dates, time series, and timestamp formats with Plotly graphs. Plotly is the easiest and fastest way to make and share graphs online.
actioncall: Make a Chart
---

# Dates, Time Series and Timestamp Format in Plotly

<div>
    <a href="https://plot.ly/~empet/55/" target="_blank" title="Top 5 Browsers from July 2013 to July 2014" style="display: block; text-align: center;"><img src="https://plot.ly/~empet/55.png" alt="Top 5 Browsers from July 2013 to July 2014" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="empet:55" src="https://plot.ly/embed.js" async></script>
</div>

Making a graph with dates and times?

If you’re uploading data into the grid, our parsing algorithm checks your data against more than 400 date formats to find the best match, even when your dates are in several styles. It takes a bit of extra time, but we think you’ll be happy with the results. Read more below to learn how to enter dates and times in the grid, and how to change the format displayed on your graph.

**Plotly’s date format is `yyyy-mm-dd HH:MM:SS.ssssss`**. You can enter this format directly, or depending on your data entry method, use our parsers to convert for you.

For our API users, we have guides for time series in [MATLAB](https://plot.ly/matlab/time-series/), [Python](https://plot.ly/python/time-series/), and [R](https://plot.ly/r/time-series/). If you’re using Python, we accept `datetime.date` and `datetime.datetime` formats. For plotly.js, we support JavaScript Date objects. Using MATLAB, you can specify the date format directly so our parser knows what to do. In R, we support R’s classes Date, POSIXlt and POSIXct in our ggplot2 to Plotly conversion.

### Entering dates and times in Plotly’s grid

To enter dates directly in the grid, you’ll need to use the format:
**yyyy-mm-dd HH:MM:SS.ssssss**
Note that the hour must be a number between 00 and 23, with hours 12 through 23 reserved for PM. Your entry must include the four-digit year.

<img class="img-responsive-table" src="/static/images/dates-time-series-and-timestamp/correct-date-formats.png">

<div class="responsive-table">
<table>
<thead>
<th>Format</th>
<th>Example</th>
<th>Meaning</th>
</thead>
<tbody>
<tr>
<td>yyyy-mm</td>
<td>2014-12</td>
<td>December, 2014</td>
</tr>
<tr>
<td>yyyy-mm-dd</td>
<td>2014-12-14</td>
<td>December 14th, 2014</td>
</tr>
<tr>
<td>yyyy-mm-dd HH</td>
<td>2014-12-14 16</td>
<td>16:00:00, or 4pm, December 14th, 2014</td>
</tr>
<tr>
<td>yyyy-mm-dd HH:MM:SS</td>
<td>2014-12-14 16:34:30</td>
<td>16:34:30, or 4:34:30pm, December 14th, 2014</td>
</tr>
<tr>
<td>yyyy-mm-dd HH:MM:SS.ss</td>
<td>2014-12-14 16:34:30.50</td>
<td>16:34:30 and 500 milliseconds December 14th, 2014</td>
</tr>
</tbody>
</table>
</div>

You can truncate the fractional seconds to any number of digits. All other truncations require you to keep entire fields. Here are a few common mistakes to avoid.

<img class="img-responsive-table" src="/static/images/dates-time-series-and-timestamp/incorrect-date-formats.png">

<div class="responsive-table">

<table>
<thead>
<th>Format</th>
<th>Error</th>
</thead>
<tbody>
<tr>
<td>yyyy-m</td>
<td>The month field must include a two digit month.</td>
</tr>
<tr>
<td>yy-mm</td>
<td>The year field must include a four digit year.</td>
</tr>
<tr>
<td>yyyy-mm-</td>
<td>You can’t trucate with a “-”.</td>
</tr>
<tr>
<td>yyyy/mm</td>
<td>A “/” can’t be used to separate the year and month. Use “-” instead.</td>
</tr>
<tr>
<td>mm-yyyy</td>
<td>The year must be in the first field.</td>
</tr>
<tr>
<td>mm-dd</td>
<td>Every date must include the year.</td>
</tr>
<tr>
<td>HH:MM:SS</td>
<td>To enter a time, you must first enter the date.</td>
</tr>
</tbody>
</table>

</div>

### Importing files with dates and times

Uploading a data set into the grid from your computer, Google Drive, or Dropbox? Plotly will parse the data for you into our native format so you’re ready to customize your graph. | ![Date format and time series](/static/images/dates-time-series-and-timestamp/import-data-file.png)

### Custom formats for your graph

When you make a graph in Plotly with dates and times, the default labeling picks spacing that fits the graph. Here our dates included both year and month, but as you can see, Plotly displays years on the x axis. | ![Date format and time series](/static/images/dates-time-series-and-timestamp/ted-talks-visualized.png)
To customize, we select **AXES** in the toolbar. In the popover, select the axis you wish to modify. | ![Date format and time series](/static/images/dates-time-series-and-timestamp/select-axis.png)
Select the **Labels** tab to reveal options for a **Custom date format** and **Hover format**. We use the time format [here](https://github.com/mbostock/d3/wiki/Time-Formatting) (see the table below for some of the most used examples). For example, in **Custom date format**, `%b %Y` tells Plotly to display an abbreviated month and the year with century.One extra option: `%{n}f` allows you to show fractional seconds, where “n” tells us the number of digits to include. | ![Date format and time series](/static/images/dates-time-series-and-timestamp/axes-labels.png)
The **Hover format**, `%B %Y`, tells Plotly to show the full month name and year with century when using the hover feature to explore the data. | ![Date format and time series](/static/images/dates-time-series-and-timestamp/hover-format.png)
To change the number of values displayed on the time axis, use the **Ticks** tab in the **AXES** popover. Pick a “Max #” of dates to display, and Plotly automatically finds the greatest lower bound to be evenly spaced along the axis. | ![Date format and time series](/static/images/dates-time-series-and-timestamp/axes-ticks.png)
If you don’t specify any **Custom date format**, Plotly will choose the format depending on your zoom level. As your viewer zooms in, new levels of detail will be included on the x axis. | ![Date format and time series](/static/images/dates-time-series-and-timestamp/zoom-level.gif)

Some common date and time formats are included in the table below. Can’t find what you’re looking for? Try [here](https://github.com/mbostock/d3/wiki/Time-Formatting).

<img class="img-responsive-table" src="/static/images/dates-time-series-and-timestamp/common-date-formats.png">

<div class="responsive-table">

<table>
<thead>
<th>Format</th>
<th>Meaning</th>
<th>Example</th>
</thead>
<tbody>
<tr>
<td>%a</td>
<td>Abbreviated weekday name</td>
<td>Mon</td>
</tr>
<tr>
<td>%A</td>
<td>Full weekday name</td>
<td>Monday</td>
</tr>
<tr>
<td>%b</td>
<td>Abbreviated month name</td>
<td>Dec</td>
</tr>
<tr>
<td>%B</td>
<td>Full month name</td>
<td>December</td>
</tr>
<tr>
<td>%m</td>
<td>Month as number</td>
<td>12</td>
</tr>
<tr>
<td>%y</td>
<td>Year without century</td>
<td>94</td>
</tr>
<tr>
<td>%Y</td>
<td>Year with century</td>
<td>1994</td>
</tr>
<tr>
<td>%H</td>
<td>Hour in 24-hour clock</td>
<td>15</td>
</tr>
<tr>
<td>%I</td>
<td>Hour in 12-hour clock</td>
<td>3</td>
</tr>
<tr>
<td>%p</td>
<td>Shows AM or PM</td>
<td>PM</td>
</tr>
<tr>
<td>%x</td>
<td>Date as “%m/%d/%Y”</td>
<td>07/22/2012</td>
</tr>
<tr>
<td>%{n}f</td>
<td>Shows n digits for fractional seconds</td>
<td>0000</td>
</tr>
</tbody>
</table>
</div>
