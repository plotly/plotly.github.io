---
layout: single
title: Polynomial fits
permalink: /polynomial-fits/
redirect_to: https://help.plot.ly/tutorials/
imageurl: https://s3-us-west-1.amazonaws.com/plotly-tutorials/plotly-documentation/thumbnail/polynomial_fit.jpg
state: inactive
tags: analysis
order: 8
meta_description: Learn how to easily fit data with polynomials using our free online regression calculator. Chart Studio is the best online tool for graphing and analyzing data.
actioncall: start fitting polynomials
---

# Fitting data with a polynomial

<div>
    <a href="https://plot.ly/~mariahh/2903/" target="_blank" title="Native Mexican Turkey&#39;s Growth" style="display: block; text-align: center;"><img src="https://plot.ly/~mariahh/2903.png" alt="Native Mexican Turkey&#39;s Growth" style="max-width: 100%;width: 1154px;"  width="1154" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="mariahh:2903" src="https://plot.ly/embed.js" async></script>
</div>



Chart Studio offers free, online tools for analyzing data and making graphs. In this tutorial we’ll show you how to fit polynomial curves to your data and explain what that means. Make sure to check out our other [tutorials](/tutorials) to learn how to fit your data with [Gaussians](/gaussian-fits), [exponentials](/exponential-fits) and [logarithms](/logarithmic-fits).

Developing an intuition for the best function to fit to your data takes some practice, and Chart Studio is a great tool to test your guesses. Keep in mind that with $n$ data points, there is a unique $n - 1$ degree polynomial that will fit the points exactly, but this polynomial won’t tell us much about our data. In discovering trends, we need to be careful that we don’t *overfit* the data.

A polynomial fit is a method of modeling data with a polynomial function. Sometimes choosing the best function to fit your data requires trial and error. Scientists often investigate several mathematical models to fit their data. In this tutorial, we’re going to use data from [“Mathematical modeling of the native Mexican turkey’s growth”](http://dx.doi.org/10.4236/ojas.2013.34045) by Pérez-Lara et al. In their work, they determine that a fourth degree polynomial model is best for estimating the growth of the native Mexican turkey.

To fit the data with a polynomial curve we choose coefficients that minimize the *mean squared error*, that is the average of the squares of the distances between the $y$-coordinate of each data point and the corresponding $y$-coordinate of the fitting polynomial. Chart Studio does this minimization for us by running a gradient descent algorithm. The closer the $R^2$ value is to 1, the better the fit.

### **Step 1:** Make a plot

We have lots of great tutorials to help you make scatter plots, line graphs, histograms, bar charts, and more. If you need help, head to our [tutorials page](/tutorials).

You can import files from Google Drive, Dropbox, or Excel to create a data set. You’ll find more details in our [“How to Enter Data in the grid”](/add-data-to-the-plotly-grid) tutorial.<br><br>For this tutorial we’ll use data from a data set that you can find at:<br><br>https://plot.ly/~mariahh/93 | ![Button to upload data to Chart Studio](/static/images/polynomial-fits/button-to-upload-data-to-plotly.png)
To use the data, look for the **Fork and edit** button, just above the data set, on the right side of your screen. Click it and a copy of the data will open in your workspace. | ![Copy data to your Chart Studio workspace](/static/images/polynomial-fits/copy-data-to-your-plotly-workspace.png)
To make a scatter plot, choose **Scatter plots** from the **MAKE A PLOT** menu.<br><br>Chart Studio will automatically select the first column of data to be $x$ values, and the second column to be $y$ values. In our case, this is exactly what we want.<br><br>Click on the blue **Scatter plot** box in the sidebar to make your scatter plot. Your plot will open in a new tab. | ![Make a scatter plot with Chart Studio](/static/images/polynomial-fits/make-a-scatter-plot-with-plotly.png)

### **Step 2:** Polynomial regression

To find the curve of best fit, we’ll use the **FIT DATA** button. You can find this button in the toolbar just above your plot. In their paper, Pérez-Lara et al. analyzed several models and determined that a fourth degree polynomial was the best choice, so we’ll use a fourth degree polynomial here.<br><br>When you click **FIT DATA**, you’ll see the **Fitting to trace** popover open. Select **Add fit to this trace**. | ![Fitting data with Chart Studio](/static/images/polynomial-fits/fitting-data-with-plotly.png)
Select Polynomial from the drop down menu. | ![Polynomial fit with Chart Studio](/static/images/polynomial-fits/select-polynomial-fit.png)
You’ll be given the option to choose the degree of the polynomial--following the work of Pérez-Lara et al., we select **4th order**. | ![Select 4th order polynomial fit](/static/images/polynomial-fits/select-4th-order-polynomial-fit.png)
Our **Advanced** tab gives you even more flexibility. You can incorporate error data into your fit, restrict the fit to a subset of your data, and change the number of points in the output fit. | ![Advanced fit options with Chart Studio](/static/images/polynomial-fits/advanced-fit-options-tab-with-plot.png)
Now click on the blue **Run this fit** button.<br><br>By selecting **Add results as plot annotation**, your graph will display the line of best fit equation and $R^2$-value. | ![Run the fit and add results as annotation](/static/images/polynomial-fits/run-the-fit-and-add-results-as-annotation.png)
To close the **Fitting to trace** popover click the **X** in the upper-right corner. We can drag the annotation and even style our graph with Chart Studio’s online tools. You might want to check out the **TRACES** button. | ![Close the Fitting to trace popover and style with options in TRACES](/static/images/polynomial-fits/close-the-fitting-to-trace-popover-and-style-with-options-in-traces.png)

Love what you made? You can [share, print, download](how-to-share-and-print-plotly-graphs/), and [embed your plots](how-to-embed-plotly-graphs-in-websites/).

You can find the graph used in this tutorial, and the underlying data at:

[https://plot.ly/~mariahh/94](https://plot.ly/~mariahh/94)
