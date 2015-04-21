---
layout: new_layout
title: Make a Bubble Chart
subtitle: A Step by Step Guide to Bubble Charts
permalink: /make-bubble-chart
---

<iframe src="https://plot.ly/~cimar/211.embed?width=800&amp;height=500" width="800" height="500" frameborder="0" scrolling="no" seamless="seamless"></iframe>

##Step 1: Set up the grid

<table>
<tbody>
<tr>
<td>This is one way you could set up Plotly’s grid to make the graph above.
Select the (T)ext column, (x) column, (y) column, and (S)ize as shown in the image for the different traces. The different colors represent different traces on the plot.
Learn more about the grid <a href="https://plot.ly/add-data-to-the-plotly-grid/">here</a> and copy the data <a href="https://plot.ly/~cimar/212/">here</a>.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image21.png" data-lightbox="image-21">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image21.png" alt="How to make a bubble chart online 21" />
</a></td>
</tr>
<tr>
<td>Select “Bubble charts” from the
MAKE A PLOT
menu.
Note: choosing a plot type will update the available options in the grid.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image10.png" data-lightbox="image-10">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image10.png" alt="How to make a bubble chart online 10" />
</a></td>
</tr>
<tr>
<td>Click the “Size by” option in the sidebar, and the “Text” option.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image02.png" data-lightbox="image-02">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image02.png" alt="How to make a bubble chart online 02" />
</a></td>
</tr>
<tr>
<td>For every set of x and y coordinates you select, select a column of values to set the size of the markers&#8230;</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image19.png" data-lightbox="image-19">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image19.png" alt="How to make a bubble chart online 19" />
</a></td>
</tr>
<tr>
<td>&#8230;and a column of text notations for every marker, (text notations are not required to make a bubble chart.)</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image03.png" data-lightbox="image-03">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image03.png" alt="How to make a bubble chart online 03" />
</a></td>
</tr>
<tr>
<td>Click the blue plot button in the sidebar to create the chart.  (For more help with the grid see:
<a href="/add-data-to-the-plotly-grid/">https://plot.ly/add-data-to-the-plotly-grid/</a>)</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image15.png" data-lightbox="image-15">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image15.png" alt="How to make a bubble chart online 15" />
</a></td>
</tr>
</tbody>
</table>

##Step 2: Sizing and Log Axis

<table>
<tbody>
<tr>
<td>Your plot should look something like this.  Open the
TRACES
popover in the toolbar.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image13.png" data-lightbox="image-13">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image13.png" alt="How to make a bubble chart online 13" />
</a><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image11.png" data-lightbox="image-11">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image11.png" alt="How to make a bubble chart online 11" />
</a></td>
</tr>
<tr>
<td>This is what the “Style” tab of the
TRACES
popover should look like for “All Traces (Scatter)”.We’ve set the “Size” field to scale the bubbles’ diameter, not area.  And we’ve evened out the pixel-to-value ratio (the higher the value in the box, the smaller the bubbles will be).We’ve also increased the weight of the white bubble outlines.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image20.png" data-lightbox="image-20">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image20.png" alt="How to make a bubble chart online 20" />
</a></td>
</tr>
<tr>
<td>Now, open the
AXES
popover in the toolbar.This is what the “Range” tab for the X Axis looks like. We’re opting for a log scale, which will result in a more linear plot.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image04.png" data-lightbox="image-04">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image04.png" alt="How to make a bubble chart online 04" />
</a><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image18.png" data-lightbox="image-18">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image18.png" alt="How to make a bubble chart online 18" />
</a></td>
</tr>
</tbody>
</table>

##Step 3: Style and annotate!

For more on bubble charts, check out our [blog post](http://blog.plot.ly/post/71637573256/the-power-of-bubble-charts)

<table>
<tbody>
<tr>
<td>Your plot should now look something like this. In order to get the graph at the top of the chart, you’ll need to style it a little more.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image12.png" data-lightbox="image-12">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image12.png" alt="How to make a bubble chart online 12" />
</a></td>
</tr>
<tr>
<td>This is what the “General” and “Margins” tabs of the
LAYOUT
popover should look like. We’re giving our plot a grey background, and we’ve changed some of the font options.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image07.png" data-lightbox="image-07">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image07.png" alt="How to make a bubble chart online 07" />
</a><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image00.png" data-lightbox="image-00">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image00.png" alt="How to make a bubble chart online 00" />
</a></td>
</tr>
<tr>
<td>This is what the “Lines” tab of the
AXES
popover looks like. We’ve changed the grey grid to white, and increased the line weight.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image17.png" data-lightbox="image-17">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image17.png" alt="How to make a bubble chart online 17" />
</a></td>
</tr>
<tr>
<td>This is what the
LEGEND
popover looks like.  We’ve set its background to grey, too.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image09.png" data-lightbox="image-09">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image09.png" alt="How to make a bubble chart online 09" />
</a></td>
</tr>
<tr>
<td>We’ve titled our chart and axes.  And we’re using markup to link to our source data using the
NOTES
popover. Select the “Page” option, and hide the arrow. Because our note has nothing to do with specific data points, we’re going to nestle it below the x-axis.Now drag it to the bottom corner of your plot.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image16.png" data-lightbox="image-16">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image16.png" alt="How to make a bubble chart online 16" />
</a><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image01.png" data-lightbox="image-01">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image01.png" alt="How to make a bubble chart online 01" />
</a></td>
</tr>
<tr>
<td>Once your note looks like you want it to, use the markdown &lt;a&gt; tag to link to the data source.</td>
<td>
[<img src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image14.png"/>](https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image14.png)

Source: GapMinder via [bchartoff](https://plot.ly/bchartoff/707)
</td>
</tr>
<tr>
<td>Your finished chart should look something like this:
In order to get your graph looking like the one at the top of the tutorial, you’ll need to style it a little more.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image06.png" data-lightbox="image-06">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-a-bubble-chart-online/image06.png" alt="How to make a bubble chart online 06" /></a></td>
</tr>
<tr>
<td>For more on bubble charts, check out our <a href="http://blog.plot.ly/post/71637573256/the-power-of-bubble-charts">blog post</a>.</td>
</tr>
</tbody>
</table>
