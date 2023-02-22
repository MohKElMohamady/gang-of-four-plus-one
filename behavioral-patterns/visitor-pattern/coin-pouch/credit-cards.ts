import { OfferVisitor } from "./offer-visitors";

interface CreditCard {
  getName(): string;
  visit(visitor: OfferVisitor, totalShoppingCart: number): number;
}

export class BronzeCreditCard implements CreditCard {
  getName(): string {
    return "Bronze! Bad luck this time!";
  }
  visit(visitor: OfferVisitor, totalShoppingCart: number): number {
    return visitor.visitBronzeCreditCard(this, totalShoppingCart);
  }
}

export class SilverCreditCard implements CreditCard {
  getName(): string {
    return "Silver Coin Pouch";
  }
  visit(visitor: OfferVisitor, totalShoppingCart: number): number {
    return visitor.visitSilverCreditCard(this, totalShoppingCart);
  }
}

export class GoldCreditCard implements CreditCard {
  getName(): string {
    return "Gold Coin Pouch";
  }

  visit(visitor: OfferVisitor, totalShoppingCart: number): number {
    return visitor.visitSilverCreditCard(this, totalShoppingCart);
  }
}
