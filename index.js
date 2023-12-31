export function shuffle(array) {

// Check input is array

    if (!Array.isArray(array)) {
        throw new Error('value entered is not an array.');
      };

// Create variables for comparing arrays (to ensure shuffled arrays are never returned in exactly the same order)      

     const stringOfOriginalArray = JSON.stringify(array);

     do {
         for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            const temp = array[i];
            array[i] = array[j];
            array[j] = temp;
         }
    } while (JSON.stringify(array) === stringOfOriginalArray);
    return array;
}
// let myArray = [3, 6, 8, 1]
//     console.log(shuffleArray(myArray))