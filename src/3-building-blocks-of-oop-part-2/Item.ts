import { Comparable } from './Comparable';

let id = 0;

export abstract class Item implements Comparable<Item> {
    public static numberOfItems: number = 0;

    private id: number;
    private value: number;
    private name: string;
    private weight: number;

    constructor(name: string, value: number, weight: number) {
        this.id = id;
        this.name = name;
        this.value = value;
        this.weight = weight;

        id += 1;
        Item.numberOfItems += 1;
    }

    abstract use(): void;

    public compareTo(other: Item): number {
        if (this.value > other.value) {
            return 1;
        } else if (this.value < other.value) {
            return -1;
        } else {
            for (let i = 0; i < this.name.length - 1; i++) {
                const first = this.name[i].toLocaleLowerCase();
                const second = other.name[i].toLocaleLowerCase();
    
                if (first > second) {
                    return 1;
                } else if (first < second) {
                    return -1
                } else {
                    continue;
                }
            }
    
            return 0;
        }
    }

    public toString(): string {
        return `${this.name} - Value: ${this.value}, Weight: ${this.weight}`;
    }

    public getId(): number {
        return this.id;
    }

    public getValue(): number {
        return this.value;
    }

    public getName(): string {
        return this.name;
    }

    public getWeight(): number {
        return this.weight;
    }

    public setValue(price: number): void {
        this.value = price;
    }

    public setName(name: string): void {
        this.name = name;
    }

    public setWeight(weight: number): void {
        this.weight = weight;
    }

    public static reset(): void {
        id = 0;
    }
}
