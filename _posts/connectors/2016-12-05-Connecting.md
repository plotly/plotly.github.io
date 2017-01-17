---
permalink: /database-connectors/connecting
title: Connecting to the Plotly Connector - Tips and Troubleshooting
tags: advanced
layout: single_new
popularity: featured
actioncall-url: https://github.com/plotly/electron-sql-connector/releases
---

# Connecting to the Plotly Database Connector

## Architecture

The [Plotly Chart Editor](https://plot.ly/create) makes a connection to the [Plotly Database Connector](https://plot.ly/database-connectors) directly from the web browser. (The Plotly Database Connector is actually a _server_ that runs on your _localhost_. It doesn't accept connections from anywhere but your web browser).

## Running on HTTPS

[View our tutorial on generating HTTPS certificates for Mac and Linux systems](http://help.plot.ly/database-connectors/https/).

## Troubleshooting HTTP Connection Errors

By default and on Windows machines, the Plotly Databse Connector will run over HTTP. Some browsers will block connections made from Plotly (a site running on HTTPS) to the Database Connector (running on HTTP). [Learn more about the difference between HTTP and HTTPS](https://www.instantssl.com/ssl-certificate-products/https.html).

On Mac and Linux, you can configure the connector to use a self-signed HTTPS certificate. See below for more details.

To enable HTTP connections, you may need to give your browser permission to connect. Here's how:

**Google Chrome**

Google Chrome will display a _Shield_ in the address bar.
![Shield icon in Google Chrome](/static/images/database-connectors/connecting/chrome-shield-icon.png)

Click on the _Shield_ and click "Load unsafe scripts". The page will refresh and you should be able to connect successfully. 
![Load unsafe scripts prompt in Google Chrome](/static/images/database-connectors/connecting/chrome-shield-prompt.png)


**Firefox**
Firefox will display a _Shield_ on the left of the address bar.
![Shield icon in Firefox](/static/images/database-connectors/connecting/firefox-shield-icon.png)

Click on the _Shield_ and click the Right hand arrow.
![Firefox security shield prompt](/static/images/database-connectors/connecting/firefox-shield-prompt-1.png)

Follow the prompt and click "Disable protection for now". The browser will refresh and you should be able to connect.
![Firefox security shield prompt displaying "Disable protection for now"](/static/images/database-connectors/connecting/firefox-shield-prompt-2.png)

**Safari**

Unfortunately, Safari blocks all cross-origin requests so it is not possible to connect to the connector from Safari without enable HTTPS.


## Self-Signed HTTPS Certificates

To get around these browser warnings, you can run your Connector over HTTPS by using a self-signed HTTPS certificate.

The Plotly Connector app will walk you through generating a certificate.

Once you have generated your certificate, you need to install the certificate on your computer. Here is a video that walks you through installing a certificate on Mac OSX:

<iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/diWxlh7kucc?rel=0&amp;showinfo=0" frameborder="0" allowfullscreen></iframe>

Note that self-signed certificates are not available for Windows machines yet.

