import { Weapon } from "./Weapon";

export class Sword extends Weapon {
    constructor(baseDamage: number, baseDurability: number, value: number, weight: number) {
        super('sword', baseDamage, baseDurability, value, weight);
    }

    public polish(): void {
        const newDamageModifier = this.getDamageModifier() + Weapon.MODIFIER_CHANGE_RATE;
        const maxDamageModifier = this.getBaseDamage() * Weapon.MAX_IMPROVMENT_PERCENTAGE - this.getBaseDamage();

        this.setDamageModifier(newDamageModifier < maxDamageModifier ? newDamageModifier : maxDamageModifier);
    }
}