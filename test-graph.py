#!/usr/bin/env python

import matplotlib.pyplot as plt
import networkx as nx


def main():
    """ """
    G = nx.Graph()

    # Add nodes
    G.add_nodes_from(['MS', 'LinkedIn', 'FB', 'Instagram', 'Xbox', 'Whatsapp'])

    pos = nx.spring_layout(G, dim=2, k=0.3, pos={'MS':(-10,-10), 'FB':(10,10)}, iterations=100, scale=100)
    #pos = nx.circular_layout(G, dim=2, scale=2)
    #pos = nx.random_layout(G)
    #pos = {'MS': (4,5), 'FB': (5,4), 'LinkedIn': (2,3), 'Instagram': (1,2) }

    nx.draw_networkx_nodes(G, pos, nodelist=['MS', 'FB', 'LinkedIn', 'Instagram', 'Xbox','Whatsapp'], node_color='lightblue', node_size=5000)

    # Add edges
    #e = ('MS', 'LinkedIn')
    #f = ('FB', 'Instagram')
    #G.add_edge(*e)
    #G.add_edge(*f)

    nx.draw_networkx_edges(G, pos, edgelist=[('MS', 'LinkedIn'), ('FB', 'Instagram'), ('MS', 'Xbox'), ('FB', 'Whatsapp')], width=3, alpha=0.4, edge_color='r')

    labels = {'MS': 'Microsoft', 'FB': 'Facebook', 'LinkedIn': 'LinkedIn', 'Instagram': 'Instagram', 'Xbox': 'Xbox', 'Whatsapp': 'Whatsapp'}

    nx.draw_networkx_labels(G, pos, labels, font_size=12)
    #plt.axis('off')
    plt.savefig("test.png", transparent=True, dpi=300)
    plt.show() # display


if __name__ == "__main__":
    main()

