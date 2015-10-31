---
layout: two_column_layout
title: Make a 3D Surface Plot with Excel
subtitle: Plotly with Excel
permalink: /excel/3d-surface
imageurl: /static/images/3d-surface-plot-with-excel/thumb-3d-surface-plot-with-excel.png
state: active
tags: excel
meta_description: A tutorial on how to make a 3D Surface Plot. Plotly is the easiest and fastest way to make and share graphs online.
actioncall: Make a 3D Surface Plot
carouselimageurl: /static/images/3d-surface-plot-with-excel/thumb-3d-surface-plot-with-excel.png
---

# Make a 3D Surface Plot with Excel
<div >
    <iframe width="640" height="480" frameborder="1" scrolling="no" src="https://plot.ly/~tarzzz/380.embed"></iframe>
</div>


This step by step tutorial will help you create your own 3D Surface Plots.

**Sections:** Upload, Create, Decorate and Deploy

**Pre-requisite:** Download the <a class="link--impt" href="https://raw.githubusercontent.com/plotly/datasets/master/volcano.csv" target="_blank">
sample data file</a> required for surface plot onto your local system.

### Upload - Your data to Plotly's grid

Head to Plotly's Workspace at <a class="link--impt" href="/plot">https://plot.ly/plot</a> and sign into your free Plotly account.

Click "Add data" button on Workspace Menu bar. Choose the data file to upload. Your Excel file will now open in Plotly's grid. For more about Plotly's grid, see the tutorial: <a class="link--impt" href="/add-data-to-the-plotly-grid/">https://plot.ly/add-data-to-the-plotly-grid/</a>

![Upload data file](/static/images/3d-surface-plot-with-excel/upload-data-file.png)

### Create the 3D Plot

Select “3D Surface Plot” from the `MAKE A PLOT` button on menu bar.

![3D Surface Plots](/static/images/3d-surface-plot-with-excel/3d-surface-plot-from-menu.png)

Now choose the input data shape as "Z Matrix".

![Data Shape Type](/static/images/3d-surface-plot-with-excel/select-data-shape.png)

Set "Select all columns" for z-values, and click the blue plot button in the sidebar to create the Surface Plot.

![Create chart](/static/images/3d-surface-plot-with-excel/plot-surface.png)

### Decorate - The created 3D Surface

Your plot should look something like this.

![Volcano Plot](/static/images/3d-surface-plot-with-excel/raw-plot.png)

Now we will add some style elements to the generated plot.

First, let's give it a name. We can add a title by clicking on the text box just above the plot:

![Volcano Plot](/static/images/3d-surface-plot-with-excel/give-plot-title.png)

Styling options are present on the left side of the plot.

**Change Background color**:

  1. Click on the "Axis" selector on the options menu on the left side of the plot
  2. Click on the "Lines" tab from the pop-up.
  3. Set "Background" to "On"
  4. Select background color from the color pallete.

![Set Background](/static/images/3d-surface-plot-with-excel/set-background.png)

**Stylize Axes**:

Go to "Lines" tab from "Axis" Selector:

  1. Set Grid Lines to "On". Select rgb(255,255,255),i.e. white color from pop-up.
  2. Set Zero Lines to "On". Select rgb(255,255,255),i.e. white color from pop-up.

![Set Axis and Grid Color](/static/images/3d-surface-plot-with-excel/set-axis-color.png)

**Change Color Scale**:

Plotly allows us to set among a wide range of built in colorscales, In addition to custom color-scale feature.

To change the color scale of a plot:

  1. Click on the "Traces" Selector from the style options.
  2. Click on "Style" tab from the pop-up.
  3. Turn Auto Color to "Off", and set one of the color-scales.

![Set Color Scale](/static/images/3d-surface-plot-with-excel/set-colorscale.png)

### Deploy - Your 3D Surface Plot

After Adding the styling, the plot will look something like this:

![Styled Surface Plot](/static/images/3d-surface-plot-with-excel/thumb-3d-surface-plot-with-excel.png)

Now you can share the generated plot with your peers/collaborators (basically, anyone you want to!)

Click on share button on left menu bar:

![Share Button](/static/images/3d-surface-plot-with-excel/share-plot-button.png)

You can share it as a web-link, embed in your website(as an iframe), or share it via popular social networking sites. Cool, huh!
