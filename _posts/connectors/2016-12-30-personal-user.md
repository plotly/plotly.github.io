---
layout: connectors-tutorial-single_layout
title: Setup the Database Connector on a Personal Computer
subtitle: Setup database connections using Plotly's Database Connector
permalink: /database-connectors/personal-login/
imageurl:  /static/images/database-connectors/logos/personal-login.png
state: active
tags: start
section: Basics
meta_description: Follow these steps to connect to your databases using Plotly On-Premise
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases

steps:
 - title: Get To Know The Connector
   sub-steps:
    - copy: "The Plotly Database Connector is an [open source](https://github.com/plotly/plotly-database-connector) web server and application that provides an interface between the [Plotly Chart Creator](https://plot.ly/create) and your databases and datastores."
    - copy: "[Plotly Chart Creator](https://plot.ly/create) makes HTTP requests directly to the Database Connector from the web browser. The Database Connector listens for these requests and makes queries to your configured databases or datastores."
 - title: Download the App
   sub-steps:
    - copy: "If you haven't yet, download the Plotly Database Connector from this [web page](https://plot.ly/database-connectors/) to get started! Upon clicking on the download button for either Mac or Windows distribution, a file should be added to your Downloads folder."
      img: "![Download](/static/images/database-connectors/all/download.png)"
 - title: Install the App (Windows)
   sub-steps:
    - copy: "Visit your Downloads folder. If you are using a Windows machine (Mac instructions will follow), double click on the application executable."
      img: "![Downloading windows](/static/images/database-connectors/all/downloading-windows.png)"
    - copy: "Double click on the application. Your application will start to install itself. Note that some security settings may require you to install the application as an Administrator (right click and choose the administrator option to do so). The installation process may take up to several minutes."
      img: "![Installing windows](/static/images/database-connectors/all/installing-windows.png)"
    - copy: "Once installed, a desktop icon will be created on your desktop. Double click on it to open the application."
      img: "![Desktop windows](/static/images/database-connectors/all/desktop-windows.png)"
 - title: Install the App (Mac)
   sub-steps:
    - copy: "Visit your Downloads folder. If you are using a Mac machine (Windows instructions are in the previous section), double click on the application installer DMG file."
      img: "![downloading-mac](/static/images/database-connectors/all/downloading-mac.png)"
    - copy: "Drag the Plotly Database Connector icon into the Applications folder when prompted."
      img: "![Installing mac](/static/images/database-connectors/all/installing-mac.png)"
    - copy: "Once installed, a desktop icon will be created in your applications folder. Double click on it to open the application. Note that some security settings may require you to open the application as an Administrator (right click and choose the administrator option to do so). The installation process may take up to several minutes."
      img: "![Desktop mac](/static/images/database-connectors/all/desktop-mac.png)"
 - title: Authorization
   sub-steps:
    - copy: "Now that the application is installed you can open it. Here, the connector app may automatically log you in with your Plotly credentials. If not, you will be prompted for your Plotly login credentials."
    - copy: "Next, A new window will open asking for you to confirm authorization by clicking 'Authorize'"
 - title: Automatic SSL
   sub-steps:
    - copy: "In version 2.0+, the app will now automatically generate an SSL. This may take *several minutes*!"
    - copy: "Let's Encrypt is service for offering free SSL certificates. What we've done is created a server which generates a unique subdomain and a unique Let's Encrypt SSL certificates for that subdomain. We then re-route that subdomain's DNS to `localhost:9495`."
    - copy: "For example, when you start up your app, your app will make a request to this certificate and domain issuing server. After about *six minutes*, you'll have a unique subdomain and a unique server. Your application will spin up a server with those certificates and the plotly chart creator web application will be able to make requests to your server, no problem!"
    - copy: "In this example below, the domain [https://plotly--ab29698f-1b35-420c-881d-6.plotly-connector.com](https://plotly--ab29698f-1b35-420c-881d-6.plotly-connector.com) has a unique certificate associated to it. And remember, this domain just re-routes to localhost:9495 on the global DNS network. It's still just loading content from your localhost server - data is not traveling over the network!"
      img: "![Domain address](/static/images/database-connectors/automatic-ssl/automatic-ssl-domain.png)"
    - copy: "These certificates are saved locally on your machine in the ~/.plotly/connector folder. They expire every 90 days and the application should automatically generate a new one for you"
 - title: Setup connections to your databases
   sub-steps:
    - copy: "The application will open and you can now setup connections to your databases. For more specific guidance, visit the tutorial for your database visit [our full list](/database-connectors) that includes [MySQL](/database-connectors/mysql), [MS SQL](/plotly-databases/mssql), [PostgreSQL](/plotly-databases/postgres), [MariaDB](/plotly-databases/mariadb), [Redshift](/database-connectors/redshift), [Apache Drill and Parquet files](/database-connectors/apache-drill), [S3](/database-connectors/s3), [Elasticsearch](/database-connectors/elasticsearch) or [request a new one](https://plotly.typeform.com/to/KUiCSl) if you do not see what you want."
      img: "![Getting connected](/static/images/database-connectors/all/get-going-v2.png)"
 - title: Additional information
   sub-steps:
    - copy: "The Plotly Database Connector stores the credentials to your databases. It can also run queries on a schedule ([see tutorial](/database-connectors/schedule-query)). The Plotly Database Connector will save the results of the queries to user accounts in the Plotly On-Premise server through the [Plotly Grids API](https://api.plot.ly/v2)."
    - copy: "If you would like to run the Plotly Database Connector on a separate server, then you can run it headlessly from the command line ([more information](https://github.com/plotly/plotly-database-connector#run-as-headless-server))."
---
