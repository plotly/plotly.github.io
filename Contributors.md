## Adding new posts

- Just copy the layout of any post in here: https://github.com/plotly/plotly.github.io/blob/master/_posts

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
