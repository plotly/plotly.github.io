---
layout: tutorial-single_layout
title: Shared X-Axis Subplots in Chart Studio
subtitle: Shared X-Axis Subplots in Chart Studio
permalink: /shared-x-axis-subplots/
imageurl: ../static/images/shared-x-axis-subplots/shared-x-axis-subplots.png
state: active
tags: subplots
order: 5
meta_description: A tutorial on how to create subplots with a shared x-axis in Chart Studio.
popularity: featured
carouselimageurl:
actioncall: A tutorial on how to create subplots with a shared x-axis in Chart Studio.
actioncall-url: https://plot.ly/create/?fid=plotly2_demo%3A388

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/#subplots) or [R](https://plot.ly/r/#subplots).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/389.embed"></iframe>

steps:
 - title: Introduction
   sub-steps:
    - copy: "In this tutorial we will look at how to create subplots with a shared x-axis."

 - title: Add Your Data to Chart Studio
   sub-steps:
    - copy: "Head to Chart Studio’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Chart Studio accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "For this tutorial, we'll use the NZ Weather dataset which can be found [here](https://raw.githubusercontent.com/plotly/datasets/master/nz_weather.csv). Simply, copy the URL from GitHub. Now, returning to the workspace select 'IMPORT' and then 'By URL'. Here, you just paste the URL from GitHub."
      img: "![Add Data](../static/images/shared-x-axis-subplots/add-data.png)"

 - title: Create Your Chart
   sub-steps:
    - copy: "Now that the data has been added, we can select our chart types. Here, we will use a single trace for each subplot. First, we will use the default chart type, 'Time Series'."
      img: "![Chart Type](../static/images/shared-x-axis-subplots/chart-type.png)"
    - copy: "Next, we need to define our trace values. To do so, use the dropdowns in the trace panel to select 'DATE' as the X value, 'Auckland' as the Y value, set 'Auckland' as the 'Hover Text'."
      img: "![Add Trace Values](../static/images/shared-x-axis-subplots/add-trace-values.png)"
    - copy: "Now that we have the first trace, lets add the second. Simply, click the blue '+ Trace' button and then use the dropdowns in the new trace panel to change the Y value and 'Hover Text' value to 'Dunedin'."
      img: "![Add 2nd Trace](../static/images/shared-x-axis-subplots/add-trace-values2.png)"
    - copy: "At the bottom of the panel click the 'Subplot & Multiple Axes' button where a selection of subplot arrangements ought to be presented. For this tutorial, select 'Stacked-Y-Axis' - also referred to as shared x-axis - and click 'Confirm'."
      img: "![Add Subplot](../static/images/shared-x-axis-subplots/add-subplot.png)"
    - copy: "If you make a mistake when selected the subplot layout, you can simply click 'UNDO', which is situated immediately below 'Confirm'."
      img: "![Undo Mistakes](../static/images/shared-x-axis-subplots/undo-button.png)"

 - title: Style Your Chart
   sub-steps:
    - copy: "Now we can style our plot! Under STYLE select 'Traces', then click individual at the top of the panel - this will enable you to customize each trace. Here, select the 'Dunedin' trace and then click color, which will force a color panel to appear. For the purpose of this tutorial we picked one of the preselected colors at the bottom."
      img: "![Trace Color](../static/images/shared-x-axis-subplots/style-trace-color.png)"
    - copy: "Now, navigate to 'Axes', again under the STYLE tab, and select the 'Lines' panel. At the top of the panel click Y and then select 'Y Axis 2' from the 'Y Axes' dropdown. At the bottom of the panel, change 'Zeroline' to 'Hide'. You ought to notice that the line on the top subplot is now gone."
      img: "![Hide Lines](../static/images/shared-x-axis-subplots/hide-lines.png)"
    - copy: "Staying in the 'Axes' tab under 'STYLE', select the 'Titles' box and then utilise the 'X' and 'Y' options and the dropdown to navigate which axis you wish to title using the textbox. First, select 'X' and enter the title in the textbox like below."
      img: "![X-Axis Title](../static/images/shared-x-axis-subplots/title-xaxis.png)"
    - copy: "You can repeat the process for the y axis or alternatively try editing the axis title directly on the plot like below."
      img: "![Y-Axis Title](../static/images/shared-x-axis-subplots/title-yaxis.png)"
    - copy: "For the chart title, you can navigate to 'Layout' under the STYLE tab and select 'Titles and Fonts'. Below the textbox you can select 'Edit in HTML'. Alternatively, like the axes' title, you can edit directly on the plot."
      img: "![Chart Title](../static/images/shared-x-axis-subplots/title-chart.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save Button](../static/images/shared-x-axis-subplots/save-button.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save Modal](../static/images/shared-x-axis-subplots/save-modal.png)"
---

