---
layout: tutorial-single_layout
title: LaTeX Basics with Chart Studio
subtitle: A Step by Step Guide to LaTeX Basics with Chart Studio
permalink: /LaTeX-basics/
imageurl: ../static/images/LaTeX-basics/thum-LaTeX-basics.png
state: active
tags: layout
order: 5
meta_description: How to add scientific equations and mathematical symbols to your graph with LaTeX using the Chart Studio online visualization tool.
popularity: featured
actioncall: make a chart
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:289

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/LaTeX/) or [R](https://plot.ly/r/LaTeX/).

live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/289.embed"></iframe>
live-graph-image:

steps:
 - title: LaTeX Basics
   sub-steps:
    - copy: "LaTeX is a typesetting system used by mathematicians, physicists, computer scientists, economists, and others. If you want to include mathematical symbols, superscripts, subscripts, or equations in your Chart Studio graph, LaTeX is a great choice. In this tutorial, we’ll show you the basics of integrating these features."
    - copy: "For this tutorial, we've used a graph that can be found [here](https://plot.ly/~plotly2_demo/291). This is a version of the Bessel function graph you see above, with the axes labels deleted. By the end, we'll have reproduced the same annotations."
    - copy: "Click on 'Fork & Edit' to open this graph in the new online [workspace](https://plot.ly/create)."
      img: "![Fork and edit](../static/images/LaTeX-basics/forkedit.png)"
    - copy: "To tell Chart Studio that you want to use LaTeX, you’ll need to put a dollar sign ($) on both sides of the text you enter. For example, to get the [LaTeX logo](https://upload.wikimedia.org/wikipedia/commons/9/92/LaTeX_logo.svg), you have to type 'LaTeX' as '$LaTeX$'. We’ll show you many more examples below."

 - title: Using LaTeX
   sub-steps:
    - copy: "We’ll start by labeling our y-axis with the Bessel Function equation."
    - copy: "Move your mouse to where the y-axis label should go, and the 'Click to enter y axis' title will appear. Type or copy-and-paste: '$J_\\nu(X)$' and press the enter key. You've just labeled your y-axis using LaTeX."
      img: "![Y axis title](../static/images/LaTeX-basics/clickyaxis.gif)"
    - copy: "The dollar sign tells Chart Studio to use LaTeX, and the underscore symbol (_) tells LaTeX to make the '*ν*' part of the code appear as a subscript."
    - copy: "Now we’re ready to label the x-axis using some of the code featured in the table at the [end](http://help.plot.ly/LaTeX-basics/#step-4-latex-commands) of the page."
    - copy: "Hover over the empty x-axis field, and click to enter your label."
    - copy: "The text we need is '$x^2 \\frac{d^2 y}{dx^2} + x \\frac{dy}{dx} + (x^2 - \\nu^2)y = 0$' (feel free to copy and paste). Press the enter key to see the x-axis label with LaTeX."
      img: "![X axis title](../static/images/LaTeX-basics/clickxaxis.gif)"
    - copy: "If you click on the legend labels, you'll see that each one has LaTeX integrated."
      img: "![Legend labels with Latex](../static/images/LaTeX-basics/legend latex.png)"

 - title: LaTeX in Text Editor
   sub-steps:
    - copy: "Another way to add labels to your axes is by clicking STYLE on the left-hand side of the workspace, then 'Axes'. The 'Titles' tab in this section displays two options: the rich text editor and LaTeX editor."
    - copy: "Type your command(s) in the LaTex editor to label your axes."
      img: "![Latex text editor](../static/images/LaTeX-basics/latex editor axes.png)"
    - copy: "The same can be done for your chart title. Go to the 'Layout' section under STYLE, click on 'Title and Fonts' and enter your command(s) in the LaTeX editor, as shown below."
      img: "![Latex text editor](../static/images/LaTeX-basics/latex editor.gif)"
    - copy: "You can also use LaTeX for your notes. To locate the LaTex editor for your annotations, go to STYLE, then 'Notes'. Click on the blue '+ Annotation' button at the top of the panel and choose any from the dropdown menu. To learn more about annotations, visit [this](http://help.plot.ly/how-to-add-annotations/) page."
      img: "![Latex annotations](../static/images/LaTeX-basics/annotations latex.png)"

 - title: LaTeX Commands
   sub-steps:
    - copy: "LaTeX commands allow you to use Greek letters, superscripts, subscripts, and fractions."
    - copy: "The table below lists a few popular commands."
      img: "![LaTeX commands table](../static/images/LaTeX-basics/commands table.png)"
    - copy: "If you’re looking for the code for a symbol that isn’t included below, we like [Detexify](http://detexify.kirelabs.org/classify.html). You can draw the symbol you're looking for, and a list of code possibilities is generated."
---
