import { resolveTripleslashReference } from 'typescript';
import { Point } from './Point';
import { Shape } from './Shape';

export class Triangle extends Shape {
    constructor(A: Point, B: Point, C: Point);
    constructor(A: Point, B: Point, C: Point, color: string, filled: boolean);
    constructor(...args: [Point, Point, Point, string?, boolean?]) {
        const [ A, B, C, color, filled ] = args;

        super([ A, B, C ], color, filled);
    }

    private isEquilateralTriangle(firstSide: number, secondSide: number, thirdSide: number): boolean {
        return firstSide === secondSide && firstSide === thirdSide && secondSide === thirdSide;
    }

    private isIsoscelesTriangle(firstSide: number, secondSide: number, thirdSide: number): boolean {
        return (
            (firstSide === secondSide && firstSide !== thirdSide) ||
            (firstSide === thirdSide && firstSide !== secondSide) ||
            (secondSide === thirdSide && secondSide !== firstSide)
        );
    }

    public toString(): string {
        const [ A, B, C ] = this.points;

        return `Triangle[v1=${A.toString()},v2=${B.toString()},v3=${C.toString()}]`;
    }

    public getType(): string {
        const [ A, B, C ] = this.points;

        const firstSide = A.distance(B);
        const secondSide = A.distance(C);
        const thirdSide = B.distance(C);

        if (this.isEquilateralTriangle(firstSide, secondSide, thirdSide)) {
            return 'equilateral triangle';
        }

        if (this.isIsoscelesTriangle(firstSide, secondSide, thirdSide)) {
            return 'isosceles triangle';
        }

        return 'scalene triangle'
    }
}
