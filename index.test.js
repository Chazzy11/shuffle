import { shuffleArray } from "index.js";
import { test, expect } from "vitest"; 

test("should throw error if input is not array", function () {
    expect( () => {
        shuffleArray("not an array")
    }).toThrow("value entered is not an array.");
});

