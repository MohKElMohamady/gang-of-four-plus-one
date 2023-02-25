import { Pizza } from "./pizzas";

export enum PizzaType {

}

export interface PizzaOven {
    createPizza(pizzaType : PizzaType) : Pizza;
    orderPizza(pizza : Pizza) : Pizza;
}

class NYPizzaOven implements PizzaOven{
    createPizza(): Pizza {
        
    }
    orderPizza(): Pizza {

        const pizza : Pizza = this.createPizza();

        pizza.prepare();
        
        pizza.bake();

        pizza.cut();

        pizza.box();

        return pizza;
    }

}