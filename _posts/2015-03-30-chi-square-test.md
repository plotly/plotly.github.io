---
title: Chi square test
layout: tutorial
permalink: /chi-square-test
---

<div>
    <a href="https://plot.ly/~jackp/4102/" target="_blank" title="$\text{Probability density function of } \chi^2_k$" style="display: block; text-align: center;"><img src="https://plot.ly/~jackp/4102.png" alt="$\text{Probability density function of } \chi^2_k$" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="jackp:4102" src="https://plot.ly/embed.js" async></script>
</div>

<p>The chi-squared test is a statistical hypothesis test that provides a quantitative method to compare observed frequencies with expected frequencies. For example, we could use a chi-squared test to evaluate if a coin is likely biased or to determine if elevated cholesterol is related to gender.</p>

<p>The general strategy to perform a chi-squared test is to calculate the chi-squared value (or chi-squared statistic), and then use a table of chi-squared values to estimate the probability that our result is due to chance alone. This probability is called the p-value. The null hypothesis, i.e., that the difference between expected and observed frequencies isn’t significant, is typically accepted for p-values greater than .05.</p>

<p>In 2012, Gallup determined that <a href="http://www.gallup.com/poll/156215/consider-themselves-vegetarians.aspx">5% of Americans consider themselves vegetarians</a>. Their study was based on a telephone survey of 1014 adults (506 women and 508 men). Note that the data we’re using here is based on percentages reported. We’ll use a chi-squared test to decide if vegetarianism can be correlated to gender.</p>

<p>Here’s how to use Plotly to calculate both the chi-squared statistic and the p-value for you.</p>

<h1 id="step-1-:-set-up-the-grid"><a href="#step-1-:-set-up-the-grid">Step 1 : Set up the grid</a></h1>

<table>
<tbody>
<tr>
<td>We’ve already entered the <a href="https://plot.ly/~mariahh/976">Gallup poll data into Plotly</a>. You can move a copy into your workspace by opening the link and clicking on <strong>Fork and edit</strong>.</td>
<td><a href="http://plot.ly/online-graphing/wp-content/uploads/2015/03/Screen-Shot-2015-03-25-at-2.59.15-PM.png"><img class="aligncenter" src="https://plot.ly/online-graphing/wp-content/uploads/2015/03/Screen-Shot-2015-03-25-at-2.59.15-PM.png" alt="Screen Shot 2015-03-25 at 2.59.15 PM" width="806" height="485"></a></td>
</tr>
</tbody>
</table>

