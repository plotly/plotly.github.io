---
layout: connectors-tutorial-single_layout
title: Setup Falcon SQL Client on a Personal Computer
subtitle: Setup a database connection using Falcon SQL Client
permalink: /database-connectors/personal-login/
imageurl:  /static/images/falcon/logos/personal-login.png
state: active
tags: start
section: Basics
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases

steps:
 - title: What is Falcon?
   sub-steps:
    - copy: "Falcon is a free, [open-source](https://github.com/plotly/plotly-database-connector/) SQL editor with inline data visualization. With Falcon you can connect to your database in the Connection tab, run SQL queries in the Query tab, then export your results as a CSV or open them in the [Chart Studio](https://plot.ly/create) to unlock the full power of Plotly graphs. Optionally, you can use Falcon as a middleman between plot.ly and your database - so that when your database updates, your charts and dashboards update as well. Currently, Falcon supports connections to RedShift, MySQL, PostgreSQL, IBM DB2, Impala, MS SQL, and SQLite."
 - title: Download the App
   sub-steps:
    - copy: "If you haven't yet, download Falcon SQL Client from the [Falcon product page](https://plot.ly/free-sql-client-download/) to get started! Upon clicking on the download button for either Mac or Windows distribution, a file should be added to your Downloads folder."
      img: "![Download](/static/images/falcon/personal/download.png)"
 - title: Install Falcon (Windows)
   sub-steps:
    - copy: "Visit your Downloads folder and double click on the application executable to unzip."
    - copy: "Next, double click on the application. Your application will start to install itself. Note that some security settings may require you to install the application as an Administrator (right click and choose the administrator option to do so). The installation process may take up to several minutes."
      img: "![Installing windows](/static/images/falcon/personal/installing-windows.png)"
    - copy: "Once installed, a desktop icon will be created on your desktop. Double click on it to open the application and you're ready to soar."
      img: "![Desktop Windows](/static/images/falcon/personal/desktop-windows.png)"
 - title: Install Falcon (Mac)
   sub-steps:
    - copy: "Visit your Downloads folder, double click on the application installer DMG file."
      img: "![downloading Mac](/static/images/falcon/personal/downloading-mac.png)"
    - copy: "Drag the Falcon icon into the Applications folder when prompted."
      img: "![Installing mac](/static/images/falcon/personal/installing-mac.png)"
    - copy: "Once installed, a desktop icon will be created in your applications folder. Double click on it to open the application. Note that some security settings may require you to open the application as an Administrator (right click and choose the administrator option to do so)"
      img: "![Desktop mac](/static/images/falcon/personal/desktop-mac.png)"
 - title: Authorization
   sub-steps:
    - copy: "Now that the application is installed you can open it. Here, the connector app may automatically log you in with your Plotly credentials. If not, you will be prompted for your Plotly login credentials."
      img: "![Plotly Creds](/static/images/falcon/personal/plotly-creds.png)"
    - copy: "Next, A new window will open asking for you to confirm authorization by clicking 'Authorize'"
      img: "![Authorize](/static/images/falcon/personal/authorize.png)"
 - title: Automatic SSL
   sub-steps:
    - copy: "In version 2.0+, the app will now automatically generate an SSL. This may take *several minutes*!"
    - copy: "Let's Encrypt is service for offering free SSL certificates. What we've done is created a server which generates a unique subdomain and a unique Let's Encrypt SSL certificates for that subdomain. We then re-route that subdomain's DNS to `localhost:9495`."
    - copy: "For example, when you start up your app, your app will make a request to this certificate and domain issuing server. After *several minutes* (this authorization only needs to be completed once), you'll have a unique subdomain and a unique server. Your application will spin up a server with those certificates and the plotly chart creator web application will be able to make requests to your server, no problem!"
    - copy: "The domain [https://plotly--ab29698f-1b35-420c-881d-6.plotly-connector.com](https://plotly--ab29698f-1b35-420c-881d-6.plotly-connector.com) has a unique certificate associated to it. And remember, this domain just re-routes to localhost:9495 on the global DNS network. It's still just loading content from your localhost server - data is not traveling over the network!"
    - copy: "These certificates are saved locally on your machine in the ~/.plotly/connector folder. They expire every 90 days and the application should automatically generate a new one for you"
 - title: Setup a Connection to Your Databases
   sub-steps:
    - copy: "Now you should see the Falcon interface (like below). Here, you can setup a connection to your databases. As you can see there are numerous databases available. For more specific guidance, visit the tutorial for your database or see [our full list](/database-connectors/), which includes [MySQL](/database-connectors/mysql/), [MS SQL](/database-connectors/mssql/), [PostgreSQL](/database-connectors/postgres/), [MariaDB](/database-connectors/mariadb/), [Redshift](/database-connectors/redshift/), [Apache Drill and Parquet files](/database-connectors/apache-drill/), [S3](/database-connectors/s3/), [Elasticsearch](/database-connectors/elasticsearch/) or [request a new one](https://plotly.typeform.com/to/KUiCSl) if you do not see what you want."
      img: "![Getting Connected](/static/images/falcon/personal/connections.png)"
    - copy: "If you're unsure of how your credentials should be formatted, see an example by toggling 'Show Sample Credentials'."
      img: "![Sample Credentials](/static/images/falcon/personal/sample-credentials.png)"
 - title: Setup Scheduled Queries
   sub-steps:
    - copy: "The Plotly Database Connector stores the credentials to your databases. It can also run queries on a schedule ([see tutorial](https://help.plot.ly/database-connectors/schedule-query/)). The Plotly Database Connector will save the results of the queries to user accounts in the Plotly On-Premise server through the [Plotly Grids API](https://api.plot.ly/v2)."
 - title: Setup Falcon on a Server
   sub-steps:
    - copy: "If you would like to run Falcon on a separate server, then you can run it headlessly from the command line ([more information](https://github.com/plotly/plotly-database-connector#run-as-headless-server))."

---
