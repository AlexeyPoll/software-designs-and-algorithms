import Vertex from "../../src/7-algorithms-part-1/Vertex";
import Graph from "../../src/7-algorithms-part-1/WeightedGraph";

export const createFirstGraph = () => {
    const graph = new Graph();

    const vertex1 = new Vertex('VERTEX-1')
    const vertex2 = new Vertex('VERTEX-2')
    const vertex3 = new Vertex('VERTEX-3')

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);

    graph.addEdge(vertex1, vertex2, 1);
    graph.addEdge(vertex1, vertex3, 3);
    graph.addEdge(vertex2, vertex3, 5);

    return graph;
}

export const createSecondGraph = () => {
    const graph = new Graph();

    const vertex1 = new Vertex('VERTEX-1')
    const vertex2 = new Vertex('VERTEX-2')
    const vertex3 = new Vertex('VERTEX-3')
    const vertex4 = new Vertex('VERTEX-4')
    const vertex5 = new Vertex('VERTEX-5')

    graph.addVertex(vertex1);
    graph.addVertex(vertex2);
    graph.addVertex(vertex3);
    graph.addVertex(vertex4);
    graph.addVertex(vertex5);

    graph.addEdge(vertex1, vertex2, 1);
    graph.addEdge(vertex1, vertex3, 2);
    graph.addEdge(vertex2, vertex3, 5);
    graph.addEdge(vertex2, vertex5, 6);
    graph.addEdge(vertex3, vertex5, 1);
    graph.addEdge(vertex3, vertex4, 3);
    graph.addEdge(vertex4, vertex5, 1);

    return graph;
}