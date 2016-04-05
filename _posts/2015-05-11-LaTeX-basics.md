---
layout: single
title: LaTeX Basics with Plotly
subtitle: A Step by Step Guide to LaTeX Basics with Plotly
permalink: /LaTeX-basics/
imageurl: /static/images/LaTeX-basics/thum-LaTeX-basics.png
state: active
tags: textandlinks
meta_description: How to add scientific equations and mathematical symbols to your graph with LaTeX. Plotly is the easiest way to make and share graphs, online and for free.
actioncall: make a chart
---

# LaTeX Basics with Plotly

<div>
    <a href="https://plot.ly/~MattSundquist/2135/" target="_blank" title="&lt;br&gt;Bessel Functions of the First Kind for v = 0,1,2,3,4" style="display: block; text-align: center;"><img src="https://plot.ly/~MattSundquist/2135.png" alt="&lt;br&gt;Bessel Functions of the First Kind for v = 0,1,2,3,4" style="max-width: 100%;width: 600px;"  width="600" onerror="this.onerror=null;this.src='https://plot.ly/404.png';" /></a>
    <script data-plotly="MattSundquist:2135" src="https://plot.ly/embed.js" async></script>
</div>


LaTeX is a typesetting system used by mathematicians, physicists, computer scientists, economists, and others. If you want to include mathematical symbols, superscripts, subscripts, or equations in your Plotly graph, LaTeX is a great choice. In this tutorial we’ll show you the basics of integrating these features with Plotly using our Web App.

### Step 1: Don’t forget the dollar signs

To tell Plotly that you want to use LaTeX, you’ll need to put a dollar sign on both sides of the text you enter. For example, to get that fancy looking $\LaTeX$ logo, you have to write \$ \LaTeX \$. We’ll show you many more examples below.

 <table>
  <tbody>
   <tr>
    <td>
     <p >
      For this tutorial, go to:
      <a class="link--impt" href="https://plot.ly/~mariahh/104" target="_blank">
       https://plot.ly/~mariahh/104
      </a>
      . This is a version of the Bessel function graph you see above, with the $x$ and $y$ labels deleted. We’ll cover enough $\LaTeX$ to reproduce the annotations.
     </p>
     <p >
     </p>
     <p >
      Click on
      **Fork &amp; edit**
      to open this graph in your workspace.
     </p>
     <p >
     </p>
     <p >
     </p>
    </td>
    <td>
       <img alt="Latex basics 02" src="/static/images/LaTeX-basics/fork-and-edit-to-open-graph.png" title=""/>
    </td>
   </tr>
   <tr>
    <td>
     <p >
      We’ll start with the $y$ axis label $J_\nu(X)$. Move your mouse to where the $y$ axis label should go, and you’ll see
      Click to enter y axis title
      appear.
     </p>
     <p >
     </p>
     <p >
      In the box, we write \$ J_\nu(X) \$. Press the enter key, and voilà, $J_\nu(X)$ appears.
     </p>
     <p >
     </p>
     <p >
      The dollar sign tells Plotly to use LaTeX and the “_” symbol tells LaTeX that we want the $\nu$ to appear as a subscript.
     </p>
    </td>
    <td>
       <img alt="Latex basics 01" src="/static/images/LaTeX-basics/editing-basel-functions-plot.png" title=""/>
    </td>
   </tr>
  </tbody>
 </table>

### Step 2: The essentials

Here we’ll highlight some important LaTeX commands allowing you to use Greek letters, superscripts, subscripts, and fractions. If you’re looking for the code for a symbol that isn’t included below, we love [Detexify](http://detexify.kirelabs.org/classify.html), where you can draw the symbol you are looking for and a list of possibilities is generated.


<img class="img-responsive-table" src="/static/images/LaTeX-basics/latex-commands-table.png"  />

<div class="responsive-table">
 <table >
  <tbody>
   <tr>
    <td>
      Type
    </td>
    <td>
      Code
    </td>
    <td>
      What you’ll see
    </td>
    <td>
      Hints
    </td>
   </tr>
   <tr>
    <td>
      Greek letters
    </td>
    <td>
      \$ \gamma \$
    </td>
    <td>
      $\gamma$
    </td>
    <td>
      $\LaTeX$ is pretty intuitive. You can often guess the code for other symbols.
    </td>
   </tr>
   <tr>
    <td>
    </td>
    <td>
      \$ \Gamma \$
    </td>
    <td>
      $\Gamma$
    </td>
    <td>
    </td>
   </tr>
   <tr>
    <td>
      Superscripts
    </td>
    <td>
      \$ x^{2y + 4} \$
    </td>
    <td>
      $x^{2y+4}$
    </td>
    <td>
      Make sure to use “{ }” to enclose what you want in the superscript.
    </td>
   </tr>
   <tr>
    <td>
      Subscripts
    </td>
    <td>
      \$ \alpha_{0} \$
    </td>
    <td>
      $\alpha_0$
    </td>
    <td>
      If you’re only putting one character in a superscript or subscript, you can skip the “{ }”.
    </td>
   </tr>
   <tr>
    <td>
    </td>
    <td>
      \$ \beta_{2}^{4} \$
    </td>
    <td>
      $\beta_2^4$
    </td>
    <td>
      You can easily combine superscripts and subscripts.
    </td>
   </tr>
   <tr>
    <td>
      Fractions
    </td>
    <td>
      \$ \frac{2x + 3}{y + 6} \$
    </td>
    <td>
      $\frac{2x+3}{y+6}$
    </td>
    <td>
      Fractions always take the form “\frac{ }{ }”. Put the numerator in the first pair of curly brackets and the denominator in the second pair.
    </td>
   </tr>
   <tr>
    <td>
      Text boxes
    </td>
    <td>
      \$\text{Eq: } y = 3x + 2\$
    </td>
    <td>
      $\text{Eq: } y=3x+2$
    </td>
    <td>
      To include text and math in the same field, you’ll need to use a text box.
    </td>
   </tr>
   <tr>
    <td>
      Line breaks
    </td>
    <td>
      \$ f(x) = 2x + 1 \\ g(x) = x^{2} - 1 \$
    </td>
    <td>
      $f(x)=2x+1 \\ g(x)=x^{2}-1$
    </td>
    <td>
      You can use a “\\”, followed by a space, to force a line break.
    </td>
   </tr>
  </tbody>
 </table>
 </div>

### Step 3: Putting it all together

Now we’re ready to fill in the $x$ axis label using some of the code featured above.

<table>
<tbody>
<tr>
<td>
 <p>
  Move your mouse to where the $x$ axis label should go, and you’ll see
  Click to enter x axis title
  appear.
 </p>
</td>
<td>
	<img alt="Latex basics 03" src="/static/images/LaTeX-basics/click-to-enter-x-axis-title.png" title=""/>
</td>
</tr>
<tr>
<td>
 <p>
  The code we need is :
 </p>
 <p>
  \$
  x^2 \frac{d^2 y}{dx^2} + x \frac{
  d
  y}{dx} + (x^2 - \nu^2)y = 0
  \$
 </p>
</td>
<td>
<img alt="Latex basics 00" src="/static/images/LaTeX-basics/finished-latex-plot.png" title=""/>
</td>
</tr>
</tbody>
</table>
