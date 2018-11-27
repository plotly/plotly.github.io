---
layout: tutorial-single_layout
title: Streaming in Chart Studio
subtitle: Chart Studio Streaming API
permalink: /streaming/
imageurl:
state: active
tags:
order:
meta_description: Chart Studio Streaming API.
popularity:
carouselimageurl:
actioncall: Chart Studio Streaming API
actioncall-url:

otherlang: Know how to program? Learn more about chart attributes for [Python](https://plot.ly/python/streaming/).

steps:
 - title: Streaming Support
   sub-steps:
    - copy: "Streaming is no longer supported in Chart Studio Cloud."
    - copy: "Streaming is still available as part of [Chart Studio On-Premises](https://plot.ly/products/on-premise/). Additionally, [Dash](https://plot.ly/products/dash/) supports streaming, as demonstrated by the [Dash Wind Streaming example](https://github.com/plotly/dash-wind-streaming)."

 - title: Basic Streaming Concepts
   sub-steps:
    - copy: "Streaming is an additional API layer on top of the REST API. Therefore you follow the steps for making a REST API plot request to instantiate a base plot with your desired layout, style and mapping of streaming tokens to data arrays. This is accomplished by following the documentation for the REST API with the addition of adding tokens into the data object."
      img: "![StreamA](../static/images/streaming/stream-code1.png)"
    - copy: "Once this has successfully been posted you are ready to begin streaming to the streaming endpoint, http://stream.plot.ly. To match your data stream to the correct data object in the initialized plot attach a token to the HTTP headers sent to the streaming endpoint."
      img: "![StreamB](../static/images/streaming/stream-code2.png)"
    - copy: "Once the stream has been connected over http, write to the request stream with newline separated JSON."
      img: "![StreamC](../static/images/streaming/stream-code3.png)"
    - copy: "The newline is extremely important. Without this delimiter the Streaming Endpoint will not delineate your data, and will terminate the stream. You can send multiple streams to the same plot by nesting stream tokens within the corresponding data trace object. Similarly you can use the same token for multiple traces in a plot (they will show the same stream, so this is useful only in when using subplots)."

 - title: Connecting
   sub-steps:
    - copy: "To connect to the Streaming API, form an HTTP request and write to the request for as long as you want to maintain the stream. Our streaming cluster will hold the connection open indefinitely, barring server-side error, excessive client-side lag, network hiccups, routine server maintenance or duplicate streams using the same token. The method to form an HTTP request and write newline separated data will be different for every language or framework, so consult the documentation for the HTTP library you are using. We have provided example Python and Nodejs documentation. Some HTTP client libraries form a single request body which is sent to the server when the request is closed. These clients will not work for accessing the Streaming API. You must use an HTTP client that will allow writing response data incrementally."

 - title: Disconnecting
   sub-steps:
    - copy: "Chart Studio will close a streaming connection for the following reasons:"
    - copy: "A client establishes additional streams using the same stream token. When this occurs, the oldest connection will be terminated. This means you have to be careful not to run two reconnecting clients in parallel with the same credentials, or else they will take turns disconnecting each other."
    - copy: "A client stops writing data for a time period longer than a minute. If a minute passes without receiving any data from the client the stream connection will be closed. (A connection can be maintained by writing a heartbeat within the 60 second window, a heartbeat is simply a newline)."
    - copy: "A streaming server is restarted. This is usually related to a code deploy and is not very frequent."
---
