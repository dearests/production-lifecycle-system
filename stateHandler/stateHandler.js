//State Handler class

class StateHandler {
    constructor(data) {
        this.product = data.product;
        this.id = data.id;
        this._currentState = new allExports[data.state](this);
    }

    //Method to change to the next state;
    async nextStage(stage) {
        this._currentState = stage;
        await this._currentState.go(this.product, this.id);
    }

    //method to start the cycle
    start() {
        this._currentState.go(this.product, this.id);
    }

}


const allExports = require("../exportDep.js");
module.exports = StateHandler;