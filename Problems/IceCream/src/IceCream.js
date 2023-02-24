"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.IceCream = void 0;
class IceCream {
    constructor(isSmall, ingredient, optionalIngredient) {
        this.isSmall = false;
        this.ingredient = '';
        this.optionalIngredient = false;
        this.cost = 0;
        this.isSmall = isSmall;
        this.ingredient = ingredient;
        this.optionalIngredient = optionalIngredient;
    }
    create() {
        if (this.isSmall) {
            this.cost += 10;
        }
        else {
            this.cost += 20;
        }
        if (this.ingredient === 'chocolate') {
            this.cost += 5;
        }
        else if (this.ingredient === 'vanilla') {
            this.cost += 6;
        }
        else {
            this.cost += 10;
        }
        if (this.optionalIngredient) {
            this.cost += 5;
        }
    }
    toString() {
        return `IceCream: ${this.isSmall ? 'small' : 'big'}, ${this.ingredient}, ${this.optionalIngredient ? 'with optional ingredient' : 'without optional ingredient'}, cost: ${this.cost}`;
    }
}
exports.IceCream = IceCream;
