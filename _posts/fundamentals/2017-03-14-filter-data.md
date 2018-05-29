---
layout: tutorial-single_layout
title: Applying Filters in Chart Studio
subtitle: Filter Data in Chart Studio
permalink: /filter-data/
imageurl: ../static/images/filters/filter-thimb.PNG
state: active
tags: fundamentals
order: 10
meta_description: A tutorial on how to apply filters to data in Chart Studio
popularity: featured
carouselimageurl:
actioncall: How to apply filters to data in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:312

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/312/"></iframe>

steps:
 - title: Introduction
   sub-steps:
    - copy: "Understanding how to apply filters to data in Chart Studio can be divided in three categories: (1) categorical data, (2) continuous data, and (3) dates. As a consequences, we will look at these individually and in the order previously specified. It is also important to note, that in Chart Studio you can apply single or multiple filters to each plot."
    - copy: "Keeping that in mind, we will explore the meteorite dataset and by applying filters we will attempt to answer the question: 'Where has the largest concentraction of ordinary meteorites greater than 10,000 grams fallen in the 21st century?'"

 - title: Try an Example
   sub-steps:
    - copy: "You can use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "For this tutorial, copy the meteorite dataset URL https://raw.githubusercontent.com/bcdunbar/datasets/master/meteorites_subset.csv and head to Plotly’s new online [workspace](https://plot.ly/create) and add your data by entering the meteorite URL."
    - copy: "If you decide to try another dataset, keep in mind that Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![insert](../static/images/filters/import-data.png)"

 - title: Create Chart
   sub-steps:
    - copy: "First we need to create a chart! As we are plotting meteorite locations we will create a scatter map. Thus, under 'Chart Type' select 'Satellite Maps'."
      img: "![insert](../static/images/filters/chart-type.png)"
    - copy: "Immediately below, click the 'Latitude' dropdown and select the column name 'recatlat', then click the 'Longtitude' dropwdown and select column name 'recatlon'."
      img: "![insert](../static/images/filters/trace-values.png)"
      
 - title: Style Chart
   sub-steps:
    - copy: "Like many other charts, here you can apply numerous styles to your chart but for the purpose of this tutorial we have decided to just change the marker opacity. To do this, simply click 'Traces' under the 'STYLE' tab and in the text box next to 'marker opacity' enter '0.5'." 
      img: "![insert](../static/images/filters/style-trace.png)"

 - title: Filter Categorical Data
   sub-steps:
    - copy: "To apply a filter, click 'filter' under the 'GRAPH' tab. Now, you should see the blue ‘+Filter’ button in the top-right of the next panel. Click it! This will produce a filter box directly below the button in the panel."
      img: "![insert](../static/images/filters/add-filter.png)"
    - copy: "Here, you can choose the column which you want to filter; click the dropdown next to ‘Select Column’ and select 'class'."
      img: "![insert](../static/images/filters/select-filter.png)"
    - copy: "A new box ought to have appeared. Here, click the dropdown next to ‘Traces To Filter’. You can select a single variable or multiple. For the purpose of this tutorial, select 'reclong'."
      img: "![insert](../static/images/filters/trace-to-filter.png)"
    - copy: "Next, click the dropdown beside ‘Operator’ and choose one of the operators (i.e. ‘Matching Values’)."
      img: "![insert](../static/images/filters/matching-values.png)"
    - copy: "The final dropdown will allow you to select unique values from the column which you have opted to filter. You have the option to either use “Include” –only display the unique values you have selected – or “Exclude” – the opposite of include. Here, we will include the class value 'Ordinary'."
      img: "![insert](../static/images/filters/matching-values.png)"
    - copy: "Congratulations, you have successful applied a filter to categorical data."

 - title: Filter Continuous Data
   sub-steps:
    - copy: "Like previously, click the blue ‘+Filter’ button in the top-right of the next panel. This ought to produce a filter box directly below the categorical filter that was just applied."
      img: "![insert](../static/images/filters/2nd-filter.png)"
    - copy: "Again, similar to before, you can choose the column which you want to filter; click the dropdown next to ‘Select Column’ and select the 'mass (g)'."
      img: "![insert](../static/images/filters/select-2nd-filter.png)"
    - copy: "A new box ought to have appeared. Here, click the dropdown next to ‘Traces To Filter’. You can select a single variable or multiple. For this filter, we will select 'reclong' again."
      img: "![insert](../static/images/filters/2nd-traces-to-filter.png)"
    - copy: "Next, click the dropdown beside ‘Operator’ and choose one of the operators (i.e. ‘Inequality’)."
      img: "![insert](../static/images/filters/inequality.png)"
    - copy: "The final dropdown will allow you to filter data by one of the four available inequalities (less than, greater than, less than and equal to, greater than and equal to). To answer our question that we've set out to visualise, select 'greater than' and enter '10000' (greater than 10,000 grams)."
      img: "![insert](../static/images/filters/inequality.png)"
    - copy: "Congratulations, you have successful applied a filter to continuous data."

 - title: Filter Date Data
   sub-steps:
    - copy: "In addition to categorical and continuous data, we can apply filters to dates. Like previously, you should see the blue ‘+Filter’ button in the top-right of the next panel. Click it! This ought to produce another filter box directly below the other filters."
      img: "![insert](../static/images/filters/3rd-filter.png)"
    - copy: "Here, you can choose the date data column that you want to filter; click the dropdown next to ‘Select Column’ and select the 'year'."
      img: "![insert](../static/images/filters/select-3rd-filter.png)"
    - copy: "A new box ought to have appeared. Here, click the dropdown next to ‘Traces To Filter’. You can select a single variable or multiple for which you want to apply the filter to. Like before, we will select 'reclong'."
      img: "![insert](../static/images/filters/3rd-traces-to-filter.png)"
    - copy: "Next, click the dropdown beside ‘Operator’ and choose the operator ‘Range’"
      img: "![insert](../static/images/filters/range.png)"
    - copy: "Immediately below, you have the option to set both the ‘Min’ (minimum) and ‘Max’ (maximum) values of the range. In this tutorial, we have entered the values 2015-01-01 and 2016-01-01 respectively. Additionally, there is the option to either use “Include X” –only display the unique values you have selected – or “Exclude X” – the opposite of include."
      img: "![insert](../static/images/filters/range.png)"
    - copy: "Congratulations, you have successful applied a filter to date data."

 - title: Final Result
   sub-steps:
    - copy: "Below is the final result from applying three (categorical, continuous, and date) filters. Thus, you can see that by applying these filter we can answer the question that we orginally set out to visualise: Where has the concentraction of ordinary meteorites greater than 10,000 grams fallen in the 21st century?"
      img: "![insert](../static/images/filters/final-result.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![insert](../static/images/filters/save.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![insert](../static/images/filters/save-popup.png)"
---