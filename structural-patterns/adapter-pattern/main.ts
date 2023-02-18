
function main() {
    const duck : Duck = new MalladDuck();
  
    const turkey : Turkey = new WildTurkey();

    const turkeyAdapter : Duck = new TurkeyAdapter(turkey);

    console.log("The Turkey says...");
    turkey.gobble();
    turkey.fly();

    console.log("The Duck says...");
    testDuck(duck)

    console.log("The TurkeyAdapter says");
    testDuck(turkeyAdapter)
}

function testDuck(duck:Duck) {
    duck.quack();
    duck.fly();
}