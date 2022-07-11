import { Item } from "./Item";

export abstract class Weapon extends Item {
    protected static MAX_IMPROVMENT_PERCENTAGE = 1.25;
    protected static MODIFIER_CHANGE_RATE: number = 0.3;

    private baseDamage: number;
    private damageModifier: number = 0;
    private baseDurability: number;
    private durabilityModifier: number = 0;

    constructor(name: string, baseDamage: number, baseDurability: number, value: number, weight: number) {
        super(name, value, weight);

        this.baseDamage = baseDamage;
        this.baseDurability = baseDurability;
    }

    abstract polish(): void;

    public use(): string {
        if (this.getDurability() <= 0) {
            return `You can't use the ${this.getName()}, it is broken.`;
        }
        const minBaseDurability = -this.durabilityModifier;
        const newBaseDurability = this.baseDurability - Weapon.MODIFIER_CHANGE_RATE;

        this.baseDurability = newBaseDurability < minBaseDurability 
            ? minBaseDurability
            : newBaseDurability;

        return `You use the ${this.getName()}, dealing ${this.getDamage()} points of damage.${this.getDurability() === 0 ? ` The ${this.getName()} breaks.` : ''}`
    }

    public toString(): string {
        return `${this.getName()} − Value: ${this.getValue()}, Weight: ${this.getWeight()}, Damage: ${this.getDamage()}, Durability: ${parseFloat((this.getDurability() * 100).toFixed(3))}%`;
    }

    public getDamage(): number {
        return this.baseDamage + this.damageModifier;
    }

    public getDurability(): number {
        return this.baseDurability + this.durabilityModifier;
    }

    public getBaseDamage(): number {
        return this.baseDamage;
    }

    public getBaseDurability(): number {
        return this.baseDurability;
    }

    public getDamageModifier(): number {
        return this.damageModifier;
    }

    public getDurabilityModifier(): number {
        return this.durabilityModifier;
    }

    public setDamageModifier(damageModifier: number): void {
        this.damageModifier = damageModifier;
    }

    public setDurabilityModifier(durabilityModifier: number): void {
        this.durabilityModifier = durabilityModifier;
    }
}