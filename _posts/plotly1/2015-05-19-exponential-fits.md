---
layout: single
title: Exponential Fits
permalink: /exponential-fits/
redirect_to: https://help.plot.ly/tutorials/
imageurl: https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/thumbnail/exponential_fit.jpg
state: inactive
tags: analysis
order: 9
meta_description: Learn how to easily fit data with exponential functions using our free online regression calculator. Chart Studio is the best online tool for graphing and analyzing data.
actioncall: Make a chart
---

# Fitting data with an exponential function

<div>
    <a href="https://plot.ly/~mariahh/63/" target="_blank" title="Rat population growth under optimal conditions" style="display: block; text-align: center;"><img src="https://plot.ly/~mariahh/63.png" alt="Rat population growth under optimal conditions" style="max-width: 100%;width: 1019px;"  width="1019" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="mariahh:63" src="https://plot.ly/embed.js" async></script>
</div>


Chart Studio offers free, online tools for analyzing data and making graphs. In this tutorial we’ll show you how to fit exponential curves to your data and explain what that means. Make sure to check out our other [tutorials](/tutorials) to learn how to fit your data with [polynomials](/polynomial-fits), [gaussians](/guassian-fits), and [logarithms](/logarithmic-fits).

An *exponential fit* is a method of modeling data with an exponential function. Exponential growth (or decay) occurs naturally in many settings--the growth of bacteria can be modeled with an exponential function, scientists study radioactive decay in order to determine how old dinosaur bones are, and money in a savings account grows exponentially.

There are many theories about the destruction of Easter Island. Dr Terry Hunt at the University of Hawaii hypothesizes that rats may be part of the explanation. His work was featured in an *American Scientist* article ["Rethinking the Fall of Easter Island"](http://www.americanscientist.org/issues/pub/rethinking-the-fall-of-easter-island/).  Under ideal conditions, a rat population can double every 47 days. The graph on the right contains data about optimal rat population growth during the first 188 days (about six months). In this tutorial we’ll estimate the population size of a colony of rats living in optimal conditions after three years assuming a single pair of rats to start.

It's important to remember that the exponential growth model for population has limits. Eventually a population, especially in a closed environment like Easter Island, will deplete resources which will hinder growth. For this example we're ignoring these issues. If you want to learn more, a [nice article](http://www.nature.com/scitable/knowledge/library/how-populations-grow-the-exponential-and-logistic-13240157) in *Nature Education* discusses both exponential and logistic equations for modeling population growth.

Exponential data falls into two categories: growth and decay. Learn to recognize the shape of these two types of exponential functions and you’ll be analyzing your data in no time!

*Exponential growth* is characterized by slow initial growth that becomes rapidly faster as time progresses. | ![A picture of exponential growth](/static/images/exponential-fits/a-picture-of-exponential-growth.png)
*Exponential decay* begins with a fast (and negative) rate of change, which decreases (in magnitude) with time. | ![A picture of exponential decay](/static/images/exponential-fits/a-picture-of-exponential-decay.png)

In Chart Studio, our predefined exponential functions take the form $a+be^{cx}$. If you want to fit your curve with another base, you can use the **Define your own fit function** option. If you need help, our [tutorial on custom fit functions](/custom-fit-functions) will help. Chart Studio finds the best exponential fit by choosing coefficients $a$, $b$ and $c$ that minimize the mean squared error. The closer the $R^2$ value is to 1, the better the fit.

### **Step 1:** Make a plot

We have a collection of great tutorials to help you make line graphs, scatter plots, histograms, bar charts, and more. If you need help, you’ll find everything you need on our [tutorials page](/tutorials).

You can import files from Google Drive, Dropbox, or Excel for your graphs. You’ll find more details in our [“How to Enter Data in the Grid”](/add-data-to-the-plotly-grid) tutorial. | ![Button to upload data to Chart Studio](/static/images/exponential-fits/button-to-upload-data-to-plotly.png)
In an optimal world (for rodents), a rat population can double in size every 47 days. Starting with two rats on day zero, we’ll have four rats on day 47, 8 rats on day 94, and so on.<br><br>You can enter this data in Chart Studio’s grid directly, or you can **Fork & edit** it from<br><br>https://plot.ly/~mariahh/63 | ![Picture of optimal rat population growth data](/static/images/exponential-fits/picture-of-optimal-rat-population-growth-data.png)
To make a scatter plot, choose **Scatter plots** from the **MAKE A PLOT** menu.<br><br>Chart Studio will automatically select the first column of data to be $x$ values, and the second column to be $y$ values. In our case, this is exactly what we want.<br><br>Click on the blue **Scatter plot** button in the sidebar to make your scatter plot. Your plot will open in a new tab. | ![Make a scatter plot with Chart Studio](/static/images/exponential-fits/make-a-scatter-plot-with-plotly.png)

### **Step 2:** Exponential regression

Once you’ve made a scatter plot (here, using the rat population data for the first 6 months), you can decide on a best fit function. The scatter plot shows a rapidly increasing rate of change, so an exponential fit is a good choice.<br><br>To find the curve of best fit, click **FIT DATA** in the toolbar above your graph.<br><br>When you click **FIT DATA**, you’ll see the **Fitting to trace** popover open. Select **Add fit to this trace**. | ![Fitting data with Chart Studio](/static/images/exponential-fits/fitting-data-with-plotly.png)
Select Exponential from the drop-down menu. | ![Menu to select an exponential fit](/static/images/exponential-fits/menu-to-select-an-exponential-fit.png)
You’ll be given the option to guess the coefficients $a$, $b$ and $c$, but this isn’t required. | ![Option to guess coefficients](/static/images/exponential-fits/option-to-guess-coefficients.png)
Bonus: the predefined exponential function take the form $a+be^{cx}$. If you want to fit your curve with another base, you can use the **Define your own fit function** option.<br><br>You can use $x$ as a variable, and pick your other parameters. You’ll need to enter an initial guess for Chart Studio’s regression to get started. | ![Using another base with a custom fit function](/static/images/exponential-fits/using-another-base-with-a-custom-fit-function.png)
The **Advanced** tab offers even more flexibility. You can incorporate error data into your fit, restrict the fit to a subset of your data, extend the domain, and change the number of points in the output fit.<br><br>Because we want to know how many rats could be in our colony after 3 years, we’ll need to select **Plot fit curve over a specified x-range**. | ![Advanced fitting options tab](/static/images/exponential-fits/advanced-fitting-options-tab.png)
Because the units on our $x$-axis are  days, we’ll use the fact that there are 1095 days in 3 years to pick the domain for the exponential fit.<br><br>Now click **Run this fit**. | ![Using advanced options to plot an over an extended domain](/static/images/exponential-fits/using-advanced-options-to-plot-over-an-extended-domain.png)
By selecting **Add results as plot annotation**, your graph will include a best fit equation and $R^2$ value.<br><br>We can see that the rat population, left unchecked, could reach approximately 20 million in 3 years! The reality on Easter Island would have been a bit different--when important factors like food are considered, we would expect approximately 75 rats per acre at most. That means a little more than 3 million rats on Easter Island. Easily enough to be responsible for the deforestation. | ![Run the fit and add results as annotation](/static/images/exponential-fits/run-the-fit-and-add-results-as-annotation.png)
To close the **Fitting to trace** popover, click the **X** in the upper-right corner. We can drag the annotation and even style our graph with Chart Studio’s online tools. You might want to check out the **TRACES** button. | ![Close the Fitting to trace popover and style with options in TRACES](/static/images/exponential-fits/close-the-fitting-to-trace-popover-and-style-with-options-in-traces.png)

Love what you made? You can [share, print, download](how-to-share-and-print-plotly-graphs/), and [embed your plots](how-to-embed-plotly-graphs-in-websites/).

You can find the graph used in this tutorial, and the underlying data at:

[https://plot.ly/~mariahh/63](https://plot.ly/~mariahh/63)
