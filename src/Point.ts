export class Point {
    private x: number;
    private y: number;

    public constructor();
    public constructor(x: number, y: number);
    public constructor(...args: [number?, number?]) {
        const [ x, y ] = args;

        if (args.length === 0) {
            this.x = 0;
            this.y = 0;
        } 
        
        if (args.length === 2) {
            this.x = x;
            this.y = y;
        }
    }

    private calculateDistanceTo(x: number, y: number): number {
        const distance: number = Math.sqrt(Math.pow(this.x - x, 2) + Math.pow(this.y - y, 2));

        return parseFloat(distance.toFixed(2));
    }

    public toString(): string {
        return `(${this.x}, ${this.y})`;
    }

    public distance(): number;
    public distance(other: Point): number;
    public distance(x: number, y: number): number;
    public distance(...args: any[]): number {
        if (args.length === 0) {
            return this.calculateDistanceTo(0, 0);
        }

        if (args.length === 1) {
            const [ other ] = args;

            return this.calculateDistanceTo(other.x, other.y);
        }

        if (args.length === 2) {
            const other = { x: args[0], y: args[1] };

            return this.calculateDistanceTo(other.x, other.y);
        }
    }
}
