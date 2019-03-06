class Producer {
    constructor(state) {
        this.state = state;
        this.currentState = this.constructor.name;
        this.nextState = 'Retailer';
    }

    go(product, id) {
        let logData = `Product: ${product} | from: ${this.currentState} | to: ${this.nextState}\n`;
        console.log(id);
        if (id === allExports.Utility.getLastProductId) {
           allExports.Utility.islastProduct = true;
        }
        allExports.Utility.write('./database/Product-output', logData).then(() => {
            console.log(logData);

            this.state.nextStage(new allExports[this.nextState](this.state));
            
        }).catch(e => console.log(e));
    }
}

const allExports = require('../../exportDep.js');
module.exports = Producer;