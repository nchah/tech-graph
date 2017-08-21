#!/usr/bin/env python

import matplotlib.pyplot as plt
import networkx as nx


def main():
    """ """
    G = nx.Graph()

    # Add nodes
    G.add_nodes_from(['MS', 'LinkedIn', 'FB', 'Instagram', 'Xbox', 'Whatsapp', 'Google', 'Android', 'Drive', 'Amazon'])

    pos1 = {'MS':(-800,800), 'FB':(800,800), 'Google':(800,-800)}

    pos = nx.spring_layout(G, dim=2, k=None, pos=pos1, fixed=['MS','FB','Google'], iterations=500)
    #pos = nx.spring_layout(G, dim=2, k=0.001, iterations=5000)
    #pos = nx.circular_layout(G, dim=2, scale=2)
    #pos = nx.random_layout(G)
    #pos = {'MS': (40,50), 'FB': (50,40), 'LinkedIn': (20,30), 'Instagram': (10,20) }
    for a in pos:
        if a not in pos1:
            pos[a][0] = pos[a][0]/50.0
            pos[a][1] = pos[a][1]/50.0
    print pos
    l = [pos[i][0] for i in pos]
    l = [pos[i][1] for i in pos]
    print l
    dmin = min([n for n in l if n != 0.0]) * 1.5
    dmax = max(l) * 1.5

    nx.draw_networkx_nodes(G, pos, nodelist=['MS', 'FB', 'LinkedIn', 'Instagram', 'Xbox','Whatsapp', 'Google', 'Android', 'Drive', 'Amazon'], node_color='lightblue', node_size=300)

    # Add edges
    nx.draw_networkx_edges(G, pos, edgelist=[('MS', 'LinkedIn'), ('FB', 'Instagram'), ('MS', 'Xbox'), ('FB', 'Whatsapp'), ('Google', 'Android'), ('Google', 'Drive')], width=3, alpha=0.4, edge_color='r')

    labels = {'MS': 'Microsoft', 'FB': 'Facebook', 'LinkedIn': 'LinkedIn', 'Instagram': 'Instagram', 'Xbox': 'Xbox', 'Whatsapp': 'Whatsapp', 'Google': 'Google', 'Android':'Android', 'Drive':'Drive', 'Amazon':'Amazon'}

    nx.draw_networkx_labels(G, pos, labels, font_size=10)

    plt.xlim((dmin, dmax))
    plt.ylim((dmin, dmax))
    #plt.xlim((-1000, 1000))
    #plt.ylim((-1000, 1000))
    #plt.axis('off')
    #plt.figure(1, figsize=(20,20))
    plt.savefig("test.png", transparent=True, dpi=300)
    plt.show() # display


if __name__ == "__main__":
    main()

