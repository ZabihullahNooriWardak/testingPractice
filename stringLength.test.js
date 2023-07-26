// Import the functions from the stringUtils module
const { stringLength, reverseString } = require('./stringLength');

// Write your tests for stringLength and reverseString functions here




test('is String length working fine',()=>{
    expect(stringLength('zabih')).toBe(5);
});

test('reverse string is working fine ',()=>{
    expect(reverseString('ali')).toBe('ila');
});