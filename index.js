// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    
    cats.push(name);
}

destructivelyAppendCat("Ralph");
console.log(cats);

function destructivelyPrependCat(name) {
    // Create an array of cats if it doesn't already exist
    if (!window.cats) {
      window.cats = [];
    }
  
    // Use the unshift method to add the new cat to the beginning of the array
    window.cats.unshift(name);
  }
  function destructivelyRemoveLastCat(name) {
    // Use the pop() method to remove the last element from the array
    if (!window.cats) {
        window.cats = [];
      }
    
      // Use the unshift method to add the new cat to the beginning of the array
      window.cats.pop(name);
  }
  function destructivelyRemoveFirstCat(name) {
    // Check if the array is empty
    if (!window.cats) {
      // If the array is empty, there is nothing to remove, so return
      windows.cats = [];
    }
  
    // Use the shift() method to remove the first element from the array
    windows.cats.shift(name);
  
    // Return the removed element
  }
  
  
  
