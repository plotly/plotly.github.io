---
layout: single
title: Getting data
permalink: /getting-data/
imageurl: /static/images/getting-data/getting-data-ice-cream-production.png
state: active
tags: classroom plotlybasic
meta_description: A tutorial on reliable data sources including Data.gov. Plotly is the easiest way to make beautiful graphs online and for free.
---

# Getting data

<div>
    <a href="https://plot.ly/~MattSundquist/5821/" target="_blank" title="US Ice Cream Production and Consumption" style="display: block; text-align: center;"><img src="https://plot.ly/~MattSundquist/5821.png" alt="US Ice Cream Production and Consumption" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="MattSundquist:5821" src="https://plot.ly/embed.js" async></script>
</div>


<br />
<br />

<p>At Plotly, we like graphs. We bet you do too. But it’s hard to get data for graphs or from graphs. <a href="https://catalog.data.gov/dataset/sweetener-market-data-historical-deliveries-by-use-ice-cream">Data.gov</a>, <a href="http://arohatgi.info/WebPlotDigitizer/">WebPlotDigitizer</a>, <a href="https://www.quandl.com/data/BAVERAGE/USD-USD-BITCOIN-Weighted-Price">Quandl</a>, <a href="https://magic.import.io/?site=http:%2F%2Fwww.ikea.com%2Fus%2Fen%2Fsearch%2F%3Fquery%3Dchair">import.io</a>, and <a href="http://www.vernier.com/products/wireless-solutions/connected-science-system/apps/">Vernier</a> let you export data directly to Plotly's Web App. If you want to partner with us, write to <a href="mailto:feedback@plot.ly">feedback@plot.ly</a>. We also provide <a href="https://plot.ly/export/">technical documentation</a> on setting up an integration.</p>

Keeping track of your data source is important. That's why Plotly automatically includes a link to the URL that hosts your data. | <img src="/static/images/getting-data/data-source-url.png">

You can also sync Plotly graphs with [externally sourced data](http://chriddyp.github.io/external-source-plotter/). These graphs can be shared by a URL or embedded in a webpage, and whenever a user views the graph, Plotly fetches the latest data from your web service. Use the [external source plotter](http://chriddyp.github.io/external-source-plotter/) when you don't want to send your user to Plotly's Web App. We have examples documented for SQLite, Flask, Quandl, Google Drive, GitHub Gists, and Dropbox.


<h1><a href="https://www.data.gov/meta/open-apps/">Data.gov</a></h1>


<p>Data.gov is the home of the U.S. Government's open data and hosts over 124,651 data sets. They've recently built an "Open With" option that let's you send the data directly to Plotly to create interactive graphs for free. This feature is supported on smaller CSV and XLS files. Look for the "Open With" menu when searching through their data sets.</p>

<table>
<tbody>
<tr>
<td>When you go to <a href="www.data.gov">Data.gov</a>, you'll see a box to search the data sets and icons to browse by topic.</td>
<td><img src="/static/images/getting-data/search-data-gov-sets.png"></td>
</tr>
<tr>
<td>We selected <b>Consumer</b>, which opens a description of the collection, highlights, and recent updates. Clicking on <b>Data</b> brings us to the data sets.</td>
<td><img src="/static/images/getting-data/data-gov-data-tab.png"></td>
</tr>
<tr>
<td>The toolbar on the left lets us filter the data by type, tags, format, and more. If you want to quickly find data sets that you can export to Plotly, filtering the format to XLS or CSV is helpful.</td>
<td><img src="/static/images/getting-data/filter-format.png"></td>
</tr>
<tr>
<td>Once you select a data set, look for the "Open With" option (this will only appear on supported data sets). Click on <b>plotly</b>, and the data set will open inside Plotly's Web App.</td>
<td><img src="/static/images/getting-data/rent-estimates.png"></td>
</tr>
</tbody>
</table>

<br />
<br />

<h1><a href="http://arohatgi.info/WebPlotDigitizer/tutorial.html">WebPlotDigitizer</a></h1>

[WebPlotDigitizer](http://arohatgi.info/WebPlotDigitizer/) lets you automatically grab data from an image and export the data directly to Plotly. With Plotly you can recreate an interactive version of the graph, easily stylize your work, and even analyze the data.

Let’s say, for example, you’re reading this [Mother Jones article](http://www.motherjones.com/blue-marble/2013/12/signal-increasing-hurricane-intensity-finally-emerging-noise) on the rising strength of hurricanes. The source of this data is an academic paper we don’t have access to, but WebPlotDigitizer can grab the data and send it Plotly.

The first step is to save a copy of the image (or take a screen shot). Then open [WebPlotDigitizer's App](http://arohatgi.info/WebPlotDigitizer/app). Click on **File**, and then **Load Image**. Upload your saved image. | ![Upload data to WebPlotDigitizer](/static/images/getting-data/upload-file-to-webplotdigitizer.png)
We select the plot type (in this case "2D (X-Y) Plot") and click on **Align Axes**. WebPlotDigitizer gives simple instructions to select four points to align the axes.<br><br>This particular graph has an $x$-axis with value labels but no tick marks. To be as precise as possible, we can mouse over a known value, such as the data peak at 1983. Any time you mouse over your WPD graph, the panel in the upper right corner zooms in and displays coordinates as $[x,y]$. Once we find the appropriate $x$-coordinate (in this case 73.78), we can move our mouse to the $x$-axis to select the first point.<br><br>We use the same method for the other three points. Click **Complete!** once you've selected four points.| ![Align axes by selecting points](/static/images/getting-data/align-axes-by-selecting-points.png)
We now enter the point values we selected for the points selected on the $x$ and $y$ axes. Because this graph has years on the $x$-axis, we use the format "yyyy/mm/dd". Click **Okay**. | ![Label selected points on axes](/static/images/getting-data/label-selected-points-on-axes.png)
We'll use the default manual mode, and add a point by clicking on each peak and valley on the line that defines the graph. Once this is complete, we click on **View Data** to open the extracted data set. | ![Manually select peaks and valleys](/static/images/getting-data/manually-select-peaks-and-valleys.png)
Click on the **Graph in Plotly** button to recreate the graph. Once the graph loads, you can click on **VIEW DATA** to see the underlying data. | ![Click on graph in Plotly to export the data](/static/images/getting-data/click-on-graph-in-plotly-to-export-the-data.png)

Check out our short video on [Styling and Customizing Graphs](http://help.plot.ly/styling-and-customizing-graphs-video/) to make the hurricane graph your own.

<h1><a href="https://www.quandl.com/help/plotly">Quandl</a></h1>

<p>Quandl is a search engine for numerical data. They host data sets from hundreds of publishers, all organized and easy to search. Quandl automatically sends data to a new Plotly spreadsheet, neatly formatted, organized and ready for graphing.</p>

<table>
<tbody>
<tr>
<td>From <a href="www.data.gov">Quandl's</a> homepage, select <b>COLLECTIONS BROWSER</b> from the "Platform" drop-down menu.</td>
<td><img src="/static/images/getting-data/quandl-homepage.png"></td>
</tr>
<tr>
<td>You can navigate through Quandl's collections using the toolbar on the right. Here we selected <b>MARKETS</b>, <b>COMMODITIES</b>, <b>Farms and Fishery</b>.</td>
<td><img src="/static/images/getting-data/BZEQ9C4.png"></td>
</tr>
<tr>
<td>We chose the "Butter, AA Chicago" data set, supplied by the <a href="http://www.wsj.com/">Wall Street Journal</a>. Click on the <b>Plotly</b> button, and the data set will open inside Plotly's Web App.</td>
<td><img src="/static/images/getting-data/2ttCf9B.png"></td>
</tr>
</tbody>
</table>

<br />
<br />

<h1><a href="http://blog.import.io/post/plotly-integration">import.io</a></h1>

Import.io is a great service to help you scrape data automatically from webpages. To utilize the Plotly export, you'll need to head over to [import.io](https://import.io) and set up a free account.

[Ikea](http://www.ikea.com/ca) (in Canada) has [77 table lamps for sale](http://www.ikea.com/ca/en/catalog/categories/departments/living_room/10732/) on their webpage. Let's say you are interested in the average price of their offerings, or perhaps would like to make a histogram of the prices. Instead of manually extracting the data, we can use import.io.

Open [import.io](https://import.io/), and sign in. Enter the URL of the page with the data you want to extract. Click on **Try it Out**. | ![Enter URL at import.io](/static/images/getting-data/enter-url-at-import-io.png)
You'll see the data appear in spreadsheet form. Look for the pink **Get API** button in the lower right. Click it. | ![Use get API button to extract data](/static/images/getting-data/use-get-api-button-to-extract-data.png)
Click on the **Copy this to My Data** button in the box that appears, and you'll see the data in a form where we can select columns to extract. Click the Plot.ly button above the data. | ![Click Plot.ly to extract](/static/images/getting-data/click-plot-ly-to-extract.png)
We can check the columns of data what we wish to extract to Plotly. Here we choose "producttitle_value" and "price_value_prices". Finally, click on the blue **Export to Plot.ly** button. | ![Select columns to export](/static/images/getting-data/select-columns-to-export.png)

The data will open in a Plotly grid, where you can analyze and graph the data. You might like to check out our tutorials on [basic statistics](/basic-statistics-mean-median-standard-deviation) and [histograms](/make-a-histogram) to get some ideas.

<br />
<br />

<h1><a href="http://www.vernier.com/">Vernier</a></h1>


<p>Vernier develops and produces easy-to-use data-aquisition products (think sensors, data loggers, and experiments) for science classrooms and labs around the world. Vernier's <a href="http://www.vernier.com/products/wireless-solutions/connected-science-system/apps/">Data Share Apps</a> (built for iPad, Android, Chromebooks, and mixed-device classrooms), allow you to use their excellent hardware across platforms, from most devices. You can export data directly to Plotly, which gives you a seamless workflow on your Chromebook, iPad, or tablet. An export to Plotly with Logger Pro is coming soon.</p>

<table>
<tbody>
<tr>
<td>Click on the <b>Download</b> icon in the top-right corner of the Data Share web app. Select <b>Export to Plotly</b> to open the collected data in Plotly's web app.</td>
<td><img src="/static/images/getting-data/6snjGKq.png"></td>
</tr>
</tbody>
</table>
