---
layout: new_layout
title: Plotly JSON chart schema
subtitle: Plotly JSON chart schema
permalink: /json-chart-schema
imageurl: /static/images/box-plot/box-plot-thumbnail.png
state: active
meta_description: The Plotly JSON chart schema is the complete, human-readable text format that describes all physical attributes of any scientific chart.
popularity: frontpage
actioncall: Full Plotly JSON Schema
actioncall-url: https://plot.ly/plot-schema.json
---

# The Plotly JSON schema
## for interactive scientific charts

The <b>Plotly JSON visualization schema</b> is a declarative format for creating, saving, and sharing interactive scientific charts. It is the complete, human-readable text format that attempts to describe all physical attributes of any scientific chart.

The complete JSON schema is maintained at [https://plot.ly/plot-schema.json](https://plot.ly/plot-schema.json).

Domain specific libraries have been written for efficent use of the JSON visualization schema in several lanuages:

- Python: [https://plot.ly/python/reference/](https://plot.ly/python/reference/)
- R: [https://plot.ly/r/reference/](https://plot.ly/r/reference/)
- MATLAB: [https://plot.ly/matlab/reference/](https://plot.ly/matlab/reference/)
- JavaScript: [https://plot.ly/javascript/reference/](https://plot.ly/javascript/reference/)

## Example chart specifications

We have more community-created examples on [Plotly's feed](https://plot.ly/feed/). Just append ".json" to any Plotly chart URL to get the JSON specification:

- Interactive chart: https://plot.ly/~empet/6640
- JSON specification: https://plot.ly/~empet/6640.json

### Simple bar chart

#### Chart generated

![Simple stacked bar chart](https://plot.ly/~PlotBot/880.png)

#### JSON specification

<pre>
{
    "data": [
        {
            "x": [
                20, 
                14, 
                23
            ], 
            "y": [
                "giraffes", 
                "orangutans", 
                "monkeys"
            ], 
            "marker": {
                "color": "rgba(55, 128, 191, 0.6)", 
                "line": {
                    "color": "rgba(55, 128, 191, 1.0)", 
                    "width": 1
                }
            }, 
            "name": "SF Zoo", 
            "orientation": "h", 
            "type": "bar"
        }, 
        {
            "x": [
                12, 
                18, 
                29
            ], 
            "y": [
                "giraffes", 
                "orangutans", 
                "monkeys"
            ], 
            "marker": {
                "color": "rgba(255, 153, 51, 0.6)", 
                "line": {
                    "color": "rgba(255, 153, 51, 1.0)", 
                    "width": 1
                }
            }, 
            "name": "LA Zoo", 
            "orientation": "h", 
            "type": "bar"
        }
    ], 
    "layout": {
        "barmode": "stack"
    }
}
</pre>

Using this JSON schema, Plotly handles translation between chart and data formats:

- Interactive chart: [https://plot.ly/~PlotBot/880](https://plot.ly/~PlotBot/880)
- JSON specifcation: [https://plot.ly/~PlotBot/880.json](https://plot.ly/~PlotBot/880.json)
- Chart image: [https://plot.ly/~PlotBot/880.png](https://plot.ly/~PlotBot/880.png)
- Python code: [https://plot.ly/~PlotBot/880.png](https://plot.ly/~PlotBot/880.py)
- JavaScript code: [https://plot.ly/~PlotBot/880.png](https://plot.ly/~PlotBot/880.js)
- CSV download: [https://plot.ly/~PlotBot/880.csv](https://plot.ly/~PlotBot/880.csv)
- Excel download: [https://plot.ly/~PlotBot/880.xlsx](https://plot.ly/~PlotBot/880.xlsx)

### Realtime JSON editor

Try editing the JSON specification in this editor.

<p data-height="580" data-theme-id="15263" data-slug-hash="XmxaXY" data-default-tab="result" data-user="plotly" class='codepen'>See the Pen <a href='http://codepen.io/plotly/pen/XmxaXY/'>Json Editor</a> by Plotly (<a href='http://codepen.io/plotly'>@plotly</a>) on <a href='http://codepen.io'>CodePen</a>.</p>
<script async src="//assets.codepen.io/assets/embed/ei.js"></script>
