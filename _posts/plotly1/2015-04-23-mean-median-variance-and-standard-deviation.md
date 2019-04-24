---
layout: single
title: Mean, Median, Variance and Standard Deviation
subtitle: Basic Statistics
permalink: /basic-statistics-mean-median-standard-deviation/
redirect_to: https://help.plot.ly/tutorials/
imageurl: /static/images/mean-median-variance-and-standard-deviation/thum-mean-median-variance-and-standard-deviation.png
state: active
tags: analysis
order: 10
meta_description: Calculate and analyze basic statistics like the mean, median, variance and standard deviation online and for free with Chart Studio.
actioncall: Make a graph
---

# Mean, Median, Variance and Standard Deviation

<div>
    <a href="https://plot.ly/~chris/2730/" target="_blank" title="Age of Physics, Chemistry and Medicine Nobel Prize Winners" style="display: block; text-align: center;"><img src="https://plot.ly/~chris/2730.png" alt="Age of Physics, Chemistry and Medicine Nobel Prize Winners" style="max-width: 100%;width: 1052px;"  width="1052" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="chris:2730" src="https://plot.ly/embed.js" async></script>
</div>

Chart Studio has built in statistical tools to help you analyze data with only a few clicks.

We’re set up for both descriptive and inferential statistics, so whether you’re looking to plot a graph with error bars (see our awesome tutorial [here](/how-to-make-a-graph-with-error-bars/) or do a simple statistical analysis of the ages of Nobel Prize winners, you’ve come to the right place.

Our statistics tool computes the minimum and maximum values, mean, median, quartiles, standard deviation, variance and standard error. The data in this tutorial comes from [http://www.nber.org/nobel/](http://www.nber.org/nobel/), which was used by Jones and Weinberg in their paper [“Age dynamics in scientific creativity”](http://www.pnas.org/content/108/47/18910).


### Step 1 : Set up the grid
You can load data into Chart Studio by typing directly, cutting &amp; pasting or importing data from an external source. If you need help, our tutorial [Add Data to Chart Studio’s Grid](/add-data-to-the-plotly-grid/) is the perfect place to start.

In this example, we’ve loaded all the Nobel Prize winners in medicine, physics and chemistry, their birth years, and computed their age when they won their award. Copy the data here: [https://plot.ly/~mariahh/8/](https://plot.ly/~mariahh/8/) | ![Basic statistics tutorial](/static/images/mean-median-variance-and-standard-deviation/image08.png)

### Step 2: Running basic statistics

Chart Studio has both descriptive and inferential statistical tools. For our example we’re interested in quantitative features to describe our data set. This is exactly what descriptive statistics does. On the other hand, if you want to use a sample data set to make predictions about a larger population, inferential statistics is the tool you’ll want to use.

Select “Basic statistics” from the ANALYSIS menu. | ![Basic Statistics tutorial](/static/images/mean-median-variance-and-standard-deviation/image00.png)
Two things happen. First, a STATISTICS box opens on the left of the browser window. We have two choices: “Inferential (N-1)” or “Descriptive”.  “Inferential (N-1)” is the default, so we’ve had to change our choice to “Descriptive”. | ![Basic Statistics Tutorial](/static/images/mean-median-variance-and-standard-deviation/image01.png)
Second, notice that the grid lets you choose which columns you want to use for statistics. We’ve only selected Column 5, containing the age data, but [Chart Studio](https://plot.ly) can also run statistics on multiple columns. | ![Basic Statistics Tutorial](/static/images/mean-median-variance-and-standard-deviation/image07.png)
Finally, click the blue STATISTICS button in the sidebar. | ![Basic Statistics Tutorial](/static/images/mean-median-variance-and-standard-deviation/image02.png)
The statistics now shows in the grid, just to the right of your last column.Some insights: the average (mean) age of a Nobel Prize winner is almost 56 years old. Half of all Nobel Prize winners were between the ages of 47 and 64 when they received the prize (Q1 and Q3).  The youngest winner (min) &#8212; Lawrence Bragg &#8212; was 25 years old. | ![Basic Statistics Tutorial](/static/images/mean-median-variance-and-standard-deviation/image06.png)
