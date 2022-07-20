
import { Sword } from '../../src/3-building-blocks-of-oop-part-2/Sword';


describe('Sword', () => {
    it('should show sword\'s description', () => {
        const sword = new Sword(20, 0.75, 100, 5);
        expect(sword.toString()).toBe("sword − Value: 100, Weight: 5, Damage: 20, Durability: 75%");
    })

    it('should use sword and show the acton and description', () => {
        const sword = new Sword(20, 0.75, 100, 5);

        expect(sword.use()).toBe('You use the sword, dealing 20 points of damage.');
        expect(sword.toString()).toBe("sword − Value: 100, Weight: 5, Damage: 20, Durability: 45%");
    });

    it('should break sword if durability reaches 0%', () => {
        const sword = new Sword(20, 0.5, 100, 5);

        expect(sword.use()).toBe('You use the sword, dealing 20 points of damage.');
        expect(sword.use()).toBe('You use the sword, dealing 20 points of damage. The sword breaks.');
        expect(sword.use()).toBe('You can\'t use the sword, it is broken.');
        expect(sword.toString()).toBe("sword − Value: 100, Weight: 5, Damage: 20, Durability: 0%");
    });

    it('should be able to polish sword', () => {
        const sword = new Sword(20, 0.5, 100, 5);

        expect(sword.toString()).toBe("sword − Value: 100, Weight: 5, Damage: 20, Durability: 50%");

        sword.polish();
    
        expect(sword.toString()).toBe("sword − Value: 100, Weight: 5, Damage: 20.3, Durability: 50%");
        expect(sword.use()).toBe('You use the sword, dealing 20.3 points of damage.');

        for (let i = 0; i < 30; i++) {
            sword.polish();
        }

        expect(sword.toString()).toBe("sword − Value: 100, Weight: 5, Damage: 25, Durability: 20%");
        expect(sword.use()).toBe('You use the sword, dealing 25 points of damage. The sword breaks.');
        expect(sword.toString()).toBe("sword − Value: 100, Weight: 5, Damage: 25, Durability: 0%");
        expect(sword.use()).toBe('You can\'t use the sword, it is broken.');
    });
})