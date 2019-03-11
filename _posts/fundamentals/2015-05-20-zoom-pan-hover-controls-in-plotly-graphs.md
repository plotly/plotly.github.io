---
layout: tutorial-single_layout
title: Zoom, Pan, and Hover Controls
subtitle: How to zoom, pan, and hover in Chart Studio
permalink: /zoom-pan-hover-controls/
imageurl: /static/images/zoom-pan-hover/thumbnail.gif
state: active
tags: fundamentals
section: fundamentals
order: 7
actioncall: Zoom, pan, and hover interaction in Chart Studio
actioncall-url: https://plot.ly/create/?fid=plotly2_demo:480

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/480.embed"></iframe>

steps:
 - title: Introduction
   sub-steps:
    - copy: "Chart Studio offers free, online tools for analyzing data and making graphs. You can bring your graphing and data analysis to the next level with zoom, pan, and hover."
    - copy: "In this guide, we'll show you how to:"
    - copy: "   1. Zoom-in and Zoom-out/Autoscale the plot; \n
                2. Zoom-in along axes; \n
                3. Pan and reset the plot; \n
                4. Pan along axes; \n
                5. Zoom-out/Autoscale/Reset along an axis; \n
                6. Change Drag/Hover mode; \n
                7. Autoscale/Reset axes via Mode Bar." 
    - copy: "Make sure to check out our other [tutorials](http://help.plot.ly/tutorials/)!"

 - title: Try the Example
   sub-steps:
    - copy: "Before getting started with your own dataset, you can use the data featured in this tutorial by clicking on 'Open This Data in Chart Studio' on the left-hand side. It'll open in Chart Studio."

 - title: Zoom-in and Zoom-out/Autoscale the plot
   sub-steps:
    - copy: "If the plot's drag mode is set to 'Zoom', click and drag on the plot to zoom-in and double-click to zoom-out completely, i.e., autoscale both the axes."
      img: "![Drag Zoom](../static/images/zoom-pan-hover/drag-to-zoom.gif)"

 - title: Zoom-in along axes
   sub-steps:
    - copy: "To zoom along only one axis, click and drag near the edges of either one of the axes. Additionally, to zoom-in along both the axes together, click and drag near the corners of both the axes."
      img: "![Zoom Axis](../static/images/zoom-pan-hover/zoom-axis.gif)"

 - title: Pan and Reset the plot
   sub-steps:
    - copy: "If the plot's drag mode is set to 'Pan', click and drag on the plot to pan and double-click to reset the pan."
      img: "![Drag Pan](../static/images/zoom-pan-hover/drag-to-pan.gif)"
    - copy: "Please note that, by default, the plot's drag mode is set to 'Zoom'."

 - title: Pan along axes
   sub-steps:
    - copy: "To Pan along one axis, click and drag from the center of the axis."
      img: "![Example after](../static/images/zoom-pan-hover/pan-axis.gif)"


 - title: Zoom-out/Autoscale/Reset an axis
   sub-steps:
    - copy: "Double-click on a single axis to autoscale along that axis alone."
      img: "![Example after](../static/images/zoom-pan-hover/double-click-autoscale.gif)"

 - title: Change Drag/Hover mode via Chart Studio
   sub-steps:
    - copy: "First, head to the 'Edit' page of your plot by hovering on the plot's thumbnail and clicking on the 'Edit' button. This will redirect you to the [Chart Studio Workspace]((https://plot.ly/create/). When you are in the workspace, go to the 'General' section under the 'Style' menu."
    - copy: "To change the drag mode, head to the 'Drag' property under the 'Interactions' sub-panel and set the 'Mode' attribute using the dropdown menu."
      img: "![Drag Mode](../static/images/zoom-pan-hover/change-drag-mode.png)"
    - copy: "To change the hover mode, head to the 'Hover' property in the same 'Interactions' sub-panel and set the 'Mode' attribute using the dropdown menu."
      img: "![Hover Mode](../static/images/zoom-pan-hover/change-hover-mode.png)"

 - title: Change Drag/Hover mode and Autoscale/Reset axes via Mode Bar
   sub-steps:
    - copy: "To change the drag/hover mode and autoscale/reset axes uisng Mode Bar, please refer [Mode Bar documentation](https://help.plot.ly/getting-to-know-the-plotly-modebar/)."
---
