---
layout: new_layout
title: Chi-square
subtitle: Understanding when to use a chi square test?
permalink: /chi-square
imageurl: /static/images/chi-square/thum-chi-square.png
state: active
tags: STATISTICS 
meta_description: Tutorial on the chi-square test. Make a graph online and for free with Plotly
---

#Chi-square Test

###When do you use a chi-squared test?

The chi-squared test is a statistical test that you can use to test if there are differences across groups of categorical data. There are two general settings where the chi-squared test is appropriate. In the first setting, you are interested in knowing whether two categorical variables are related. In the second setting, you only have one categorical variable and a specific hypothesis about the distribution of this variable across the categories.

####Comparing two categorical variables

1. Do males and females differ in their propensity to like videogames? Here, gender is the first categorical variable, and liking videogames (yes or no) is the second.

2. Do the three products I currently manufacture malfunction at different rates? In this example, product is the first categorical variable and malfunctioning (yes or no) is the second.

####One categorical variable and a specific hypothesis

3. Your boss thinks that 10% of your website traffic occurs each day between Monday and Friday and that Saturday and Sunday receive 25% of your traffic per day. You are skeptical about this claim and want to test it using data on website traffic from last week.
4. Your clothing supplier only stocks green, red, and blue shirts and claims that 20% of the shirts are green, 30% are blue, and 50% are red. He sends you a random selection of 100 shirts and you want to test if this claim is true using these shirts. 

####The null hypothesis

For the first two examples, we begin by hypothesizing no relationship between the two variables (this is called our Null Hypothesis). For the first example the null hypothesis is that males and females are equally likely to like videogames and in the second setting the null hypothesis is that all three products have the same failure rate. Using the chi-squared test, you will be able to say whether there is evidence in favour of the null hypothesis or against the null hypothesis. 

For the third and fourth examples, the null hypothesis is that the stated distributions are correct. That is, in the first example the null hypothesis is that your website traffic occurs according to the way your boss told you, and in the second example the null hypothesis is that you received shirts in the proportions specified by your supplier. Again, we can use the chi-squared test to say whether there is evidence supporting the null hypothesis or against the null hypothesis. 

####How to calculate the chi-squared statistic

In this section, we will walk you through how to calculate the chi-squared statistic step-by-step, using some data. For example, suppose we are interested in Example 2 and we’ve observed the following:

|                         | **Product A** | **Product B** | **Product C** | 
| ----------:             | :-----------: | :-----------: | :-----------: |
| Number that failed      | 25            | 40            | 25            |
| Number that did not fail| 75            | 160           | 125           |
| Total                   | 100           | 200           | 150           |

As with all hypothesis testing, the first step is to start by creating a null hypothesis that corresponds to no difference/relationship between the groups. If the null hypothesis is indeed true, then what is our best guess of what the data would look like? For this example, the null hypothesis would imply that the failure rates across products are the same, and our best guess at the common failure rate is denoted by the failure rate when combining all the data across the groups (which is a weighted average). The next step is to create a table of counts we’d expect using the common failure rate and see how far off the actual data is from this table. If each cell count is very different, then this will provide more evidence against the null hypothesis and our test statistic becomes large. On the other hand, if the numbers in the cells are very similar then this will translate into little evidence against our null hypothesis.  Let’s see the test in action.

Remember: our null hypothesis is that all three products have the same likelihood of failure. To start thinking about whether this is likely to be true or not, let’s add some column percentages to the table and a totals column on the right:

|                         | **Product A** | **Product B** | **Product C** | **Total** |
| ----------:             | :-----------: | :-----------: | :-----------: | :-------: |
| Number that failed      | 25 (25%)      | 40  (20%)     | 25 (16.7%)    | 90 (20%)  |
| Number that did not fail| 75  (75%)     | 160 (80%)     | 125 (83.3%)   | 360 (80%) |
| Total                   | 100           | 200           | 150           | 450       |

From our observed data, the failure rate is highest in Product A (25%) and lowest in Product C (16.7%), but it could be the case that these proportions only differed because not enough data was observed (i.e., “due to chance alone”). To see if this is the case, we pretend that the malfunction rate is the same across the three products. Our best guess at the malfunction rate under the assumption of no difference is the average malfunction rate calculated in the totals column (20%). Using this number we can calculate the proportion of each product expected to fail under a common failure rate of 20%:

Expected Frequencies (multiply the average failure rate by the total number of each product)

|                         | **Product A** | **Product B** | **Product C** | **Total** |
| ----------:             | :-----------: | :-----------: | :-----------: | :-------: |
| Number that failed      | 20%\*100      | 20%\*200      | 20%\*150      | 90 (20%)  |
| Number that did not fail| 80%\*100      | 80%\*200      | 80%\*150      | 360 (80%) |
| Total                   | 100           | 200           | 150           | 450       |

Expected Frequencies (calculated)

|                         | **Product A** | **Product B** | **Product C** | **Total** |
| ----------:             | :-----------: | :-----------: | :-----------: | :-------: |
| Number that failed      | 20            | 40            | 30            | 90 (20%)  |
| Number that did not fail| 80            | 160           | 120           | 360 (80%) |
| Total                   | 100           | 200           | 150           | 450       |

Now here is where the magic takes place! We need to compare, for each highlighted cell in the table, the number of products that were expected to fail (highlighted in green) to the number of products that actually did fail (the observed frequencies; highlighted in grey). 

Observed vs. Expected Frequencies

|                         | **Product A** | **Product B** | **Product C** | **Total** |
| ----------:             | :-----------: | :-----------: | :-----------: | :-------: |
| Number that failed      | 25 vs. 20     | 40 vs. 40     | 25 vs. 30     | 90 (20%)  |
| Number that did not fail| 75 vs. 80     | 160 vs. 160   | 125 vs. 120   | 360 (80%) |
| Total                   | 100           | 200           | 150           | 450       |

Intuitively, if the null hypothesis is true, then the expected frequencies should be very close to the observed frequencies for all cells in the table. The chi-squared test uses the magnitudes of the differences between the observed and expected frequencies as part of the calculation. To perform the test, we perform calculations to create the chi-squared test statistic and use a table to decide if the statistic offers evidence against the null hypothesis. We’ll present the test statistic here, and then spend a little time breaking down what it all means. Our test statistic, denoted by $\chi^2$ is 

$$\chi^2 =\sum_{i}\frac{(E_i-O_i)^2}{E_i},$$

where $E_i$ denotes the expected frequency for cell $i$, and $O_i$ denotes the observed frequency for cell $i$. The larger the $\chi^2$ value, the more evidence there is against the null hypothesis.

So what does it all mean? Remember, we take the difference between the expected and observed frequencies to begin to quantify how different each observed frequency is from what we would expect under the null hypothesis. Now, the reason we take the square of these differences is because we will eventually be summing up all the differences, and we need to give equal weight to a negative difference (e.g., 20-25=-5) as we do to a positive difference (30-25=5) since both of these differences are of the same absolute magnitude. We then divide this squared difference by the expected frequency so that a difference of 5 units is counted as a big difference when the expected frequency is 10, but this same absolute difference is counted as a small relative difference when the expected frequency is 1000.

Using our example data, the calculation looks like this:

<img class="img-responsive-table" src="http://i.imgur.com/Ik7pjGa.png" title="equation" />

<div class="responsive-table">
$$\chi^2=\sum_{i}\frac{(E_i-O_i)^2}{E_i}=\frac{(25-20)^2}{20}+\frac{(40-40)^2}{40}+\frac{(25-30)^2}{30}+\frac{(75-80)^2}{80}+\frac{(160-160)^2}{160}+\frac{(125-120)^2}{120}=2.64$$
</div>

This table shows each cell's contribution to the chi-squared statistic. The cells with the highest contribution to the statistic had observed values that were the most different from what we'd expect under the null hypothesis. 

|                         | **Product A** | **Product B** | **Product C** |
| ----------:             | :-----------: | :-----------: | :-----------: |
| Number that failed      | 1.25          | 0             | 0.8333        | 
| Number that did not fail| 0.3125        | 0             | 0.2083        | 
| Sum across all cells:   | 2.64          |               |               |

The last step is to determine if the calculated chi-squared value of 2.64 is large enough to provide evidence against the null hypothesis. To do that, we compare this value to a statistical distribution known as the chi-squared distribution. We make this comparison because if the null hypothesis is true, then the observed test statistic, 2.64, should be drawn from a chi-squared distribution. So if we compared 2.64 with the chi-squared distribution, it would be reasonable to say that a random draw from the distribution could equal 2.64. The chi-squared distribution also requires that you provide the corresponding “degrees of freedom”. This is equal $(r-1)\times(c-1)$, where $r$ is the number of rows in the table, and $c$ is the number of columns in the table. Thus, for this example $r=3$ and $c=3$ so that $df=(3-1)X(2-1)=2$. We can ask Plotly what is the chance of observing a chi-squared statistic larger than or equal to 2.64 in the situation where there is no difference between the products. This probability (know as the p-value) is 26.7%, meaning that it is likely that you would observe this data under the null hypothesis. Thus, we would say that there is no evidence against the null hypothesis that the failure rates between the products are the same. If the probability had been much smaller, say either 5% or 10%, then there would have been more evidence against the null hypothesis. By convention, people use cut-offs of 1%, 5% or 10% to denote enough evidence to reject the null hypothesis in favour of the alternative hypothesis. For example, if we calculated a probability of 4.3% (rather than 26.7%) we could have then concluded that there is enough evidence against the null hypothesis and evidence supporting an alternative hypothesis that the failure rates between the three products differ. 

###Be careful…

The chi-squared statistic won’t perform well if you don’t have enough data! One rule of thumb is that every cell should have an expected frequency of at least 5. The test might perform poorly if your data has many cells with small frequencies and in this case you should collect more data (if you can!) before performing the test. 

