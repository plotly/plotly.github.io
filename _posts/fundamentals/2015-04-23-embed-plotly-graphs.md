---
layout: tutorial-single_layout
title: Embed Your Graphs
subtitle: How to embed graphs in a Blog or Website
permalink: /embed-graphs-in-websites/
redirect_from: /how-to-embed-plotly-graphs-in-websites/
imageurl: ../static/images/embed-plotly-graphs/thumbnail.png
state: active
tags: fundamentals
order: 6
meta_description: Learn how to embed interactive Chart Studio graphs in websites, blogs, iframes, Tumblr, and WordPress online using Chart Studio.
popularity: featured
actioncall: Embed a Graph

steps:
 - title: Introduction
   sub-steps:
    - copy: "When you embed a Chart Studio graph, it means you’re sharing your graph, your data and the code that describes your graph all in one place. You can embed any Chart Studio graph. The embedding process is the same whether you're creating graphs from the online [workspace](https://plot.ly/create/) or using one of Chart Studio's APIs (Python/R). With our interactive features, your readers have a whole new way to engage with your work. When you update a Chart Studio graph, the graph automatically updates on your blog or website. No need for manual updates!"
    - copy: "We’re in [Wired Magazine](http://www.wired.com/2014/08/lego-cost), and [The Washington Post](http://www.washingtonpost.com/blogs/wonkblog/wp/2013/06/14/do-low-taxes-on-the-rich-leave-the-middle-class-with-lower-wages/)."
      img: "![Lego](../static/images/embed-plotly-graphs/plotly_on_wired.png)"
    - copy: "You can embed a Chart Studio graph using HTML code or an iframe. These codes are located in Chart Studio's workspace, your [Organize](https://plot.ly/organize/) page, or your Profile page. It's also possible to share someone else's graph. If you’re using wordpress.com, jump to the [end](http://help.plot.ly/embed-graphs-in-websites/#step-10-embed-on-wordpress) of this page."

 - title: From Chart Studio Workspace
   sub-steps:
    - copy: "To share a plot from the [Chart Studio Workspace](https://plot.ly/create/), click 'Share' button on the left-hand side after saving the plot."
      img: "![Workspace share option](../static/images/embed-plotly-graphs/share_button.png)"
    - copy: "The Share modal will pop-up and display a link under the 'Embed' tab. You can then copy and paste this link to your website. You have the option of embedding your plot as an HTML snippet or iframe."
    - copy: "If the plot is saved as 'Public', everyone will be able to view the embedded plot. If the plot is saved as 'Private', only you and your collaborators will be able to see it. If the plot is embedded with a Secret Link, those that have that link will be able to see the plot. Also, when you embed a private plot but don't add any collaborators, only you will be able to view it. For more information on privacy settings and how sharing works, visit [Chart Studio's sharing tutorial](https://help.plot.ly/save-share-and-export-in-plotly/)."

 - title: From Organize Page
   sub-steps:
    - copy: "To share your own graph from your [Organize](https://plot.ly/organize/), hover over your plot and click on the 'Share' icon. This will display the same Share modal as in the workspace where you'll find the embed codes under the 'Embed' tab."
      img: "![Share Organize](../static/images/embed-plotly-graphs/share_organize.png)"

 - title: From Profile Page
   sub-steps:
    - copy: "Next is if you'd like to embed from your Profile page. You can get there by typing this URL:'http://plot.ly/~YOURUSERNAME' into your address bar, or by going to your username on the top right-hand side of Chart Studio's pages and selecting 'Profile' from the dropdown menu. Just like in your Organize, hover over the plot, but this time click on the 'Sharing Link' icon to view the same Share modal."
      img: "![Sharable link](../static/images/embed-plotly-graphs/share_profile.png)"

 - title: Share Another User's Plot
   sub-steps:
    - copy: "If you happen to be in [Chart Studio's Feed](https://plot.ly/) and see a cool graph you want to share, click on the 'Sharing Link' or the 'Embed code' icon at the bottom right-hand side of the plot. This will display the Share modal."
      img: "![Embed button](../static/images/embed-plotly-graphs/share_feed.gif)"
    - copy: "You can also share someone else's graph from their Viewplot page, via their Shareable Link. If you don't happen to have this link, but do see their plot (in Chart Studio's Feed, for example), hover over the plot and click the 'View' button. Notice the sharing options located in the bottom right corner; click on the 'Sharing Link' or the 'Embed code'."
      img: "![Embed button](../static/images/embed-plotly-graphs/view_plot.gif)"

 - title: Embed Grid
   sub-steps:
    - copy: "We've talked a lot about embedding Chart Studio graphs, but did you know that you can also embed your grid? Just like your plots, grids can be embedded in iframes."
    - copy: "You can find the embed code by going to your [Organize](https://plot.ly/organize/) or Profile page and hovering over the saved grid. Grids are saved as 'Private' by default, so it's important that you save your data as 'Public' or 'Private Link'."
    - copy: "Copy the iframe just as you would for the plot and paste it to your website or blog. This is an example of what your grid looks like when it's been embedded."
      img: "![Embed grid](../static/images/embed-plotly-graphs/embed_grid.png)"

 - title: Embed the div
   sub-steps:
    - copy: "Simply copy and paste the HTML snippet into your website or HTML application."
      img: "![Final embedding code](../static/images/embed-plotly-graphs/iframe-HTML.png)"
    - copy: "If you need an iframe, feel free to use the example below. You’ll have to replace the URL of our graph with your own."
      img: "![iframe code 1](../static/images/embed-plotly-graphs/iframe.png)"
    - copy: "If you are using a secret link with a private key, update the private link to include '.embed' before the '?share_key' term. Here's an example:"
      img: "![iframe code 2](../static/images/embed-plotly-graphs/iframe_share_key.png)"
    - copy: "You can also control the width and the height of the iframe by modifying the 'width' and 'height' keywords, the graph will autosize accordingly within the iframe container."

 - title: Customize the iframe
   sub-steps:
    - copy: "You can add these URL query parameters to further customize the iframe."
      img: "<div class='table-grid'><iframe align='middle' width='1020' height='330' marginwidth='35' marginheight='15' frameborder='0' scrolling='no' src='https://plot.ly/~plotly2_demo/482.embed?autosize=true&align=center'></iframe></div>"

 - title: Add the Code to Your Website
   sub-steps:
    - copy: "Copy the HTML snippet or iframe and paste it into your site's source code. For our example, we'll add a graph to our [blog](http://blog.plot.ly/) hosted by [tumblr](http://www.tumblr.com). We're going to add the HTML snippet just the way it is, but sometimes you'll find that the image needs to be resized. We’ve found trial and error is best."
      img: "![How to embed plotly graphs in websites](../static/images/embed-plotly-graphs/embed_graph_to_tumblr.png)"
    - copy: "This is how it appears after it's been posted."
      img: "![Live embedded image](../static/images/embed-plotly-graphs/live_blog.png)"

 - title: Embed on WordPress
   sub-steps:
    - copy: "WordPress doesn’t support our HTML code or iframes, but we’ve come up with an easy solution for you. We developed a [WordPress plugin](https://wordpress.org/plugins/wp-plotly) which makes it easy to embed Chart Studio graphs direct from WordPress's admin."
    - copy: "Don't forget to check out our WordPress blog called [Modern Data](http://moderndata.plot.ly/)!"
---
