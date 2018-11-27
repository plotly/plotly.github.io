---
layout: tutorial-single_layout
title:  How to Create Chart Studio Dashboards with Crossfilter
subtitle: Create dashboards with crossfilter functionality using the Chart Studio data visualization tool
permalink: /dashboard-crossfilter/
imageurl: ../static/images/crossfilter/crossfilter.gif
state: active
tags: dashboard
order: 6
meta_description: Learn how to create dashboards with crossfilter functionality using the Chart Studio dashboard tool.
popularity: featured
actioncall: Create dashboards

otherlang: Know how to program? See how to create this in [Python](https://plot.ly/python/dashboard/) or [R](https://plot.ly/r/dashboard/). Want something more reactive check out [Dash](https://plot.ly/dash).

steps:
 - title: Introduction
   sub-steps:
    - copy: "Chart Studio dashboards are a stunning way to display and share your graphs. Your charts are fully interactive with publication-quality graphics, and there's nothing to download or install — it's 100% web-based."
    - copy: "Our dashboards are used by companies such as Netflix, Tesla, and Google for their customization options and features. If you too want to present your plots in a cool way, keep reading."
    - copy: "For this tutorial we've taken screenshots from our dashboard, which can be found [here](https://plot.ly/~plotly2_demo/237/untitled-dashboard/)."
    - copy: "For this tutorial, to visualize World Happiness from 2015 to 2017, we'll create three individual charts: (1) a average happiness choropleth map, (2) GDP per capita scatter plot and (3) a table to visualise the data. In the section below, we'll look at how to make each of the charts."

 - title: Add Data
   sub-steps:
    - copy: "To get started, head to [Chart Studio](https://plot.ly/create/) and add your data. You have the option of typing directly in the grid, uploading your file, or entering a URL of an online dataset. For this tutorial, we'll use the World Happiness Dataset from the Sustainable Development Solutions Network. To begin, simply view the [dataset](https://plot.ly/~bdun9/2521/) and click **'Fork & Edit'**. The Chart Studio ought to open and you're all set to go."
      img: "![Fork and Edit](../static/images/crossfilter/choropleth/fork-and-edit.png)"
    - copy: "Alternatively, navigate to the [Chart Studio](https://plot.ly/create/) and click **'Import'**, **'By URL'**, and then paste in the **URL** (https://raw.githubusercontent.com/bcdunbar/datasets/master/worldhappiness.csv)."
      img: "![Add Data](../static/images/crossfilter/choropleth/add-data.png)"

 - title: Average Happiness Choropleth
   sub-steps:
    - copy: "Now that we have the data added to the grid, we can select our chart type. To do so, select *Graph* on the left-hand side, then *Create*. Click *Chart Type*, and **Choropleth** from the *Maps* column."
      img: "![Chart Type](../static/images/crossfilter/choropleth/chart-type.png)"
    - copy: "Now to populate the graph with data, in the *Locations* and *Values* dropdown select **Country** and **HappinessScore**, respectively. Additionally, set **Country Names** in the *Locations Format* dropdown, **World** in the *Map Regions*, and set the *Projections* to **Distance Preserving (Equirectangular)**. You ought to note that countries aren't defined yet as we need to aggregate the data."
      img: "![Trace Values](../static/images/crossfilter/choropleth/trace-values.png)"
    - copy: "Now, for this choropleth we want to plot the average number of confirmed cases. Therefore, we need to aggregate the data. To do so, open *Aggregate*, select **Country** as the *Group By Column*, and **HappinessScore** as the *Trace*. Then, set *Z* value to **avg**."
      img: "![Aggregate](../static/images/crossfilter/choropleth/aggregate.png)"
    - copy: "To style, under *Style* click *Traces*. Here, we can change the colorscale by clicking the **yellow/blue** palette (around the 3rd from the left)."
      img: "![Trace Styles](../static/images/crossfilter/choropleth/trace-style.png)"
    - copy: "Now that we've finished styling the trace, click *Layout* to style the background, fonts, and margins. To complete the former, select *Canvas* and set **#444444** as the *Margin Color*."
      img: "![Canvas](../static/images/crossfilter/choropleth/canvas.png)"
    - copy: "Next, navigate to the *Layout* tab, open *Margins and Paddings* and set all the values to **0** to make it full width and height."
      img: "![Margins](../static/images/crossfilter/choropleth/margins.png)"
    - copy: "In choropleth maps, we have *Geo Style* and *Geo Layout*. To alter the former, select *Geo Style* and set *Land* to **Show**. Set *Color* to **#444444**. Next, set *Oceans* to **Show** and *Color* **#444444**; *Country* to **Show** and *Color* **#444444**. Lastly, *Frame* to **Hide**."
      img: "![Geo Style](../static/images/crossfilter/choropleth/geo-style.png)"
    - copy: "Next, in *Geo Layout* you can define attributes such as *Map Scope*, *Projection*, *Rotation*, *Scale*, and *Map Resolution*. In this tutorial, we'll leave it as-is."
      img: "![Geo Layout](../static/images/crossfilter/choropleth/geo-layout.png)"
    - copy: "Finally, click *Color Bars* under *Style* and open *Labels*. Here, set the *Typeface* to **Raleway** and the *Font Color* to **#FFFFFF**."
      img: "![Color Bar Size](../static/images/crossfilter/choropleth/color-bar-labels.png)"
    - copy: "Congrats, your chart is complete! Click **Save** on the left-hand side of the screen. In the pop-up, enter your filename and select either **Public** (visible to all) or **Private Link** (visible only to those who you share the link with) and hit **Save**. Since these plots are destined for a dashboard, they can't be set to private."
      img: "![Save](../static/images/crossfilter/choropleth/save.png)"

 - title: Average GDP Scatter Plot
   sub-steps:
    - copy: "Using the same grid as the previous plot, open the data in the Chart Studio."
    - copy: "Now that we have the data added to the grid, we can select our chart type. To do so, select *Graph* on the left-hand side, then *Create*. Click *Chart Type*, and **Scatter** from the *Business* column."
      img: "![Chart Type](../static/images/crossfilter/scatter/chart-type.png)"
    - copy: "Now to populate the graph with data, in the *Locations* and *Values* dropdown select **Country** and **Economy_GDP_per_Capita**, respectively. Additionally, set **HappinessScore** in the *Size* and *Color* dropdowns."
      img: "![Trace Values](../static/images/crossfilter/scatter/trace-value.png)"
    - copy: "Like previously, we need to aggregate the data. To do so, open *Aggregate*, select **Country** as the *Group By Column*, and **Economy_GDP_per_Capita** as the *Trace*. Then, set *Y*, *Marker Size* and *Marker Color* to **avg**."
      img: "![Aggregate](../static/images/crossfilter/scatter/aggregate.png)"
    - copy: "To style, under *Style* click *Traces*. Here, we can change the colorscale by clicking the **blue/yellow** palette (around the 3rd from the left)."
      img: "![Trace Styles](../static/images/crossfilter/scatter/trace-styles.png)"
    - copy: "Now that we've finished styling the trace, click *Layout* to style the background, fonts, and margins. To complete the former, select *Canvas* and set **#444444** as the *Margin Color*."
      img: "![Canvas](../static/images/crossfilter/scatter/canvas.png)"
    - copy: "Below *Canvas*, open the *Title and Fonts* box and under *Global Font*, set *Typeface* to **Raleway**, *Font Size* to **12**, and *Font Color* to **#FFFFFF**."
      img: "![Global Font](../static/images/crossfilter/scatter/global-font.png)"
    - copy: "Next, navigate to the *Layout* tab, open *Margins and Paddings* and set the values to **10**, **120**, **80** and **0**, respectively."
      img: "![Margins](../static/images/crossfilter/scatter/margins.png)"
    - copy: "Moving on to the *Axes* tab, select *Title*. Remove the *X* title, then  click *Y* and set the title to **GDP per Capita**."
      img: "![Axes Titles](../static/images/crossfilter/scatter/axes-titles.png)"
    - copy: "Next, navigate to *Lines*, click *All* and select **Hide** for all options. This will remove all lines including grid, horizontal and zero line."
      img: "![Lines](../static/images/crossfilter/scatter/lines.png)"
    - copy: "Lastly, because we want to use the crossfilter feature with our dashboard open *Zoom* and select **Disable**."
      img: "![Zoom](../static/images/crossfilter/scatter/zoom.png)"
    - copy: "Congrats, your chart is complete! Click **Save** on the left-hand side of the screen. In the pop-up, enter your filename and select either **Public** (visible to all) or **Private Link** (visible only to those who you share the link with) and hit **Save**. Since these plots are destined for a dashboard, they can't be set to private."
      img: "![Save](../static/images/crossfilter/scatter/save.png)"

 - title: World Happiness Table
   sub-steps:
    - copy: "Using the same grid as the previous plot, open the data in the Chart Studio."
    - copy: "Now that we have the data added to the grid, we can select our chart type. To do so, select *Graph* on the left-hand side, then *Create*. Click *Chart Type*, and **Table** from the *Statistics* column."
      img: "![Chart Type](../static/images/crossfilter/table/chart-type.png)"
    - copy: "For tables, you want to create your header names. To do so, in the 1dt spare column type in the header names: **Year**, **Country**, **Happiness Rank**, **Happiness Score** and **GDP per Capita**. Lastly, rename the column to **Headers**."
      img: "![Add Headers](../static/images/crossfilter/table/headers.png)"
    - copy: "Now to populate the table with data, set the *Headers* dropwdown to **Headers**. Then, **Year**, **Country**, **Happiness Rank**, **Happiness Score** and **Economy_GDP_per_Capita** to the columns dropdown."
      img: "![Trace Values](../static/images/crossfilter/table/trace-values.png)"
    - copy: "To begin styling the table, click *Traces* under *Style*. In *Header*, set the *Fill Color* to **#444444**, *Font Color* to **#FFFFFF**, and *Border Color* to **#FFFFFF**. In *Cells*, the *Fill Color* to **#444444**, *Font Color* to **#FFFFFF**, and *Border Color* to **#FFFFFF**."
      img: "![Trace Styles](../static/images/crossfilter/table/trace-style.png)"
    - copy: "Next, navigate to the *Layout* tab, open *Canvas* and set the *Plot* and *Margin Color* to **#000000** to keep with the dark theme of the previous plots."
      img: "![Canvas](../static/images/crossfilter/table/canvas.png)"
    - copy: "Next, open *Margins and Paddings* and set all the values to **10** to make the table just shy of full width and height."
      img: "![Margins](../static/images/crossfilter/table/margins.png)"
    - copy: "Congrats, your chart is complete! Click **Save** on the left-hand side of the screen. In the pop-up, enter your filename and select either **Public** (visible to all) or **Private Link** (visible only to those who you share the link with) and hit **Save**. Since these plots are destined for a dashboard, they can't be set to private."
      img: "![Save](../static/images/crossfilter/table/save.png)"

 - title: Create a Dashboard
   sub-steps:
    - copy: "With the charts completed and saved in your [home folder](https://plot.ly/organize/home), we can now create a dashboard by simply adding these charts, adjusting the layout, and styling the dashboard before sharing and interacting. To get started with creating a dashboard, hover over the *+Create* button and select **Dashboard** from the menu. Alternatively, open this [link](https://plot.ly/dashboard/create)."

 - title: Add Charts to Dashboard
   sub-steps:
    - copy: "First, to add the Maximum Cases per Month Map, click *+Plot* in the bottom left corner of the screen. A new box ought to appear with the option to 'Add a Plot'. Click, the *'Your Files'* option and then in the pop-up select the **Average Happiness by Country** map we made earlier."
      img: "![Add Choropleth](../static/images/crossfilter/dashboard/add-plot.png)"
    - copy: "Next, add the **Average GDP per Capita by Country** scatter plot following the same process. As we are making a fairly simple and straight forward dashboard, we can just leave this plot immediate below the previous map."
      img: "![Add Scatter](../static/images/crossfilter/dashboard/add-plot2.png)"
    - copy: "Again, immediately below, add the **World Happiness Data Table**."
      img: "![Add Table](../static/images/crossfilter/dashboard/add-plot3.png)"
    - copy: "Now that we have added all the plots to the dashboard, for each plot where it says, 'Enter a title...'' insert plot titles: **Average Happiness by Country**, **Average GDP per Capita by Country** and **World Happiness Data Table** in the same order as we added the plots. Your result ought to look like below."
      img: "![Add Plot Titles](../static/images/crossfilter/dashboard/add-titles.png)"

 - title: Style the Dashboard
   sub-steps:
    - copy: "Now that we have the structure of our dashboard, we can style it. To do so, navigate to the *settings icon* directly opposite the dashboard title. When hovering you ought to see the option settings from the menu."
      img: "![Settings](../static/images/crossfilter/dashboard/settings.png)"
    - copy: "After clicking *settings*, a panel ought to appear from the right-hand side of the screen. Here, we have the option of headers, colors, text, layout, and filter. First, in *Headers*, we can set the title, add a logo, and multiple links. For this tutorial, add **World Happiness 2015-2017** to the *Title* text box. Next, let's add the Sustainable Development Solutions Network logo. We can do this by simply adding the URL for the logo PNG: **http://unsdsn.org/wp- content/themes/sdsn/assets/  img/sdsn_logo_fc.png**. Also, we can add an link to the data source by typing the text **Data Source: World Happiness Report** and then in the *URL* box, enter **http://worldhappiness.report/**."
      img: "![Header](../static/images/crossfilter/dashboard/headers.png)"
    - copy: "In the next tab, *Colors*, we can manipulate the background, borders, and text colors. As you can see, the dashboard has already added these by default. That said, keeping with our plot themes, we will set *Header Background*, *Page Background*, *Box Background*, *Box Border*, and *Box Header Background* to **#444444**. Then, set *Header Font Color* and *Box Header Font Color* to **#FFFFFF**."
      img: "![Colors](../static/images/crossfilter/dashboard/colors.png)"
    - copy: "*Text*, the third settings option, allows you to control all things text, including font color, family, and size, as well as header styles and text box styles. Again, like the Colors tab, some values are defined. However, here, we'll set the *Font Family* to **Raleway**. Make the header font larger by selecting **2.2em** in the *Header Font Size* and, additionally, change the *Header Font Weight* to **300**."
      img: "![Text](../static/images/crossfilter/dashboard/text.png)"
    - copy: "In *Layout*, you have the option of setting the page layout as either a dashboard or a report. Here, we'll leave it as the default dashboard setting. The last settings category, *Filter*, provides you with the option to enable or disable the Search Bar or the Crossfilter feature. For this tutorial, leave the *Search Bar* as-is but let’s enable the *Crossfilter* feature by selecting **Enable** (for more information about this feature see the next section)."
      img: "![Filter](../static/images/crossfilter/dashboard/filter.png)"
    - copy: "Congrats, your dashboard is complete! Click **Save** on in the bottom right-hand side of the screen. In the pop-up, enter your filename and select either **Public** (visible to all), or **Private Link** (visible only to those who you share the link with), or **Private** (visible only to you) and hit **Save**."
      img: "![Save](../static/images/crossfilter/dashboard/save.png)"
---
