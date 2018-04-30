// Arrays
const notes = [{}, {
    title: 'My Next Trip',
    body: 'i would like to go spain'
},{
    title: 'Habbits to work on' ,
    body: 'Exercise.Eat a bit  better'
}, {
    title: 'Office modification' ,
    body: 'Get a New seat'
}];

// Deleting and Inserting an Array element from Last 
// notes.push('Note 4'); //Inserting 
// notes.pop();           // Deleting

// Deleting and Inserting an Array element from first
//  notes.unshift("First note"); // Inserting
//  notes.shift();              // Deleting 

// notes.splice(1,1,'New Note Two'); // starts at index " 1" and delete "1" element and inserts "new element"
// notes.splice(1, 0, 'New Note Two.1'); // starts at index " 1" and delete "nothing"(As it cannot go back) element and inserts "new element"
// notes.splice(1,2);


// notes[2] = 'New Note 2';
console.log(notes.length);
console.log(notes); // retriving elements from font

// console.log(notes[notes.length - 2]); // retriving elements from last 

console.log('-----------------------------------------------');

// console.log(notes.indexOf('Note 2'));
// console.log(notes.indexOf('Note'))

