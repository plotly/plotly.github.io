---
layout: single
title: Intro to Histograms
subtitle: What is a histogram?
permalink: /histogram/
imageurl: /static/images/histograms-description/thum-histogram-description.png
state: active
tags: analysis
order: 2
meta_description: What is a histogram? When do you use a histogram? An interactive lesson on how to read a histogram, how a histogram is made, and how to analyze a histogram.
popularity: frontpage
actioncall: Make a Histogram
---

# Intro to Histograms

### What is a Histogram?
<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

Histogram plots are used to better understand how frequently or infrequently certain values occur in a given set of data. To understand the method behind constructing a histogram, imagine a set of values that are spaced out along a number line. To construct a histogram, a section of the number line is divided into equal chunks, called **bins**. In the image below, the data is divided into five bins (note that for a histogram, the bins all must be the same width).


<img src="/static/images/histograms-description/01-histogram-description.gif" id="fig1" width="600" height="35">

Next, count up how many data points sit inside each bin, and draw bars, one for each bin, whose heights correspond to the number of data points. This process is illustrated below.

<img src="/static/images/histograms-description/02-histogram-description.gif" id="fig2" width="600" height="226">

Label the data (in the example below each data point is an SAT score), draw in a y-axis which counts the number of data points in each bin, and finally label your bins.


<img src="/static/images/histograms-description/03-histogram-description.gif" id="fig3" width="600" height="267.76">

And that’s how to construct a histogram... by hand! Chart Studio can automatically create histogram plots for you (doing the steps above behind the scenes). All you need to do is tell Chart Studio which series of data to plot, and we take care of the rest. Chart Studio automatically determines the range of the histogram (where to start and stop on the number line) as well as the bin size (the width of each bin on the number line). You can change these options later under Style &rarr; Range/Bins. As you increase the number of points (also called the **sample size**), you can draw thinner and thinner bins with a higher level of precision, as illustrated below.


<img src="/static/images/histograms-description/04-histogram-description.gif" id="fig5" width="423.09" height="407.88">

### How to Read a Histogram

The nature of a histogram makes it easy to find values for *ranges* of data, across many bins. Say you were interested in how many people scored between 1600 and 2400 on the SAT. Just add up the heights of the bars in that range.


<img class="article-img" src="/static/images/histograms-description/05-histogram-description.gif" id="fig6" width="423.09" height="259.56">


A histogram shows what proportions of a dataset fall within which ranges. Another way of saying this is a histogram shows the approximate shape of the data’s **distribution**. You can read more about distributions <a class="link--impt" href="http://en.wikipedia.org/wiki/Distribution_(mathematics)">here</a>, but in brief, they are mathematical functions which describe the same frequency vs. value relationship shown on a histogram, but in a theoretical, idealized case.


Often when we create a histogram of a dataset, we want to compare it to a theoretical distribution. SAT scores, for example, are designed to match a common distribution called a <a class="link--impt" href="http://en.wikipedia.org/wiki/Normal_distribution">Normal (or Gaussian) Distribution</a>. In the image below, you can see our histogram overlaid with a normal distribution (the lighter shaded area).


<img class="article-img" src="/static/images/histograms-description/06-histogram-description.gif" id="fig4" width="600" height="364.29">


The animation above demonstrates what happens as our sample set of data grows: we are able to create more and more bins within the same range of values. As the sample size grows, we divide the histogram into thinner and thinner bins, and see the shape get closer and closer to a normal distribution.

### Normalizing a Histogram

While the shape of a histogram tells us quite a bit, frequency as a value on the y-axis is only useful in specialized cases. Changing the y axis values without changing the shape of the histogram is known as **normalizing** (not to be confused with Normal distributions!), and can be done in a few different ways.


#### Probability distributions


While it might sometimes be interesting to know that 47 people received a SAT score between 1500 and 1550, it is often more useful to know <em>how likely</em> is it that a *random* person taking the SAT will receive a score between 1500 and 1550. In other words, we want to change our **frequency distribution** into a **discrete probability distribution**. In a discrete probability distribution, the bar heights all sum to probability of 1 (or 100%), as demonstrated below.


<img class="article-img" src="/static/images/histograms-description/07-histogram-description.gif" id="fig7" width="423.09" height="259.56">

It turns out converting from frequency to probability is very simple, we just divide each frequency by the total sample size (so a given bin with a frequency of 50 out of 200 total data points becomes a probability of 0.25, or 25% likely). Because we divide every bar by the same number, everything shrinks by the same proportion and the shape remains the same.

#### Probability density distributions

We could also take each probability and divide it by the width of a bin, &#916;x, (again, not changing the overall shape) to convert our discrete probability distribution to a **probability density distribution**. These histograms are used to model **probability density functions**, which have the property that the area underneath the function between two values of x is equal to the probability that a given random variable (in our example, a random SAT test taker) will fall between those two values. That means that the Area under the whole histogram must equal 1 (since the probability of *any* value occurring is 1).

<img class="article-img" src="/static/images/histograms-description/08-histogram-description.gif" id="fig8" width="423.09" height="259.56">

For a fixed data range, probability density functions are a good way to compare histograms of different sample sizes &mdash; as the sample size gets larger, the bins get thinner, so the heights stay comparable.

#### Frequency density distributions


Finally, frequency distributions can also be divided by bin width to give **frequency density distributions**. Instead of summing to 1, the areas of the bars will sum to the total number of data points in the sample.


### Normalization Quick Reference

For a quick summary of the normalization types, let's look at our sample histogram again, with n data points per bin. Total data points (N) = 15 and bin width (&#916;x) = 400.

<img class="article-img" src="/static/images/histograms-description/09-histogram-description.jpg" id="fig9" width="423.09" height="259.56">

<img class="img-responsive-table" src="/static/images/histograms-description/10-histogram-description.png" title="histogram table">

<div class="responsive-table">
           <table class="table--striped">
                <tr class="row--even">
                    <th><strong>Histogram Type</strong></th>
                    <th><strong>Height Formula</strong></th>
                    <th><strong>Description</strong></th>
                    <th><strong>400 - 800</strong></th>
                    <th><strong>800 - 1200</strong></th>
                    <th><strong>1200 - 1600</strong></th>
                    <th><strong>1600 - 2000</strong></th>
                    <th><strong>2000 - 2400</strong></th>
                </tr>
                <tr>
                    <td><strong>Frequency Distribution</strong></td>
                    <td>n</td>
                    <td><em>Sum bar heights to find number of data points in range</em></td>
                    <td>1</td>
                    <td>4</td>
                    <td>5</td>
                    <td>3</td>
                    <td>2</td>
                </tr>
                <tr class="row--even">
                    <td><strong>Discrete Probability Distribution</strong></td>
                    <td>n/N</td>
                    <td><em>Sum bar heights to find probability of data falling in range</em></td>
                    <td>0.067</td>
                    <td>0.267</td>
                    <td>0.333</td>
                    <td>0.200</td>
                    <td>0.133</td>
                </tr>
                <tr>
                    <td><strong>Discrete Percentage Probability Distribution</strong></td>
                    <td>100 &#215; n/N</td>
                    <td><em>Sum bar heights to find percent probability of data falling in range</em></td>
                    <td>6.67</td>
                    <td>26.67</td>
                    <td>33.33</td>
                    <td>20.00</td>
                    <td>13.33</td>
                </tr>
                <tr class="row--even">
                    <td><strong>Frequency Denisty Distribution</strong></td>
                    <td>n/&#916;x</td>
                    <td><em>Sum product of bar heights and bin width to find number of data points in range</em></td>
                    <td>2.50E-3</td>
                    <td>1.00E-2</td>
                    <td>1.25E-2</td>
                    <td>7.50E-3</td>
                    <td>5.00E-3</td>
                </tr>
                <tr>
                    <td><strong>Probability Denisty Distribution</strong></td>
                    <td>(n/N)/&#916;x</td>
                    <td><em>Sum product of bar heights and bin width to find probability of data falling in range</em></td>
                    <td>1.67E-4</td>
                    <td>6.67E-4</td>
                    <td>8.33E-4</td>
                    <td>5.00E-4</td>
                    <td>3.33E-4</td>
                </tr>
            </table>
</div>

Don't worry if this seems like a lot of calculation. Chart Studio does it for you, and makes it easy to switch between normalization modes under Style &rarr; Range/Bins &rarr; Normalization.


##### Questions? Please try searching Plotly’s <a href="http://community.plot.ly/">community forum</a>.

<script src = "https://plot.ly/static/js/plugins/waypoints.min.js"></script>

<script>
        $(document).ready(function(direction) {
            $('#fig1').waypoint(
                function() {
                    $(this).attr("src", "https://plot.ly/static/img/literacy/fig1.gif");
                    $('#fig2').attr("src", "https://plot.ly/static/img/literacy/fig2.jpg");
                    $('#fig3').attr("src", "https://plot.ly/static/img/literacy/fig3.jpg");
                    $('#fig4').attr("src", "https://plot.ly/static/img/literacy/fig4.jpg");
                    $('#fig5').attr("src", "https://plot.ly/static/img/literacy/fig5.jpg");
                    $('#fig6').attr("src", "https://plot.ly/static/img/literacy/fig6.jpg");
                    $('#fig7').attr("src", "https://plot.ly/static/img/literacy/fig7.jpg");
                    $('#fig8').attr("src", "https://plot.ly/static/img/literacy/fig8.jpg");
                },
                { offset: '50%' }
            );

            $('#fig2').waypoint(
                function(direction) {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/fig2.gif");
                        $('#fig3').attr("src", "https://plot.ly/static/img/literacy/fig3.jpg");
                        $('#fig1').attr("src", "https://plot.ly/static/img/literacy/fig1.jpg");
                        $('#fig4').attr("src", "https://plot.ly/static/img/literacy/fig4.jpg");
                        $('#fig5').attr("src", "https://plot.ly/static/img/literacy/fig5.jpg");
                        $('#fig6').attr("src", "https://plot.ly/static/img/literacy/fig6.jpg");
                        $('#fig7').attr("src", "https://plot.ly/static/img/literacy/fig7.jpg");
                        $('#fig8').attr("src", "https://plot.ly/static/img/literacy/fig8.jpg");
                },

                { offset: '40%' }
            );

            $('#fig3').waypoint(
                function(direction) {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/fig3.gif");
                        $('#fig2').attr("src", "https://plot.ly/static/img/literacy/fig2.jpg");
                        $('#fig1').attr("src", "https://plot.ly/static/img/literacy/fig1.jpg");
                        $('#fig4').attr("src", "https://plot.ly/static/img/literacy/fig4.jpg");
                        $('#fig5').attr("src", "https://plot.ly/static/img/literacy/fig5.jpg");
                        $('#fig6').attr("src", "https://plot.ly/static/img/literacy/fig6.jpg");
                        $('#fig7').attr("src", "https://plot.ly/static/img/literacy/fig7.jpg");
                        $('#fig8').attr("src", "https://plot.ly/static/img/literacy/fig8.jpg");
                },

                { offset: '40%' }
            );

            $('#fig4').waypoint(
                function(direction) {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/fig4.gif");
                        $('#fig1').attr("src", "https://plot.ly/static/img/literacy/fig1.jpg");
                        $('#fig2').attr("src", "https://plot.ly/static/img/literacy/fig2.jpg");
                        $('#fig3').attr("src", "https://plot.ly/static/img/literacy/fig3.jpg");
                        $('#fig5').attr("src", "https://plot.ly/static/img/literacy/fig5.jpg");
                        $('#fig6').attr("src", "https://plot.ly/static/img/literacy/fig6.jpg");
                        $('#fig7').attr("src", "https://plot.ly/static/img/literacy/fig7.jpg");
                        $('#fig8').attr("src", "https://plot.ly/static/img/literacy/fig8.jpg");
                },

                { offset: '40%' }
            );

            $('#fig5').waypoint(
                function(direction) {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/fig5.gif");
                        $('#fig1').attr("src", "https://plot.ly/static/img/literacy/fig1.jpg");
                        $('#fig2').attr("src", "https://plot.ly/static/img/literacy/fig2.jpg");
                        $('#fig3').attr("src", "https://plot.ly/static/img/literacy/fig3.jpg");
                        $('#fig4').attr("src", "https://plot.ly/static/img/literacy/fig4.jpg");
                        $('#fig6').attr("src", "https://plot.ly/static/img/literacy/fig6.jpg");
                        $('#fig7').attr("src", "https://plot.ly/static/img/literacy/fig7.jpg");
                        $('#fig8').attr("src", "https://plot.ly/static/img/literacy/fig8.jpg");
                },

                { offset: '40%' }
            );

            $('#fig6').waypoint(
                function(direction) {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/fig6.gif");
                        $('#fig1').attr("src", "https://plot.ly/static/img/literacy/fig1.jpg");
                        $('#fig2').attr("src", "https://plot.ly/static/img/literacy/fig2.jpg");
                        $('#fig3').attr("src", "https://plot.ly/static/img/literacy/fig3.jpg");
                        $('#fig4').attr("src", "https://plot.ly/static/img/literacy/fig4.jpg");
                        $('#fig5').attr("src", "https://plot.ly/static/img/literacy/fig5.jpg");
                        $('#fig7').attr("src", "https://plot.ly/static/img/literacy/fig7.jpg");
                        $('#fig8').attr("src", "https://plot.ly/static/img/literacy/fig8.jpg");
                },

                { offset: '40%' }
            );

            $('#fig7').waypoint(
                function(direction) {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/fig7.gif");
                        $('#fig1').attr("src", "https://plot.ly/static/img/literacy/fig1.jpg");
                        $('#fig2').attr("src", "https://plot.ly/static/img/literacy/fig2.jpg");
                        $('#fig3').attr("src", "https://plot.ly/static/img/literacy/fig3.jpg");
                        $('#fig4').attr("src", "https://plot.ly/static/img/literacy/fig4.jpg");
                        $('#fig5').attr("src", "https://plot.ly/static/img/literacy/fig5.jpg");
                        $('#fig6').attr("src", "https://plot.ly/static/img/literacy/fig6.jpg");
                        $('#fig8').attr("src", "https://plot.ly/static/img/literacy/fig8.jpg");
                },

                { offset: '50%' }
            );

            $('#fig8').waypoint(
                function(direction) {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/fig8.gif");
                        $('#fig1').attr("src", "https://plot.ly/static/img/literacy/fig1.jpg");
                        $('#fig2').attr("src", "https://plot.ly/static/img/literacy/fig2.jpg");
                        $('#fig3').attr("src", "https://plot.ly/static/img/literacy/fig3.jpg");
                        $('#fig4').attr("src", "https://plot.ly/static/img/literacy/fig4.jpg");
                        $('#fig5').attr("src", "https://plot.ly/static/img/literacy/fig5.jpg");
                        $('#fig6').attr("src", "https://plot.ly/static/img/literacy/fig6.jpg");
                        $('#fig7').attr("src", "https://plot.ly/static/img/literacy/fig7.jpg");
                },

                { offset: '50%' }
            );
        });
</script>
