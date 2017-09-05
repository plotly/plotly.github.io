---
layout: tutorial-single_layout
title: Group in Plotly 2.0
subtitle: Use the Group Function in Plotly 2.0
permalink: /group-by/
imageurl: ../static/images/groupby/thumbnail.png
state: active
tags: fundamentals
order: 10.5
meta_description: A tutorial on how to use the group function in Plotly 2.0.
popularity: featured
carouselimageurl:
actioncall: A tutorial on how to use the group function in Plotly 2.0.
actioncall-url: hhttps://plot.ly/create/?fid=plotly2_demo%3A378

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/379.embed"></iframe>

steps:
 - title: Open Data From This Tutorial
   sub-steps:
    - copy: "To use the data featured in this tutorial click on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"
 
 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "For this tutorial, we'll use the gapminder dataset which can be found [here](https://raw.githubusercontent.com/plotly/datasets/master/gapminderDataFiveYear.csv). Simply, copy the URL from Github. Now, returning to the workspace select 'IMPORT' and then 'By URL'. Here, you just paste the URL from Github."
      img: "![Add Data](../static/images/groupby/add-data.png)"
 
 - title: Create Your Chart
   sub-steps:
    - copy: "Now that we have the data added to the grid, we can select our chart type. Select GRAPH on the left-hand side, then 'Create'. Click 'Chart Type', then choose 'Scatter' in the 'BASIC' column."
      img: "![Chart Type](../static/images/groupby/chart-type.png)"
    - copy: "Use the X and Y dropdowns to define X and Y variables for the chart. For this example, select the ‘gdpPerCap’ to display GDP per capita data on the x axis and select ‘lifeExp’ to display life expectancy data on the Y axis. Next, you can size points relative to data and display additional information on hover. Here, select ‘population’ to size points based on the population of each country. In addition, select ‘country’ in the ‘Hover Text’ dropdown to display the name of the country for each point on hover."
      img: "![Add Trace Values](../static/images/groupby/add-trace-values.png)"
    - copy: "Now that we have our data and traces we can apply a filter. More specifically, for the gapminder dataset, due to its size, we will filter data from 2007 only. In order to achieve this we add a filter by selecting ‘Filter’ under ‘Create’ and click the ‘+ Filter’ button"
      img: "![Add Filter](../static/images/groupby/add-filter.png)"
    - copy: "Select ‘year’ from the dropdown to filter by year"
      img: "![Select Filter](../static/images/groupby/select-filter.png)"
    - copy: "First, select gdpPercap from the ‘Traces To Filter’ dropdown. Next, make sure that the ‘Operator’ dropdown is set to Matching values and the ‘Include’ option is also selected (these are the default selections), use the dropdown under Include to select ‘2007’."
      img: "![Filter Controls](../static/images/groupby/filter-controls.png)"
    - copy: "Now that we have filtered the data, you may notice that you have multiple traces - as we do in this dataset - that you wish to define. Here, we can utilize the group function. To do so, select 'group' under the 'Graph' tab" and then click the '+ group' button situated at the top."
      img: "![Add Group](../static/images/groupby/add-group.png)"
    - copy: "First, we need to select the variable we wish to groupby. In this tutorial, we will select continents by using the dropwdown in the grouping panel."
      img: "![Group By](../static/images/groupby/groupby.png)"
    - copy: "Second, we need to determine which traces we wish to apply the grouping across. Here, our Y value, gdpPercap, is selected by default. Notice that the groups are automatically colored according to Plotly's default color array - we will discuss how to alter these in the next section."
      img: "![Across Traces](../static/images/groupby/across-traces.png)"
 
 - title: Style a Chart
   sub-steps:
    - copy: "Concerning style, immediately we can see that we need to set better sizing for our markers. Here, navigate to 'Traces' under the 'Style' tab and set 'Maximum Marker Size' to 10."
      img: "![Size Reference](../static/images/groupby/marker-sizeref.png)"
    - copy: "For this dataset, it'll beneficial to apply a logarithmic scale to the y-axis. In the ‘Axes’ style tab, open the ‘Range’ container and select ‘Y’ to apply changes to the y axis."
      img: "![Log Scale](../static/images/groupby/log-scale.png)"
    - copy: "Now, we can style the individual continents that were separated when we used the group function. Navigate to 'Traces' under the 'Style' tab where you should see a dropwdown titled 'Group By Category'. Use this to style each category."
      img: "![Group By Category](../static/images/groupby/group-by-category.png)"
    - copy: "For example, select 'Europe' from the dropdown and click on the color dot to activate the colopanel popup. Now, pick a color of your choosing. For the pupose of this tutorial we've left the default setting of orange."
      img: "![Style Markers](../static/images/groupby/style-markers.png)"
    - copy: "Repeat this process for the remainder of the categories if you wish to change the colors - or apply any other trace stylings."
      img: "![Style All Markers](../static/images/groupby/style-all-markers.png)"
 
 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save Button](../static/images/groupby/save-button.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save Modal](../static/images/groupby/save-modal.png)"
---
