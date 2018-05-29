---
layout: connectors-tutorial-single_layout
title: Schedule Persistent Queries
subtitle: Set your data to be updated using peristent queries with Chart Studio and the Plotly Database Connector.
permalink: /database-connectors/schedule-query/
imageurl:  http://blog.sqlauthority.com/wp-content/uploads/2007/05/bigclock-800x800.png
state: active
tags: advanced
section: Basics
meta_description: Follow these steps to keep your graphs updated with your database
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases

steps:
 - title: Save your query
   sub-steps:
    - copy: "You have successfully ran a query and your Chart Studio grid now has data from your database. The first step to have your data automatically updated in Chart Studio is to save your grid along with the query. Click on *Save* on the left of the Chart Studio user interface."
      img: "![](/static/images/database-connectors/persistent/save.png)"
    - copy: "You can set privacy settings for both your grid and plot upon saving. Once that is done, click *save* on the bottom right."
      img: "![](/static/images/database-connectors/persistent/save-save.png)"
 - title: Set your refresh rate
   sub-steps:
    - copy: "Your connector will update your data periodically and you have several choices when it comes to the refresh rate of your data. Click on the dropdown above the grid as shown below and choose a refresh rate that will be suitable for you and your colleagues."
      img: "![](/static/images/database-connectors/persistent/time.png)"
    - copy: "Click on the check box next to the refresh rate dropdown to schedule your query. If this is your first time scheduling a query, you will be asked to authorize your connector to run queries on your behalf - this is described for you in the next step."
      img: "![](/static/images/database-connectors/persistent/schedule.png)"
 - title: Authorize your connector
   sub-steps:
    - copy: "If this is your first time scheduling a query, you were prompted in Chart Studio to login and authorize your connector to run queries on your behalf. Let's give the authorization to the Database Connector by clicking *login* as shown to authorize."
      img: "![](/static/images/database-connectors/persistent/login.png)"
    - copy: "Click authorize to allow Plotly Database Connector to run in the background and update your data within Chart Studio grids."
      img: "![](/static/images/database-connectors/persistent/authorize.png)"
    - copy: "A message confirming your authorization will appear. You may close this Web Browser tab and return to Chart Studio"
      img: "![](/static/images/database-connectors/persistent/authorized.png)"
    - copy: "Back in Chart Studio, click on the check box to schedule the query now that the connector has your authorization."
      img: "![](/static/images/database-connectors/persistent/schedule-again.png)"
 - title: Scheduled queries
   sub-steps:
    - copy: "Once the query is scheduled, the connector will post queries to your database and update your grid with data received from the query. You can observe the grid's last update time from [your Plotly organizer](https://plot.ly/organize). In case you want to change the refresh rate, simply interact with the dropdown menu while your Database Connector is running. If the query is saved, the checkbox in Chart Studio will be checked."
      img: "![](/static/images/database-connectors/persistent/scheduled.png)"

---
