export interface Pizza {

    name : string;
    dough : string;
    sauce : string;
    toppings : string[];

    prepare() : void;
    bake() : void;
    cut() : void;
    box() : void;
}


export class NYPizza implements Pizza {
    name: string;
    dough: string;
    sauce: string;
    toppings: string[];

    constructor(name : string, dough?: string, sauce? : string, toppings? : string[]) {
       this.name = name; 
        if (dough != null) {
            this.dough = dough;
        } else {
            this.dough = "normal pizza dough";
        }
        if (sauce != null) {
            this.sauce = sauce;
        } else {
            this.sauce = "tomato sauce";
        }
        if (toppings != null) {
            this.toppings = toppings
        } else {
            this.toppings = ["", "", ""];
        }
    }
    
    prepare(): void {
        console.log("Preparing the dough...");
        console.log("Leaving the dough to rise...");
        console.log("Adding ingredients on the pizza dough...");
    }
    bake(): void {
        console.log("Putting dough in the special new york pizza oven...");
    }
    cut(): void {
        console.log("Cutting the pizza...");
    }
    box(): void {
        console.log("Adding it to the box...");
    }

}