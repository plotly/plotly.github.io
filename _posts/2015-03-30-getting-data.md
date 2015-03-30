---
title: Data integrations
layout: tutorial
permalink: /getting-data
---

<div>
    <a href="https://plot.ly/~jackp/4102/" target="_blank" title="$\text{Probability density function of } \chi^2_k$" style="display: block; text-align: center;"><img src="https://plot.ly/~jackp/4102.png" alt="$\text{Probability density function of } \chi^2_k$" style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="jackp:4102" src="https://plot.ly/embed.js" async></script>
</div>

<br />
<br />

<p>Our partners at <a href="www.data.gov">Data.gov</a>, <a href="https://www.quandl.com/">Quandl</a> and <a href="http://www.vernier.com/">Vernier</a> let you export data directly to Plotly's Web App.</p>

<p>This means you can find data to visualize and analyze with the click of a button. In this tutorial we'll show you how.</p>


<br />
<br />

<h1><a href="https://www.data.gov/meta/open-apps/">Data.gov</a></h1>

<br />
<br />

<p>Data.gov supports direct exports to Plotly on smaller CSV and XLS files. Look for the "Open With" menu when searching through their data sets.</p>

<table>
<tbody>
<tr>
<td>When you go to <a href="www.data.gov>Data.gov</a>, you'll see a box to search the data sets and icons to browse by topic.</td>
<td><img src="http://i.imgur.com/K8MSiIV.png"></td>
</tr>
<tr>
<td>We selected <b>Consumer</b>, which opens a description of the collection, highlights, and recent updates. Clicking on <b>Data</b> brings us to the data sets.</td>
<td><img src="http://i.imgur.com/zdbxVr3.png"></td>
</tr>
<tr>
<td>The toolbar on the left lets us filter the data by type, tags, format and more. If you want to quickly find data sets that you can export to Plotly, filtering the format to XLS or CSV is a good idea.</td>
<td><img src="http://i.imgur.com/L5LLlFn.png"></td>
</tr>
<tr>
<td>Once you select a data set, look for the "Open With" option (this option will only appear on supported data sets). Click on <b>plotly</b>, and the data set will open inside Plotly's Web App.</td>
<td><img src="http://i.imgur.com/IowB7mf.png"></td>
</tr>
</tbody>
</table>

<br />
<br />

<h1 id="step-2:-running-basic-statistics"><a href="#step-2:-running-basic-statistics">Step 2: Chi-squared test</a></h1>

<br />
<br />

<table>
<tbody>

<tr>
<td>Once the data has opened in your workspace, select <strong>Chi-squared test</strong> from the ANALYSIS menu.</td>
<td><img src="http://i.imgur.com/Skp90ha.png"></td>
</tr>

<tr>
<td>Because we want to compare the sample data with what we would expect assuming no gender bias, we select “choose as obs” in the Vegetarian column and “choose as exp” in the Expected vegetarian column. Next, click on <strong>Perform Chi-squared Test</strong>.</td>
<td><img src="http://i.imgur.com/i6Y1ZiD.png"></td>
</tr>

<tr>
<td>Plotly puts our results in the first two columns to the right of our data. In this case, the chi-squared statistic is 4.1456 and the P-value is 0.04174. By convention, because 0.04174 is less than 0.05, we decide that the difference is statistically significant. In other words, we reject the null hypothesis and conclude that there must be a relation between vegetarianism and gender.</td>
<td><img src="http://i.imgur.com/7fkBMjX.png"></td>
</tr>

</tbody>
</table>

