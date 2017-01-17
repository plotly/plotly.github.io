# Adding New Tutorials
Tutorials are written as individual .md files. The tutorials are organized in folders (by subject) in the `/_post` folder: https://github.com/plotly/plotly.github.io/tree/master/_posts.
To create a new tutorial, create a new .md file in the appropriate folder for the tutorial (i.e. if the tutorial is for a feature of [Plotly's workspace](https://plot.ly/create/) add your .md file to the [plotly2 folder](https://github.com/plotly/plotly.github.io/tree/master/_posts/plotly2)).
The title of your .md file **must** include the date (date created): `yyyy-mm-dd-title-of-tutorial.md`.

## Front Matter
These are the variables defined at the top of each post:

- layout: `tutorial-single_layout` or additional options listed [here](https://github.com/plotly/plotly.github.io/tree/master/_layouts)
- title:
- subtitle:
- meta_desription: `A tutorial on how to --insert tutorial subject-- --insert Plotly Tool (i.e. in Plotly 2.0)--`.
- tags: `fundamentals` | `basic` | `statistical` | `scientific` | `maps` | `graph3d` | `layout` | `subplot` | `textandlinks` | `analysis` 
  Determines which section to place the tutorial in: http://help.plot.ly/tutorials/. This variable is used in [the templates](https://github.com/plotly/plotly.github.io/blob/master/_layouts/tutorials.html#L58)
- permalink: the link added to http://help.plot.ly/
- imageurl: path to thumbnail image (thumbnail displayed on help.plot.ly/tutorials)
- state: `active` | `inactive` (if active, will appear on table of contents page).
- order: determines the order displayed in the given section on help.plot.ly/tutorials. Can be a float or int.
- actioncall:
- actioncall-url: link to tutorial plot in the workspace
- live-graph: iframe embed of tutorial plot
- otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/applicable-python-doc/) or [R](https://plot.ly/r/applicable-r-doc/).

For example, here is the front matter for the boxplot tutorial:
```
layout: tutorial-single_layout
title: Box Plots in Plotly 2.0
subtitle: A convenient way of graphically depicting groups of numerical data through their quartiles.
meta_description: A tutorial on how to make a box plot in Plotly 2.0.
permalink: /make-a-box-plot/
imageurl: ../static/images/how-to-make-a-boxplot/thum-how-to-make-a-boxplot.png
state: active
tags: statistical
order: 2.5
actioncall: How to Make a Box Plot in Plotly 2.0
actioncall-url: https://plot.ly/alpha/workspace/?fid=plotly2_demo:108
live-graph: <iframe width="900" height="800" frameborder="0" scrolling="no" src="https://plot.ly/~plotly2_demo/108.embed"></iframe>
otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/box-plots/) or [R](https://plot.ly/r/box-plots/).
```

## Content
## Images
- Add images (screenshots) and gifs to tutorials to supplement instruction text.
- Image filenames and alt tags should be as descriptive as possible, up to 5 or 6 words. 
  This is the text that will fill in for the images for folks that use screen readers. Also, google bots!

  Instead of: `static/images/quad-fits/img1.png`
  Do: `static/images/quadtratic-fits/four-quadtratic-polynomials.png`
