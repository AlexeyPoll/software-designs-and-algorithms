export interface IVertex {
    name: string;
    distance?: number;
}

export interface IEdge {
    vertex: IVertex,
    weight: number
}

export interface IGraph {
    [key: string]: IEdge[]
}