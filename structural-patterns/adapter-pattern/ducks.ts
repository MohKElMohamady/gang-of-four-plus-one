interface Duck {
    quack() : void;
    fly() : void;
}


class MalladDuck implements Duck {

    constructor() {}

    quack(): void {
        console.log("Quack")
    }
    
    fly(): void {
        console.log("I'm flying");
    }

}

class DuckAdapter implements Turkey {

    private duck : Duck;

    constructor(duck : Duck) {
       this.duck = duck; 
    }

    gobble(): void {
        this.duck.quack();
    }
    fly(): void {
        this.duck.fly();
    }

}