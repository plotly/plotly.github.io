---
layout: two_column_layout
title: Make an Area Graph
subtitle: A Step by Step Guide to Making an Area Graph
permalink: /make-an-area-graph
---

<div>
    <a href="https://plot.ly/~Dreamshot/564/" target="_blank" title="&lt;br&gt;NYC vs. LA: Population 1900-2010" style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/564.png" alt="&lt;br&gt;NYC vs. LA: Population 1900-2010" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="Dreamshot:564" src="https://plot.ly/embed.js" async></script>
</div>


Area plots are the same as scatter and line plots, but with different trace options selected to fill the area under the curve. Follow along below to make an area plot in Plotly.

###Step 1: Setting up the data in the grid

<table>
<tbody>
<tr>
<td>This is how you would set up Plotly’s grid to make the graph above (data here: <a href="https://plot.ly/~Dreamshot/566" target="_blank">https://plot.ly/~Dreamshot/566</a>). Click the blue plot button to create the chart.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image10.png" data-lightbox="image-10"><br />
<img   src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image10.png" alt="How to make an area chart online 10" /><br />
</a></td>
</tr>
</tbody>
</table>

###Step 2: Adding fill under traces

To make an area plot from a line plot, edit the “Fill To” attribute in the Mode tab of the TRACES popover.
<table>
<tbody>
<tr>
<td>Here’s how the TRACES popover for “trace 0” looks. Notice “Fill To” has been set to “Y=0”.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image09.png" data-lightbox="image-09"><br />
<img   src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image09.png" alt="How to make an area chart online 09" /><br />
</a></td>
</tr>
<tr>
<td>Here’s how the TRACES popover for “trace 1” looks. Notice “Fill To” has been set to “Next Y”.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image04.png" data-lightbox="image-04"><br />
<img   src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image04.png" alt="How to make an area chart online 04" /><br />
</a></td>
</tr>
</tbody>
</table>

###Step 3: Optional styling to make your plot prettier
Nice! Now you have your area plot. If you want, you can change the colors and apply smoothing to the lines to get a chart that looks like one at the top of the tutorial.
<table>
<tbody>
<tr>
<td>Here’s how your area chart looks before styling.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image00.png" data-lightbox="image-00"><br />
<img   src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image00.png" alt="How to make an area chart online 00" /><br />
</a></td>
</tr>
<tr>
<td>Here’s how the TRACES popover looks with smoothing and the change of colors. The smoothing button is highlighted in red.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image06.png" data-lightbox="image-06"><br />
<img   src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image06.png" alt="How to make an area chart online 06" /><br />
</a><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image02.png" data-lightbox="image-02"><br />
<img   src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image02.png" alt="How to make an area chart online 02" /><br />
</a></td>
</tr>
<tr>
<td>Here’s how the AXES popover looks with the axes lines thickened and made white.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image07.png" data-lightbox="image-07"><br />
<img   src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image07.png" alt="How to make an area chart online 07" /><br />
</a></td>
</tr>
<tr>
<td>Here’s how the LAYOUT popover looks with the plot and margin background color changed to grey.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image03.png" data-lightbox="image-03"><br />
<img   src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image03.png" alt="How to make an area chart online 03" /><br />
</a></td>
</tr>
<tr>
<td>Your finished chart should look something like this.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image01.png" data-lightbox="image-01"><br />
<img   src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-make-an-area-chart-online/image01.png" alt="How to make an area chart online 01" /><br />
</a></td>
</tr>
</tbody>
</table>
