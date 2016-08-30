---
layout: tutorial-single_layout
title: Adding Tables to Spectacle Editor
subtitle: Add a Table to your Spectacle Editor Presentation
permalink: /add-a-table-to-spectacle-editor/
imageurl: 
state: active
tags: fundamentals
order: 10
meta_description: A tutorial on adding tables to Spectacle Editor.
popularity: featured
carouselimageurl:
actioncall: Add Tables to Spectacle Editor

otherlang:

steps:
 - title: Create a Table in Plotly
   sub-steps:
    - copy: "Go to Plotly 1.0 to create a new grid: [https://plot.ly/plot](https://plot.ly/plot). You can also upload an Excel or CSV file."
    - copy: "Enter your data in the spreadsheet. You can change the column titles by selecting Rename"
      img: "![Enter data in grid](http://images.plot.ly/plotly-documentation/thumbnail/table-values.png)"

 - title: Save the Grid to get its URL
   sub-steps:
    - copy: "Click Save to save your Plotly grid and get its URL."
      img: "![Share grid](http://images.plot.ly/plotly-documentation/thumbnail/share-grid.png)"
    - copy: "Add “.embed” to the grid URL and open it in a new browser tab. Your URL should look something like this: [https://plot.ly/~jackp/16663.embed](https://plot.ly/~jackp/16663.embed)."
    - img: "![Basic table](http://images.plot.ly/plotly-documentation/thumbnail/basic-table.png)"

 - title: Style your Table
   sub-steps:
    - copy: "You can style your table using the [query strings](https://en.wikipedia.org/wiki/Query_string) below (notice that # has to be replaced with %23 for URL encoding)."
    - img: "![query-strings](http://images.plot.ly/plotly-documentation/thumbnail/table-query-strings.png)"
    - copy: "The URL for this table is: [https://plot.ly/~jackp/16664.embed?odd_background=%23ccc&show_row_numbers=false&border_color=white&header_background=%23004151&align=center&background=%23e6e6e6](https://plot.ly/~jackp/16664.embed?odd_background=%23ccc&show_row_numbers=false&border_color=white&header_background=%23004151&align=center&background=%23e6e6e6)"

 - title: Embed in Spectacle Editor!
   sub-steps:
   - copy: "Download Spectacle Editor from [https://formidable.com/open-source/spectacle-editor/](https://formidable.com/open-source/spectacle-editor/)"
   - copy: "Inside Spectacle Editor, click the Plotly icon and copy & paste your table URL into the Embed URL text box."
   - img: "![table-in-spectacle](http://images.plot.ly/plotly-documentation/thumbnail/Table+in+SpecEd.png)"
---
