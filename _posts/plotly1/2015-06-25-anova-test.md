---
layout: single
title: ANOVA Test
subtitle: A Step by Step Guide to ANOVA
permalink: /anova-test/
imageurl:
state:
tags: analysis
order: 6
meta_description: The ANOVA test is a hypothesis test that provides a quantitative method to compare means of three or more samples. Learn to use Chart Studio's ANOVA test.
actioncall: Make a Graph
---

# The One-way ANOVA Test

### When do you use one-way ANOVA?
ANOVA stands for the “analysis of variance”. One-way ANOVA is a statistical test used to determine if there are differences between three or more groups on **one** continuous outcome of interest. For example:

**Example 1.** You manufacture cement and are interested in whether different mixing techniques have different levels of resistance to breakage (called tensile strength). You are interested in three different mixing techniques and mix five batches of cement using each technique. You can measure the tensile strength for each batch and use this data to test if the average resistance varies across the three techniques.

**Example 2.** A hospital is running its yearly donation campaign and has three potential campaigns to solicit donations from individuals who’ve donated in the past. The hospital’s donation coordinator wants to know if the campaigns result in a difference in the average amount of money donated. He randomly contacted ten individuals using each campaign and recorded the dollar amount donated from each sponsor.

For each example, we begin by hypothesizing that there is no difference across the groups in the outcome of interest (this is called our null hypothesis). For the first example, our null hypothesis is that the average tensile strength of the cement is the same for each of the three mixing techniques. In the second example, our null hypothesis is that, on average, sponsors will give the same amount of money independent of the donation campaign they were exposed to. Using one-way ANOVA, you will be able to say whether there is evidence in favour of the null hypothesis or against the null hypothesis.

### Start with plotting the data
When we have continuous data, we can first plot the data and see whether we can see differences across the groups before we run the statistical test. We can also use the plots to visually inspect whether the data meets some assumptions made by ANOVA. The two assumptions that we can investigate visually are: i) that the variance within the groups are the same, and ii) that the data is normally distributed within the groups. We can use Chart Studio to make box plots and scatter plots to visualize our data. Let’s consider **Example 2** and two possibilities for what the data may have looked like if you collected data on the donation amounts from the ten individuals per campaign and made a scatter plot of this information:
<div>
    <a href="https://plot.ly/~corinne.riddell/77/" target="_blank" title="Data from two campaigns" style="display: block; text-align: center;"><img src="https://plot.ly/~corinne.riddell/77.png" alt="Data from two campaigns" style="max-width: 100%;width: 540px;"  width="540" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="corinne.riddell:77" src="https://plot.ly/embed.js" async></script>
</div>

Both plots show the raw data as well as the average donation amounts (indicated by dashed lines) for each campaign and the overall average donation amount (indicated by solid lines) using data across all the campaigns.

In the first plot (Scenario 1), using visual inspection it appears that the first campaign solicits lower donation amounts than the other two campaigns. More precisely, the average for the first group looks much lower than the average for the other two groups. The spread of the data within the groups appears similar, supporting the assumption of equal variance across groups. To examine the normality of the data we could make histograms of the data within groups to see whether they follow a bell curve. However, this visualization approach isn’t very informative when we have so little data per group making this assumption sometimes difficult to assess visually.

In the second plot (Scenario 2), the averages across the campaigns are very similar to one another and all very close to the overall average. We use ANOVA to try and test for whether our data arose from a situation like Scenario 1 (in which there is a true difference in the underlying means) or Scenario 2 (in which there is no difference in the underlying means).

Sometimes, you might be convinced by graphing the data alone that there is a difference among the group means, such as with the data shown for Scenario 1. However, you can imagine an additional scenario in which the visualization isn’t so clear; there might be a difference between the means, but based on visualization alone it is difficult to gauge whether we think there is a difference or not. ANOVA is an objective tool used to say whether a difference exists or not.


### Calculating the one-way ANOVA test statistic

The one-way ANOVA test uses information about how far each group average is away from the overall average to quantify differences across the groups. The test statistic is a ratio of two numbers, where the numerator quantifies the amount of variability between group averages and the denominator quantifies the amount of varability within each group. A higher test statistic value implies that the numerator is large and that there is more variabiity between group averages which implies a difference in the average value across groups. Thus, the higher the value of the test statistic, the more evidence there is against the null hypothesis.

For example, if the group-level averages are far from the overall average (see **Scenario 1** in the plot above), then the variance between group averages is relatively high, the numerator of the test statistic will be large, and this will translate into a larger test statistics value and more evidence against the null hypothesis. On the other hand, if the group level averages are very similar to each other (see **Scenario 2**), then the variance between group averages is relatively low, the numerator of the test statistic will be smaller and this will translate into a smaller test statistic value and less evidence against the null hypothesis.

First let’s write down the form of the test statistic and then we will take a minute and provide some intuition for its form. The ANOVA test statistic is traditionally denoted by the letter F:

$$\text{F}=\frac{\text{variance between groups}}{\text{variance within groups}} \\
\text{variance between groups}=\frac{\sum\limits_{g=1}^G n_g\times(\bar{x}_g-\bar{\bar{x}})^2}{G-1} \\
\text{variance within groups}=\frac{\sum\limits_{g=1}^G\sum\limits_{i=1}^n (x_{gi}-\bar{x}_g)^2}{\sum\limits_{g=1}^G(n_g-1)}$$

where:
$$n_g=\text{the number of units in the } g^{th} \text{ group} \\
G=\text{the number of groups} \\
x_{gi}=\text{the } i^{th} \text{ data point in group \textit{g}} \\
\bar{x_g}=\text{The average for group \textit{g}} \\
\bar{\bar{x}}=\text{The overall average (across all the groups)} \\$$

In the numerator of the ANOVA test statistic, we have the estimate for the variance between the groups. This is where we quantify how far each group average is from the overall average. You can see this because we are taking the difference between each group average and the overall average and squaring this difference. We take the squared difference so that a group below the overall average and a group above the overall average by the same amount contribute equally to the statistic. We multiply the squared difference by the number of individuals in a group to give more weight to groups with more data.

In the denominator of the ANOVA test statistic, we have the variance within a group. That is, how much does each donation within a campaign differ from the average for the campaign? If you remember how to take the sample variance when you have just one sample, then this calculation is very similar except you are comparing each observation to its group average rather than an overall average.

We haven’t said much about the quantities $G-1$ and $\sum\limits_{g=1}^G(n_g-1)$ found in the ANOVA test statistic. Without going into too much detail, these terms are used to provide averages for the numerator and the denominator. For example $G-1$ helps us estimate the average squared distance between the group means and the overall mean, while the second quantity, $\sum\limits_{g=1}^G(n_g-1)$ helps us estimate the average squared distance within a group. These quantities are known as the degrees of freedom of the numerator and the degrees of freedom of the denominator, respectively.

If the null hypothesis is false, the F-statistic will be a large number as the variance between groups (the numerator) overcomes the variance within the groups (the denominator). Let’s go through an example with the data from Scenario 1 to see how the calculation works:


| Sponsor  |Campaign 1     |Campaign 2     |Campaign 3    |
|:--------:| :-----------: |:-------------:| :-----------:|
|1|102|124|124|
|2|99|129|133|
|3|102|125|132|
|4|104|116|131|
|5|108|126|123|
|6|92|119|127|
|7|104|118|132|
|8|94|128|129|
|9|104|122|130|
|10|93|128|135|
|**Group Average**| **100.20** | **123.50**| **129.60**|
|**Overall Average**| **117.77**| | |

For the numerator of the test statistic we take the squared difference between each group average and the overall average and multiply by the number of people in each group. We then divide by the degrees of freedom for the numerator, which is equal to $G-1$:

$$\text{Variance between the groups} =\frac{10 \times (100.20-117.77)^2 + 10 \times (123.50-117.77)^2 + 10 \times (129.60-117.77)^2}{3-1}  \\
=2407 \text{, on G-1=2 degrees of freedom}$$

For the denominator of the test statistic we take the squared difference between each individual donation value and the group-level average and divide this by \sum\limits_{g=1}^G(n_g-1):

#### Calculating the denominator of the F-statistic for each individual:

| Sponsor       |Campaign 1     |Campaign 2     |Campaign 3    |
|:--------:| :-----------: |:-------------:| :-----:|
|1|$(102-100.2)^2$|$(124-123.5)^2$|$(124-123.5)^2$|
|2|$(99-100.2)^2$|$(129-123.5)^2$|$(133-123.5)^2$|
|3|$(102-100.2)^2$|$(125-123.5)^2$|$(132-123.5)^2$|
|4|$(104-100.2)^2$|$(116-123.5)^2$|$(131-123.5)^2$|
|5|$(108-100.2)^2$|$(126-123.5)^2$|$(123-123.5)^2$|
|6|$(92-100.2)^2$|$(119-123.5)^2$|$(127-123.5)^2$|
|7|$(104-100.2)^2$|$(118-123.5)^2$|$(132-123.5)^2$|
|8|$(94-100.2)^2$|$(128-123.5)^2$|$(129-123.5)^2$|
|9|$(104-100.2)^2$|$(122-123.5)^2$|$(130-123.5)^2$|
|10|$(93-100.2)^2$|$(128-123.5)^2$|$(135-123.5)^2$|
|**sum of squared differences:**| **594.5**| | |
|**divide by** $$\sum\limits_{g=1}^G(n_g-1)$$ :|**22.02**| | |

Thus the denominator is equal to 22.02 on $$\sum\limits_{g=1}^G(n_g-1) = 9*3 = 27$$ degrees of freedom.

F = 2407/22.02 = 109.3. This number is very large because the numerator was very big compared with the denominator. The last step is to determine if this difference is large enough to provide evidence against the null hypothesis. To do that, we compare the F-statistic to a statistical distribution known as the F distribution. The F distribution also requires that you provide the corresponding degrees of freedom for the numerator and denominator. Remember that these were equal to 2 and 27, respectively. We can ask Chart Studio what is the chance of observing an F-statistic larger than or equal to 109.3 in the situation where there is no difference between the campaigns in the average amount donated. This probability (known as the p-value) is very tiny for this example - smaller that 0.01% - meaning that it is extremely unlikely you’d observe an F-statistic this small if there was truly no difference between the campaigns. Here, we would conclude that there is strong evidence against the null hypothesis of no difference between the campaigns.

### Be careful...
In order to use ANOVA, our data should follow certain assumptions or else our inference based on the ANOVA test is more likely to be incorrect. The most important assumption is that the observations are independent of one another. It should be the case that each sample is an independent random sample. In our example, this assumption would be satisfied if the sponsors were randomly sampled from a database of all potential sponsors. Thus, to understand whether this assumption is met you need to know how the data was collected. The second assumption of ANOVA is that the variance of the observations within each group is the same across the groups. The third assumption is that the data follow a normal distribution (a bell curve) within each group. Fortunately, the ANOVA test tends to perform well even if this last assumption is violated, especially in the case where the sample size per group is large.
