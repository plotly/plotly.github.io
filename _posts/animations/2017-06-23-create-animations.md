---
layout: tutorial-single_layout
title: Animations in Chart Studio
subtitle: Create Animations in Chart Studio
permalink: /create-animations/
imageurl: ../static/images/create-animations/animations.png
state: active
tags: animations
order: 1
meta_description: A tutorial on how to create animations in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: A tutorial on how to create animations in Chart Studio.
actioncall-url: https://plot.ly/create/?fid=plotly2_demo%3A380

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/#animations) or [R](https://plot.ly/r/#animations).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/381.embed"></iframe>

steps:
 - title: Try an Example
   sub-steps:
    - copy: "To try an example, select 'Chart Type' and a panel will appear with chart type options. Once you locate the animation icon under the 'FINANCE'column, you can check out an example before adding your own data by clicking the little graph icon that will show what a sample chart looks like after adding data and playing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Try an Example](../static/images/create-animations/try-an-example.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"
 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to Chart Studio’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "For this tutorial, we'll use the gapminder dataset which can be found [here](https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv). Simply, copy the URL from GitHub. Now, returning to the workspace select 'IMPORT' and then 'By URL'. Here, you just paste the URL from GitHub."
      img: "![Add Data](../static/images/create-animations/add-data.png)"
 - title: Create Your Chart
   sub-steps:
    - copy: "Now that we have the data added to the grid, we can select our chart type. Select GRAPH on the left-hand side, then 'Create'. Click 'Chart Type', then choose 'Animation' in the 'FINANCE' column."
      img: "![Chart Type](../static/images/create-animations/chart-type.png)"
    - copy: "Use the X and Y dropdowns to define X and Y variables for the chart. For this example, select the ‘gdpPerCap’ to display life expectancy data on the x axis and select ‘lifeExp’ to display population data on the Y axis. Next, select a column to animate by. For this example, selecting ‘year’ from the ‘Animate By’ dropdown will create and animation that displays how the relationship between life expectancy and GDP Per Captia has varied over time. To further the visualization, you can size points relative to data and display additional information on hover. For this example, select ‘population’ to size points based off of the population of each country. In addition, select ‘country’ in the ‘Hover Text’ dropdown to display the name of the country for each point on hover."
      img: "![Add Trace Values](../static/images/create-animations/add-trace-values.png)"
    - copy: "Now that we have filtered the data, you may notice that you have multiple traces - as we do in this dataset - that you wish to define. Here, we can utilize the group function. To do so, select 'group' under the 'Graph' tab and then click the '+ group' button situated at the top."
      img: "![Add Group](../static/images/create-animations/add-group.png)"
    - copy: "First, we need to select the variable we wish to groupby. In this tutorial, we will select continents by using the dropwdown in the grouping panel."
      img: "![Group By](../static/images/create-animations/groupby.png)"
    - copy: "Second, we need to determine which traces we wish to apply the grouping across. Here, our Y value, gdpPercap, is selected by default. Notice that the groups are automatically colored according to Chart Studio's default color array - we will discuss how to alter these in the next section."
      img: "![Across Traces](../static/images/create-animations/across-traces.png)"
 - title: Style Your Chart
   sub-steps:
    - copy: "Concerning style, immediately we can see that we need to set better sizing for our markers. Here, navigate to 'Traces' under the 'Style' tab and set 'Maximum Marker Size' to 10."
      img: "![Size Reference](../static/images/create-animations/marker-sizeref.png)"
    - copy: "For this dataset, it'll be beneficial to apply a logarithmic scale to the y-axis. In the ‘Axes’ style tab, open the ‘Range’ panel and select ‘Y’ to apply changes to the y axis."
      img: "![Log Scale](../static/images/create-animations/log-scale.png)"
    - copy: "Also, because it is an animation it is best to apply fixed axes. To do so, remain in the ‘Axes’ style tab, open the ‘Range’ panel and select ‘X’. Click 'Custom Range' and enter the range 20 to 90. Likewise for the yaxis, enter 2.254045081589488 to 5.196555456217384."
      img: "![Custom Range](../static/images/create-animations/custom-range.png)"
    - copy: "Now, we can style the individual continents that were separated when we used the group function. Navigate to 'Traces' under the 'Style' tab where you should see a dropwdown titled 'Group By Category'. Use this to style each category."
      img: "![Group By Category](../static/images/create-animations/group-by-category.png)"
    - copy: "For example, select 'Europe' from the dropdown and click on the color dot to activate the color panel popup. Now, pick a color of your choosing. For the pupose of this tutorial we've left the default setting of orange."
      img: "![Style Markers](../static/images/create-animations/style-markers.png)"
    - copy: "Repeat this process for the remainder of the categories if you wish to change the colors - or apply any other trace stylings."
      img: "![Style All Markers](../static/images/create-animations/style-all-markers.png)"
    - copy: "Lastly, add a title. Simply, click and edit directly on the plot at the title location. Alternatively, navigate to 'Layout' under the STYLE tab, select the 'Title and Fonts' panel and enter the title in the available textbox."
      img: "![Add Title](../static/images/create-animations/add-title.png)"
 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save Button](../static/images/create-animations/save-button.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save Modal](../static/images/create-animations/save-modal.png)"
---
