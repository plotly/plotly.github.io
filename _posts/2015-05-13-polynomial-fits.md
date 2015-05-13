---
layout: two_column_layout
title: Polynomial fits
permalink: /polynomial-fits
imageurl: /static/images/polynomial-fits/
state: draft
tags: classroom basic
meta_description: A tutorial on polynomial regression. Make graphs online and for free with Plotly
---

#Fitting data with a polynomial

<div>
    <a href="https://plot.ly/~mariahh/94/" target="_blank" title="Native Mexican Turkey&#39;s Growth" style="display: block; text-align: center;"><img src="https://plot.ly/~mariahh/94.png" alt="Native Mexican Turkey&#39;s Growth" style="max-width: 100%;width: 1034px;"  width="1034" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="mariahh:94" src="https://plot.ly/embed.js" async></script>
</div>

Plotly offers free, online tools for analyzing data and making graphs. In this tutorial we’ll show you how to fit polynomial curves to your data and explain what that means. Make sure to check out our other [tutorials](/tutorials) to learn how to fit your data with [Gaussians](/gaussian-fits), [exponentials](/exponential-fits) and [logarithms](/logarithmic-fits).

Developing an intuition for the best function to fit to your data takes some practice, and Plotly is a great tool to test your guesses. Keep in mind that with $n$ data points, there is a unique $n - 1$ degree polynomial that will fit the points exactly, but this polynomial won’t tell us much about our data. In discovering trends, we need to be careful that we don’t *overfit* the data.

A polynomial fit is a method of modeling data with a polynomial function. Sometimes choosing the best function to fit your data requires trial and error. Scientists often investigate several mathematical models to fit their data. In this tutorial, we’re going to use data from [“Mathematical modeling of the native Mexican turkey’s growth”](http://dx.doi.org/10.4236/ojas.2013.34045) by Pérez-Lara et al. In their work, they determine that a fourth degree polynomial model is best for estimating the growth of the native Mexican turkey.

To fit the data with a polynomial curve we choose coefficients that minimize the *mean squared error*, that is the average of the squares of the distances between the $y$-coordinate of each data point and the corresponding $y$-coordinate of the fitting polynomial. Plotly does this minimization for us by running a gradient descent algorithm. The closer the $R^2$ value is to 1, the better the fit.

### **Step 1:** Make a plot

We have lots of great tutorials to help you make scatter plots, line graphs, histograms, bar charts, and more. If you need help, head to our [tutorials page](/tutorials). 

You can import files from Google Drive, Dropbox, or Excel to create a data set. You’ll find more details in our [“How to Enter Data in the grid”](/add-data-to-the-plotly-grid) tutorial.<br><br>For this tutorial we’ll use data from a data set that you can find at:<br><br>https://plot.ly/~mariahh/93 | ![Upload data to Plotly](/static/images/quadratic-fits/upload-data-to-plotly.png)
To use the data, look for the **Fork and edit** button, just above the data set, on the right side of your screen. Click it and a copy of the data will open in your workspace. | ![Copy data to your workspace](/static/images/quadratic-fits/copy-data-to-your-workspace.png)
