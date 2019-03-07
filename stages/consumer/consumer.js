class Consumer {
    constructor(state) {
        this.state = state;
        this.currentState = this.constructor.name;
        this.nextState = "Recycler";
    }

    //Method to call the next state
    go(product) {
        let logData = `Product: ${product} | from: ${this.currentState} | to: ${this.nextState}\n`;

        allExports.Utility.write("./database/Product-output", logData).then(() => {

            this.state.nextStage(new allExports[this.nextState](this.state));
        }).catch(e => e);
        
    }
}

const allExports = require("../../exportDep.js");
module.exports = Consumer;