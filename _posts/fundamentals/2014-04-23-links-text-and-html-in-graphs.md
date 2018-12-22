---
layout: single
title: Links, Text, and HTML in Graphs
subtitle: How to insert link, text and HTML in graphs
permalink: /adding-HTML-and-links-to-charts/
imageurl: /static/images/links-text-and-html-in-graphs/thum-links-text-and-html-in-graphs.png
state: active
tags: textandlinks
meta_description: How to insert links, text and html in plotly charts. Make graphs online and for free with Chart Studio
actioncall: Make a Graph
---

# Links, Text, and HTML in Graphs

<div>
    <a href="https://plot.ly/~Dreamshot/609/" target="_blank" title="&lt;b&gt;How Apple&#39;s Stock Reacts to New Product Announcements&lt;/b&gt;&lt;br&gt;Apple&#39;s stock price after product announcements " style="display: block; text-align: center;"><img src="https://plot.ly/~Dreamshot/609.png" alt="&lt;b&gt;How Apple&#39;s Stock Reacts to New Product Announcements&lt;/b&gt;&lt;br&gt;Apple&#39;s stock price after product announcements " style="max-width: 100%;width: 800px;"  width="800" onerror="this.onerror=null;this.src='https://plot.ly/404.png';"></a>
    <script data-plotly="Dreamshot:609" src="https://plot.ly/embed.js" async></script>
</div>

Want to add a link to the data source on one of your graphs? Need superscripts or subscripts in your title? Chart Studio supports several HTML tags and codes for special characters, like Greek letters.  In this tutorial we’ll show you the basics of integrating these features with Chart Studio. Looking for even more formatting options? LaTeX offers additional flexibility. Check out our tutorial [here](https://plot.ly/LaTeX-basics/).
Chart Studio uses a subset of HTML tags to do things like newline (&lt;br&gt;), bold (&lt;b&gt;&lt;/b&gt;), italics (&lt;i&gt;&lt;/i&gt;), and hyperlinks (&lt;a href=’&#8230;’&gt;&lt;/a&gt;). Tags &lt;em&gt;, &lt;sup&gt;, and &lt;sub&gt; are also supported. Follow along below for some examples.

### Step 1: Using HTML with Chart Studio

For this tutorial, we’ll examine some of the styling from the graph: [https://plot.ly/609/~Dreamshot/](https://plot.ly/609/~Dreamshot/). If you want to edit the graph yourself, you can click the link above.

| The title of this graph has two features: it’s on two lines, and the first line is bolded. To create the line break, all we have to do is enter &lt;br&gt; where we want the break to appear: *How Apple’s Stock Reacts to New Product Announcements &lt;br&gt; Apple’s stock price after product announcements (indexed to closing price on the day of the announcement)* | ![Links in Graphs](/static/images/links-text-and-html-in-graphs/image01.png) *Graph title after adding a line break* |
| To add bold text, we enclose the text with &lt;b&gt;&#8230;&lt;/b&gt;: *&lt;b&gt;How Apple’s Stock Reacts to New Product Announcements&lt;/b&gt;&lt;br&gt; Apple’s stock price after product announcements (indexed to closing price on the day of the announcement)* | ![Link and text in graphs](/static/images/links-text-and-html-in-graphs/image02.png) *Graph title after adding bold tags.* |
| The sources at the bottom of the graph contain hyperlinks so that the reader has a direct link to the source. This source link is added to the **x axis label** of the graph. The line that says “Source: " [Statista](http://www.statista.com/chart/2684/apple-stock-price-after-product-announcements/)” is written as: *Source: &lt;a href=&#8221;http://www.statista.com/chart/2684/apple-stock-price-after-product-announcements/&#8221;&gt;Statista&lt;/a&gt;* | ![Link and text in graphs](/static/images/links-text-and-html-in-graphs/image00.png) *x axis label with source links.* |

| The source link above was added to the <strong>x axis label</strong> of the graph, but you can also place a source link anywhere on the graph by adding an <strong>annotation</strong>. A popular place to position source links using annotations is in the bottom-right of the graph. To add an annotation, click on *NOTES* in the toolbar, then click on the &#8220;+&#8221;. You can drag the note and arrow to place it as you like.|![Link and text in graphs](/static/images/links-text-and-html-in-graphs/annotation.png) |

### Step 2: The essentials


<img class="img-responsive-table" src="/static/images/links-text-and-html-in-graphs/table1.png">

<div class="responsive-table">

<table>
<thead></thead>
<tbody>
<tr>
<td><b>Type</b></td>
<td><b>Code</b></td>
<td><b>What you'll see</b></td>
<td><b>Hints</b></td>
</tr>
<tr>
<td>Newline</td>
<td>Forced &lt;br&gt; break.</td>
<td>Forced
break.</td>
<td>You can change the alignment in your annotations to fit the space on your graph. Look for the <em>Text</em> tab in the <em>Notes</em> popover.</td>
</tr>
<tr>
<td>Bold text</td>
<td>&lt;b&gt;This is bold!&lt;/b&gt;</td>
<td><b>This is bold!
</b></td>
<td></td>
</tr>
<tr>
<td>Italic text</td>
<td>&lt;i&gt;Italics&lt;/i&gt;</td>
<td><i>Italics
</i></td>
<td></td>
</tr>
<tr>
<td>Superscripts</td>
<td>x&lt;sup&gt;2&lt;/sup&gt;</td>
<td>x<sup>2
</sup></td>
<td>You can enclose more than one character in superscripts and subscripts.</td>
</tr>
<tr>
<td>Subscripts</td>
<td>H&lt;sub&gt;2&lt;/sub&gt;O</td>
<td>H<sub>2</sub>O</td>
<td><a href="https://plot.ly/LaTeX-basics/">LaTeX</a> is a good alternative method for superscripts and subscripts.</td>
</tr>
<tr>
<td>Hyperlinks</td>
<td>&lt;a href=”<a href="https://plot.ly/" target="_blank">https://plot.ly/</a>”&gt;
Chart Studio&lt;/a&gt;</td>
<td><a href="https://plot.ly" target="_blank">Chart Studio</a></td>
<td>The general form is:&lt;a href=&#8221;type URL here&#8221;&gt;Type what you want user to see here&lt;/a&gt;</td>
</tr>
</tbody>
</table>

</div>

You can also add characters to your titles and annotation with HTML entities. Here are a few you might find useful. You can find the full collection [here](http://character-code.com/).


<img class="img-responsive-table" src="/static/images/links-text-and-html-in-graphs/table2.png">

<div class="responsive-table">

<table id="text-table">
<thead></thead>
<tbody>
<tr>
<td><b>Type</b></td>
<td><b>Code</b></td>
<td><b>What you'll see</b></td>
<td><b>Hints</b></td>
</tr>
<tr>
<td>Greek characters</td>
<td>&amp;mu;</td>
<td>μ</td>
<td>You can guess the code for other greek letters.</td>
</tr>
<tr>
<td>Currency</td>
<td>&amp;euro;</td>
<td>€</td>
<td></td>
</tr>
<tr>
<td>Math symbols</td>
<td>&amp;plusmn;</td>
<td>±</td>
<td></td>
</tr>
<tr>
<td>Simple fractions</td>
<td>&amp;frac12;</td>
<td>½</td>
<td></td>
</tr>
<tr>
<td>Degrees</td>
<td>17&amp;deg;C</td>
<td>17°C</td>
<td></td>
</tr>
</tbody>
</table>

</div>
