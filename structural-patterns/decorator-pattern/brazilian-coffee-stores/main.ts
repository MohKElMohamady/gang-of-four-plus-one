import {
  Beverage,
  BeverageSize,
  DarkRoast,
  Espresso,
  HouseBlend,
  MochaDecorator,
  SoyDecorator,
  WhipDecorator,
} from "./brazilian-coffee-stores";

function main() {
  const beverage1: Beverage = new Espresso(BeverageSize.GRAND);

  console.log(beverage1.getDescription() + " $ " + beverage1.getCost());

  let beverage2: Beverage = new DarkRoast(BeverageSize.GRAND);
  beverage2 = new MochaDecorator(beverage2);
  beverage2 = new MochaDecorator(beverage2);
  beverage2 = new WhipDecorator(beverage2);

  console.log(beverage2.getDescription() + " $ " + beverage2.getCost());

  let beverage3: Beverage = new HouseBlend(BeverageSize.TALL);
  beverage3 = new SoyDecorator(beverage3);
  beverage3 = new MochaDecorator(beverage3);
  beverage3 = new WhipDecorator(beverage3);

  console.log(beverage3.getDescription() + " $ " + beverage3.getCost());
}

main();
