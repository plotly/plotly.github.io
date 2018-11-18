---
layout: tutorial-single_layout
title: Axes Properties
subtitle: A Guide to Axes Properties with Chart Studio
permalink: /axes/
imageurl: ../static/images/misc-tutorial-images/axes thumb.png
state: active
tags: layout
order: 5
meta_description: Learn axes properties using the Chart Studio online visualization tool.
popularity: featured
actioncall: make a chart
actioncall-url:

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/axes/) or [R](https://plot.ly/r/axes/).

steps:
 - title: Introduction
   sub-steps:
    - copy: Most graphs consist of a horizontal axis (x-axis) and a vertical axis (y-axis) to display their data. This tutorial will show you different ways you can define axes properties. All the attributes in this tutorial are found in the online [workspace](https://plot.ly/create/) in the 'Axes' section, under STYLE."
      img: "![Axes section](../static/images/misc-tutorial-images/axes section.png)"

 - title: Change Axis Range
   sub-steps:
    - copy: "You can set the range of your axes in the 'Range' sub-tab."
    - copy: "The axes are autoscaled, but if you want you to change the range of your axes, click 'Custom Range' under 'Selection'."
      img: "![Custom range](../static/images/misc-tutorial-images/custom range.png)"
    - copy: "For our example, our y-axis values are over 15 so we'd like our y-axis to start at 10 (our minimum value). We'll click on 'Y' and then enter the minimum value in the 'Min' field. This can be done if we have a maximum value, by entering it in the 'Max' field."
      img: "![Changing range](../static/images/misc-tutorial-images/y value range.gif)"

 - title: Reverse Axis
   sub-steps:
    - copy: "Reversing the axis is so easy; just flip the 'Min' and 'Max' values. The animated image below shows that when we switch the 'Min' and 'Max' values, the axis is reversed."
      img: "![Reverse](../static/images/misc-tutorial-images/reverse axis.gif)"

 - title: Log Axis
   sub-steps:
    - copy: "You can also set the axis type as linear or log. In the 'Range' sub-tab, select the desired axis, then click 'Linear' or 'Log' under 'Axis Type'."
      img: "![Linear log](../static/images/misc-tutorial-images/loglinear.gif)"

 - title: Tick Labels
   sub-steps:
    - copy: "Customizing the style and number of tick labels along the axes can help highlight particular aspects of your data."
    - copy: "The tick labels reflect column values that were selected in your trace(s)."
      img: "![Tick labels](../static/images/misc-tutorial-images/x axis tick labels.png)"
    - copy: "You have the option of showing these labels or hiding them. Go to 'Axes', then 'Tick Labels' and depending on the axis you want to change, select X, Y, or 'ALL'. The default is 'SHOW' but click 'Hide' if you don't wish to display them."
      img: "![Hide or show tick labels](../static/images/misc-tutorial-images/tick labels.gif)"

 - title: Tick Text
   sub-steps:
    - copy: "When the tick labels are set to 'Show', you can change their typeface, font size and font color. Note that certain colors and typefaces are only available with a PRO subscription. Click [here](https://plot.ly/products/cloud/) to upgrade!"
      img: "![Tick label attributes](../static/images/misc-tutorial-images/tick label attributes.png)"
    - copy: "The ticks can be angled at 45°, 90°, 135°, or 180°. You can also add exponents, but it'll only work if your axes consist of numerical data."
      img: "![Tick angels and exponents](../static/images/misc-tutorial-images/angle and exponents.gif)"
    - copy: "You can add a prefix or suffix to your tick labels. If yours isn't listed, click on 'Custom' and type it in the field."
    - copy: "For our example, our y-axis consists of data in Celcius, and our x-axis is in minutes. 'Minutes' isn't listed, so we'll select 'Custom' and type it in."
      img: "![Label formatting](../static/images/misc-tutorial-images/label formatting.gif)"
    - copy: "Once you've selected or entered a prefix or suffix, click the icon next to 'Label Positioning'."
    - copy: "A modal will open with a few selections. You can place the prefix or suffix for the first or last tick label, all ticks, or none."
      img: "![Label positioning](../static/images/misc-tutorial-images/label positioning.gif)"

 - title: Customize Number of Tick Markers
   sub-steps:
    - copy: "To set the number of ticks, go to 'Axes', and select the number from either 'Tick Labels' or 'Tick Markers'. The markers are hidden under 'Tick Markers' by default, so click 'Inside or 'Outside' to view the options. You can set them as 'Linear' or 'Custom' in the same section."
    - copy: "The plot below had the dates on the x-axis set as biannual. We'd like to show every consecutive year, so we select 'Custom' and enter the desired number of markers in the field."
      img: "![Custom tick markers](../static/images/misc-tutorial-images/custom tick markers.png)"
    - copy: "When you work with date or time series plots, you have to convert the date for the step size
  and set offset. Let's say you set ticks on the 15th of every third month, set the 'Step Size' to '2000-01-15' and 'Step Offset' to 'M3'. To set ticks every 4 years, set it to 'M48'. Our plot display our data every year, so it's been set to 'M12'. For more information, visit [this](http://help.plot.ly/make-a-time-series-graph/) page."
      img: "![Linear tick markers](../static/images/misc-tutorial-images/linear tick markers.png)"

 - title: Axis Width
   sub-steps:
    - copy: "Your axis width can be adjusted by going to 'Axes', then Layout'. Use the arrows to adjust the start and end position, or type the percentage in the empty field."
      img: "![Axis width](../static/images/misc-tutorial-images/axis width.gif)"

 - title: Axis Positioning
   sub-steps:
    - copy: "The axis can also be repositioned and anchored. The x-axis can stay at the bottom or be moved to the top, and the y-axis can be moved to the left or right. If left 'Unanchored', they can be positioned vertically or horizontally by adjusting the percentage."
      img: "![Axis positioning](../static/images/misc-tutorial-images/axis positioning.gif)"
---
