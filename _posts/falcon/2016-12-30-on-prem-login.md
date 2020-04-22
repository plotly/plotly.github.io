---
layout: connectors-tutorial-single_layout
title: Setup Falcon using your Plotly On-Premise service
subtitle: Setup database connections using Falcon with Plotly On-Premise
permalink: /database-connectors/on-prem-login/
imageurl:  https://plotly.github.io/static/images/falcon/logos/on-premise.png
state: active
tags: start
section: Basics
meta_description: Follow these steps to connect to your databases using Plotly On-Premise
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases

steps:
 - title: What is Falcon?
   sub-steps:
    - copy: "Falcon is a free, [open-source](https://github.com/plotly/plotly-database-connector) SQL editor with inline data visualization. With Falcon you can connect to your database in the Connection tab, run SQL queries in the Query tab, then export your results as a CSV or open them in the [Chart Studio](https://plot.ly/create) to unlock the full power of Plotly graphs. Optionally, you can use Falcon as a middleman between plot.ly and your database - so that when your database updates, your charts and dashboards update as well. Currently, Falcon supports connections to RedShift, MySQL, PostgreSQL, IBM DB2, Impala, MS SQL, and SQLite."
 - title: Visit Plotly
   sub-steps:
    - copy: "If you are using Plotly's On-Premise service, you can access Plotly's platform at your Plotly base domain as it was set-up by your IT department; often it is of the form 'plotly.your-company-name.com'. We will use the latter domain throughout this tutorial. To start using Falcon as an on-premise user, visit 'plotly.your-company-name.com/create' and click on 'Import' in the top-right corner."
      img: "![](https://plotly.github.io/static/images/falcon/on-prem/import-data.png)"
 - title: Choose SQL Option
   sub-steps:
    - copy: "Click on the SQL tab of the dialog window."
      img: "![](https://plotly.github.io/static/images/falcon/on-prem/sql-tab.png)"
 - title: Visit Your On-Premise Connector
   sub-steps:
    - copy: "Click on the link to your on-premise connector which is configured to your company-name domain. Clicking on the link should bring you to 'plotly.your-company-name.com/external-data-connector'. In future, you may of course, visit the database connector directly at 'plotly.your-company-name.com/external-data-connector' without heading to 'plotly.your-company-name.com/create' first if you wish to add or modify your connections."
      img: "![](https://plotly.github.io/static/images/falcon/on-prem/connector-link.png)"
 - title: Setup Connections to Your Databases
   sub-steps:
    - copy: "You can now setup connections to your databases. For more specific guidance, visit the tutorial for your database visit [our full list](https://help.plot.ly/database-connectors/) that includes [MySQL](https://help.plot.ly/database-connectors/mysql/), [MS SQL](https://help.plot.ly/database-connectors/mssql/), [PostgreSQL](https://help.plot.ly/database-connectors/postgres/), [MariaDB](https://help.plot.ly/database-connectors/mariadb/), [Redshift](https://help.plot.ly/database-connectors/redshift/), [Apache Drill and Parquet files](https://help.plot.ly/database-connectors/apache-drill/), [S3](https://help.plot.ly/database-connectors/s3/), [Elasticsearch](https://help.plot.ly/database-connectors/elasticsearch/) or [request a new one](https://plotly.com/consulting-and-oem/) if you do not see what you want."
      img: "![](https://plotly.github.io/static/images/falcon/on-prem/get-going.png)"
 - title: Additionnal Information
   sub-steps:
    - copy: "Falcon stores the credentials to your databases. When Falcon runs on your On-Premise account, these credentials only need to be saved to the connector by one user. All users of Plotly On-Premise will have access to the databases and datastores that get configured."
    - copy: "Falcon can also run queries on a schedule ([see tutorial](https://help.plot.ly/database-connectors/schedule-query/)). Falcon will save the results of the queries to user accounts in the Plotly On-Premise server through the [Plotly Grids API](https://api.plot.ly/v2)."
    - copy: "Plotly On-Premise will need network access to your databases or datastores. If you would like to run Falcon on a separate server than Plotly or if you would like only a few users to have access to your databases, then you can run Falcon as a desktop app ([see tutorial](https://help.plot.ly/database-connectors/personal-login)) or as a headless server app ([more information](https://github.com/plotly/plotly-database-connector#run-as-headless-server))."

---
