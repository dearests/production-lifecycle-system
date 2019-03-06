const utility = require('./utility/utility');
const StateHadnler = require('./stateHandler/stateHandler');

function createDataObj(arrData, id) {
    let data = {};
    let temp = arrData.split(' ');
    data.id = id + 1;
    data.product = temp[0] + ' ' + temp[1];
    data.state = temp[2];
    return data;
}

async function app() {
    let rawProductData = await utility.read('./database/Product-Input');
    let cleanProductData = await utility.clean(rawProductData);

    utility.setLastProductId(cleanProductData.length - 1)

    try {
        for (let i = 0; i <= cleanProductData.length; i++) {
            let data = createDataObj(cleanProductData[i], i);
            
            const stateHadnler = new StateHadnler(data);
            stateHadnler.start();
        }
    } catch(e) {
        console.log(e.message);
    }
    
}

app();