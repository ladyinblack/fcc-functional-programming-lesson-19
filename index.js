// Import stylesheets
import './style.css';

// Write Javascript code!
const appDiv = document.getElementById('app');
appDiv.innerHTML = `<h1>Split a String into an Array Using the split Method</h1>`;

/** TODO:
 * Use the split method inside the splitify function to split str into an array of words.  The function should return the array.  Note that the words are not always separated by spaces, and the array should not contain punctuation.
 * 
 function splitify(str) {
   // Only change code below this line 
 
   // Only change code above this line
 }
 
 splitify("Hello World,I-am code");
 */

function splitify(str) {
  // Only change code below this line
  return str.split(/\W/);
  // Only change code above this line
}

console.log(splitify('Hello World,I-am code'));
console.log(splitify('Earth-is-our home'));
console.log(splitify('This.is.a-sentence'));
