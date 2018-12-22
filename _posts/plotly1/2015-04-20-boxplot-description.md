---
layout: single
title: Intro to Box Plots
subtitle: What is a Box Plot?
permalink: /what-is-a-box-plot/
imageurl: /static/images/box-plot/box-plot-thumbnail.png
state: active
tags: analysis
order: 3
meta_description: Box plots are used to better understand how values are spaced out in different sets of data. An interactive tutorial on how box plots are made, and the information they display.
popularity: frontpage
actioncall: Make a Box Plot
---

<script src="//code.jquery.com/jquery-1.11.2.min.js"></script>
<script src="//code.jquery.com/jquery-migrate-1.2.1.min.js"></script>

# What is a Box Plot?

#### The Box

Box plots are used to better understand how values are spaced out in different sets of data. To understand the method behind constructing a box plot, imagine a set of values that are spaced out along a number line. First, draw a line at the  **median** of the data set &mdash; the value in the set which divides it evenly in half, with an equal number of points smaller and larger. If there are an even number of points in the dataset (as in the example below), the median is halfway between the two central points.

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig1.gif" id = 'boxplotfig1' width = "600" height = "159.3">

Next, divide each half of the dataset in half again, dividing it into four even sets of points. These four sections are called  **quartiles**. The leftmost line marks  **Q1**, the first quartile, while the rightmost line marks  **Q3** or the third quartile (the median can also be called Q2).

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg" id = "boxplotfig2" width = "600" height = "159.3">

Connect the lines you've drawn. This box plot is starting to look more boxy...

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg" id = "boxplotfig3" width = "600" height = "159.3">

#### The Whiskers

Every box plot has lines at Q1, the median, and Q3. The other major feature of a box plot is its  **whiskers**, which can be drawn using a few different methods. Chart Studio offers three methods, which you can switch between under Style &rarr; Show Points.

##### Whiskers With All Points Visible

To draw the whiskers when all points are displayed, Chart Studio first calculates the  **interquartile range (IQR)**, which is the distance between Q1 and Q3. Next, we look at a subset of the data, ranging between 1.5 &#215; IQR below Q1 and 1.5 &#215; IQR above Q3 (anything outside of this range is called an  **outlier**). We then draw lines at the smallest and largest point within this subset. These lines define our whiskers.

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg" id = "boxplotfig4" width = "588.4" height = "197.99">

##### Whiskers With Only Outliers Visible

If you ask Chart Studio to only display outliers, the whiskers remain in the same spot, but only the outlier points are drawn. This is a common view for box plots. In the example below, even though most of the points aren't drawn, we still know quite a bit about this data set. How might you describe it, just from the box, whiskers, and outliers? Often this display gives us all the information we need, and showing every single point would be distracting.

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg" id = "boxplotfig5" width = "538.19" height = "145.73">

##### Whiskers with No Points Visible

You can also show no data points at all on a box plot. In this case, the whiskers are drawn differently, but they're quite simple. Just draw one whisker at the smallest data point, and another and the largest.

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg" id = "boxplotfig6" width = "504.52" height = "145.72">

#### Other Box plot Features

##### Too Many Points: Jitter

Sometimes when viewing all data, the points become stacked on top of each other and it's difficult to see their individual values. In this case, the points can be "jittered" in Chart Studio, or moved away from the number line a random distance between 0 and a value of your choosing.

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg" id = "boxplotfig11" width = "504.52" height = "145.73">

You might also need to jitter the points if values are not continuous, but fall at regular intervals (a box plot representing points scored in football games, for example) since data points might be stacked directly on top of one another.

##### Two Types of Outliers

When in "Outlier" mode, Chart Studio makes a distinction between two types of outliers:  **outliers** are more than 3 &#215; IQR above Q3 or below Q1, and are represented by a <em>filled</em> circle.  **Suspected outliers** are more than 1.5 IQR but less than 3 IQR above Q3 or below Q1 and are represented by an <em>open</em> circle, as shown below.

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg" id = "boxplotfig8" width = "600" height = "234.24">

### How to Read a Box plot

First of all, while it was useful thinking of bo xplot data as lying on a number line, it's more common to see box plots rotated vertically (this is how Chart Studio displays them).

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg" id = "boxplotfig7" width = "515.08" height = "515.08">

So far, we've looked at box plots for a single series. Graphs such as [histograms](/histogram/) give a more complete picture of a single series, but the real strength of a box plot is comparing <em>multiple</em> series at a glance. Take the example below, showing hours slept for each day of the week, for a group of 20 high school students.

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig9.jpg" id = "boxplotfig9" width = "600" height = "353.43">

Box plots show <em>so</em> much information, it's useful to examine this one feature by feature.

#### The Medians

To get a sense of the general difference between the days, we can look at the changes in median values.

<img class="article-img" src="https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg" id = "boxplotfig10" width = "600" height = "353.43">

Overall, the students sleep less and less as the week goes on, then they sleep more on the weekend.

#### The Boxes and Whiskers

While the boxes and whiskers show the same overall trend as the medians, they also contain much more information. Some example information you could draw from the boxes:

* On weeknights, the boxes are not symmetrical. Remember that in the upper region (Q2 to Q3) and the lower region (Q1 to Q2) there are the <em>same number of points</em>. This means that the 5 students are more closely packed together in the upper region.
* The large box on Saturday shows how inconsistent sleep habits are. The 10 students in the middle two quartiles sleep in a range that's about 4 hours wide.
* For days without outliers, the whiskers represent the minimum and maximum values. We see that students have relatively diverse sleep patterns, with the narrowest total range (on Wednesday) being over 3 hours.
* Weekday whiskers reinforce the pattern that the 10 students who sleep the least have very diverse (spread out) sleep patterns.

### The Outliers

On a box plot, the outliers stand out and seem important. While they're interesting, remember that they are kept separate because they are <em>different</em> from the overall trend, and shouldn't be used to make generalizations. These outliers only represent 4 out of 140 total data points! It's OK to say "one student barely slept on Friday night" but <em>NOT</em> OK to say "on Fridays, students barely sleep".

### What Type of Data Belongs on a Box plot?

Usually, box plots are used to compare multiple different series of data. It's perfectly valid to create a box plot for one series, although a [histogram](/histogram/) might give a more complex or complete picture of the data. Some examples of data sets to compare:

* **Multiple trials of the same experiment:** In many Scientific fields, when the same experiment is run many times, the results are tracked in a box plot to show consistencies or inconsistencies across trials.
* **Multiple trials of different experiments:** Many similar experiments might be run, with some condition or parameter changing each time. A box plot might help find trends or patterns. The above example of tracking hours slept on various days fits this model.
* **Data broken up by category:** A box plot can serve a similar function as a bar graph, but with many values in each category. You could make a box plot of batting averages, with different trials corresponding to different teams, for example.

You should also make sure that the data in each series follows some guidelines:

* The data sets must be measuring the same value, with the same units!
* Box plots should not be constructed for very small data sets. A data set with only three points in it, for example, shouldn't logically be divided into four quartiles. In these cases, you can just graph the data as a scatterplot, without any boxes.
* Usually, different trials should contain the same total number of data points. If one set is much larger than another, for example, it has a larger chance of containing random outliers. Someone looking at your box plot and seeing one series with five or six outliers, and no outliers elsewhere, might draw incorrect conclusions.

##### Questions? Please try searching Plotly’s <a href="http://community.plot.ly/">community forum</a>.


<script src = "https://plot.ly/static/js/plugins/waypoints.min.js"></script>

<script>
 $(document).ready(function()
{
    $('#boxplotfig1').waypoint(
        function()
        {
            $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.gif");
            $('#boxplotfig2').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg");
            $('#boxplotfig3').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg");
            $('#boxplotfig4').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg");
            $('#boxplotfig5').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg");
            $('#boxplotfig6').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg");
            $('#boxplotfig7').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg");
            $('#boxplotfig8').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg");
            $('#boxplotfig10').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg");
            $('#boxplotfig11').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg");



        },
        { offset: '40%' });

});


  $(document).ready(function(direction){

        $('#boxplotfig2').waypoint(
                function(direction)
                {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.gif");
                        $('#boxplotfig3').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg");
                        $('#boxplotfig1').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.jpg");
                        $('#boxplotfig4').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg");
                        $('#boxplotfig5').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg");
                        $('#boxplotfig6').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg");
                        $('#boxplotfig7').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg");
                        $('#boxplotfig8').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg");
                        $('#boxplotfig10').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg");
                        $('#boxplotfig11').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg");


                },

                { offset: '40%' });

        });


  $(document).ready(function(direction){

        $('#boxplotfig3').waypoint(
                function(direction)
                {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.gif");
                        $('#boxplotfig2').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg");
                        $('#boxplotfig1').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.jpg");
                        $('#boxplotfig4').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg");
                        $('#boxplotfig5').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg");
                        $('#boxplotfig6').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg");
                        $('#boxplotfig7').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg");
                        $('#boxplotfig8').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg");
                        $('#boxplotfig10').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg");
                        $('#boxplotfig11').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg");


                },

                 { offset: '40%' });

        });

    $(document).ready(function(direction){

        $('#boxplotfig4').waypoint(
                function(direction)
                {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.gif");
                        $('#boxplotfig1').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.jpg");
                        $('#boxplotfig2').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg");
                        $('#boxplotfig3').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg");
                        $('#boxplotfig5').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg");
                        $('#boxplotfig6').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg");
                        $('#boxplotfig7').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg");
                        $('#boxplotfig8').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg");
                        $('#boxplotfig10').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg");
                        $('#boxplotfig11').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg");



                },

                 { offset: '40%' });

        });

        $(document).ready(function(direction){

        $('#boxplotfig5').waypoint(
                function(direction)
                {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.gif");
                        $('#boxplotfig1').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.jpg");
                        $('#boxplotfig2').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg");
                        $('#boxplotfig3').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg");
                        $('#boxplotfig4').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg");
                        $('#boxplotfig6').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg");
                        $('#boxplotfig7').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg");
                        $('#boxplotfig8').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg");
                        $('#boxplotfig10').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg");
                        $('#boxplotfig11').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg");



                },

                 { offset: '40%' });

        });



        $(document).ready(function(direction){

        $('#boxplotfig6').waypoint(
                function(direction)
                {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6a.gif");
                        $('#boxplotfig1').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.jpg");
                        $('#boxplotfig2').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg");
                        $('#boxplotfig3').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg");
                        $('#boxplotfig4').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg");
                        $('#boxplotfig5').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg");
                        $('#boxplotfig7').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg");
                        $('#boxplotfig8').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg");
                        $('#boxplotfig10').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg");
                        $('#boxplotfig11').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg");




                },

                 { offset: '40%' });

        });

        $(document).ready(function(direction){

        $('#boxplotfig7').waypoint(
                function(direction)
                {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.gif");
                        $('#boxplotfig1').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.jpg");
                        $('#boxplotfig2').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg");
                        $('#boxplotfig3').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg");
                        $('#boxplotfig4').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg");
                        $('#boxplotfig5').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg");
                        $('#boxplotfig6').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg");
                        $('#boxplotfig8').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg");
                        $('#boxplotfig10').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg");
                        $('#boxplotfig11').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg");





                },

                 { offset: '40%' });

        });

        $(document).ready(function(direction){

        $('#boxplotfig8').waypoint(
                function(direction)
                {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.gif");
                        $('#boxplotfig1').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.jpg");
                        $('#boxplotfig2').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg");
                        $('#boxplotfig3').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg");
                        $('#boxplotfig4').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg");
                        $('#boxplotfig5').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg");
                        $('#boxplotfig6').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg");
                        $('#boxplotfig7').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg");
                        $('#boxplotfig10').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg");
                        $('#boxplotfig11').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg");





                },

                 { offset: '40%' });

        });


        $(document).ready(function(direction){

        $('#boxplotfig10').waypoint(
                function(direction)
                {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.gif");
                        $('#boxplotfig1').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.jpg");
                        $('#boxplotfig2').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg");
                        $('#boxplotfig3').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg");
                        $('#boxplotfig4').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg");
                        $('#boxplotfig5').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg");
                        $('#boxplotfig6').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg");
                        $('#boxplotfig7').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg");
                        $('#boxplotfig8').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg");
                        $('#boxplotfig11').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.jpg");





                },

                 { offset: '40%' });

        });


        $(document).ready(function(direction){

        $('#boxplotfig11').waypoint(
                function(direction)
                {
                        $(this).attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig11.gif");
                        $('#boxplotfig1').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig1.jpg");
                        $('#boxplotfig2').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig2.jpg");
                        $('#boxplotfig3').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig3.jpg");
                        $('#boxplotfig4').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig4b.jpg");
                        $('#boxplotfig5').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig5a.jpg");
                        $('#boxplotfig6').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig6.jpg");
                        $('#boxplotfig7').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig7.jpg");
                        $('#boxplotfig8').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig8b.jpg");
                        $('#boxplotfig10').attr("src", "https://plot.ly/static/img/literacy/boxplot/boxplotfig10a.jpg");


                },

                 { offset: '40%' });

        });

 </script>
