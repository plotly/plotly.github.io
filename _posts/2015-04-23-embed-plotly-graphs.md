---
layout: two_column_layout
title: Embed Plotly Graphs in A Blog or Website
subtitle: How to Embed Plotly Graphs
permalink: /embed-graphs-in-websites
imageurl: /static/images/embed-plotly-graphs/thum-embed-plotly-graphs.png
state: active
tags: basic
meta_description: A tutorial on how to embed interactive Plotly graphs in websites, blogs, iframes, Tumblr, and Wordpress. Plotly is the easiest way to graph and share your data.
popularity: frontpage
---

#Embed Plotly Graphs in A Blog or Website

When you embed a Plotly graph, it means you’re sharing your graph, your data and the code that describes your graph all in one place. With our interactive features, your readers have a whole new way to engage with your work. When you update a Plotly graph, the graph automatically updates on your blog or website. No need for manual updates!

Plotly’s interactive charts add impact to your blog, webpage, online notebook, IPython notebook and lesson plans: we’re in [Wired Magazine](http://www.wired.com/2014/08/lego-cost), [The Washington Post](http://www.washingtonpost.com/blogs/wonkblog/wp/2013/06/14/do-low-taxes-on-the-rich-leave-the-middle-class-with-lower-wages/) , and the [National Post](http://sports.nationalpost.com/2014/08/02/how-does-p-k-subbans-new-contract-stack-up-against-other-elite-nhl-defencemen). | ![How to embed plotly graphs in websites](/static/images/embed-plotly-graphs/image00.png)

You can embed a Plotly graph with using HTML code or an iFrame. We show you how to paste the HTML code in your website or blog in Step 2 below. Finally, if you’re using wordpress.com, jump to the explanation below. WordPress doesn’t support our HTML code or iFrames, but we’ve come up with an easy solution for you.

###Step 1: Get the HTML snippet

There are two places to locate the embed code in Plotly.  If you want to share someone else’s graph, Option 1, is the easier choice.  If you’re in your workspace, then you’ll want to check out Option 2.


**Option 1:**

If the graph you’re looking at is displayed in the format seen on the right, then Option 1 is for you. | ![How to embed Plotly graphs in websites](/static/images/embed-plotly-graphs/image03.png)
Notice the sharing options located in the bottom right corner.  You want to click on the button &lt;/&gt; . | ![How to embed Plotly graphs in websites](/static/images/embed-plotly-graphs/image09.png)

**Option 2:**

In your workspace, you’ll see an option to Share in the top right of your browser window. Click it. | ![How to embed Plotly graphs in websites](/static/images/embed-plotly-graphs/image07.png)
In the sharing box that opens, click on the Embed &lt;/&gt; button. You’ll need to make sure that the graph is set to “public” in order to generate the HTML code. | ![How to embed Plotly graphs in websites](/static/images/embed-plotly-graphs/image10.png)


![How to embed plotly graphs in websites](/static/images/embed-plotly-graphs/image01.png)


If you need an iFrame, copy and paste the snippet below.  You’ll have to replace the URL of our graph with your own.
<pre><code>&lt;iframe
width=&#8221;640&#8243;
height=&#8221;480&#8243;
frameborder=&#8221;0&#8243;
seamless=&#8221;seamless&#8221;
scrolling=&#8221;no&#8221;
src=&#8221;https://plot.ly/~Dreamshot/411/.embed?width=640&amp;height=480&#8243;
&gt;&lt;/iframe&gt;</code></pre>

### Step 2: Paste the HTML into your site’s code

Paste the HTML code into your site’s source code, and resize as needed.  At Plotly, we use (tumblr)[http://www.tumblr.com] for our blog . Our post on [lines of best fit](/create-a-line-of-best-fit-online/) has several graphs embedded.  Here’s the snippet we used for the first chart in that post.  You might need to resize &#8212; we’ve found trial and error is best.
![How to embed plotly graphs in websites](/static/images/embed-plotly-graphs/image05.png)

### Wordpress

We developed a [wordpress plugin](https://wordpress.org/plugins/wp-plotly) which makes it easy to embed Plotly graphs direct from WordPress&#8217;s admin. Check it out: [https://wordpress.org/plugins/wp-plotly/](https://wordpress.org/plugins/wp-plotly)
