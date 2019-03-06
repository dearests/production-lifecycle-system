const fs = require('fs');

class Utility {
    constructor() {
        this.lastProductId = null;
    }

    //method to set to assign id to the lastProductId member property
    setLastProductId(id) {
        if (!id) {
            return 'Please set Id before requiring';
        } else if (isNaN(id)) {
            return 'id must be a number';
        }
        return this.lastProductId = id
    }

    //method to get last product id
    get getLastProductId() {
        return this.lastProductId;
    }

    //method to read data from file 
    read(path = './database/Product-Input', option='utf8') {
        return new Promise((resolve, reject) => {
            fs.readFile(path, option, (error, data) => {
                if (error) reject('error');
                else {
                    resolve(data);
                }
            });
        });
    }

    //method to clean data
    clean(data) {
        let dataFile = data.split('\n').map(file => {
            let tempData = file.replace(/[^\w\s]/gm, '').replace(/\s\s+/gm, ' ').trim();
            return tempData;
        })

        for (let i = dataFile.length - 1; i >= 0; i--) {
            if (!/[^\s]/.test(dataFile[i])) {
                dataFile.splice(i, 1);
            }
        }

        for (let i = 0; i < dataFile.length; i++) {
            if (dataFile[i].split(' ').length === 2) {
                dataFile[i] = dataFile[i] + ' Producer';
            }
        }

        return dataFile
    
    }

    //method to write to file
    write(path, dataToFile) {
        return new Promise((resolve, reject) => {
            fs.appendFile(path, dataToFile, error => {
                if (error) {
                    reject('error');
                }
                resolve('hello');
            })
        })
    }
}



















    // changeDirectory() {
    //     try {
    //         process.chdir('./database');
    //         const dir = process.cwd()
    //         const path = dir + '/test';
    //         return path;
    //     } catch (error) {
    //         console.log('change directory error: ', error.message);
    //         return;
    //     }
    // }





// const u = new Utility()
// u.clean(`//
// //
// //
// //
// //
// Bernie Geyer
// Carly Piazza 
// Calista Na Producer
// Lucas Menefee Consumer
// Shon Croley Producer
// Owen Bartkowski Retailer
// Lanny Service   Recycler
// Kimberli Kravitz Producer
// Chun Rolan   	Retailer
// Alfonso Mcgillivray 		Consumer
// Zena Peavey 		Consumer
// Sebastian Opitz	   		Producer
// Rosamaria Hypolite 		Recycler
// ..;.;.;`)

module.exports = new Utility()