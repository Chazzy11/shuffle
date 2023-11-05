export function shuffleArray(array) {
    if (!Array.isArray(array)) {
        throw new Error('value entered is not an array. ');
      }
    for (let i = array.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
    }
    return array;
    }
// let myArray = [3, 6, 8, 1]
//     console.log(shuffleArray(myArray))