class Producer {
    constructor(state) {
        this.state = state;
        this.currentState = this.constructor.name;
        this.nextState = 'Retailer';
    }

    go(product, id) {
        let logData = `Product: ${product} | from: ${this.currentState} | to: ${this.nextState}\n`;
        console.log(id);
        
        allExports.Utility.write('./database/Product-output', logData).then(() => {
            console.log(logData);
            if (allExports.Utility.getLastProductId === id) {
                allExports.Utility.islastProduct = true;
            }

            this.state.nextStage(new allExports[this.nextState](this.state));
            
        }).catch(e => console.log(e));
    }
}

const allExports = require('../../exportDep.js');
module.exports = Producer;