import { IVertex } from "./interfaces";

export default class Vertex implements IVertex {
    public name: string;
    public distance: number = 0;

    constructor(name: string, distance?: number) {
        this.name = name;
        this.distance = distance;
    }
}