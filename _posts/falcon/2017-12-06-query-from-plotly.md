---
layout: connectors-tutorial-single_layout
title: Query from Plotly
subtitle: Query inside the Chart Studio to unlock all Plotly chart types and styling options.
permalink: /database-connectors/query-from-plotly/
imageurl:  /static/images/falcon/logos/query-from-plotly.png
state: active
tags: advanced
section: Basics
meta_description: Follow these steps to query inside the Chart Studio to unlock all Plotly chart types and styling options
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases

steps:
 - title: Query from Plotly
   sub-steps:
    - copy: "With Falcon you can query your database from plot.ly (Chart Studio), which will allow you to utilize all chart types and styling options that are avaliable in the Chart Studio and also setup scheduled queries. In order to query from plot.ly, navigate to the PLOT.LY tab in Falcon then click the blue *QUERY [DATABASE] FROM PLOT.LY* button. This will open plot.ly (Chart Studio) in your default browser."
      img: "![Query from Plotly](/static/images/falcon/query-from-plotly/query-from-plotly.png)"
 - title: Connect to Chart Studio
   sub-steps:
    - copy: "Once your default browser opens you will be greeted by an import modal, where you ought to see HTTPS radio button selected and your unique URL in option 4 (like below). When ready, you can click *Connect*."
      img: "![Connect](/static/images/falcon/query-from-plotly/connect.png)"
 - title: SQL Editor in Chart Studio
   sub-steps:
    - copy: "The Chart Studio will load with a slight variation to the interface. As you can see, above the grid is the SQL Editor and to the right are your database conncetions and avaliable tables."
      img: "![Chart Studio](/static/images/falcon/query-from-plotly/chart-studio.png)"
 - title: Run Query
   sub-steps:
    - copy: "To execute a SQL query, simply type your query in the editor and hit *Run Query*. If succesful, you ought to see the grid populted with data and you can begin creating your chart type. For tutorials on chart types, see our [Chart Studio documentation](https://help.plot.ly/tutorials/)."
      img: "![Run Query](/static/images/falcon/query-from-plotly/run-query.png)"
 - title: Scheduled Queries
   sub-steps:
    - copy: "After you have created and saved your chart, you can then schedule queries to take place every x by selecting the Scedule Query checkbox, your selected time and saving the chart again. For more detailed information on scheduled queries see the [Schedule a Query tutorial](https://help.plot.ly/database-connectors/schedule-query/)."

---
