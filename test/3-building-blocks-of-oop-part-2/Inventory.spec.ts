import { Item } from '../../src/3-building-blocks-of-oop-part-2/Item';
import { Sword } from '../../src/3-building-blocks-of-oop-part-2/Sword';
import { Inventory } from '../../src/3-building-blocks-of-oop-part-2/Inventory';
import { Pizza } from '../../src/3-building-blocks-of-oop-part-2/Pizza';
import { ItemWeightComparator } from '../../src/3-building-blocks-of-oop-part-2/ItemWeightComparator';
import { Bow } from '../../src/3-building-blocks-of-oop-part-2/Bow';

const a: Item = new Sword(30.4219, 0.7893, 300, 2.032);
const b: Item = new Sword(40, 0.7893, 200, 2);
const c: Item = new Sword(40, 1, 100, 3);
const d: Item = new Bow(40, 0.7893, 200, 2);
const pizza: Item = new Pizza(12, false);

describe('Inventory', () => {
    const inventory: Inventory = new Inventory();

    inventory.addItem(a);
    inventory.addItem(b);
    inventory.addItem(c);
    inventory.addItem(d);
    inventory.addItem(pizza);
    it('should show it\'s list of items', () => {
        expect(inventory.toString()).toBe(
            "Inventory:" + 
            "\n sword − Value: 300, Weight: 2.032, Damage: 30.4219, Durability: 78.93%," +
            "\n sword − Value: 200, Weight: 2, Damage: 40, Durability: 78.93%," +
            "\n sword − Value: 100, Weight: 3, Damage: 40, Durability: 100%," +
            "\n bow − Value: 200, Weight: 2, Damage: 40, Durability: 78.93%," +
            "\n pizza - Value: 50, Weight: 12. 12 slices of pizza left"
        );
    })

    it('should sort it\'s list of items by value', () => {
        inventory.sort();

        expect(inventory.toString()).toBe(
            "Inventory:" + 
            "\n pizza - Value: 50, Weight: 12. 12 slices of pizza left," +
            "\n sword − Value: 100, Weight: 3, Damage: 40, Durability: 100%," +
            "\n bow − Value: 200, Weight: 2, Damage: 40, Durability: 78.93%," +
            "\n sword − Value: 200, Weight: 2, Damage: 40, Durability: 78.93%," +
            "\n sword − Value: 300, Weight: 2.032, Damage: 30.4219, Durability: 78.93%"
        );
    })

    it('should sort it\'s list of items by value', () => {
        inventory.sort(new ItemWeightComparator());

        expect(inventory.toString()).toBe(
            "Inventory:" + 
            "\n bow − Value: 200, Weight: 2, Damage: 40, Durability: 78.93%," +
            "\n sword − Value: 200, Weight: 2, Damage: 40, Durability: 78.93%," +
            "\n sword − Value: 300, Weight: 2.032, Damage: 30.4219, Durability: 78.93%," +
            "\n sword − Value: 100, Weight: 3, Damage: 40, Durability: 100%," +
            "\n pizza - Value: 50, Weight: 12. 12 slices of pizza left"
        );
    })
})