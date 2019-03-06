// const fs = require('fs');
const utility = require('./utility');

// const myMockFn = jest
//   .fn()
//   .mockImplementation((file, option, cb) => cb(null, mockContent))
//   .mockImplementation((file, option, cb) => cb('Some Error', null))

test('Test to set product id without passing the parameter id', () => {
    expect(utility.setLastProductId()).toEqual('Please set Id before requiring');
})

test('Testing to set product id passing in a pamater that\'s not a number', () => {
    expect(utility.setLastProductId('hello')).toEqual('id must be a number')
})

test('Test to set product id', () => {
    expect(utility.setLastProductId(90)).toBe(90);
})

test('Test to get product id', () => {
    expect(utility.getLastProductId).toBe(90);
})

test('Test to get product id', () => {
    expect(utility.getLastProductId).toBe(90);
})

test('the readFile was successful', () => {
    return utility.read('./database/test-input').then(data => {
      expect(data).toBe('hello my name\nand am from');
    });
});

test('the readFile fails with an error', () => {
    expect.assertions(1);
    return utility.read('../database/Product-Input').catch(e => expect(e).toMatch('error'));
});

test('method to test data cleaning', () => {
    expect(utility.clean(`//
    //
    //
    //
    //
    Bernie Geyer
    Carly Piazza 
    Calista Na Producer
    Lucas Menefee Consumer
    Shon Croley Producer
    Owen Bartkowski Retailer
    Lanny Service   Recycler
    Kimberli Kravitz Producer
    Chun Rolan   	Retailer
    Alfonso Mcgillivray 		Consumer
    Zena Peavey 		Consumer
    Sebastian Opitz	   		Producer
    Rosamaria Hypolite 		Recycler
    ..;.;.;`)).toEqual([ 'Bernie Geyer Producer',
    'Carly Piazza Producer',
    'Calista Na Producer',
    'Lucas Menefee Consumer',
    'Shon Croley Producer',
    'Owen Bartkowski Retailer',
    'Lanny Service Recycler',
    'Kimberli Kravitz Producer',
    'Chun Rolan Retailer',
    'Alfonso Mcgillivray Consumer',
    'Zena Peavey Consumer',
    'Sebastian Opitz Producer',
    'Rosamaria Hypolite Recycler' ])
})

test('the readFile was successful', () => {
    return utility.write('./database/test-output', 'hello').then(data => {
      expect(data).toBe('hello');
    });
});

test('the readFile fails with an error', () => {
    expect.assertions(1);
    return utility.write('../database/test-output','hello').catch(e => expect(e).toMatch('error'));
});