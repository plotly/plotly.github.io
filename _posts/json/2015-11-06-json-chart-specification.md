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

1. Fully formatted JSON chart schema for every chart type: [https://api.plot.ly/v2/plot-schema?sha1=%27%27](https://api.plot.ly/v2/plot-schema?sha1=%27%27)
2. Raw JSON (plain text) chart schema for every chart type: [https://api.plot.ly/v2/plot-schema?format=json&sha1=%27%27](https://api.plot.ly/v2/plot-schema?format=json&sha1=%27%27)

Translations of the JSON schema for practical use in several languages are also available:

3. Python: [https://plot.ly/python/reference/](https://plot.ly/python/reference/)
4. R: [https://plot.ly/r/reference/](https://plot.ly/r/reference/)
5. MATLAB: [https://plot.ly/matlab/reference/](https://plot.ly/matlab/reference/)
6. JavaScript: [https://plot.ly/javascript/reference/](https://plot.ly/javascript/reference/)

***

# Demo: Online JSON Editor

Try updating the chart by editing its JSON specification in this [online JSON editor](https://plotly-json-editor.getforge.io/).

***

# A Simple Example

Below is a Plotly bar chart with the JSON specification that describes it.

###### Chart Image

![Basic bar chart](https://plot.ly/~kevintest/1081/.png?height=300)

###### JSON Descripton of Chart

<pre>
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

***

# More Examples

| Chart                                          | JSON description                             |
| ---------------------------------------------- |:--------------------------------------------:|
| [Area Chart](https://plot.ly/~Dreamshot/8248/) | [JSON](https://plot.ly/~Dreamshot/8248.json) |
| [Pie Chart](https://plot.ly/~Dreamshot/8254/)  | [JSON](https://plot.ly/~Dreamshot/8248.json) |
| [Line Chart](https://plot.ly/~Dreamshot/8259/) | [JSON](https://plot.ly/~Dreamshot/8248.json) |

***

# Cross-Language Translation

Using this JSON specification, it is easy to handle translation between different chart and data formats:

| Chart Translations  | Link to Translation                                                     | 
| --------------------|:-----------------------------------------------------------------------:|
| Interactive chart   | [https://plot.ly/~PlotBot/880](https://plot.ly/~PlotBot/880)            |
| JSON specification  | [https://plot.ly/~PlotBot/880.json](https://plot.ly/~PlotBot/880.json)  |
| Chart image         | [https://plot.ly/~PlotBot/880.png](https://plot.ly/~PlotBot/880.png)    |
| Python code         | [https://plot.ly/~PlotBot/880.py](https://plot.ly/~PlotBot/880.py)      |
| JavaScript code     | [https://plot.ly/~PlotBot/880.js](https://plot.ly/~PlotBot/880.js)      |
| CSV download        | [https://plot.ly/~PlotBot/880.csv](https://plot.ly/~PlotBot/880.csv)    | 
| Excel download      | [https://plot.ly/~PlotBot/880.xlsx](https://plot.ly/~PlotBot/880.xlsx)  | 

***

# Online JSON Editor

Try updating the chart by editing the JSON specification in this [online JSON editor](http://plotly-json-editor.getforge.io/).

<iframe src="https://plotly-json-editor.getforge.io/" width="100%" height="800" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>
