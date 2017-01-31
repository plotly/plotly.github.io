---
layout: connectors-tutorial-single_layout
title: Setup the Database Connector using your Plotly On-Premise service
subtitle: Setup database connections using Plotly's On-Premise Database Connector
permalink: /database-connectors/on-prem-login/
imageurl:  /static/images/database-connectors/logos/on-premise.png
state: active
tags: start
section: Basics
meta_description: Follow these steps to connect to your databases using Plotly On-Premise
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases

steps:
 - title: Visit Plotly
   sub-steps:
    - copy: "If you are using Plotly's On-Premise service, you can access Plotly's platform at your Plotly base domain as it was set-up by your IT departmeent; often it is of the form 'plotly.your-company-name.com'. We will use the latter domain throughout this tutorial. To start using the Plotly Database Connector as an on-premise user, visit 'plotly.your-company-name.com/create' and click on 'Import' in the top-right corner."
      img: "![](/static/images/database-connectors/on-prem/import-data.png)"
 - title: Choose SQL option
   sub-steps:
    - copy: "Click on the SQL tab of the dialog window."
      img: "![](/static/images/database-connectors/on-prem/sql-tab.png)"
 - title: Visit your On-Premise connector
   sub-steps:
    - copy: "Click on the link to your on-premise connector which is configured to your company-name domain. Clicking on the link should bring you to 'plotly.your-company-name.com/external-data-connector'. In future, you may of course, visit the database connector directly at 'plotly.your-company-name.com/external-data-connector' without heading to 'plotly.your-company-name.com/create' first if you wish to add or modify your connections."
      img: "![](/static/images/database-connectors/on-prem/connector-link.png)"
 - title: Setup connections to your databases
   sub-steps:
    - copy: "You can now setup connections to your databases. For more specific guidance, visit the tutorial for your database visit [our full list](/database-connectors) that includes [MySQL](/database-connectors/mysql), [MS SQL](/plotly-databases/mssql), [PostgreSQL](/plotly-databases/postgres), [MariaDB](/plotly-databases/mariadb), [Redshift](/database-connectors/redshift), [Apache Drill and Parquet files](/database-connectors/apache-drill), [S3](/database-connectors/s3), [Elasticsearch](/database-connectors/elasticsearch) or [request a new one](https://plotly.typeform.com/to/KUiCSl) if you do not see what you want."
      img: "![](/static/images/database-connectors/all/get-going.png)"
 - title: Additionnal information
   sub-steps:
    - copy: "If you wish to find additionnal information about the database connector with regards to on-premise, visit our [on-premise additional info page](/database-connectors/on-premise)."

---
