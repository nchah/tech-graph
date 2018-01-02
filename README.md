# A Graph of Tech

A force-directed graph of notable tech companies, their products, and services. View the interactive graph [**here**](https://nchah.github.io/tech-graph/).

*Disclaimer: All information on this page is presented for informational purposes only. There is no affiliation with any of the companies shown here.*

![](repo-images/tech-graph.png)

## Contents

  * [Introduction](#introduction)
  * [This Repo](#this-repo)
  * [Methodology](#methodology)
  * [Limitations](#limitations)
  * [Roadmap](#roadmap)
  * [The Graph](#the-graph)
     * [Alphabet](#alphabet)
     * [Amazon](#amazon)
     * [Apple](#apple)
     * [Facebook](#facebook)
     * [IBM](#ibm)
     * [Microsoft](#microsoft)
     * [Yahoo](#yahoo)


## Introduction

This graph started as a side project one weekend in response to some recurring trends I saw with regards to  acquisitions of tech companies and products.
Upon hearing that a company was acquired by [TECH GIANT], this would often elicit a common set of questions. Why did they acquire them? What's the impact for that company and other competitors? What else do they own?
With the a great deal of attention given to tech companies and startups with the recent advances in machine learning and artificial intelligence, it seemed worthwhile to map out the various entities that fall under each major tech company.

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
On one hand, a graph of all acqusitions and products by each company may be comprehensive, but it would need a commensurate amount of time and effort.
On the other hand, only graphing the most "notable" products leads to the question of how notability should be determined.
This is still a valid concern but it was resolved for now by using Wikipedia as a reference for notability.

Most of the information used to build the graph was collected from Wikipedia.
The Navigation Boxes were especially helpful as they served as a rough proxy for what products/services were notable enough to have their own Wikipedia page.
The company and product logos in the visualization were collected from various web sources, with the majority coming from Wikipedia.

The first implementation was in Python using the `matplotlib` and `networkx` libraries.
However, the resulting static pngs didn't have the interactiveness that make some nice visualizations all the more impactful.
For that, I switched the stack to use JavaScript and the [D3.js](https://d3js.org/) library.
Some of the checkboxes on the page make use of [Material Design Lite](https://github.com/google/material-design-lite) elements.


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


## The Graph

Some brief comments on each of the clusters is provided below.

### Alphabet

<img src="https://github.com/nchah/tech-graph/blob/master/repo-images/cluster-alphabet.png?raw=true" width="75%">

- The graph shows Alphabet/Google after it was restructured in 2015. It's quite apparent that Google has the largest product offerings out of the other subsidiaries.
- Most of the Google products were linked directly to the Google node. There is some branching shown with Android, Chrome, and the Cloud products.
- It was difficult to find additional nodes to link to some of the other Alphabet subsidiaries like Calico and Jigsaw.

### Amazon

<img src="https://github.com/nchah/tech-graph/blob/master/repo-images/cluster-amazon.png?raw=true" width="50%">

- There are separate nodes for Amazon and Amazon.com in an attempt to distinguish between the main Amazon products and other subsidiaries, like Whole Foods.
- With regards to subsidiaries, Amazon have many and they were not all shown here.
- Amazon Web Services (AWS) offers a large range of products. It was an arbitrary decision to just link to a few of those nodes.

### Apple

<img src="https://github.com/nchah/tech-graph/blob/master/repo-images/cluster-apple.png?raw=true" width="50%">

- The Apple graph is structured around the different operating systems that the company maintains. This consistency made it easier to model how Apple software was linked to its various hardware products.
- There's a separate branch for "Apps". Otherwise, linking them directly to the Apple node made the cluster very crowded and unreadable.

### Facebook

<img src="https://github.com/nchah/tech-graph/blob/master/repo-images/cluster-facebook.png?raw=true" width="50%">

- Facebook may seem like a smaller cluster in comparison to the others, but each of its linked nodes is quite significant by itself: Instagram, WhatsApp, React, etc.
- A slight adjustment was made in distinguishing between Facebook, the company, and Facebook.com, the website. This made sense since the Messenger feature/app could be linked along this.

### IBM

<img src="https://github.com/nchah/tech-graph/blob/master/repo-images/cluster-ibm.png?raw=true" width="50%">

- Founded in 1911, IBM is the oldest of the tech companies shown here. Given its long history, it probably has the largest offering of products but only a very small subset of them are graphed in the cluster. This may also reflect how IBM has a stronger presence in the enterprise sphere.


### Microsoft

<img src="https://github.com/nchah/tech-graph/blob/master/repo-images/cluster-microsoft.png?raw=true" width="75%">

- The Microsoft cluster seems most similar to the Apple cluster. Instead of various operating systems, the Windows OS branches off into various applications ranging from desktop, mobile, and gaming.
- Microsoft's Office suite of applications (Word, Excel, Powerpoint) are an industry standard and they're linked under the Office node.

### Yahoo

<img src="https://github.com/nchah/tech-graph/blob/master/repo-images/cluster-yahoo.png?raw=true" width="50%">

- Yahoo was acquired by Verizon, and this relationship is shown through the link with Oath Inc. Oath Inc. ([Wikipedia](https://en.wikipedia.org/wiki/Oath_Inc.)) is also the parent company for Yahoo, AOL (another early Internet giant), and other tech entities.
- The rest of Verizon's products and services are not shown in the cluster.



