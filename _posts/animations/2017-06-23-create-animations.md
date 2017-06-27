---
layout: tutorial-single_layout
title: Animations in Plotly 2.0
subtitle: Create Animations in Plotly 2.0
permalink: /create-animations/
imageurl: ../static/images/create-animations/animations.png
state: active
tags: animations
order: 1
meta_description: A tutorial on how to create animations in Plotly 2.0.
popularity: featured
carouselimageurl:
actioncall: A tutorial on how to create animations in Plotly 2.0.
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:320

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/#animations) or [R](https://plot.ly/r/#animations).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/320.embed"></iframe>

steps:
 - title: Try an Example
   sub-steps:
    - copy: "To try an example, select 'Chart Type' and a panel will appear with chart type options. Once you locate the animation icon under the 'FINANCE'column, you can check out an example before adding your own data by clicking the little graph icon that will show what a sample chart looks like after adding data and playing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
      img: "![Try an Example](../static/images/create-animations/try-an-example.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"
 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "For this tutorial, we'll use the gapminder dataset which can be found [here](https://raw.githubusercontent.com/plotly/datasets/master/gapminder_unfiltered.csv). Simply, copy the URL from Github. Now, returning to the workspace select 'IMPORT' and then 'By URL'. Here, you just paste the URL from Github."
      img: "![Add Data](../static/images/create-animations/add-data.png)"
 - title: Create Your Chart
   sub-steps:
    - copy: "Now that we have the data added to the grid, we can select our chart type. Select GRAPH on the left-hand side, then 'Create'. Click 'Chart Type', then choose 'Animation' in the 'FINANCE' column."
      img: "![Chart Type](../static/images/create-animations/chart-type.png)"
    - copy: "Use the X and Y dropdowns to define X and Y variables for the chart. For this example, select the ‘gdpPerCap’ to display life expectancy data on the x axis and select ‘lifeExp’ to display population data on the Y axis. Next, select a column to animate by. For this example, selecting ‘year’ from the ‘Animate By’ dropdown will create and animation that displays how the relationship between life expectancy and GDP Per Captia has varied over time. To further the visualization, you can size points relative to data and display additional information on hover. For this example, select ‘population’ to size points based off of the population of each country. In addition, select ‘country’ in the ‘Hover Text’ dropdown to display the name of the country for each point on hover."
      img: "![Add Trace Values](../static/images/create-animations/add-trace-values.png)"
    - copy: "You may have more than one trace that you want to show in your animation. For example, in this tutorial we have multiple continents that can added. Thus, we want to filter the trace by continent. In order to achieve this we add a filter by selecting ‘Filter’ under ‘Create’ and click the ‘+ Filter’ button"
      img: "![Add Filter](../static/images/create-animations/add-filter.png)"
    - copy: "Select ‘continent’ from the dropdown to filter through the continent data"
      img: "![Select Filter](../static/images/create-animations/select-filter.png)"
    - copy: "First set up the filter for the ‘Asia’ trace by selecting Asia from the ‘Traces To Filter’ dropdown. Next, make sure that the ‘Operator’ dropdown is set to Matching values and the ‘Include’ option is also selected (these are the default selections), use the dropdown under Include to select ‘Asia’"
      img: "![Filter Controls](../static/images/create-animations/filter-controls.png)"
    - copy: "First set up the filter for the ‘Asia’ trace by selecting Asia from the ‘Traces To Filter’ dropdown"
      img: "![Select Filter Value](../static/images/create-animations/filter-value.png)"
    - copy: ""
    - copy: "Repeat this procedure (multiple times) from the beginning to set up an additional trace and filter for each continent."
      img: "![All Traces Added](../static/images/create-animations/all-traces.png)"
 - title: Style a Chart
   sub-steps:
    - copy: "whilst we haven't in this example, you can style markers by changing their colors. For more, tutorials on styling your charts checkout the [Style & Layout section](https://help.plot.ly/tutorials/#layout) on the main page."
      img: "![Style Markers](../static/images/create-animations/style-markers.png)"
    - copy: "For this dataset, it may be beneficial to apply a logarithmic scale to the x-axis. In the ‘Axes’ style tab, open the ‘Range’ container and select ‘X’ to apply changes to the x axis."
      img: "![Log Scale](../static/images/create-animations/log-scale.png)"
 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save Button](../static/images/create-animations/save-button.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save Modal](../static/images/create-animations/save-modal.png)"
---
