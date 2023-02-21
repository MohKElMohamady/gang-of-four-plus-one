class NaiveGobblegumMachine {

    private gobblegumState = GobblegumState.SOLD_OUT;
    private count = 0;

    constructor(count : number) {
        this.count = count;
        if(this.count > 0){
            this.gobblegumState = GobblegumState.NO_QUARTER
        }
    }

    public insertQuarter() {
        if (this.gobblegumState == GobblegumState.HAS_QUARTER) {
            console.log("You can't insert another quarter");
        } else if (this.gobblegumState == GobblegumState.NO_QUARTER) {
            this.gobblegumState = GobblegumState.HAS_QUARTER;
            console.log("You inserted a quarter");
        } else if (this.gobblegumState == GobblegumState.SOLD_OUT) {
            console.log("Sorry, the machine is sold out! No Gobblegums available");
        } else if (this.gobblegumState == GobblegumState.SOLD) {
            console.log("Please wait, we are already giving you a gobblegum");
        }     
    }

    public ejectQuarter() {
        if (this.gobblegumState == GobblegumState.HAS_QUARTER) {
            this.gobblegumState = GobblegumState.NO_QUARTER;
            console.log("Quarter returned");
        } else if (this.gobblegumState == GobblegumState.NO_QUARTER) {
            console.log("You haven't inserted a quarter");
        } else if (this.gobblegumState == GobblegumState.SOLD_OUT) {
            console.log("You can't eject, you haven't inserted a quarter yet");
        } else if (this.gobblegumState == GobblegumState.SOLD) {
            console.log("Once you turn the crank, you can never come back!");
        }     
    }

    public turnCrank() {
        if (this.gobblegumState == GobblegumState.HAS_QUARTER) {
            console.log("You turned the crank, you get a gobblegum!");
            this.gobblegumState = GobblegumState.SOLD
            this.dispense();
        } else if (this.gobblegumState == GobblegumState.NO_QUARTER) {
            console.log("You turned, but there is no quarter!");
        } else if (this.gobblegumState == GobblegumState.SOLD_OUT) {
            console.log("You turned, but there an no gobblegums!");
        } else if (this.gobblegumState == GobblegumState.SOLD) {
            console.log("Turning twice doesn't get you antoher dumball!");
        }     
    }

    public dispense() {
        if (this.gobblegumState == GobblegumState.HAS_QUARTER) {
            console.log("You need to turn the crank");
        } else if (this.gobblegumState == GobblegumState.NO_QUARTER) {
            console.log("You need to pay first");
        } else if (this.gobblegumState == GobblegumState.SOLD_OUT) {
            console.log("No gobblegum to dispense!");
        } else if (this.gobblegumState == GobblegumState.SOLD) {
            console.log("A gumball comes rolling out the slot!");
            this.count--;
            if (this.count == 0) {
                console.log("Oops! Out of gobblegums!");
                this.gobblegumState = GobblegumState.SOLD_OUT
            } else {
                console.log("Returning the crank to its original location!");
                this.gobblegumState = GobblegumState.NO_QUARTER
            }
        }     
    }
}

enum GobblegumState {
    SOLD_OUT,
    NO_QUARTER,
    HAS_QUARTER,
    SOLD
}