import { Item } from "./Item";

export abstract class Consumable extends Item {
    private consumed: boolean;
    private spoiled: boolean;

    constructor(name: string, value: number, weight: number, spoiled?: boolean) {
        super(name, value, weight);

        this.consumed = false;
        this.spoiled = spoiled || false;
    }

    public use(): string {
        if (this.consumed) {
            return `There is nothing left of the ${this.getName()} to consume.`
        } else {
            return this.eat();
        }
    }

    abstract eat(): string;

    public isConsumed(): boolean {
        return this.consumed;
    }

    public setConsumed(consumed: boolean): void {
        this.consumed = consumed;
    }

    public isSpoiled(): boolean {
        return this.spoiled
    }

    public toString(): string {
        return `${super.toString()}.${this.spoiled ? ' Spoiled.' : ''}`;
    }
}