---
layout: new_layout
title: Chi-square
subtitle: Understanding when to use a chi square test?
permalink: /chi-square
imageurl: http://i.imgur.com/0fcTTZC.png
state: draft
tags: STATISTICS 

---

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
