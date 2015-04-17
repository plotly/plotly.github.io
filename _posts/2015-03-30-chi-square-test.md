---
title: Chi square test
layout: layout
permalink: /chi-square-test
thumbnail: https://plot.ly/online-graphing/wp-content/uploads/2015/03/Screen-Shot-2015-03-26-at-2.27.24-PM-266x370.png
---

<div>
    <a href="https://plot.ly/~jackp/4102/" target="_blank" title="$\text{Probability density function of } \chi^2_k$" style="display: block; text-align: center;"><img src="https://plot.ly/~jackp/4102.png" alt="$\text{Probability density function of } \chi^2_k$" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="jackp:4102" src="https://plot.ly/embed.js" async></script>
</div>

<br />
<br />

<p>The chi-squared test is a statistical hypothesis test that provides a quantitative method to compare observed frequencies with expected frequencies. For example, we could use a chi-squared test to evaluate if a coin is likely biased or to determine if elevated cholesterol is related to gender.</p>

<p>The general strategy to perform a chi-squared test is to calculate the chi-squared value (or chi-squared statistic), and then use a table of chi-squared values to estimate the probability that our result is due to chance alone. This probability is called the p-value. The null hypothesis, i.e., that the difference between expected and observed frequencies isn’t significant, is typically accepted for p-values greater than .05.</p>

<p>In 2012, Gallup determined that <a href="http://www.gallup.com/poll/156215/consider-themselves-vegetarians.aspx">5% of Americans consider themselves vegetarians</a>. Their study was based on a telephone survey of 1014 adults (506 women and 508 men). Note that the data we’re using here is based on percentages reported. We’ll use a chi-squared test to decide if vegetarianism can be correlated to gender.</p>

<p>Here’s how to use Plotly to calculate both the chi-squared statistic and the p-value for you.</p>

<br />
<br />

<h1 id="step-1-:-set-up-the-grid"><a href="#step-1-:-set-up-the-grid">Step 1 : Set up the grid</a></h1>

<br />
<br />

<table>
<tbody>
<tr>
<td>We’ve already entered the <a href="https://plot.ly/976/~mariahh/">Gallup poll data into Plotly</a>. Click the link to open the data in your workspace.</td>
<td><img src="http://i.imgur.com/eZ222ec.png"></td>
</tr>
</tbody>
</table>

<br />
<br />

<h1 id="step-2:-running-basic-statistics"><a href="#step-2:-running-basic-statistics">Step 2: Chi-squared test</a></h1>

<br />
<br />

<table>
<tbody>

<tr>
<td>Once the data has opened in your workspace, select <strong>Chi-squared test</strong> from the ANALYSIS menu.</td>
<td><img src="http://i.imgur.com/Skp90ha.png"></td>
</tr>

<tr>
<td>Because we want to compare the sample data with what we would expect assuming no gender bias, we select “choose as obs” in the Vegetarian column and “choose as exp” in the Expected vegetarian column. Next, click on <strong>Perform Chi-squared Test</strong>.</td>
<td><img src="http://i.imgur.com/i6Y1ZiD.png"></td>
</tr>

<tr>
<td>Plotly puts our results in the first two columns to the right of our data. In this case, the chi-squared statistic is 4.1456 and the P-value is 0.04174. By convention, because 0.04174 is less than 0.05, we decide that the difference is statistically significant. In other words, we reject the null hypothesis and conclude that there must be a relation between vegetarianism and gender.</td>
<td><img src="http://i.imgur.com/7fkBMjX.png"></td>
</tr>

</tbody>
</table>

