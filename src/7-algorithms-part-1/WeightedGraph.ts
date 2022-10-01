import { IVertex, IEdge } from "./interfaces";

interface IGraph<T> {
    addVertex(vertex: T): void;
    addEdge(vertex1: T, vertex2: T, weight: number): void;
}

class Graph implements IGraph<IVertex> {
    private graph = {};

    addVertex(vertex: IVertex): void {
        this.graph[vertex.name] = {};
    }

    addEdge(vertex1: IVertex, vertex2: IVertex, weight: number): void {
        if (this.graph[vertex1.name] && this.graph[vertex2.name]) {
            this.graph[vertex1.name][vertex2.name] = weight;
            this.graph[vertex2.name][vertex1.name] = weight;
        }
    }

    getGraph() {
        return this.graph;
    }
}

export default Graph;