# tech-graph

A force-directed graph of notable tech companies, their products, and services.
This graph shows what is owned by which companies and the relations between them.

View the full graph [here](https://nchah.github.io/tech-graph/).

## Background

This graph started as a side project one weekend.

My initial implementation was in Python with the `matplotlib` and `networkx` libraries.
Although I'm comfortable in Python, the resulting static pngs didn't have the interactiveness that I saw in some nice visualizations on the web. For that, I switched the stack to use JavaScript and the [D3.js](https://d3js.org/) library. 




## Methodology

The scope of this graph needed to fall into a respectable range that balanced a few trade-offs.
On one hand, a graph of all acqusitions and products by each major technology company may be comprehensive, but it'll require a commensurate amount of time and effort to sort through all the data.
On the other hand, only graphing the most "notable" products and services naturally leds to the question of how notability should be determined.

Data on the tech products and services was collected from Wikipedia. 
The Navigation Boxes (NavBoxes) were especially helpful as they served as a rough proxy for what products/services were notable enough to have their own Wikipedia page.
The images used in the graph visualization were collected from various web sources, with many images downloaded from Wikipedia.


## The Graph










