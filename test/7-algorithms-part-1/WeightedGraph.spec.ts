import Dijkstra, { IPath } from "../../src/7-algorithms-part-1/Dijkstra";
import Vertex from "../../src/7-algorithms-part-1/Vertex";
import Graph from "../../src/7-algorithms-part-1/WeightedGraph";
import { createFirstGraph, createSecondGraph } from "./helpers";
import test1Expected from './test-1-expected';
import test2Expected from './test-2-expected';

function createGraph(vertexes) {
    const graph = new Graph();

    vertexes.forEach(vertex => {
        
    });
}


describe('WeightedGraph', () => {
    it('should create weighted graph with provided vertexes', () => {
        const graph = createFirstGraph();

        expect(graph.getGraph()).toEqual(test1Expected);
    });

    it('should create more comlex graph and find shotest path', () => {
        const graph = createSecondGraph()

        const vertex1 = new Vertex('VERTEX-1')
        const vertex5 = new Vertex('VERTEX-5')

        const dijkstra = new Dijkstra(graph.getGraph());

        expect(graph.getGraph()).toEqual(test2Expected);

        const path: IPath = dijkstra.findShortestPath(vertex1, vertex5);

        expect(path).toEqual({
            path: ['VERTEX-1', 'VERTEX-3', 'VERTEX-5'],
            distance: 3
        });
    });

    it('should find all shotest paths', () => {
        const graph = createSecondGraph()

        const dijkstra = new Dijkstra(graph.getGraph());

        const vertex = new Vertex('VERTEX-4')

        const path: Record<string, IPath> = dijkstra.findAllShortestPaths(vertex);

        expect(path).toEqual({
            'VERTEX-1': {
              path: [ 'VERTEX-4', 'VERTEX-5', 'VERTEX-3', 'VERTEX-1' ],
              distance: 4
            },
            'VERTEX-2': {
              path: [ 'VERTEX-4', 'VERTEX-5', 'VERTEX-3', 'VERTEX-1', 'VERTEX-2' ],
              distance: 5
            },
            'VERTEX-3': { path: [ 'VERTEX-4', 'VERTEX-5', 'VERTEX-3' ], distance: 2 },
            'VERTEX-4': { path: [ 'VERTEX-4' ], distance: 0 },
            'VERTEX-5': { path: [ 'VERTEX-4', 'VERTEX-5' ], distance: 1 }
          });
    });
})