//challenge 2

const todos = [{
    text: 'Make break fast',
    completed: 'yes'
}, {
    text: 'Get Ready',
    completed: 'no'
}, {
    text: 'Walk the Dog ',
    completed: 'yes'
}, {
    text: 'Play some games',
    completed: 'yes'
}, {
    text: 'Go for a Walk',
    completed: 'no'
}]

// using sorting 
const sortTodo = function(todos){
    todos.sort(function(a, b){
    if(a.completed.toLowerCase() < b.completed.toLowerCase()){
        return -1
    } else if (b.completed.toLowerCase() < a.completed.toLowerCase()){
        return 1
    }else {
        return 0;
    }
})
}


// challenge using filter
const getThingsTodo = function(todo){
return todos.filter(function(todo){
   return todo.completed === 'no'

})
}
console.log(getThingsTodo(todos));

// const deleteTodo = function(text, status){
//     const index = text.findIndex(function(x, index){
//         return x.text.toLowerCase() === status.toLowerCase();
        
//     })
//     console.log(index);
//    if(index > -1){
//        text.splice(index, 1);
//    }
// }

// deleteTodo(todos, 'Get ready')
// console.log(todos);

// challenge 1

// const todo = ['Make break fast', 'Get Ready', 'Walk the Dog',
//                         'Play some Game', 'Go for a Walk'];


// console.log(`You Have ${todo.length} things to do `);
// /*
// for(let y = 0; y < todo.length; y++) {
//     let z = todo[y]
//    console.log(z);
// }
// */

// console.log(` Todo: ${todo[0]}`);
// console.log(` Todo: ${todo[todo.length - 2]}`); // to print last from second element
// console.log("--------------------------------------------");

// // challenge 2

// console.log(todo);//delete 3rd item
// console.log(todo.splice(2,1));
// todo.push('New Todo ');  // Add an element at last
// todo.shift();
// //console.log(todo);
// console.log('-------------------------------------------------')
// //challenge
// todo.forEach(function(item, index){
//     console.log( `${index + 1}. The First item is '${item}'`);
// })

// console.log('-----------------------------------------------');
// console.log(todo);

// console.log('-----------------------------------------------');

// //challange 

// for(let x =0; x < todo.length; x++){
//     console.log(`${x + 1}. ${todo[x]}`);
// }
