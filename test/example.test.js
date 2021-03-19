// IMPORT MODULES under test here:
// import { example } from '../example.js';
import { add } from '../utils.js';

const test = QUnit.test;

test('should return num1 + num2', (expect) => {
    //Arrange
    // Set up your arguments and expectations
    const expected = 10;
    
    //Act 
    // Call the function you're testing and set the result to a const
    const actual = add(5, 5);

    //Expect
    // Make assertions about what is expected versus the actual result
    expect.equal(actual, expected);
});
