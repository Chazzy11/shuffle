import { shuffleArray } from "index.js";
import { test, expect } from "vitest"; 

test("should throw error if input is not array", function () {
    expect( () => {
        shuffleArray("not an array")
    }).toThrow("value entered is not an array.");
});

test("order of array has been shuffled", function () {
    const testArray = [1, 2, 3];
    const copyOfTestArray = JSON.parse(JSON.stringify(testArray));
    const shuffledArray = shuffleArray(testArray);
    console.log(shuffledArray);
    expect(shuffledArray).not.toEqual(copyOfTestArray);
})
