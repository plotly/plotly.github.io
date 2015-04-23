---
layout: two_column_layout
title: Mean, Median, Variance and Standard Deviation
subtitle: Basic Statistics
permalink: /mean-median-variance-standard-deviation/
imageurl: http://i.imgur.com/mszcoQr.png
state: active
---

<div>
    <a href="https://plot.ly/~chris/2730/" target="_blank" title="Age of Physics, Chemistry and Medicine Nobel Prize Winners" style="display: block; text-align: center;"><img src="https://plot.ly/~chris/2730.png" alt="Age of Physics, Chemistry and Medicine Nobel Prize Winners" style="max-width: 100%;width: 1052px;"  width="1052" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="chris:2730" src="https://plot.ly/embed.js" async></script>
</div>

Plotly has built in statistical tools to help you analyze data with only a few clicks.
We’re set up for both descriptive and inferential statistics, so whether you’re looking to plot a graph with error bars (see our awesome tutorial [here](/how-to-make-a-graph-with-error-bars/) or do a simple statistical analysis of the ages of Nobel Prize winners, you’ve come to the right place.
Our statistics tool computes the minimum and maximum values, mean, median, quartiles, standard deviation, variance and standard error. The data in this tutorial comes from [http://www.nber.org/nobel/](http://www.nber.org/nobel/"), which was used by Jones and Weinberg in their paper [“Age dynamics in scientific creativity”](http://www.pnas.org/content/108/47/18910).

###Step 1 : Set up the grid
You can load data into Plotly by typing directly, cutting &amp; pasting or importing data from an external source. If you need help, our tutorial <a href="/add-data-to-the-plotly-grid/">Add Data to Plotly’s Grid</a> is the perfect place to start.

<table>
<tbody>
<tr>
<td>In this example, we’ve loaded all the Nobel Prize winners in medicine, physics and chemistry, their birth years, and computed their age when they won their<br />
award.Copy the data here: [https://plot.ly/~mariahh/8/](https://plot.ly/~mariahh/8/)
</td>
<td><a href="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image08.png" ><br />
<img   src="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image08.png" alt="Basic statistics tutorial 08" /><br />
</a></td>
</tr>
</tbody>
</table>

###Step 2: Running basic statistics

Plotly has both descriptive and inferential statistical tools. For our example we’re interested in quantitative features to describe our data set. This is exactly what descriptive statistics does. On the other hand, if you want to use a sample data set to make predictions about a larger population, inferential statistics is the tool you’ll want to use.

<table>
<tbody>
<tr>
<td>Select “Basic statistics” from the ANALYSIS menu.</td>
<td><a href="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image00.png" ><br />
<img   src="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image00.png" alt="Basic statistics tutorial 00" /><br />
</a></td>
</tr>
<tr>
<td>Two things happen. First, a STATISTICS box opens on the left of the browser window. We have two choices: “Inferential (N-1)” or “Descriptive”.  “Inferential (N-1)” is the default, so we’ve had to change our choice to “Descriptive”.</td>
<td><a href="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image01.png" ><br />
<img   src="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image01.png" alt="Basic statistics tutorial 01" /><br />
</a></td>
</tr>
<tr>
<td>Second, notice that the grid lets you choose which columns you want to use for statistics. We’ve only selected Column 5, containing the age data, but<br />
<a href="https://plot.ly">Plotly</a> can also run statistics on multiple columns.</td>
<td><a href="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image07.png" ><br />
<img   src="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image07.png" alt="Basic statistics tutorial 07" /><br />
</a></td>
</tr>
<tr>
<td>Finally, click the blue STATISTICS button in the sidebar.</td>
<td><a href="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image02.png" ><br />
<img   src="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image02.png" alt="Basic statistics tutorial 02" /><br />
</a></td>
</tr>
<tr>
<td>The statistics now shows in the grid, just to the right of your last column.Some insights: the average (mean) age of a Nobel Prize winner is almost 56 years old.<br />
Half of all Nobel Prize winners were between the ages of 47 and 64 when they received the prize (Q1 and Q3).  The youngest winner (min) &#8212; Lawrence Bragg &#8212; was 25 years old.</td>
<td><a href="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image06.png"><br />
<img   src="https://plot.ly/static/learn/images/data_literacy/basic-statistics-tutorial/image06.png" alt="Basic statistics tutorial 06" /><br />
</a></td>
</tr>
</tbody>
</table>
