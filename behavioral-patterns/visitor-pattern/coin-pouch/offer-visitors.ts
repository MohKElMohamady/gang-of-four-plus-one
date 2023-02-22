import { BronzeCreditCard, SilverCreditCard, GoldCreditCard } from "./credit-cards";

export interface OfferVisitor {
    visitBronzeCreditCard(bronze : BronzeCreditCard, totalShoppingCart : number) : number;
    visitSilverCreditCard(bronze : SilverCreditCard, totalShoppingCart : number) : number;
    visitGoldCreditCard(bronze : GoldCreditCard, totalShoppingCart : number) : number;
}

export class GroceriesOfferVisitor implements OfferVisitor{

    constructor() {}

    visitBronzeCreditCard(bronze: BronzeCreditCard, totalShoppingCart : number): number {
        console.log("Calculating the discount applied for the groceries using: " + bronze.getName() + "...");
        return 0.005 * totalShoppingCart;
    }
    
    visitSilverCreditCard(silver: SilverCreditCard, totalShoppingCart : number): number {
        console.log("Calculating the discount applied for the groceries using: " + silver.getName() + "...");
        return 0.008 * totalShoppingCart;
    }
    
    visitGoldCreditCard(gold: GoldCreditCard, totalShoppingCart : number): number {
        console.log("Calculating the discount applied for the groceries using: " + gold.getName() + "...");
        return 0.010 * totalShoppingCart;
    }

}

export class ElectronicsOfferVisitor implements OfferVisitor {

    constructor() {}
    
    visitBronzeCreditCard(bronze: BronzeCreditCard, totalShoppingCart : number): number {
        return 0.00        
    }
    
    visitSilverCreditCard(silver: SilverCreditCard, totalShoppingCart : number): number {
        console.log("Calculating the discount applied for eletronics bought using: " + silver.getName() + "...");
        return 0.009 * totalShoppingCart;
    }
    
    visitGoldCreditCard(gold: GoldCreditCard, totalShoppingCart : number): number {
        console.log("Calculating the discount applied for the electronics bought using: " + gold.getName() + "...");
        return 0.011 * totalShoppingCart;
    }

}


