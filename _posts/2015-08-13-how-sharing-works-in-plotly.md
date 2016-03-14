---
layout: single
title: How Sharing Works In Plotly
subtitle: How sharing works for plotly grids, plots and folders
permalink: /how-sharing-works-in-plotly/
imageurl: /static/images/how-sharing-works-in-plotly/sharing-thumb.png
state: active
tags: plotlybasic
meta_description: A tutorial on how to update data in and add data to Plotly graphs. Plotly is the easiest way to graph and share your data.
actioncall: Share your grids, plots and folders
---

# How Sharing Works

Plotly offers free, online tools for analyzing data and making graphs. In this tutorial we’ll show you some tips for better sharing of your plots, grids and folders using secret links, shared folders and the API. Also make sure to check out our [other tutorials](http://help.plot.ly/).

There are three types of sharing for your Plotly grids and plots:

**Public**: Anyone can view it. It will appear in your profile and can appear in search engines and can be featured in the Plotly feed. You do not need to be logged in to Plotly to view it.  | ![Public file](/static/images/how-sharing-works-in-plotly/public-file.png)

**Private**: Only you can view it. It will not appear in the Plotly feed, your profile, or search engines. You must be logged in to Plotly to view it. You can privately share it with other Plotly users but they will need to be logged in to view it. | ![Private file](/static/images/how-sharing-works-in-plotly/private-file.png)

**Secret**: Anyone with the secret link can view it. It will not appear in the Plotly feed, your profile, or search engines. If it is embedded inside a webpage or an IPython notebook, anybody viewing that page will see it. You do not need to be logged in to view it. | ![Private share link](/static/images/how-sharing-works-in-plotly/private-share-link.png)

This option is available from [your list of files](https://plot.ly/organize) under the "Share" icon: | ![Shared plot](/static/images/how-sharing-works-in-plotly/share-plot.png)

### Secret links

A secret link is a private link which can be viewed by anybody with the URL. Private URLs are long, obfuscated URLs that are practically impossible to guess. Anybody who has a private URL can view the graph. They don't need a Plotly account and they don't need to log in.

From the **Organize** app you can click on the **Share** button

You can tell a privately-shared plot from the word “Private” written above it, accompanied by a closed lock.  | ![Shared plot](/static/images/how-sharing-works-in-plotly/shared-plot.png)

### How do shared folders work?

Changing a folder's sharing status affects the contents in the following ways:

Changing a folder from private to public changes the status of all files and folders to public.

Changing a folder from public to private changes the status of the contents to private. Users on the [free plan](https://plot.ly/plans) are permitted to keep one plot private. All Plotly users do, however, enjoy unlimited private folders and grids.

Moving a private item to a public folder will make that item public for the time it's in that folder, and the **Sharing** icon will be greyed-out. Moving a public item to a private folder will NOT make that item private.

Creating a new item in a public folder will create an item that is public as long as it's in a public folder. Moving it to a private folder or to your **Home** folder will make it revert to being private. Creating a new item in a private folder will create a private item. Again please note that this is subject to the private plot limit of the account: once that limit is reached, additional plots will be, or will remain, public.

### How does this work with the APIs?

 Similar functionality is also accessible from the various [API libraries](https://plot.ly/api). View each page for details:
 
  - [Python library](https://plot.ly/python/privacy)
  - [R library](https://plot.ly/r/privacy)
  - [MATLAB library](https://plot.ly/matlab/privacy)
