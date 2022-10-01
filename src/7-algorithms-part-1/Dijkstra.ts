import { IEdge, IGraph, IVertex } from "./interfaces";
import Vertex from "./Vertex";

export interface IPath {
    path: string[];
    distance: number;
}

interface IDijkstra<T> {
    findShortestPath(vertex1: T, vertex2: T): IPath;
    findAllShortestPaths(vertex: T): Record<string, IPath>;
}

class Dijkstra implements IDijkstra<IVertex> {
    private graph: IGraph;

    private activeVertex;
    private visited = {};
    private distances = {};
    private previous = {};

    constructor(graph: IGraph) {
        this.graph = graph
    }

    findNearestVertex(): string {
        let minDistance = Infinity;
        let nearestVertex = null;
        
        Object.keys(this.distances).forEach(vertex => {
            if (!this.visited[vertex] && this.distances[vertex] < minDistance) {
                minDistance = this.distances[vertex];
                nearestVertex = vertex;
            }
        });
        
        return nearestVertex;
    }

    handlePathByVertex(vertex: string): string[] {
        const path = [];
        let current = vertex;

        while(current) {
            path.push(current);
            current = this.previous[current];
        }

        return path.reverse();
    }

    handleVertex(vertex: string): void {
        let activeVertexDistance = this.distances[vertex]; 
        
        let neighbours = this.graph[this.activeVertex];
        
        Object.keys(neighbours).forEach(neighbourVertex => {
            let currentNeighbourDistance = this.distances[neighbourVertex];
            let newNeighbourDistance = activeVertexDistance + neighbours[neighbourVertex];
            
            if (newNeighbourDistance < currentNeighbourDistance) {
                this.distances[neighbourVertex] = newNeighbourDistance;
                this.previous[neighbourVertex] = vertex;
            }
        });
        
        this.visited[vertex] = 1;
    }

    findAllShortestPaths(startVertex: IVertex): Record<string, IPath> {
        let vertices = Object.keys(this.graph);
        
        vertices.forEach(vertex => {
            this.distances[vertex] = Infinity;
            this.previous[vertex] = null;
        });
        
        this.distances[startVertex.name] = 0;
        
        this.activeVertex = this.findNearestVertex();
        
        while(this.activeVertex) {
            this.handleVertex(this.activeVertex);
            this.activeVertex = this.findNearestVertex();
        }

        return vertices.reduce((result, vertex) => ({
            ...result,
            [vertex]: {
                path: this.handlePathByVertex(vertex),
                distance: this.distances[vertex]
            }
        }), {});
    }

    findShortestPath(vertex1: IVertex, vertex2: IVertex): IPath {
        return this.findAllShortestPaths(vertex1)[vertex2.name];
    }
}

export default Dijkstra;