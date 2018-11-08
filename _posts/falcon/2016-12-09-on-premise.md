---
permalink: /database-connectors/on-premise
title: Running the Plotly Database Connector on Chart Studio Enterprise
---

### Plotly Database Connector and Chart Studio Enterprise

The Plotly Database Connector is an open source web server and application that provides an interface between the [Plotly Chart Creator](https://plot.ly/create) and your databases and datastores.

The Plotly Chart Creator makes HTTP requests directly to the Database Connector from the web browser. The Database Connector listens for these requests and makes queries your configured databases or datastores.

The Plotly Database Connector stores the credentials to your databases. When the Database Connector runs on your Chart Studio Enterprise account, these credentials only need to be saved to the connector by one user. All users of Chart Studio Enterprise will have access to the databases and datastores that get configured.

The Plotly Database Connector can also run queries on a schedule. The Plotly Database Connector will save the results of the queries to user accounts in the Chart Studio Enterprise server through the [Plotly Grids API](https://api.plot.ly/v2).

Chart Studio Enterprise will need network access to your databases or datastores. If you would like to run the Plotly Database Connector on a separate server than Plotly or if you would like only a few users to have access to your databases, then you can run the Plotly Database Connector as a desktop app or as a server.
