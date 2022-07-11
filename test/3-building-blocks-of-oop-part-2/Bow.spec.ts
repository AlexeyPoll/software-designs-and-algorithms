import { Bow } from '../../src/3-building-blocks-of-oop-part-2/Bow';

describe('Bow', () => {
    it('should show bow\'s description', () => {
        const bow = new Bow(20, 0.75, 100, 5);
        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 75%");
    })

    it('should use bow and show the acton and description', () => {
        const bow = new Bow(20, 0.75, 100, 5);

        expect(bow.use()).toBe('You use the bow, dealing 20 points of damage.');
        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 45%");
    });

    it('should break bow if durability reaches 0%', () => {
        const bow = new Bow(20, 0.5, 100, 5);

        expect(bow.use()).toBe('You use the bow, dealing 20 points of damage.');
        expect(bow.use()).toBe('You use the bow, dealing 20 points of damage. The bow breaks.');
        expect(bow.use()).toBe('You can\'t use the bow, it is broken.');
        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 0%");
    });

    it('should be able to polish bow', () => {
        const bow = new Bow(20, 0.5, 100, 5);

        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 50%");

        bow.polish();
    
        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 80%");
        expect(bow.use()).toBe('You use the bow, dealing 20 points of damage.');

        for (let i = 0; i < 30; i++) {
            bow.polish();
        }

        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 100%");
        expect(bow.use()).toBe('You use the bow, dealing 20 points of damage.');
        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 70%");
        expect(bow.use()).toBe('You use the bow, dealing 20 points of damage.');
        expect(bow.use()).toBe('You use the bow, dealing 20 points of damage.');
        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 10%");
        expect(bow.use()).toBe('You use the bow, dealing 20 points of damage. The bow breaks.');
        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 0%");
        bow.polish();
        expect(bow.toString()).toBe("bow − Value: 100, Weight: 5, Damage: 20, Durability: 30%");
        expect(bow.use()).toBe('You use the bow, dealing 20 points of damage. The bow breaks.');
        expect(bow.use()).toBe('You can\'t use the bow, it is broken.');
    });
})