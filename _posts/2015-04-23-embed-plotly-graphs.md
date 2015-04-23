---
layout: two_column_layout
title: Embed Plotly Graphs in A Blog or Website
subtitle: How to Embed Plotly Graphs
permalink: /embed-plotly-graphs-in-a-blog-or-website/
imageurl: http://i.imgur.com/w6ORNmV.png
state: active
---

When you embed a Plotly graph, it means you’re sharing your graph, your data and the code that describes your graph all in one place. With our interactive features, your readers have a whole new way to engage with your work. When you update a Plotly graph, the graph automatically updates on your blog or website. No need for manual updates!

<table>
<tbody>
<tr>
<td>Plotly’s interactive charts add impact to your blog, webpage, online notebook, IPython notebook and lesson plans: we’re in <a href="http://www.wired.com/2014/08/lego-cost" target="_blank">Wired Magazine</a>, <a href="http://www.washingtonpost.com/blogs/wonkblog/wp/2013/06/14/do-low-taxes-on-the-rich-leave-the-middle-class-with-lower-wages/" target="_blank">The Washington Post</a> , and the <a href="http://sports.nationalpost.com/2014/08/02/how-does-p-k-subbans-new-contract-stack-up-against-other-elite-nhl-defencemen/" target="_blank">National Post.
</a></td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image00.png" data-lightbox="image00">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image00.png" alt="How to embed plotly graphs in websites 00" />
</a></td>
</tr>
</tbody>
</table>

You can embed a Plotly graph with using HTML code or an iFrame. We show you how to paste the HTML code in your website or blog in Step 2 below. Finally, if you’re using wordpress.com, jump to the explanation below. WordPress doesn’t support our HTML code or iFrames, but we’ve come up with an easy solution for you.

###Step 1: Get the HTML snippet

There are two places to locate the embed code in Plotly.  If you want to share someone else’s graph, Option 1, is the easier choice.  If you’re in your workspace, then you’ll want to check out Option 2.

<table>
<tbody>
<tr>
<td>**Option 1: **
&nbsp;
If the graph you’re looking at is displayed in the format seen on the right, then Option 1 is for you.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image03.png" data-lightbox="image03">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image03.png" alt="How to embed plotly graphs in websites 03" />
</a></td>
</tr>
<tr>
<td>Notice the sharing options located in the bottom right corner.  You want to click on the button &lt;/&gt;
.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image09.png" data-lightbox="image09">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image09.png" alt="How to embed plotly graphs in websites 09" />
</a></td>
</tr>
<tr>
<td>**Option 2:**
&nbsp;
In your workspace, you’ll see an option to Share in the top right of your browser window. Click it.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image07.png" data-lightbox="image07">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image07.png" alt="How to embed plotly graphs in websites 07" />
</a></td>
</tr>
<tr>
<td>In the sharing box that opens, click on the Embed &lt;/&gt; button. You’ll need to make sure that the graph is set to “public” in order to generate the HTML code.</td>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image10.png" data-lightbox="image10">
<img class="aligncenter" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image10.png" alt="How to embed plotly graphs in websites 10" />
</a></td>
</tr>
</tbody>
</table>
<table>
<tbody>
<tr>
<td><a href="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image01.png" data-lightbox="image01">
<img class="aligncenter" style="max-width: 2000px !important;" title="" src="https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image01.png" alt="How to embed plotly graphs in websites 01" />
</a></td>
</tr>
</tbody>
</table>

If you need an iFrame, copy and paste the snippet below.  You’ll have to replace the URL of our graph with your own.
&lt;iframe
width=&#8221;640&#8243;
height=&#8221;480&#8243;
frameborder=&#8221;0&#8243;
seamless=&#8221;seamless&#8221;
scrolling=&#8221;no&#8221;
src=&#8221;https://plot.ly/~Dreamshot/411/.embed?width=640&amp;height=480&#8243;
&gt;&lt;/iframe&gt;

### Step 2: Paste the HTML into your site’s code

Paste the HTML code into your site’s source code, and resize as needed.  At Plotly, we use (tumblr)[http://www.tumblr.com] for our blog . Our post on [lines of best fit](/create-a-line-of-best-fit-online/) has several graphs embedded.  Here’s the snippet we used for the first chart in that post.  You might need to resize &#8212; we’ve found trial and error is best.
![How to embed plotly graphs in websites](https://plot.ly/static/learn/images/web_app_tutorials/how-to-embed-plotly-graphs-in-websites/image05.png)

### Wordpress

We developed a [wordpress plugin](https://wordpress.org/plugins/wp-plotly) which makes it easy to embed Plotly graphs direct from WordPress&#8217;s admin. Check it out: [https://wordpress.org/plugins/wp-plotly/](https://wordpress.org/plugins/wp-plotly)
