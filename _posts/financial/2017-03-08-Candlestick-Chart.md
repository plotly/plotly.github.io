---
layout: tutorial-single_layout
title: Candlestick Charts in Plotly 2.0
subtitle: Create a Candlestick Chart of financial data.
permalink: /make-a-candlestick/
imageurl: ../static/images/make-a-candlestick/candlestick-thimb.PNG
state: active
tags: financial
order: 3
meta_description: A tutorial on how to make a candlestick chart in Plotly 2.0.
popularity: featured
carouselimageurl:
actioncall: How to make a candlestick chart in Plotly 2.0
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:309

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/candlestick-charts/) or [R](https://plot.ly/r/candlestick-charts/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/309.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "You can use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"
 
 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
    - copy: "For this tutorial, we have decided to upload the data via a URL. More specifically, the Apple stock activity dataset from GitHub."
      img: "![Import Data](../static/images/make-a-candlestick/import-data-url.png)"

 - title: Create Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Click 'Chart Type', then choose 'Candlestick Chart' in the 'Financial' column."
      img: "![Choose chart main](../static/images/make-a-candlestick/choose-chart-main.JPG)"
    - copy: "On the left-hand side, in the trace panel, you can assign each variable. You should then fill out the X, Open, High, Low, and Close dropdown to create the plot."
      img: "![Adding data](../static/images/make-a-candlestick/trace-panel.PNG)"

 - title: Style Chart
   sub-steps:
    - copy: "Plotly 2.0 allows you to style the traces, layout, annotations, axes, legend, and more. To start customizing, click on STYLE on the left-hand side."
    - copy: "To change the line color, fill color, or line thickness for either increasing or decreasing values, click on ‘Traces’ under the same STYLE tab. Note that certain colors and typeface are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!" 
      img: "![Trace Colors](../static/images/make-a-candlestick/trace-colors.PNG)"

    - copy: "To add or change the title, simply click the title on the plot and an editable text box will appear. Alternatively, you can select ‘Layout’ under the STYLE tab and then select ‘Title and Fonts’. Here, you ought to see a text box where you can add, or edit, the title. Additionally, you can customise the text by changing the typeface, size, color, or write in HTML or even LaTeX."
      img: "![Titles](../static/images/make-a-candlestick/titles.png)"
    
    - copy: "In Plotly 2,0 you can customise the legend’s text, position, orientation, color, and visibility. For this tutorial we will edit the text, change the orientation, and legend position. Again, under the STYLE tab select ‘Legend’, which will then open the legend panel. Here, we will change the orientation and position in 3 stages. (1) Under the title orientation click the ‘Horizontal’ button; (2) Below the title 'Positioning' enter the 'X Position 'as 0.5 and the 'Y Position' as 1; (3) Click the setting icon located next the title 'Positioning' and select ‘Center’ to set the x position coordinate as the center of the legend text. Lastly, to edit the text, simply click the legend text in the plot and an editable text box will appear (similar to editing the plot title) ."
      img: "![Legend](../static/images/make-a-candlestick/legend.png)"
    
    - copy: "The next few features are somewhat unique to financial charts. You have the option of using either, both, or neither."
    - copy: "Like previously, under the STYLE tab select ‘Axes, which will open multiple panel options; then ‘Range Slider’.  Here you have the option toggle visibility, make adjustments to height, border width, and background or border color. For this tutorial, we have left all setting to default."
    - copy: "It is also important to note, that you can control the range slider by simply clicking and dragging the cursor from either end."
      img: "![Range Slider](../static/images/make-a-candlestick/rangeslider.png)"
    
    - copy: "The second feature is Timescale Buttons – buttons that can be clicked and update the plot to specific date range. Similar to ‘Range Selector’, ‘Timescale Buttons’ can be found in the ‘Axes’ option under the STYLE tab.  In the ‘Timescale Buttons’ panel click the blue ‘+ Button’ to add a timescale button. Here, you have the option to toggle visibility, make adjustments to height, border width, and background or border color. More importantly, in the top box inside the panel you can set the label, customise the step (i.e. month etc.), count (how many months, years, etc.), and the stepmode (backward etc.). For this tutorial, we have selected one month backward from the most recent date. Also note, that a reset button is added by default."
      img: "![Timescale Buttons](../static/images/make-a-candlestick/timescale-buttons.png)"

 - title: Save and Share
   sub-steps:
    - copy: "Your chart is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/make-a-candlestick/save.png)"
    - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/make-a-candlestick/save-popup.png)"
---