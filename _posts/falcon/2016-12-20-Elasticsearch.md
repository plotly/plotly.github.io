---
layout: connectors-tutorial-single_layout
title: Connect Your Charts and Dashboards to an Elasticsearch Database
subtitle: Graph data from your Elasticsearch database with Chart Studio and Falcon.
permalink: /database-connectors/elasticsearch/
imageurl:  /static/images/falcon/logos/elasticsearch.png
state: active
tags: nosql
section: Basics
meta_description: Follow these steps to connect to your Elasticsearch database
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases

steps:
 - title: Download and Install Falcon
   sub-steps:
    - copy: "If you haven't downloaded and installed Falcon yet, please follow the instructions for either [personal setup](https://help.plot.ly/database-connectors/personal-login/) or [company on-premise](https://help.plot.ly/database-connectors/on-prem-login/)."
 - title: Launch and Connect
   sub-steps:
    - copy: "After launching Falcon, select *Elasticsearch* by clicking on its icon."
      img: "![Connect](/static/images/falcon/elasticsearch/elasticsearch.png)"
    - copy: "Enter your username, password, host, port and click *CONNECT*."
      img: "![Credentials](/static/images/falcon/elasticsearch/credentials.png)"
    - copy: "Have no database? Try it out with our read-only Elasticsearch database. Simply, click Show Sample Credentials, copy, paste and click *CONNECT*."
      img: "![Sample Credentials](/static/images/falcon/elasticsearch/sample-credentials.png)"
    - copy: "Once connection is established, your connection credentials will be saved and greyed out to avoid unintentional changes. If you wish to modify your connection, click on *Edit Credentials*."
      img: "![Edit Credentials](/static/images/falcon/elasticsearch/edit-credentials.png)"
 - title: Query
   sub-steps:
    - copy: "For a tutorial on the query tab, which features schema preview, the ability execute sql queries, perform inline data visualization, preview tables and export CSV files, see [Query From Falcon](https://help.plot.ly/database-connectors/query-from-falcon/)."
 - title: Query Elasticsearch From Chart Studio
   sub-steps:
    - copy: "If you want to unlock the full power of Chart Studio, you can click the PLOT.LY tab and QUERY [DATABASE] FROM Chart Studio. To learn more about this feature, navigate to the [Query From Chart Studio](https://help.plot.ly/database-connectors/query-from-plotly/) tutorial."
 - title: Plotting in Chart Studio
   sub-steps:
    - copy: "If you opted to run your queries from Chart Studio, check out our [Chart Studio](https://help.plot.ly/tutorials/) tutorials to add interactivity and styling."

---
