---
layout: tutorial-single_layout
title: 3D Line Charts in Plotly 2.0
subtitle: How to create a 3D Line Chart.
permalink: /make-a-3d-line-plot/
redirect-from: /make-a-3d-line-chart/
imageurl: ../static/images/make-a-3d-line-chart/3d-line-chart.png
state: active
tags: graph3d
order: 1.5
meta_description: A tutorial on how to create a 3D line chart in Plotly 2.0.
popularity: featured
carouselimageurl:
actioncall: 3D Line Charts in Plotly 2.0
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:330

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/3d-line-plots/) or [R](https://plot.ly/r/3d-line-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/330.embed"></iframe>

  steps:
   - title: Try an Example
     sub-steps:
      - copy: "To try an example, select 'Chart Type' and a panel will appear with chart type options. Once you locate the 3D line icon under the '3d'column, you can check out an example before adding your own data by clicking the little graph icon that will show what a sample chart looks like after adding data and playing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
        img: "![Try an Example](../static/images/create-animations/try-an-example.png)"
      - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
        img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"
   - title: Add Your Data to Plotly
     sub-steps:
      - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      - copy: "In this tutorial, we will use a bsic dataset that is available via [Plotly's dataset repo](https://raw.githubusercontent.com/plotly/datasets/master/3d-line1.csv). Simply copy the URL and then navigate back to the Plotly workspace. Now, click 'IMPORT', select the 'By URL' tab, and paste in the the URL."
        img: "![Add Data](../static/images/make-a-3d-line-chart/add-data.png)"
   - title: Create Your Chart
     sub-steps:
      - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose '3D Line' in the '3d' column."
        img: "![Chart Type](../static/images/make-a-3d-line-chart/chart-type.png)"
      - copy: "Now in the trace panel, you can enter the X, Y, and Z values via the dropdowns to create the plot."
        img: "![Add XYZ values](../static/images/make-a-3d-mesh-plot/xyz-values.png)"
      - copy: "Optionally, if you have an additional column such as color you can add it in the same trace panel, again via the dropdown."
        img: "![Add color](../static/images/make-a-3d-mesh-plot/add-color.png)"
   - title: Style a Chart
     sub-steps:
      - copy: "After creating your chart and you can see the data, go to STYLE on the left-hand-side. Here, you have multiple options for styling your plot. In this tutorial, we will just select two basic stylings. Namely, add a chart title and axis titles."
       img: "![Style options](../static/images/make-a-3d-line-chart/styling-options.png)"
     - copy: "Following the instructions above, select the STYLE tab and then 'Layout'. In the panel to the right select 'Titles and Fonts'. Now enter '3D Line Chart' in the available text box. Optionally, you can make this bold, italic, and change fonts. In addition, you can use latex or edit the text in HTML."
       img: "![Add plot title](../static/images/make-a-3d-line-chart/add-title.png)"
     - copy: "Alternatively, you can simply click and enter text immediately on the plot where the title would be located."
       img: "![Click and add title](../static/images/make-a-3d-line-chart/click-add-title.png)"
     - copy: "Staying in the STYLE tab, navigate to 'Axes'. On the right-hand side, select 'title', here you can edit each axis label in the same fashion as previously."
       img: "![Add axis titles](../static/images/make-a-3d-line-chart/add-axis-titles.png)"
   - title: Save and Share
     sub-steps:
      - copy: "Your chart is now done! Click SAVE on the left-hand side."
        img: "![Save Button](../static/images/make-a-3d-line-chart/save-button.png)"
      - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
        img: "![Save Modal](../static/images/make-a-3d-line-chart/save-modal.png)"
---
