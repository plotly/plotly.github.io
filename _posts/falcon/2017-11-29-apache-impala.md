---
layout: connectors-tutorial-single_layout
title: Connect Your Charts and Dashboards to a Apache Impala Database
subtitle: Graph data from your Apache Impala database with Chart Studio and Falcon.
permalink: /database-connectors/apache-impala/
imageurl:  /static/images/falcon/logos/apache-impala.png
state: active
tags: sql
section: Basics
meta_description: Follow these steps to connect to your Apache Impala database
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases

steps:
 - title: Download and Install Falcon
   sub-steps:
    - copy: "If you haven't downloaded and installed Falcon yet, please follow the instructions for either [personal setup](https://help.plot.ly/database-connectors/personal-login/) or [company on-premise](https://help.plot.ly/database-connectors/on-prem-login/)."
 - title: Launch and Connect
   sub-steps:
    - copy: "After launching Falcon, select *Apache Impala* by clicking on its icon."
      img: "![Connect](/static/images/falcon/apache-impala/apache-impala.png)"
    - copy: "Enter your database server name (*host*), its port number and database. Additionally, set the number of seconds for a request to timeout."
      img: "![](/static/images/falcon/apache-impala/credentials.png)"
    - copy: "Have no database? Try it out with our sample Apache Impala credentials. Simply, click Show Sample Credentials, copy, paste and click *CONNECT*!"
      img: "![](/static/images/falcon/apache-impala/sample-credentials.png)"
    - copy: "Once connection is established, your connection credentials will be saved and greyed out to avoid unintentional changes. If you wish to modify your connection, click on *Edit Credentials*."
      img: "![](/static/images/falcon/apache-impala/edit-credentials.png)"
 - title: Query
   sub-steps:
    - copy: "For a tutorial on the query tab, which features schema preview, the ability execute sql queries, perform inline data visualization, preview tables and export CSV files, see [Query From Falcon](https://help.plot.ly/database-connectors/query-from-falcon/)."
 - title: Query Apache Impala From Plot.ly
   sub-steps:
    - copy: "If you want to unlock the full power of Plotly's Chart Studio, you can click the PLOT.LY tab and QUERY [DATABASE] FROM PLOT.LY. To learn more about this feature, naviagte to the [Query From Plot.ly](https://help.plot.ly/database-connectors/query-from-plotly/) tutorial."
 - title: Plotting in Chart Studio
   sub-steps:
    - copy: "If you opted to run your queries from plot.ly and want to make a styled and interactive plot in the Chart Studio. Check out our [Chart Studio](https://help.plot.ly/tutorials/) tutorials"
---
