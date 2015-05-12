---
layout: two_column_layout
title: Quadratic fits
permalink: /quadratic-fits
imageurl:
state: active
tags: classroom basic
meta_description: A tutorial on quadratic regression. Make graphs online and for free with Plotly
---

#Fitting data with a quadratic function

<div>
    <a href="https://plot.ly/~mariahh/56/" target="_blank" title="Almost squares" style="display: block; text-align: center;"><img src="https://plot.ly/~mariahh/56.png" alt="Almost squares" style="max-width: 100%;width: 1023px;"  width="1023" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="mariahh:56" src="https://plot.ly/embed.js" async></script>
</div>

Plotly offers free, online tools for analyzing data and making graphs. In this tutorial we’ll show you how to fit quadratic curves to your data and explain what that means. Make sure to check out our other [tutorials](/tutorials) to learn how to fit your data with other [polynomials](/polynomial-fits), [gaussians](/gaussian-fits), [exponentials](/exponential-fits) and [logarithms](/logarithmic-fits).

A *quadratic function* is a second degree *polynomial*. That means it can be written in the form $f(x)=ax^2+bx+c$, where the coefficient $a$ isn’t zero. The picture on the right shows two quadratic functions. Curves with this shape are called parabolae (plural for *parabola*). All quadratic functions look like the examples in the picture. A parabola opens upward if $a$ is positive and it opens downward if $a$ is negative. | ![Quadratic fits](/static/images/quadratic-fits/quadratic.png)
Quadratic functions grow (or decay) faster than linear functions for large enough $x$ values. The *growth rate* of a variable with respect to another variable is an important factor to consider when choosing a function to fit to your data. If $f(x) = ax^2+bx+c$, then $f$ is a quadratic function and its growth rate (or rate of change) is linear. | ![Quadratic fits](/static/images/quadratic-fits/quadratic-linear.png)
If your data looks like a parabola or you calculate that the rate of change is almost linear, you will want a model with a quadratic function. Modeling data with a quadratic means picking the coefficients $a$, $b$, and $c$ to make the parabola look like the graph of the data set. Plotly finds these coefficients and calculates the $R^2$ value, also called the *coefficient of determination*. This value indicates how well the quadratic function fits your data set. The closer the $R^2$ value is to 1, the better the fit. | ![Quadratic fits](/static/images/quadratic-fits/quadratic-fit.png)

### **Step 1:** Make a plot

We have lots of great tutorials to help you make line graphs, scatter plots, histograms, bar charts and more. If you need help, you’ll find everything you need on our [tutorials page](/tutorials).

You can import files from Google Drive, Dropbox, or Excel for your graphs. You’ll find more details in our [“How to make a plot from the grid”](/add-data-to-the-plotly-grid) tutorial.<br>For this tutorial we’ll use a data set that you can find at: <br>[https://plot.ly/~mariahh/51](https://plot.ly/~mariahh/51) | ![Quadratic fits](/static/images/quadratic-fits/import-data.png)
