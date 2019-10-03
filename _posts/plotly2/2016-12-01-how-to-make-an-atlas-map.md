---
layout: tutorial-single_layout
title: Learn How to Make Atlas Maps using the Plotly 2.0 Data Visualization Tool
subtitle: 
permalink: /make-an-atlas-map/
imageurl: ../static/images/map/atlas thumb.png
state: active
tags: maps
order: 2
meta_description: Learn how to plot an atlas map using the Plotly 2.0 data visualization tool.
popularity: featured
carouselimageurl:
actioncall: How to Make an Atlas Map in Plotly 2.0
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:305

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/scatter-plots-on-maps/) or [R](https://plot.ly/r/scatter-plots-on-maps/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/305.embed"></iframe>
live-graph-image:

steps:
 - title: Try an Example
   sub-steps:
    - copy: "Atlas maps are great for mapping your geo data and displaying your points in a stunning and interactive way."
    - copy: "After selecting 'Atlas Maps' under 'Chart Type', you can check out an example before adding your own data. Clicking the 'try an example' button will show what a sample chart looks like after adding data and playing with the style. You'll also see what locations, values, and style attributes were selected for this specific map, as well as the end result."
      img: "![Example atlas](../static/images/map/atlas example.png)"
    - copy: "You can also use the data featured in this tutorial by clicking on 'Open This Data in Plotly' on the left-hand side. It'll open in your workspace."
      img: "![Open data](../static/images/enter-data-in-the-grid/open-this-data.png)"

 - title: Add Your Data to Plotly
   sub-steps:
    - copy: "Head to Plotly’s new online [workspace](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. Plotly accepts .xls, .xlsx, or .csv files. For more information on how to enter your data, see [this](http://help.plot.ly/add-data-to-the-plotly-grid/) tutorial."
      img: "![Import data main](../static/images/map/atlas import data.png)"

 - title: Create a Chart
   sub-steps:
    - copy: "After adding your own data, go to GRAPH on the left-hand side, then 'Create'. Choose 'Atlas Maps' under 'Chart type'. Note that this chart is only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade."
      img: "![Choose chart main](../static/images/map/atlas chart type.png)"
    - copy: "After selecting ‘Atlas Maps', you should then select your traces using the dropdown menus to create the plot. This includes latitude and longitude, and if desired, you'll select the hover text, size and color." 
    - copy: "The 'Map Region' field lists certain continents, the USA (for the Albers USA projection) and the world."
      img: "![Map region](../static/images/map/atlas map region.png)"
    - copy: "The 'Projection' field lists different map projections. These projections are used to display any part or all of the Earth, on a flat surface."
      img: "![Raw plot](../static/images/map/map projection atlas.gif)"
    - copy: "After you make your selections, a raw atlas map will be created, as seen below."
      img: "![Raw plot](../static/images/map/atlas raw plot.png)"

 - title: Style a Chart
   sub-steps:
    - copy: "You can choose your colors, text position, or typeface. Click on STYLE on the left-hand side to play around with the style of your map."
    - copy: "To change the color of the points, click on ‘Traces’ under the same STYLE tab, and choose the color you want. Additionally, this section allows you to change the marker opacity, diameter of the points, and symbol. Note that certain colors and typeface are only available with a PRO subscription."
      img: "![Scatter point colour](../static/images/map/atlas point colour.png)"
    - copy: "If you've selected from the 'Color' dropdown when you added your trace, you'll notice the colors appear on your map as a gradient." 
      img: "![By color](../static/images/map/by colour atlas .png)"
    - copy: "You have the option of changing this colorscale. Click on ‘Traces’ under the same STYLE tab, and choose a colorscale, with the added option of reversing it. There's also the color bar that you can show or hide, and the colorscale range that can be customized or set to 'Auto'."
      img: "![Colour main](../static/images/map/atlas colourscale.png)"
    - copy: "To add a title to your map, you can type it directly on the title by double-clicking it."
      img: "![Type directly title](../static/images/map/atlas title.png)"
    - copy: "The same can be done for the legend. Click on the 'Legend' sub-tab under STYLE, then set it to 'Show'. You'll see other options as well, like typeface, color, orientation, and positioning."
      img: "![Type directly legend](../static/images/map/atlas legend.png)"
    - copy: "Another way to enter your title is by visiting the 'Layout' section under STYLE. Click on 'Title and Fonts' and enter it in the title field."
      img: "![Type in layout panel](../static/images/map/atlas title panel.png)"
    - copy: "Scroll down to 'Geo Style' for more styling features. You can display land, lakes, rivers, and oceans. You also have the option of changing their colors."
      img: "![Geo style](../static/images/map/Geostyle.gif)"
    - copy: "The 'Geo Layout' section is where to view your map scope and projection, and set your map resolution. You can also play with your map rotation by adding your latitude, longitude and roll."
      img: "![Geo layout](../static/images/map/geo layout atlas.png)"
      
 - title: Save and Share
   sub-steps:
    - copy: "Your map is now done! Click SAVE on the left-hand side."
      img: "![Save main](../static/images/map/atlas save main.png)"
    - copy: "Give your PLOT and DATA a filename and select them as 'Public' or 'Private'. For more information on how sharing works, including the difference between private, public, and secret sharing, visit [this](http://help.plot.ly/save-share-and-export-in-plotly/) page."
      img: "![Save pop-up](../static/images/map/atlas save.png)"
---
