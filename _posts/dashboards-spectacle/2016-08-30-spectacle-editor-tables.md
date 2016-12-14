---
layout: tutorial-single_layout
title: Adding Tables to Spectacle Editor
subtitle: Add a Table to your Spectacle Editor Presentation
permalink: /add-a-table-to-spectacle-editor/
imageurl: http://images.plot.ly/plotly-documentation/thumbnail/spectacle-table.png
state: active
tags: dashboard
order: 10
meta_description: A tutorial on adding tables to Spectacle Editor.
popularity: featured
carouselimageurl:
actioncall: Add Tables to Spectacle Editor

otherlang:

steps:
 - title: Create a Table in Plotly
   sub-steps:
    - copy: "Go to Plotly to create a new grid: [https://plot.ly/create](https://plot.ly/create). You can also upload an Excel or CSV file."
    - copy: "If you want try some pre-loaded example tables, check out:"
    - copy: "[https://plot.ly/~datasets](https://plot.ly/~datasets)"
    - copy: "Enter your data in the spreadsheet. You can change the column titles by selecting 'Rename Header:'"
      img: "![Enter data in grid](http://moderndata.plot.ly/wp-content/uploads/2016/12/rename-header.png)"

 - title: Save the Grid to get its URL
   sub-steps:
    - copy: "Make a simple chart using your table, even if you don't intend to use the chart. You need to create a simple chart in order to save the data. Your workspace should look something like this after creating a simple chart with your data:"
      img: "![plotly workspace](http://moderndata.plot.ly/wp-content/uploads/2016/12/workspace.png)"   
    - copy: "Click Save to save your Plotly grid and get its URL."
      img: "![Share grid](http://moderndata.plot.ly/wp-content/uploads/2016/12/save-table.png)"
    - copy: "Go back to [your files](https://plot.ly/organize/) and find your newly saved Grid. Select the share icon to get its URL:"
      img: "![Get grid link step 1](http://moderndata.plot.ly/wp-content/uploads/2016/12/grid-share-link-1.png)"
    - copy: "Copy & paste the URL of your grid:"
      img: "![Get grid link step 2](http://moderndata.plot.ly/wp-content/uploads/2016/12/grid-share-link-2.png)"      
    - copy: "Add “.embed” to the grid URL and open it in a new browser tab. Your URL should look something like this:"
    - copy: "[https://plot.ly/~jackp/16663.embed](https://plot.ly/~jackp/16663.embed)."
    - img: "![Basic table](http://images.plot.ly/plotly-documentation/thumbnail/basic-table.png)"

 - title: Style your Table
   sub-steps:
    - copy: "You can style your table using the [query strings](https://en.wikipedia.org/wiki/Query_string) below (notice that # has to be replaced with %23 for URL encoding)."
    - img: "![query-strings](http://images.plot.ly/plotly-documentation/thumbnail/table-query-strings.png)"
    - copy: "The URL for this table is:" 
    - copy: "[https://plot.ly/~jackp/16664.embed?odd_background=%23ccc&show_row_numbers=false&border_color=white&header_background=%23004151&align=center&background=%23e6e6e6](https://plot.ly/~jackp/16664.embed?odd_background=%23ccc&show_row_numbers=false&border_color=white&header_background=%23004151&align=center&background=%23e6e6e6)"
    - copy: "Here is another example styled table:"
    - copy: "[https://plot.ly/~datasets/2798.embed?show_row_numbers=false&text_transform=uppercase&header_font_weight=300&header_background=%23ab63fa](https://plot.ly/~datasets/2798.embed?show_row_numbers=false&text_transform=uppercase&header_font_weight=300&header_background=%23ab63fa)"
    - img: "![nice-plotly-table](http://moderndata.plot.ly/wp-content/uploads/2016/12/fun-table.png)"

 - title: Embed in Spectacle Editor!
   sub-steps:
   - copy: "Download Spectacle Editor from:"
   - copy: "[https://plot.ly/powerpoint-online](https://plot.ly/powerpoint-online)"
   - copy: "Inside Spectacle Editor, click the Plotly icon and copy & paste your table URL into the Embed URL text box."
   - img: "![table-in-spectacle](http://images.plot.ly/plotly-documentation/thumbnail/Table+in+SpecEd.png)"
---
