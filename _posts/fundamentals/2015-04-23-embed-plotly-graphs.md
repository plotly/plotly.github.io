---
layout: tutorial-single_layout
title:  How to Embed Graphs in a Blog or Website
subtitle: Embed graphs created with Plotly
permalink: /embed-graphs-in-websites/
imageurl: ../static/images/embed-plotly-graphs/embed thumb.png
state: active
tags: fundamentals
order: 6
meta_description: Learn how to embed interactive Plotly graphs in websites, blogs, iframes, Tumblr, and WordPress online using Chart Studio.
popularity: featured
actioncall: Embed a Graph

steps:
 - title: Embed Plotly Graphs in a Blog or Website
   sub-steps:
    - copy: "When you embed a Plotly graph, it means you’re sharing your graph, your data and the code that describes your graph all in one place. You can embed any Plotly graph. The embedding process is the same whether you're creating graphs from the online [workspace](https://plot.ly/create) or using one of Plotly's APIs. With our interactive features, your readers have a whole new way to engage with your work. When you update a Plotly graph, the graph automatically updates on your blog or website. No need for manual updates!"
    - copy: "We’re in [Wired Magazine](http://www.wired.com/2014/08/lego-cost), [The Washington Post](http://www.washingtonpost.com/blogs/wonkblog/wp/2013/06/14/do-low-taxes-on-the-rich-leave-the-middle-class-with-lower-wages/), and the [National Post](http://sports.nationalpost.com/2014/08/02/how-does-p-k-subbans-new-contract-stack-up-against-other-elite-nhl-defencemen)."
      img: "![Lego](../static/images/embed-plotly-graphs/plotly on wired.png)"
    - copy: "You can embed a Plotly graph using HTML code or an iframe. These codes are located in Chart Studio, your list of files, also called your ['Organize'](https://plot.ly/organize/), and your Profile page. It's also possible to share someone else’s graph, so keep reading to find out more. If you’re using wordpress.com, jump to the [end](http://help.plot.ly/embed-graphs-in-websites/#step-10-embed-on-wordpress) of this page."

 - title: From Your Workspace
   sub-steps:
    - copy: "To share a plot from your own workspace, go to SHARE on the left-hand side."
      img: "![Workspace share option](../static/images/how-to-save-export-and-share/new share main.png)"
    - copy: "The Share popup will display a link that you can add to a website and you have the option of embedding your plot as an HTML snippet or iframe. You can embed a public plot and everyone will be able to view it. Embedding a private plot means you and your collaborators will be able to see it. If you embed with a secret link, those that have that link will be able to see the plot. When you embed a private plot but don't add any collaborators, only you will be able to view it."
      img: "![Sharing options](../static/images/how-to-save-export-and-share/new embed.gif)"

 - title: From Your Organize
   sub-steps:
    - copy: "To share your own graph from your [Organize](https://plot.ly/organize/), hover over your plot and click on the arrow icon. This will display the same Share popup as in the workspace where you'll find the embed codes."
      img: "![Share from the Organize](../static/images/embed-plotly-graphs/share from organize.png)"

 - title: From Your Profile
   sub-steps:
    - copy: "Next is if you'd like to embed from your Profile page. You can get there by typing this URL:'http://plot.ly/~YOURUSERNAME' into your address bar, or by going to your username on the top right-hand side of Plotly's pages and selecting 'Profile' from the dropdown menu. Just like in your Organize, hover over the plot, but this time click on the Share icon to view the same Share popup."
      img: "![Sharable link](../static/images/embed-plotly-graphs/share from profile.png)"

 - title: Share Another User's Plot
   sub-steps:
    - copy: "If you happen to be in [Plotly's Feed](https://plot.ly/) and see a cool graph you want to share, click on the 'Sharing Link' at the bottom right-hand side of the plot."
      img: "![Embed button](../static/images/embed-plotly-graphs/share from feed.png)"
    - copy: "You can also share someone else's graph from their Viewplot, via their Shareable Link. If you don't happen to have this link, but do see their plot (in Plotly's Feed, for example), hover over the plot and click VIEW. Notice the sharing options located in the bottom right corner; click on the '</>' button."
      img: "![Embed button](../static/images/embed-plotly-graphs/embed button.png)"

 - title: Embed Grid
   sub-steps:
    - copy: "We've talked a lot about embedding Plotly graphs, but did you know that you can also embed your grid? Just like your plots, grids can be embedded in iframes."
    - copy: "You can find the embed code by going to your [Organize](https://plot.ly/organize/) or Profile page and hovering over the saved grid. Grids are saved as 'Private' by default, so it's important that you save your data as 'Public' or 'Private Link'."
    - copy: "Copy the iframe just as you would for the plot and paste it to your website or blog. This is an example of what your grid looks like when it's been embedded."
      img: "![Embed grid](../static/images/embed-plotly-graphs/embed grid.png)"

 - title: Embed the div
   sub-steps:
    - copy: "Simply copy and paste the HTML snippet into your website or HTML application."
      img: "![Final embedding code](../static/images/embed-plotly-graphs/embed div.png)"
    - copy: "If you need an iframe, feel free to use the example below. You’ll have to replace the URL of our graph with your own."
      img: "![iframe code 1](../static/images/embed-plotly-graphs/iframe 1.png)"
    - copy: "If you are using a secret link with a private key, update the private link to include '.embed' before the '?share_key' term. Here's an example:"
      img: "![iframe code 2](../static/images/embed-plotly-graphs/iframe 2.png)"
    - copy: "You can control the width and the height of the iframe by adding 'width' and 'height' keywords into the HTML."
      img: "![iframe code 3](../static/images/embed-plotly-graphs/iframe 3.png)"
    - copy: "The graph will autosize in the iframe container."

 - title: Customize the iframe
   sub-steps:
    - copy: "You can add these URL query parameters to further customize the iframe."
      img: "![Options](../static/images/embed-plotly-graphs/Options.png)"

 - title: Add the Code to Your Website
   sub-steps:
    - copy: "Copy the HTML snippet or iframe and paste it into your site's source code. For our example, we'll add a graph to our [Plotly blog](http://blog.plot.ly/) hosted by [tumblr](http://www.tumblr.com). We're going to add the HTML snippet just the way it is, but sometimes you'll find that the image needs to be resized. We’ve found trial and error is best."
      img: "![How to embed plotly graphs in websites](../static/images/embed-plotly-graphs/embed graph to tumblr.png)"
    - copy: "This is how it appears after it's been posted."
      img: "![Live embedded image](../static/images/embed-plotly-graphs/live blog.png)"

 - title: Embed on WordPress
   sub-steps:
    - copy: "WordPress doesn’t support our HTML code or iframes, but we’ve come up with an easy solution for you. We developed a [WordPress plugin](https://wordpress.org/plugins/wp-plotly) which makes it easy to embed Plotly graphs direct from WordPress's admin."
    - copy: "Don't forget to check out our WordPress blog called [Modern Data](http://moderndata.plot.ly/)!"
---
