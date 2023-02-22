import { BronzeCreditCard, SilverCreditCard } from "./credit-cards";
import {
  ElectronicsOfferVisitor,
  GroceriesOfferVisitor,
} from "./offer-visitors";

function main() {
  const silverCreditCard: SilverCreditCard = new SilverCreditCard();
  const bronzeCreditCard: BronzeCreditCard = new BronzeCreditCard();

  const totalPurchasesOfGroceries = 15.55;
  let discount = silverCreditCard.visit(
    new GroceriesOfferVisitor(),
    totalPurchasesOfGroceries
  );
  console.log("recheived cashback " + discount + " for buying groceries");

  const totalPurchasesOfElectronics = 2300;
  discount = bronzeCreditCard.visit(
    new ElectronicsOfferVisitor(),
    totalPurchasesOfElectronics
  );
  console.log("recheived cashback " + discount + " for buying electronics");
}

main();
