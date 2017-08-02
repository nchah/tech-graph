#!/usr/bin/env python

import matplotlib.pyplot as plt
import networkx as nx


def main():
    """ """
    G = nx.Graph()

    # Add nodes
    #G.add_nodes_from(['MS'], label='MS')
    #G.add_nodes_from(['LinkedIn'], label='LinkedIn')
    #G.add_nodes_from(['FB'], label='FB')
    #G.add_nodes_from(['Instagram'], label='Instagram')

    #pos = nx.spring_layout(G)
    pos = {'MS': (4,5), 'FB': (5,4), 'LinkedIn': (2,3), 'Instagram': (1,2) }

    nx.draw_networkx_nodes(G, pos, nodelist=['MS', 'FB', 'LinkedIn', 'Instagram'], node_color='r', node_size=2000, alpha=0.8)

    # Add edges
    #e = ('MS', 'LinkedIn')
    #f = ('FB', 'Instagram')
    #G.add_edge(*e)
    #G.add_edge(*f)

    nx.draw_networkx_edges(G, pos, edgelist=[('MS', 'LinkedIn'), ('FB', 'Instagram')], width=3, alpha=0.4, edge_color='r')

    labels = {'MS': 'Microsoft', 'FB': 'Facebook', 'LinkedIn': 'LinkedIn', 'Instagram': 'Instagram'}

    nx.draw_networkx_labels(G, pos, labels, font_size=12)
    #plt.savefig("simple_path.png") # save as png
    plt.axis('off')
    plt.show() # display


if __name__ == "__main__":
    main()

