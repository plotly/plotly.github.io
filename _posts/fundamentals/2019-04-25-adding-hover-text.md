---
layout: tutorial-single_layout
title: Adding hover text
subtitle: How to add hover text in Chart Studio
permalink: /Adding-hover-text/
imageurl: /static/images/zoom-pan-hover/thumbnail.gif
state: active
tags: fundamentals
section: fundamentals
order: 17
actioncall: hover text interaction in Chart Studio
actioncall-url: https://help.plot.ly/adding-hover-text/

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/480.embed"></iframe>

steps:
 - title: Introduction
   sub-steps:
    - copy: "Chart Studio offers free, online tools for analyzing data and making graphs. In this guide, you will see how to add, remove, and modify hover text into your graph."

    - copy: "When you are using chart studio to present your results, it would be useful to utilize 'hover text' feature to show the exact figures on the plot without adding these numbers into the plot, and making it over-crowded. To do so, hover over an item in the plot without clicking it, and a tooltip appears including some information about the item being hovered over."
    - copy: "This feature is active by default, however you have this option to modify/omit it."

 - title: Add hover text
   sub-steps:
    - copy: "First head to your work space by hovering on the plot thumbnail and clicking on the 'Editor' bottom. Then go to the 'Traces' section under the 'Style' menu. To modify the hover text head to 'show' property under 'Hoover/Tooltip text' sub-panel and select/deselect the check boxes based on your priorities. Please note if you wish to show a column in the hover text you need to select this column in 'Text' property under the 'Text' sub-panel, so a new text box will appear in 'Hoover/Tooltip text' sub-panel, then you can select the text property and eventually you will see the related column in your plot. So, you can add either of axises, an explanation, and also traces."
      img: "![Drag Zoom](../static/images/zoom-pan-hover/drag-to-zoom.gif)"


 - title: Change Drag/Hover mode via Chart Studio
   sub-steps: 
    - copy: "First, head to the 'Edit' page of your plot by hovering on the plot's thumbnail and clicking on the 'Edit' button. This will redirect you to the [Chart Studio Workspace]((https://plot.ly/create/). When you are in the workspace, go to the 'General' section under the 'Style' menu."
    - copy: "To change the drag mode, head to the 'Drag' property under the 'Interactions' sub-panel and set the 'Mode' attribute using the dropdown menu."
      img: "![Drag Mode](../static/images/zoom-pan-hover/change-drag-mode.png)"
    - copy: "To change the hover mode, head to the 'Hover' property in the same 'Interactions' sub-panel and set the 'Mode' attribute using the dropdown menu."
      img: "![Hover Mode](../static/images/zoom-pan-hover/change-hover-mode.png)"

