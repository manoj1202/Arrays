// Arrays
const notes = ['Note 1', 'Note 2', 'Note 3'];

// Deleting and Inserting an Array element from Last 
// notes.push('Note 4'); //Inserting 
// notes.pop();           // Deleting

// Deleting and Inserting an Array element from first
//  notes.unshift("First note"); // Inserting
//  notes.shift();              // Deleting 

notes.splice(1,1,'New Note Two');

console.log(notes.length);
console.log(notes); // retriving elements from font

// console.log(notes[notes.length - 2]); // retriving elements from last 
