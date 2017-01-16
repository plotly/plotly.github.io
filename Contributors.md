# Adding New Tutorials
Tutorials are written as individual .md files. The tutorials are organized in folders (by subject) in the `/_post` folder: https://github.com/plotly/plotly.github.io/tree/master/_posts.
To create a new tutorial, create a new .md file in the appropriate folder for the tutorial (i.e. if the tutorial is for a feature of [Plotly's workspace](https://plot.ly/create/) add your .md file to the [plotly2 folder](https://github.com/plotly/plotly.github.io/tree/master/_posts/plotly2)).
The title of your .md file **must** include the date (date created): `yyyy-mm-dd-title-of-tutorial.md`.

## Front Matter
These are the variables at the top of each post

- layout: `two_column_layout` | `one_column_layout`
- title: 
- state: `inactive` | `active`
  `active` - it will appear in the table of contents
  `inactive` - it won't appear in the table of contents, but it will appear at the url
- tags: `basic` | `statistical` | `graph3d` | `textandlinks` | `classroom` | `videos` | `excel` | `plotly2`
  Determines which section to place the tutorial in: http://help.plot.ly/tutorials/. This variable is used in [the templates](https://github.com/plotly/plotly.github.io/blob/master/_layouts/tutorials.html#L58)

## Images
- Image filenames and alt tags should be as descriptive as possible, up to 5 or 6 words. 
  This is the text that will fill in for the images for folks that use screen readers. Also, google bots!

  Instead of: `static/images/quad-fits/img1.png`
  Do: `static/images/quadtratic-fits/four-quadtratic-polynomials.png`
