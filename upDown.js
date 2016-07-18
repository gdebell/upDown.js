/*Directions....
Up Down: Given an array of numbers, write a program that describes whether each number was higher, lower or even to the previous number.

Input: An array of numbers (e.g [6,3,5,4,3,4,4,5])

Output: An array of up down strings (e.g. ["down","up","down","down","up","even","up"])
*/

var arrayNum = [6, 3, 5, 4, 3, 4, 4, 5];
var outPut = [];

function upDown (array) {

  for (var i = 0; i < array.length; i ++ ) {
    var oldArray = array[i];
    var arrayNext = array[[i+1]];

    if (oldArray < arrayNext) {
      outPut.push('up');
      oldArray = arrayNext;
      arrayNext = arrayNext[[i+1]];
    }

    if (oldArray === arrayNext) {
      outPut.push('even');
      oldArray = arrayNext;
      arrayNext = arrayNext[[i+1]];
    }

    if (oldArray > arrayNext) {
      outPut.push('down');
      oldArray = arrayNext;
      arrayNext = arrayNext[[i+1]];
    }
  }
  return outPut;
}

console.log(upDown(arrayNum));
