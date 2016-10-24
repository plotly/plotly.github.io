---
layout: single
title: Plotly JSON chart schema
subtitle: Plotly JSON chart schema
permalink: /json-chart-schema/
imageurl: /static/images/box-plot/box-plot-thumbnail.png
state: active
meta_description: The Plotly JSON chart schema is the complete, human-readable text format that describes all physical attributes of any scientific chart.
popularity: frontpage
---

# Background

The Plotly JSON visualization schema is a complete declarative format for creating, saving, and sharing interactive, scientific charts. The advantage of saving charts as JSON is portability - charts can be shared across any language or platform that understands the schema. 

The complete JSON schema is maintained as part of Plotly's [V2 REST API](https://api.plot.ly/v2/):

- [Formatted version](https://api.plot.ly/v2/plot-schema?sha1=%27%27)
- [Raw JSON](https://api.plot.ly/v2/plot-schema?format=json&sha1=%27%27)

Translations of the JSON schema for practical use in several languages are also available:

- [Python](https://plot.ly/python/reference/)
- [R](https://plot.ly/r/reference/)
- [MATLAB](https://plot.ly/matlab/reference/)
- [JavaScript](https://plot.ly/javascript/reference/)

# Simple Example

Below is a Plotly bar chart with the JSON specification that describes it.

###### Chart Image

!["Basic bar chart"](https://plot.ly/~kevintest/1081/.png =400x)

###### JSON Descripton of Chart

<pre style="font-size: 11px; line-height: 12px; padding: 20px;">
{
    "data": [
        {
            "x": [
                "giraffes", 
                "orangutans", 
                "monkeys"
            ], 
            "y": [
                20, 
                14, 
                23
            ], 
            "type": "bar"
        }
    ]
}
</pre>

# More Examples

| Chart                                          | JSON description                             |
| ---------------------------------------------- |:--------------------------------------------:|
| [Area Chart](https://plot.ly/~Dreamshot/8248/) | [JSON](https://plot.ly/~Dreamshot/8248.json) |
| [Pie Chart](https://plot.ly/~Dreamshot/8254/)  | [JSON](https://plot.ly/~Dreamshot/8248.json) |
| [Line Chart](https://plot.ly/~Dreamshot/8259/) | [JSON](https://plot.ly/~Dreamshot/8248.json) |

# Cross-Language Translation

Using this JSON specification, it is easy to handle translation between different chart and data formats:

- Interactive chart: [https://plot.ly/~PlotBot/880](https://plot.ly/~PlotBot/880)
- JSON specifcation: [https://plot.ly/~PlotBot/880.json](https://plot.ly/~PlotBot/880.json)
- Chart image: [https://plot.ly/~PlotBot/880.png](https://plot.ly/~PlotBot/880.png)
- Python code: [https://plot.ly/~PlotBot/880.py](https://plot.ly/~PlotBot/880.py)
- JavaScript code: [https://plot.ly/~PlotBot/880.js](https://plot.ly/~PlotBot/880.js)
- CSV download: [https://plot.ly/~PlotBot/880.csv](https://plot.ly/~PlotBot/880.csv)
- Excel download: [https://plot.ly/~PlotBot/880.xlsx](https://plot.ly/~PlotBot/880.xlsx)

# JSON Editor

Try updating the chart by editing the JSON specification in this editor.

<p data-height="580" data-theme-id="15263" data-slug-hash="XmxaXY" data-default-tab="result" data-user="plotly" class='codepen'>See the Pen <a href='http://codepen.io/plotly/pen/XmxaXY/'>Json Editor</a> by Plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
