---
layout: single
title: Chi-Square Test
subtitle: A Step by Step Guide to the Chi-Square Test
permalink: /chi-square-test/
redirect_to: https://help.plot.ly/tutorials/
imageurl: /static/images/chi-square/thum-chi-square.png
state: active
tags: analysis
order: 5
meta_description: The chi-square test is a hypothesis test that provides a quantitative method to compare observed frequencies with expected frequencies. Learn to use Chart Studio's chi-square test.
actioncall: Make a Graph
---

# Chi-Square Test

<div>
    <a href="https://plot.ly/~jackp/4102/" target="_blank" title="$\text{Probability density function of } \chi^2_k$" style="display: block; text-align: center;"><img src="https://plot.ly/~jackp/4102.png" alt="$\text{Probability density function of } \chi^2_k$" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="jackp:4102" src="https://plot.ly/embed.js" async></script>
</div>

The chi-squared test is a statistical hypothesis test that provides a quantitative method to compare observed frequencies with expected frequencies. For example, we could use a chi-squared test to evaluate if a coin is likely biased.

The general strategy to perform a chi-squared test is to calculate the chi-squared value (or chi-squared statistic), and then use a table of chi-squared values to estimate the probability that our result is due to chance alone. This probability is called the p-value. The null hypothesis, i.e., that the difference between expected and observed frequencies isn’t significant, is typically accepted for p-values greater than .05.

## Goodness of fit

We'll use a chi-squared test to determine if a certain coin is biased. Suppose we flip a coin 100 times and the coin lands on "heads" 42 times. We would expect that an unbiased coin would land on heads half of the time. Using a chi-squared test gives us a concrete way to compare what we observe with what we expect.

Here's how you can use Chart Studio to calculate the chi-squared statistic and p-value for you.

### Step 1: Set up the grid

We've already entered the [coin flip data into Chart Studio](https://plot.ly/3210/~mariahh/). Click the link to open the data in your workspace. | ![Coin flip data in the Chart Studio grid.](/static/images/chi-square/coin-flip-data.png)

### Step 2: Chi-squared test

Once the data has opened in your workspace, select <strong>Chi-squared test</strong> from the ANALYSIS menu. | ![Choose chi-squared test from the ANALYSIS menu.](/static/images/chi-square/pick-chi-square-test-coin-flip.png)
Select **choose as obs** in the column labeled "Observed", and **choose as exp** in the column labeled "Expected". Click on the blue **Perform Chi-squared Test** button in the sidebar. | ![Choose columns and run chi-squared test](/static/images/chi-square/run-coin-toss-chi-square.png)
Chart Studio puts the results in the first two columns to the right of our data. In this case, the chi-squared statistic is 2.56, and the P-value is 0.1096. By convention, because 0.1096 is greater than 0.05, we decide that the difference is not statistically significant. In other words, even though we didn't observe exactly 50 heads and 50 tails in our coin toss, the distribution that we did see is likely due to chance. | ![Results of chi-squared test.](/static/images/chi-square/chi-square-test-results.png)
