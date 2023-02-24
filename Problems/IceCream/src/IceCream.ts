import {User} from "../../UdemyApp/src/User";

export class IceCream implements Creatable{
    private readonly isSmall: boolean = false;
    private readonly ingredient: string = '';
    private readonly optionalIngredient: boolean = false;
    private cost: number = 0;

    constructor(isSmall: boolean, ingredient: string, optionalIngredient?: boolean) {
        this.isSmall = isSmall;
        this.ingredient = ingredient;
        this.optionalIngredient = optionalIngredient;
    }


    create(): void {
        if(this.isSmall){
            this.cost += 10;
        }else{
            this.cost += 20;
        }

        if(this.ingredient === 'chocolate'){
            this.cost += 5;
        }else if(this.ingredient === 'vanilla'){
            this.cost += 6;
        } else{
            this.cost += 10;
        }

        if(this.optionalIngredient) {
            this.cost += 5;
        }
    }

    toString(): string {
        return `IceCream: ${this.isSmall ? 'small' : 'big'}, ${this.ingredient}, ${this.optionalIngredient ? 'with optional ingredient' : 'without optional ingredient'}, cost: ${this.cost}`;
    }

}
