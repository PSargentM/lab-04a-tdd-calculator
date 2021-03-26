// IMPORT MODULES under test here:
import { add, subtract, multiply, divide } from '../calculator.js';
const test = QUnit.test;

test('add', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    // inputs?
    const x = 11;
    const y = 2;
    const expected = 13;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(x, y);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});

test('subtract', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 9;
    const actual = subtract(x, y);
    expect.equal(actual, expected);
});

test('multiply', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 22;
    const actual = multiply(x, y);
    expect.equal(actual, expected);
});

test('divide', (expect) => {
    const x = 11;
    const y = 2;
    const expected = 5.5;
    const actual = divide(x, y);
    expect.equal(actual, expected);
});

test('toNumber', (expect) => {
    const expected = 7;
    const input = document.createElement('input');
    input.value = expected;
})