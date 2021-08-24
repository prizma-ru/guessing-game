class GuessingGame {
    constructor() {
        this.min = 0;
        this.max = 0;
        this.midle = 0;
    }

    setRange(min, max) {
        this.min = min;
        this.max = max;
        
    }

    guess() {
        this.midle = Math.ceil((this.max + this.min) / 2);
        return this.midle;

    }

    lower() {
        this.max = this.midle;
    }

    greater() {
        this.min = this.midle;
    }
}

module.exports = GuessingGame;

