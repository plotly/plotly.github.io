---     
layout: tutorial-single_layout
title: Adding Hover Text
subtitle: How to add hover text in Chart Studio
permalink: /adding-hover-text/
imageurl: ../static/images/hover-text/hover-thum.png
state: active
tags: fundamentals
section: fundamentals
order: 17
actioncall: hover text interaction in Chart Studio
actioncall-url: https://help.plot.ly/adding-hover-text/

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~PythonPlotBot/3392.embed"></iframe>

steps:
 - title: Introduction
   sub-steps:
    - copy: "Chart Studio offers free, online tools for analyzing data and making graphs. In this guide, you will see how to add, remove, and modify the hover text of your graph."
    - copy: "When you are using chart studio to present your results, it would be useful to utilize 'hover text' feature to show more information on the plot without adding these numbers into the plot, and making it over-crowded. To do so, hover over an item in the plot without clicking it, and a tooltip appears including some information about the item being hovered over."
    - copy: "This feature is active by default, however you have the option to modify or omit it."

 - title: Add Hover Text
   sub-steps:
    - copy: "First open your plot by hovering on the plot thumbnail and clicking on the 'Editor' button. Then go to the 'Traces' section under the 'Style' menu. To modify the hover text head to 'show' property under 'Hover/Tooltip text' sub-panel and select/deselect the check boxes based on your preferences. There is a possibility to add either of axes, an explanation, and also traces to the hover text."
      img: "![Show hover text](../static/images/hover-text/hover_text_show.png)"
    - copy: "To show the content of a column in hover text, select the column in 'Text' property under the 'Text' sub-panel. A new text box will appear in 'Hover/Tooltip text' sub-panel, so you can select the 'text' property which will add this text to the hover text."
      img: "![Add a definition](../static/images/hover-text/Text_text.png)"
    - copy: "To add a pre-defined text, or url to the hover text, head to 'template' in 'Mode' attribute under 'Hover/Tooltip text' sub-panel. Then, you can add your text/url and style it."
      img: "![Add a definition](../static/images/hover-text/hover_template.png)"
---
