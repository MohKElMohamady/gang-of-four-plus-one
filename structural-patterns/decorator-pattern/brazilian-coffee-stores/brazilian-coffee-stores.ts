export interface Beverage {
  getDescription(): string;
  getCost(): number;
  getComponent(): Beverage | null;
  getBeverageSize(): BeverageSize;
}

export enum BeverageSize {
  TALL,
  GRAND,
  VENTI,
}

export class HouseBlend implements Beverage {
  private description: string;
  private beverageSize: BeverageSize;

  constructor(beverageSize: BeverageSize) {
    this.description = "House Blend";
    this.beverageSize = beverageSize;
  }
  getDescription(): string {
    return this.description;
  }
  getCost(): number {
    return 0.89;
  }

  getComponent(): Beverage | null {
    return null;
  }

  getBeverageSize(): BeverageSize {
    return this.beverageSize;
  }
}

export class DarkRoast implements Beverage {
  private description: string;
  private beverageSize: BeverageSize;

  constructor(beverageSize: BeverageSize) {
    this.description = "Dark Roast";
    this.beverageSize = beverageSize;
  }
  getDescription(): string {
    return this.description;
  }
  getCost(): number {
    return 0.99;
  }

  getComponent(): Beverage | null {
    throw new Error("something went wrong");
  }

  getBeverageSize(): BeverageSize {
    return this.beverageSize;
  }
}

export class Decaf implements Beverage {
  private description: string;
  private beverageSize: BeverageSize;

  constructor(beverageSize: BeverageSize) {
    this.description = "Decaf";
    this.beverageSize = beverageSize;
  }
  getDescription(): string {
    return this.description;
  }
  getCost(): number {
    return 1.05;
  }

  getComponent(): Beverage | null {
    return null;
  }

  getBeverageSize(): BeverageSize {
    return this.beverageSize;
  }
}

export class Espresso implements Beverage {
  private description: string;
  private beverageSize: BeverageSize;

  constructor(beverageSize: BeverageSize) {
    this.description = "Espresso";
    this.beverageSize = beverageSize;
  }
  getDescription(): string {
    return this.description;
  }
  getCost(): number {
    return 1.99;
  }

  getComponent(): Beverage | null {
    return null;
  }

  getBeverageSize(): BeverageSize {
    return this.beverageSize;
  }
}

export class SteamedMilkDecorator implements Beverage {
  private beverageComponent: Beverage;
  private description: string;
  private beverageSize: BeverageSize;

  constructor(beverage: Beverage) {
    this.beverageComponent = beverage;
    this.description = this.beverageComponent.getDescription() + " , Milk";
    this.beverageSize = this.beverageComponent.getBeverageSize();
  }

  getDescription(): string {
    return this.description;
  }
  getCost(): number {
    return 0.1 + this.getComponent()!.getCost();
  }
  getComponent(): Beverage | null {
    return this.beverageComponent;
  }
  getBeverageSize(): BeverageSize {
    return this.beverageSize;
  }
}

export class MochaDecorator implements Beverage {
  private beverageComponent: Beverage;
  private description: string;
  private beverageSize: BeverageSize;

  constructor(beverage: Beverage) {
    this.beverageComponent = beverage;
    this.description = this.beverageComponent.getDescription() + " , Mocha ";
    this.beverageSize = this.beverageComponent.getBeverageSize();
  }

  getDescription(): string {
    return this.description;
  }
  getCost(): number {
    let cost = this.beverageComponent.getCost();
    switch (this.beverageSize) {
        case BeverageSize.TALL:
            return cost + 0.20; 
        case BeverageSize.GRAND:
            return cost + 0.25;
        case BeverageSize.VENTI:
            return cost + 0.30;
        default:
            throw new Error("Only three sizes are available: Tall, Grande, Venti");
    }
  }
  getComponent(): Beverage | null {
    return this.beverageComponent;
  }
  getBeverageSize(): BeverageSize {
    return this.beverageSize;
  }
}

export class SoyDecorator implements Beverage {
  private beverageComponent: Beverage;
  private description: string;
  private beverageSize: BeverageSize;

  constructor(beverage: Beverage) {
    this.beverageComponent = beverage;
    this.description = this.beverageComponent.getDescription() + ", Soy ";
    this.beverageSize = this.beverageComponent.getBeverageSize();
  }

  getDescription(): string {
    return this.description;
  }
  getCost(): number {
    let cost = this.beverageComponent.getCost();
    switch (this.beverageSize) {
        case BeverageSize.TALL:
            return cost + 0.15; 
        case BeverageSize.GRAND:
            return cost + 0.20;
        case BeverageSize.VENTI:
            return cost + 0.25;
        default:
            throw new Error("Only three sizes are available: Tall, Grande, Venti");
    }
  }
  getComponent(): Beverage | null {
    return this.beverageComponent;
  }
  getBeverageSize(): BeverageSize {
    return this.beverageSize;
  }
}

export class WhipDecorator implements Beverage {
  private beverageComponent: Beverage;
  private description: string;
  private beverageSize: BeverageSize;

  constructor(beverage: Beverage) {
    this.beverageComponent = beverage;
    this.description = this.beverageComponent.getDescription() + ", Whip ";
    this.beverageSize = this.beverageComponent.getBeverageSize();
  }

  getDescription(): string {
    return this.description;
  }
  getCost(): number {
    let cost = this.beverageComponent.getCost();
    switch (this.beverageSize) {
        case BeverageSize.TALL:
            return cost + 0.10; 
        case BeverageSize.GRAND:
            return cost + 0.15;
        case BeverageSize.VENTI:
            return cost + 0.20;
        default:
            throw new Error("Only three sizes are available: Tall, Grande, Venti");
    }
  }
  getComponent(): Beverage | null {
    return this.beverageComponent;
  }
  getBeverageSize(): BeverageSize {
    return this.beverageSize;
  }
}
