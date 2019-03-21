---
layout: single
title: Make a Line of Best Fit
subtitle: How to make a line of best fit
permalink: /plotly1/make-a-line-of-best-fit/
redirect_to: https://help.plot.ly/make-a-line-of-best-fit/
imageurl: /static/images/line-of-best-fit/thum-line-of-best-fit.png
state: active
tags: plotly1
meta_description: Make best fit lines of data online and for free with Chart Studio. A step-by-step tutorial of how to make best fit lines and regressions in your web browser with Chart Studio.
popularity: frontpage
actioncall: Make a Line of Best Fit
---

# Make a Line of Best Fit

One of the most basic but potent combos in data visualization is the **scatter plot and trend line**.

Whether you're trying to find the gravitational constant or to see [which professions tend to do better than average at making someone more money than his parents](https://plot.ly/~Vox/6/the-big-picturehousehold-income-during-childhood-vs-income-during-adulthood/), Chart Studio is the tool for you!

This 4-step tutorial will show you how to make the graph below from a simple data table or spreadsheet.

<div>
    <a href="https://plot.ly/~cimar/37/" target="_blank" title="velocity (m/s) vs time (s)" style="display: block; text-align: center;"><img src="https://plot.ly/~cimar/37.png" alt="velocity (m/s) vs time (s)" style="max-width: 100%;width: 1015px;"  width="1015" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="cimar:37" src="https://plot.ly/embed.js" async></script>
</div>


### Step 1: Enter your data

Upload a spreadsheet to the &#8216;Grid&#8217; either by copy-pasting the cells you want from your spreadsheet, or by uploading that sheet using the &#8216;Add Data&#8217; button. Chart Studio supports: CSV, Excel, Google Drive and Dropbox. For comparison, or if you would like to skip this step, you can access my data already loaded to the grid, [here](https://plot.ly/~cimar/32).

In this data from a simulated free-fall experiment, we controlled distance and measured time, but we're actually interested in acceleration &#8212; the change in velocity over time. So we&#8217;re plotting time as &#8216;x&#8217; and velocity as &#8216;y&#8217;. The slope of this trend line will give us the gravitational constant.

For a scatter plot we need an independent and dependent variable &#8212; i.e. a column of **x-coordinates** and a column of associated **y-coordinates**.To select a column as your independent variable, click **&#8220;choose as x&#8221;** beneath the column header. To select your dependent variable, click **&#8220;choose as y&#8221;** beneath the column header.The buttons marking your selected variables should both now be blue. If you accidentally selected multiple columns for either of these, they may be orange or green. This is OK! Keep clicking the &#8216;choose&#8217; buttons until the ones you do not want to plot are again white, and the ones you do are blue (see right) | ![Line of best fir online](/static/images/line-of-best-fit/step_1_data.png)

### Step 2: Plot

When you have two columns selected to plot in the &#8216;Grid&#8217; view, select **&#8216;Scatter plot&#8217;** from the blue dropdown at the top of the dialogue pane to the left.Now click the big blue button at the bottom. A new tab will open with our plot in it &#8212; take a look! | ![line of best fit online](/static/images/line-of-best-fit/2_dialogue.png)

The plot should look something like this: | ![Line of best fit](/static/images/line-of-best-fit/scatter-plot.png)

### Step 3: Generate a fit to your data

Okay — here&#8217;s the moment you&#8217;ve been waiting for. In the &#8216;Plot&#8217; view, find the **&#8220;Fit Data&#8221;** button in the toolbar:

![Line of best fit](/static/images/line-of-best-fit/3_fit.png)

This will open up a dialogue pane. Click **Add fit to this trace**: | ![Line of best fit](/static/images/line-of-best-fit/3_dialogue.png)
Chart Studio is a versatile tool, so there are a number of advanced options. But our task is simple! To generate the straight line that best fits our data, we&#8217;ll: <br> - stay in the **Basic** tab, <br> - select the **Choose a predefined fit function** radio button, <br> - select the **Linear** function family from the drop down, <br> - and then click the **Run this fit** button at the bottom. <br> Voila — we have a line of best fit! The **a** value is the **y-intercept** of our line, and the **b** value is its **slope**. <br> **R<sup>2</sup>** and **Standard error** are measures of how closely the line fits the data, and have to do with how this line was calculated. If you&#8217;d like to learn more about these metrics, [Wikipedia](http://en.wikipedia.org/wiki/Linear_regression) is a good resource. <br> Check the **&#8220;Add results as plot annotation&#8221;** box to annotate the graph the line&#8217;s equation: **y = 0.222 + 9.635x**. | ![Line of best fit](/static/images/line-of-best-fit/3_dialogue2.png)

Your plot should now look something like this:
![Line of best fit](http://ec2-54-172-55-46.compute-1.amazonaws.com/wp-content/uploads/2015/01/fits-300x242.png)

### Step 4: Style

You&#8217;re done! OR, you can experiment with the range of Chart Studio&#8217;s styling and format options: **Traces**, **Layout**, **Axes**, **Notes** and **Legend**. | ![Line of best fit](/static/images/line-of-best-fit/4_axes.png)
I&#8217;ve decided to make a few tweaks. I want to include the zero values on the plot, so that the axes are visible, so I change the range of the axes in the **Axes** tool panel to &#8220;With Zero&#8221;. | ![Line of best fit](/static/images/line-of-best-fit/4_axes.png)
I&#8217;d also like to change the colors, and the shape of the marker for each point. I make these changes in the &#8220;Style&#8221; tab of the **Traces** tool panel. | ![Line of best fit](/static/images/line-of-best-fit/4_style.png)
I&#8217;ve also clicked on the fit line annotation on my plot, and dragged it to a nicer position (so that the equation doesn&#8217;t overlap my data points).Here&#8217;s what the plot looks like now: | ![Line of best fit](https://plot.ly/~cimar/36.pdf)

### Bonus: Fixing your coefficients

If you&#8217;re trying to just fit your line to your data set, you&#8217;re done! But we actually know something about our free fall data that isn&#8217;t captured by the data set, and has therefore not been reflected in our trend line: an object that has been falling for 0 seconds has a velocity of 0, so our line should pass through the origin, and our **a** value should be 0.
Now we&#8217;ve got the plot at the top of this tutorial!

![Line of best fit](https://plot.ly/~cimar/36.png)

If you know one or more of your coefficients, you can fix them when generating your fit line to find the line that fits the data best within those constraints. To get started, click the **Fit Data** button and **View/edit** the fit you just generated. Then select **Edit fit**. | ![Line of best fit](/static/images/line-of-best-fit/bonus_dialogue1.png) ![Line of best fit](/static/images/line-of-best-fit/bonus_dialogue2.png)

This gets us back to the dialogue we saw in **Step 3**. Time to use some of those extra options!Under the &#8220;Enter fit parameter guesses&#8221; section, overwrite the value in the box labeled **&#8216;a&#8217;** with your y-intercept (in our case 0), then <i>click</i> the label to fix it at that value. It&#8217;ll turn blue. <br><br> We&#8217;ll leave **b** as it is. Chart Studio overwrites unfixed coefficients when generating the new line. <br> Click the **Run this fit** button to generate the new fit (you may need to check and uncheck the annotation box to refresh the annotation). | ![Line of best fit](/static/images/line-of-best-fit/bonus_dialogue3.png)

Our new line has the equation **y=9.802x**, which is 0.005 off of the true coefficient of gravity (9.807)! Not bad! To show the y-intercept on the graph, we&#8217;ll go into the **Advanced** tab of the fit panel.Check **Plot curve over a specified x-range** and set the minimum to &#8220;0&#8221;. I&#8217;m setting the maximum to the greatest time-value in our data set (2.28 s), but if you want to extrapolate your line farther, go ahead and enter a higher number. | ![Line of best fit](/static/images/line-of-best-fit/bonus_dialogue4.png)
