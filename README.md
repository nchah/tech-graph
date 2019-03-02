# A Graph of Tech

A force-directed graph of notable tech companies, their products, and services. View the interactive graph [**here**](https://nchah.github.io/tech-graph/).

*Disclaimer: All information on this page is presented for informational purposes only. There is no affiliation with any of the companies shown here.*

This work has been accepted as a Late Breaking Work paper to the [ACM CHI Conference on Human Factors in Computing Systems](http://chi2019.acm.org/) (CHI 2019).


![](repo-images/tech-graph.png)

## Contents

  * [Introduction](#introduction)
  * [This Repo](#this-repo)
  * [Methodology](#methodology)
  * [Limitations](#limitations)
  * [Roadmap](#roadmap)



## Introduction

This graph started as a side project one weekend in response to some recurring trends I saw.
Upon hearing that a company was acquired by [TECH GIANT], this would often elicit a common set of questions. Why did they acquire them? What's the impact for that company and other competitors? What else do they own?
With the a great deal of attention on tech companies with recent advances in machine learning and artificial intelligence, it seemed worthwhile to map out the various entities under each major tech company.

This graph can be interpreted on different levels.
At a surface level, this is a fun and interactive visualization.
Move the clusters around and rearrange their links, observing what links to what.
At another level, this graph may show how the different companies are structured and how this is a reflection of their operations and culture.
In other ways, this graph may lend itself well to arguments for exercising caution in how one consumes the vast technological offerings presented by these companies.
The possible use cases can range from the simple to the complex, and are open to interpretation.

## This Repo

An outline of the contents in this repo.

```
$ tree
.
├── CHANGELOG.MD
├── LICENSE
├── README.md
├── repo-images
│   └── ...
└── vanilla-js
    ├── css
    │   └── styles.css
    ├── images
    │   └── ...
    ├── index-standalone.html
    ├── index.html
    └── js
        └── tech-graph.js
```

## Methodology

The scope of this graph had to fall into a respectable range that balanced a few trade-offs.
On one hand, a graph of all acqusitions and products by each company may be comprehensive, but it would need a commensurate amount of time and effort. There would also be some difficulties in creating a visualization that could meaningfully represent the hundreds of acquisitions by the tech giants.
On the other hand, only graphing the most "notable" products leads to the question of how notability should be determined.
This is still a valid concern but it was resolved for now by using Wikipedia as a reference for notability.

Most of the information used to build the graph was collected from Wikipedia.
The Navigation Boxes were especially helpful as they served as a rough proxy for what products/services were notable enough to have their own Wikipedia page.
The company and product logos in the visualization were collected from various web sources, with the majority coming from Wikipedia.

The first implementation was in Python using the `matplotlib` and `networkx` libraries.
However, the resulting static pngs didn't have the interactiveness that make some nice visualizations all the more impactful.
For that, I switched the stack to use JavaScript and the [D3.js](https://d3js.org/) library.


## Limitations

It's worth pointing out where this graph falls short.

- Currently, only American tech companies are represented in the graph. In future updates, other notable entities will also be added.
- Temporality is not represented in the graph. That is, changes in ownership of companies/products over time are not depicted here.
- As mentioned already, the graph does not show all products and services offered by a company.
- (Unintentional) bias will be present in the graph. How and why certain nodes are linked as they are is certainly open to discussion. This is similar to the ontological questions in how knowledge is represented in knowledge graphs.

## Roadmap

There will be occasional updates to reflect real world changes in the tech companies. 
Pull requests are also welcome.
Please also feel free to fork this repository if you plan to build alternative versions of this graph. 




