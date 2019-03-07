//Importing dependencies 
const utility = require("./utility/utility");
const StateHadnler = require("./stateHandler/stateHandler");


//returns created object that will be passed to the stateHandler
function createDataObj(arrData, id) {

    //Kill the program is id is equal to last product id
    if ((utility.getLastProductId + 1) === (id + 1)) process.kill(process.pid);

    let data = {};
    let temp = arrData.split(" ");
    data.id = id + 1;
    data.product = temp[0] + " " + temp[1];
    data.state = temp[2];
    
    return data;
}

//main method that starts the app
async function startApp() {
    let rawProductData = await utility.read("./database/Product-Input");
    let cleanProductData = await utility.clean(rawProductData);

    utility.setLastProductId(cleanProductData.length);

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

startApp();