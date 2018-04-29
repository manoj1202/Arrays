// challenge 1

const todo = ['Make break fast', 'Get Ready', 'Walk the Dog',
                        'Play some Game', 'Go for a Walk'];


console.log(`You Have ${todo.length} things to do `);
/*
for(let y = 0; y < todo.length; y++) {
    let z = todo[y]
   console.log(z);
}
*/

console.log(` Todo: ${todo[0]}`);
console.log(` Todo: ${todo[todo.length - 2]}`); // to print last from second element

// challenge 2

//delete 3rd item
todo.splice(2,1);
