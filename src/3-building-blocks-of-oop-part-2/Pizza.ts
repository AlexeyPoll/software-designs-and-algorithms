import { Consumable } from "./Consumable";

export class Pizza extends Consumable {
    private numberOfSlices: number;
    private slicesEaten: number = 0;

    constructor(numberOfSlices: number, spoiled?: boolean) {
        super('pizza', 50, 12, spoiled);

        this.numberOfSlices = numberOfSlices;
    }

    public eat(): string {
        if (this.slicesEaten < this.numberOfSlices) {
            this.slicesEaten++;

            if (this.slicesEaten >= this.numberOfSlices) {
                this.setConsumed(true);
            }

            return `You eat a slice of pizza.${this.isSpoiled() ? '\nYou feel sick.': ''}`;
        }

        return '';
    }

    public toString(): string {
        const rest = this.numberOfSlices - this.slicesEaten;
        return `${super.toString()}${rest ? ` ${rest} slice${rest === 1 ? '' : 's'} of pizza left` : ` No slices of pizza left`}`
    }
}