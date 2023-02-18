interface Turkey {
    gobble() : void;
    fly() : void;
}

class WildTurkey implements Turkey {
    
    constructor() {
    }
    
    gobble(): void {
        console.log("Gobble gobble");
    }
    
    fly(): void {
        console.log("I'm flying a short distance");
    }
}

class TurkeyAdapter implements Duck {

    private turkey : Turkey;

    constructor(turkey : Turkey) {
       this.turkey = turkey; 
    }

    quack(): void {
        this.turkey.gobble();
    }
    fly(): void {
       for (let i = 0; i < 5; i++) {
            this.turkey.fly();
       } 
    }

}