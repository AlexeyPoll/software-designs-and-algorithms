import { Item } from "./Item";
import { ItemComparator } from "./ItemComparator";

export class Inventory {
    private _items: Item[];

    constructor() {
        this._items = [];
    }

    public addItem(item: Item): void {
        this._items.push(item);
    }

    public sort(comparator?: ItemComparator): void {
        this._items.sort((first, second) => comparator
            ? comparator.compare(first, second)
            : first.compareTo(second)
        );
    }

    public toString(): string {
        if (this._items.length === 0) {
            return "There are no items in the inventory!";
        }

        return `Inventory:\n ${this._items.map(item => item.toString()).join(',\n ')}`;
    }
}