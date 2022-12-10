// Write your solution here!

const cats = ["Milo", "Otis", "Garfield"];

function destructivelyAppendCat(name) {
    if (!window.cats){
        window.cats = [];
    }
    window.cats.push(name);
}



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
      window.cats = [];
    }
  
    // Use the shift() method to remove the first element from the array
    window.cats.shift(name);
  
    // Return the removed element
  }
  function appendCat(name) {
    // Create a new array by copying the existing cats array
    var newCats = cats.slice();
    // Use the push method to add the new cat to the new array
    newCats.push(name);
    // Return the new array
    return newCats;
  }
  function prependCat(name,) {
    // Create a new array by copying the elements of the original array
    let newCats = [...cats];
  
    // Add the new cat to the beginning of the new array
    newCats.unshift(name);
  
    // Return the new array
    return newCats;
  }
  function removeLastCat(name) {
    let newCats = cats.slice(name); // create a copy of the original array
    newCats.splice(-1, 1); // remove the last element
    return newCats;
  }
  function removeFirstCat(name) {
    // Make a copy of the original array so we don't modify it directly
    let newCats = cats.slice();
    
    // Use the shift() method to remove the first element from the array
    let firstCat = newCats.shift();
    
    // Return the new array with the first cat removed
    return newCats;
  }
  
  
  
  
  
  
