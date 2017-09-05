# A Graph of Tech

A force-directed graph of notable tech companies, their products, and services.

View the full interactive graph [here](https://nchah.github.io/tech-graph/).

## Contents

  * [Contents](#contents)
  * [Introduction](#introduction)
  * [Methodology](#methodology)
  * [Limitations](#limitations)
  * [The Graph](#the-graph)
     * [Interesting Findings](#interesting-findings)
     * [Alphabet](#alphabet)
     * [Amazon](#amazon)
     * [Apple](#apple)
     * [Facebook](#facebook)
     * [IBM](#ibm)
     * [Microsoft](#microsoft)
     * [Yahoo](#yahoo)
  * [Sources](#sources)

## Introduction

This graph started as a side project one weekend in response to some recurring observations I had on the tech landscape.

1. *Acquisitions in tech*: A company *X* was acquired by [TECH_GIANT]. Why did they acquire them? How does this impact the [TECH_GIANT]? What else do they own?
2. *Advances in ML/AI*: Recent advances in Machine Learning and Artificial Intelligence are increasing the spotlight on tech companies and startups.

In constructing this graph, it was striking to see how expansive many of these companies are.
Being able to see the products and services offered by each major tech company in one interactive visual reinforced how my experiences with technology are shaped by these few figures.

This graph can be interpreted by the viewer on different levels.
At a surface level, this is a fun and interactive visualization.
Move the clusters around and rearrange their links.
At another level, this graph may show how the different companies are structured and how this is a reflection of their operations and culture.
In other ways, this graph may lend itself well to arguments for exercising caution in how one consumes the vast technological offerings presented by these companies.
The possible use cases can range from the simple to the complex, and are open to your interpretations.


## Methodology

The scope of this graph needed to fall into a respectable range that balanced a few trade-offs.
On one hand, a graph of all acqusitions and products by each major technology company may be comprehensive, but it would require a commensurate amount of time and effort to sort through all the data.
On the other hand, only graphing the most "notable" products and services naturally leads to the question of how notability should be determined.

Data on the tech products and services was collected from Wikipedia. 
The Navigation Boxes (NavBoxes) were especially helpful as they served as a rough proxy for what products/services were notable enough to have their own Wikipedia page.
The images used in the graph visualization were collected from various web sources, with many of the company and product logos downloaded from Wikipedia.

The first implementation was in Python using the `matplotlib` and `networkx` libraries.
However, the resulting static pngs didn't have the interactiveness that make some nice visualizations all the more impactful. For that, I switched the stack to use JavaScript and the [D3.js](https://d3js.org/) library. 


## Limitations

It's worth pointing out where this graph fall short.

- Temporality is not represented well in the graph. That is, changes in ownership of companies/products over time are not depicted.
- As mentioned already, not all products and services offered by a company are shown here.


## The Graph

### Interesting Findings

- Most tech companies have an AI-assisted assistant in the market. 
- Both Google and Apple have applications named 'Photos'.
- 

### Alphabet


### Amazon


### Apple


### Facebook


### IBM


### Microsoft


### Yahoo



## Sources






