---
layout: single
title: Quadratic fits
permalink: /quadratic-fits/
redirect_to: https://help.plot.ly/tutorials/
imageurl: /static/images/quadratic-fits/quadratic-regression-with-equation.png
state: active
tags: analysis
order: 7
meta_description: A tutorial on quadratic regression. Make graphs online and for free with Chart Studio
actioncall: make a chart
---

# Fitting data with a quadratic function

<div>
    <a href="https://plot.ly/~mariahh/56/" target="_blank" title="Almost squares" style="display: block; text-align: center;"><img src="https://plot.ly/~mariahh/56.png" alt="Almost squares" style="max-width: 100%;width: 1023px;"  width="1023" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="mariahh:56" src="https://plot.ly/embed.js" async></script>
</div>

Chart Studio offers free, online tools for analyzing data and making graphs. In this tutorial we’ll show you how to fit quadratic curves to your data and explain what that means. Make sure to check out our other [tutorials](/tutorials) to learn how to fit your data with other [polynomials](/polynomial-fits), [gaussians](/gaussian-fits), [exponentials](/exponential-fits), and [logarithms](/logarithmic-fits).

A *quadratic function* is a second degree *polynomial*. That means it can be written in the form $f(x)=ax^2+bx+c$, where the coefficient $a$ isn’t zero. The picture on the right shows two quadratic functions. Curves with this shape are called *parabolas*. All quadratic functions look like the examples in the picture. A parabola opens upward if $a$ is positive and it opens downward if $a$ is negative. | ![Quadratic fits](/static/images/quadratic-fits/quadratic.png)
Quadratic functions grow (or decay) faster than linear functions for large enough $x$ values. The *growth rate* of a variable with respect to another variable is an important factor to consider when choosing a function to fit to your data. If $f(x) = ax^2+bx+c$, then $f$ is a quadratic function and its growth rate (or rate of change) is linear. | ![Quadratic fits](/static/images/quadratic-fits/quadratic-linear.png)
If your data looks like a parabola or you calculate that the rate of change is almost linear, you will want a model with a quadratic function. Modeling data with a quadratic means picking the coefficients $a$, $b$, and $c$ to make the parabola look like the graph of the data set. Chart Studio finds these coefficients and calculates the $R^2$ value, also called the *coefficient of determination*. This value indicates how well the quadratic function fits your data set. The closer the $R^2$ value is to 1, the better the fit. | ![Quadratic fits](/static/images/quadratic-fits/quadratic-fit.png)

### **Step 1:** Make a plot

We have lots of great tutorials to help you make line graphs, scatter plots, histograms, bar charts, and more. If you need help, you’ll find everything you need on our [tutorials page](/tutorials).

You can import files from Google Drive, Dropbox, or Excel for your graphs. You’ll find more details in our [“How to make a plot from the grid”](/add-data-to-the-plotly-grid) tutorial.<br><br>For this tutorial we’ll use a data set that you can find at: <br><br>[https://plot.ly/~mariahh/51](https://plot.ly/~mariahh/51) | ![Quadratic fits](/static/images/quadratic-fits/import-data.png)
To make a scatter plot, choose **Scatter plots** from the **MAKE A PLOT** menu.<br><br>Chart Studio will automatically select the first column of data to be x values, and the second column to be y values. In our case, this is exactly what we want.<br><br>Click on the blue **Scatter plot** box in the sidebar to make your scatter plot. Your plot will open in a new tab. | ![Quadratic fits](/static/images/quadratic-fits/plot-menu.png)

### **Step 2:** Quadratic regression

To find the curve of best fit, click **FIT DATA** in the toolbar just above your plot. In this example, we picked the $y$ values to be close to the squares of the $x$ values, so it makes sense to fit the data with a quadratic curve.<br><br>When you click **FIT DATA**, you’ll see the **Fitting to trace** popover open. Select **Add fit to this trace**. | ![Quadratic fits](/static/images/quadratic-fits/add-fit.png)
Select **Quadratic** from the drop-down menu. | ![Quadratic fits](/static/images/quadratic-fits/quadratic-fit-function.png)
You’ll be given the option to guess the coefficients $a$, $b$, and $c$, but this isn’t required. | ![Quadratic fits](/static/images/quadratic-fits/guess-coefficients.png)
Our **Advanced** tab offers even more flexibility. You can incorporate error data into your fit, restrict the fit to a subset of your data, extend the domain, and change the number of points in the output fit. | ![Quadratic fits](/static/images/quadratic-fits/advanced-options.png)
To run Chart Studio’s fit, click on the **Run this fit** button.<br><br>By selecting **Add results as plot annotation**, your graph will include an annotation with $R^2$ value and an equation for the curve of best fit. | ![Quadratic fits](/static/images/quadratic-fits/run-fit.png)
To close the **Fitting to trace** popover click the **X** in the upper-right corner. We can drag the annotation and even style our graph with Chart Studio’s online tools. You might want to check out the **TRACES** button. | ![Quadratic fits](/static/images/quadratic-fits/quadratic-fit-graph.png)
It’s easy to add another fit to our graph to compare. In the picture on the right, I’ve added a linear fit, and we can see that it isn’t a good choice. | ![Quadratic fits](/static/images/quadratic-fits/add-another-fit.png)
Want to remove a fit? Click **FIT DATA** in the toolbar. You will see each fit in the **Fitting to trace** popover. Just click on the trash can icon of the fit you want to remove. | ![Quadratic fits](/static/images/quadratic-fits/delete-fit.png)

Love what you made? You can [share, print, download](how-to-share-and-print-plotly-graphs/), and [embed your plots](how-to-embed-plotly-graphs-in-websites/).

You can find the graph used in this tutorial, and the underlying data at:

[https://plot.ly/~mariahh/56](https://plot.ly/~mariahh/56)
