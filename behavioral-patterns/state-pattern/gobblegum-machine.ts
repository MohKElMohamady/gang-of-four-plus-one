interface IGobblegumState {
  insertQuarter(): void;
  ejectQuarter(): void;
  turnCrank(): void;
  dispense(): void;
  refill(): void;
}

class GobblegumMachine {
  
  private _count : number;
  public get count() : number {
    return this._count;
  }
  public set count(v : number) {
    this._count = v;
  }
  
  
  private _soldOutState : IGobblegumState;
  public get soldOutState() : IGobblegumState {
    return this._soldOutState;
  }
  public set soldOutState(v : IGobblegumState) {
    this._soldOutState = v;
  }
  
  
  private _noQuarterState : IGobblegumState;
  public get noQuarterState() : IGobblegumState {
    return this._noQuarterState;
  }
  public set noQuarterState(v : IGobblegumState) {
    this._noQuarterState = v;
  }
  
  
  private _hasQuarterState : IGobblegumState;
  public get hasQuarterState() : IGobblegumState {
    return this._hasQuarterState;
  }
  public set hasQuarterState(v : IGobblegumState) {
    this._hasQuarterState = v;
  }
  
  
  private _soldState : IGobblegumState;
  public get soldState() : IGobblegumState {
    return this._soldState;
  }
  public set soldState(v : IGobblegumState) {
    this._soldState = v;
  }

  
  private _winnerState : IGobblegumState;
  public get winnerState() : IGobblegumState {
    return this._winnerState;
  }
  public set winnerState(v : IGobblegumState) {
    this._winnerState = v;
  }
  
  
  private _state : IGobblegumState;
  public get state() : IGobblegumState {
    return this._state;
  }
  public set state(v : IGobblegumState) {
    this._state = v;
  }
  

  constructor(count: number) {

    this._count = count;

    this._soldOutState = new SoldOutState(this);
    this._noQuarterState = new NoQuarterState(this);
    this._hasQuarterState = new HasQuarterState(this);
    this._soldState = new SoldState(this);

    this._state = this.noQuarterState;
  }

  public insertQuarter() : void {
    this.state.insertQuarter();
  }

  public ejectQuarter() : void {
    this.state.ejectQuarter();
  }

  public turnCrank() : void {
    this.state.turnCrank();
  }

  public releaseBall() : void {
    console.log("A gumball comes rolling out the slot...");
    if (this.count > 0) {
      this.count--;
    }
  }

}

class NoQuarterState implements IGobblegumState {
  private gobblegumMachine: GobblegumMachine;

  constructor(gobblegumMachine: GobblegumMachine) {
    this.gobblegumMachine = gobblegumMachine;
  }
  insertQuarter(): void {
    this.gobblegumMachine.state = this.gobblegumMachine.hasQuarterState;
  }
  ejectQuarter(): void {
    throw new Error("There is no quarter to eject!");
  }
  turnCrank(): void {
    throw new Error("Enter a quarter first!");
  }
  dispense(): void {
    throw new Error("Enter a quarter first!");
  }
  refill(): void {
    throw new Error("The gobblegum machine must be sold out to refill!");
  }
}

class HasQuarterState implements IGobblegumState {

  private gobblegumMachine: GobblegumMachine;

  constructor(gobblegumMachine: GobblegumMachine) {
    this.gobblegumMachine = gobblegumMachine;
  }

  insertQuarter(): void {
    throw new Error("You can't insert another quarter.");
  }
  
  ejectQuarter(): void {
    console.log("Quarter returned");
    this.gobblegumMachine.state = this.gobblegumMachine.noQuarterState;
  }

  turnCrank(): void {
    console.log("You turned...!");
    const winner : number = (Math.random() * (10-1));
    if ((winner == 0) && (this.gobblegumMachine.count > 1)) {
      this.gobblegumMachine.state = this.gobblegumMachine.winnerState;
    } else {
      this.gobblegumMachine.state = this.gobblegumMachine.soldState;
    }
  }

  dispense(): void {
    throw new Error("No gobblegum dispensed.");
  }
  
  refill(): void {
    throw new Error("The gobblegum machine must be empty.");
  }

}

class SoldState implements IGobblegumState {

  private gobblegumMachine: GobblegumMachine;

  constructor(gobblegumMachine: GobblegumMachine) {
    this.gobblegumMachine = gobblegumMachine;
  }
  insertQuarter(): void {
    throw new Error("Method not implemented.");
  }
  ejectQuarter(): void {
    throw new Error("Method not implemented.");
  }
  turnCrank(): void {
    throw new Error("Method not implemented.");
  }
  dispense(): void {
    throw new Error("Method not implemented.");
  }
  refill(): void {
    throw new Error("Method not implemented.");
  }
}

class SoldOutState implements IGobblegumState {
  private gobblegumMachine: GobblegumMachine;

  constructor(gobblegumMachine: GobblegumMachine) {
    this.gobblegumMachine = gobblegumMachine;
  }
  insertQuarter(): void {
    throw new Error("Method not implemented.");
  }
  ejectQuarter(): void {
    throw new Error("Method not implemented.");
  }
  turnCrank(): void {
    throw new Error("Method not implemented.");
  }
  dispense(): void {
    throw new Error("Method not implemented.");
  }
  refill(): void {
    this.gobblegumMachine;
  }
}

class WinnerState implements IGobblegumState {
 
  private gobblegumMachine : GobblegumMachine;
  
  constructor(gobblegumMachine : GobblegumMachine) {
   this.gobblegumMachine = gobblegumMachine; 
  }

  insertQuarter(): void {
    throw new Error("Method not implemented.");
  }

  ejectQuarter(): void {
    throw new Error("Method not implemented.");
  }

  turnCrank(): void {
    throw new Error("Method not implemented.");
  }

  dispense(): void {
    this.gobblegumMachine.releaseGobbleGum();
    if(this.gobblegumMachine.count == 0) {
      this.gobblegumMachine.state = this.gobblegumMachine.soldOutState;
    } else {
      console.log("You won! It's your lucky day and you are getting an extra gobblegum");
      this.gobblegumMachine.releaseGobbleGum(); 
      if (this.gobblegumMachine.count > 0) {
        this.gobblegumMachine.state = this.gobblegumMachine.noQuarterState;
      } else {
        console.log("Oops! Out of gobblegums!");
        this.gobblegumMachine.state = this.gobblegumMachine.soldOutState;
      }
    }
  }

  refill(): void {
    throw new Error("Method not implemented.");
  }

}