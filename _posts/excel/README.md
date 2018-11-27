# Contributors Guide for Adding Excel Tutorials

## 1. Setting the Meta Tag Descriptions

See the Meta Tag Reference section at the bottom

## 2. Adding Images

### Thumbnails

When adding a tutorial, its important to make a high-quality thumbnail image for the Excel tutorials home page. Here are some tips to follow:

- Thumbnail images should be at least 677 px X 300 px.
- Partial screenshots of an interesting part of the chart are usually better thumbnails that trying to screenshot the entire thing.
- The thumbnail image has to be the same chart type as the tutorial BUT NOT NECESSARILY THE SAME CHART. Use the Chart Studio feed, blog, and Google Image search of Chart Studio charts to find the best screenshot for your thumbnail.
- Thumbnail images should be CLEAN and not have too much text in them. Look at the Python docs thumbnail images for inspiration.

### All Images

Rules to follow when adding new images:

- Never add a fuzzy or blurry images
- images.plot.ly caches images. If you want update an image right away, you'll have to rename it or upload a new image with a different name.
- Use images.plot.ly for adding new images. Log-in here: https://661924842005.signin.aws.amazon.com/console Username is Plotly_Editors.
- When taking screenshots, close-ups are bad. Its better to take a wider-view so that the reader knows where the feature is then use a RED highlight to show the button or feature that the reader is supposed to find.
- DON'T ADD CAROUSEL IMAGES FOR NEW POSTS.
- Always use http and NOT https for images.plot.ly links:
  - GOOD: https://images.plot.ly/excel/histogram/thum-histogram-with-excel.png
  - BAD: https://images.plot.ly/excel/histogram/thum-histogram-with-excel.png
- ALWAYS DELETE UNUSED IMAGES FROM images.plot.ly
- use descriptive names for the image filenames and for the image alt tags. No "img24.png".
- separate words with hyphens: "3d-surface-plot.png", not "3d surface plot.png" and not "3dsurfaceplot.png" and not "3d_surface_plot.png"
- These are the official html guidelines from google (http://static.googleusercontent.com/media/www.google.com/en//webmasters/docs/search-engine-optimization-starter-guide.pdf)

### Download CSV links and Open Data in Chart Studio links

- Download CSV links should download CSV files from https://github.com/plotly/datasets.
- "Open Data in Chart Studio" should open the exact grid that is shown in the tutorial WITH THE CORRECT CHART TYPE OPEN using the "plot_type" query parameter. Here are some good examples:
- https://plot.ly/15176/~jackp/?plot_type=Histogram
- https://plot.ly/15093/~jackp/?plot_type=Bar%20chart

Below is a screenshot of the `plot_type` names that set the correct chart type when opening the grid:

![plot types](http://i.imgur.com/0V1ObaD.png)

### Chart Studio Chart Styling

- If you're not sure how to style your chart, Seaborn is a good styleguide. Use the grey backgrounds with white gridlines and no tick marks. Match the colors:
https://stanford.edu/~mwaskom/software/seaborn/tutorial/distributions.html

- For 3d charts copy the layout and style of this chart:
https://plot.ly/~empet/6994/triangular-wireframe-on-a-rectangular-surface/

- For maps, copy the styling of the Python maps:
https://plot.ly/python/#maps

## 3. Tutorial Writing Checklist and Troubleshooting

1. The template system hates quotes within quotes. Make sure to use single quotes within double quote. "This "quote" will not work". But "This 'quote' will work."

2. The template system uses Jekyll, the same markdown that works on GitHub readmes (like this one!): https://help.github.com/articles/github-flavored-markdown/

3. REMINDER THAT URLs SHOULD ALWAYS MATCH THE URLs FOR THE PYTHON DOCS FOR NEW TUTORIALS: https://plot.ly/python/. For example:
  - Because the URL for Python line charts is: https://plot.ly/python/line-charts/
  - The URL for Excel line charts would then be: http://help.plot.ly/excel/line-charts

4. Chart section anchors should also MATCH THE PYTHON DOCS.
  - For example https://plot.ly/python/#3d
  - Would then make the 3d section on the Excel homepage help.plot.ly/excel/#3d

5. All datasets for download should be on Chart Studio's dataset repo: https://github.com/plotly/datasets

6. All "Open Data in Chart Studio" links should link to the dataset AS A PUBLIC GRID WITHIN PLOTLY'S WORKSPACE. IE, https://plot.ly/15022/~jackp/

7. Make sure that the "Know how to program? See how to create this in Python or R." links are updated.

8. Make sure that the "Tutorials like this" at the bottom all have thumbnail images and links.

9. MAKE SURE THE FIRST SCREENSHOT ON EACH TUTORIAL IS A SCREENSHOT OF THE DATA IN EXCEL and the last screenshot is the chart exported as an image inside the Excel sheet.

10. MAKE SURE YOU TEST ALL OF THE LINKS.

11. Send to at least one person not at Chart Studio for them to read-through for spelling mistakes, etc.

## 4. Adding Excel links to the Python pages

After you've added a new tutorial, add a file like this:

https://github.com/plotly/documentation/blob/source/_posts/excel/2015-11-07-choropleth_excel_index.html

To this folder:

https://github.com/plotly/documentation/tree/source/_posts/excel

This allows the EXCEL LINK to show up on the corresponding Python docs pages:

https://plot.ly/python/choropleth-maps/

## 5. Meta Tag Reference

- layout: Should always be "excel-tutorial-single_layout"
- title: Make a [type of chart] Online with Chart Studio and Excel
- subtitle [type of chart] with Chart Studio
- permalink: /excel/[type-of-chart]. **NEW TUTORIALS SHOULD ALWAYS MATCH URLs EXACTLY OF PYTHON DOCS:** https://plot.ly/python/
- imageurl: See section below on adding thumbnail images
- state: active or inactive. Set to inactive for unfinished tutorials
- tags: Should always be "excel"
- carouselimageurl: **DON'T USE THIS. DON'T ADD NEW CAROUSEL IMAGES**
- section: One of the following
  - BasicCharts
  - Maps
  - 3D Charts
  - Layouts
  - Dashboards
- meta_description: How to make a [chart type] online with Chart Studio and Excel data. [Add another more descriptive sentence here about the tutorial]
- popularity: Should always be featured
actioncall-url: **SHOULD ALWAYS LINK TO THE PLOTLY GRID IN THE WORKSPACE THAT IS AT THE START OF THE TUTORIAL** Example:
  - https://plot.ly/15084/~jackp/
download-url: **SHOULD ALWAYS DOWNLOAD THE EXACT CSV FILE USED FOR THE TUTORIAL**. Example:
  - https://github.com/plotly/datasets/raw/master/2014_ebola.csv
- redirect_from: Only use this if your are redirecting the URL from an old page. Ask before using this. Example:
https://github.com/plotly/plotly.github.io/blob/master/_posts/excel/3d%20Charts/2015-11-02-3d-surface-plot-with-excel.md
