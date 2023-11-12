import { shuffleArray } from "index.js";
import { test, expect } from "vitest"; 

test("should throw error if input is not array", function () {
    expect( () => {
        shuffleArray(!Array)
    }).toThrow("value entered is not an array.");
});

test("order of array has been shuffled", function () {
    const testArray = [1, 2, 3];
    const copyOfTestArray = JSON.parse(JSON.stringify(testArray)); // Making a deep copy of the array, otherwise JS will reference the same array
    const shuffledArray = shuffleArray(testArray);
    console.log(shuffledArray);
    expect(shuffledArray).not.toEqual(copyOfTestArray);
})
