

class StateHandler {
    constructor(data) {
        this.product = data.product;
        this.id = data.id;
        this._currentState = new allExports[data.state](this);
    }

    async nextStage(stage) {
        // if(this.count++ >= 2000) return;
        this._currentState = stage;
        await this._currentState.go(this.product, this.id);
    }

    start() {
        this._currentState.go(this.product, this.id);
    }

}


const allExports = require('../exportDep.js');
module.exports = StateHandler;