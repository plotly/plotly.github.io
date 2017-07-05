---
layout: tutorial-single_layout
title: 3D Mesh Plots in Plotly 2.0
subtitle: How to create a 3D mesh plot.
permalink: /make-a-3d-mesh-plot/
imageurl: ../static/images/make-a-3d-mesh-plot/3d-mesh-plot.png
state: active
tags: graph3d
order: 3
meta_description: A tutorial on how to create a 3D mesh plot in Plotly 2.0.
popularity: featured
carouselimageurl:
actioncall: 3D Mesh Plots in Plotly 2.0
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:328

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/3d-mesh-plots/) or [R](https://plot.ly/r/3d-mesh-plots/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="//plot.ly/~plotly2_demo/328.embed"></iframe>

  steps:
   - title: Try an Example
     sub-steps:
      - copy: "To try an example, select 'Chart Type' and a panel will appear with chart type options. Once you locate the 3D mesh icon under the '3d'column, you can check out an example before adding your own data by clicking the little graph icon that will show what a sample chart looks like after adding data and playing with the style. You'll also see what labels and style attributes were selected for this specific chart, as well as the end result."
        img: "![Try an Example](../static/images/create-animations/try-an-example.png)"
      - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
        img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"
   - title: Add Your Data to Plotly
     sub-steps:
      - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      - copy: "In this tutorial, we will use the helicopter dataset that is available via [Plotly's dataset repo](https://raw.githubusercontent.com/plotly/datasets/master/3d-mesh-helicopter.csv). Simply copy the URL and then navigate back to the Plotly workspace. Now, click 'IMPORT', select the 'By URL' tab, and paste in the the URL."
        img: "![Add Data](../static/images/make-a-3d-mesh-plot/add-data.png)"
   - title: Create Your Chart
     sub-steps:
      - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose '3D Mesh' in the '3d' column."
        img: "![Chart Type](../static/images/make-a-3d-mesh-plot/chart-type.png)"
      - copy: "Now in the trace panel, you can enter the X, Y, and Z values via the dropdowns to create the plot."
        img: "![Add XYV values](../static/images/make-a-3d-mesh-plot/xyz-values.png)"
      - copy: "Additionally, in 3D Mesh plots, you have the option to add I, J, K values immediately below in the trace panel."
        img: "![Add IJK values](../static/images/make-a-3d-mesh-plot/ijk-values.png)"
      - copy: "Now, that your 3d mesh has it's structure you can add the facecolor. Again, this can be done via the 'facecolor' dropwdown in the same trace panel."
        img: "![Add facecolor](../static/images/make-a-3d-mesh-plot/add-facecolor.png)"
    - title: Style a Chart
    sub-steps:
      - copy: "Now that we have created our chart, you can optionally choose to style it. In this example, we will adjust the aspect ratio. Here, select the 'STYLE' tab on the left-hand side, then 'Layout'. Next select 'Scene', then in the 'Aspect Ratio' dropwdown select 'auto'."
       img: "![Change aspect ratio](../static/images/make-a-3d-mesh-plot/change-aspect-ratio.png)"
   - title: Save and Share
     sub-steps:
      - copy: "Your chart is now done! Click SAVE on the left-hand side."
        img: "![Save Button](../static/images/make-a-3d-mesh-plot/save-button.png)"
      - copy: "After giving your file a name, select your PLOT and DATA as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
        img: "![Save Modal](../static/images/make-a-3d-mesh-plot/save-modal.png)"
---
