---
permalink: /updating-data-on-a-schedule
title: Updating Plotly Datasets on a Schedule
---

### Plotly Database Connector

The Plotly Database Connector is an open source web server and application that provides an interface between the [Plotly Chart Creator](https://plot.ly/create) and your databases and datastores.

The Plotly Chart Creator makes HTTP requests directly to the Database Connector from the web browser. The Database Connector listens for these requests and makes queries your configured databases or datastores.

### Running Queries on a Schedule

The Plotly Database Connector can run queries on a schedule. The Plotly Database Connector will save the results of the queries to user accounts in the Plotly On-Premise server through the [Plotly Grids API](https://api.plot.ly/v2).

The Plotly Connector will need your Plotly credentials in order to authenticate on your behalf to schedule these queries.

Get started by following our [step-by-step tutorial on scheduling queries](https://help.plot.ly/database-connectors/schedule-query).
