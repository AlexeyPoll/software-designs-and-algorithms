import { Pizza } from "../../src/3-building-blocks-of-oop-part-2/Pizza"

describe('Pizza', () => {
    it('should show the pizza description', () => {
        const pizza = new Pizza(3);

        expect(pizza.toString()).toBe('pizza - Value: 50, Weight: 12. 3 slices of pizza left');
    })

    it('should eat the pizza', () => {
        const pizza = new Pizza(3);

        expect(pizza.use()).toBe('You eat a slice of pizza.');
        expect(pizza.toString()).toBe('pizza - Value: 50, Weight: 12. 2 slices of pizza left');
    })

    it('should eat the pizza till the end', () => {
        const pizza = new Pizza(3);

        expect(pizza.use()).toBe('You eat a slice of pizza.');
        expect(pizza.use()).toBe('You eat a slice of pizza.');
        expect(pizza.use()).toBe('You eat a slice of pizza.');
        expect(pizza.toString()).toBe('pizza - Value: 50, Weight: 12. No slices of pizza left');
        expect(pizza.use()).toBe('There is nothing left of the pizza to consume.');
    })

    it('should eat the spoiled pizza', () => {
        const pizza = new Pizza(1, true);

        expect(pizza.use()).toBe('You eat a slice of pizza.' + '\nYou feel sick.');
        expect(pizza.toString()).toBe('pizza - Value: 50, Weight: 12. Spoiled. No slices of pizza left');
        expect(pizza.use()).toBe('There is nothing left of the pizza to consume.');
    })
})