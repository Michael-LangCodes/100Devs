const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appt',
        isCompleted: false
    }
]

// For 
for(let i = 0; i < todos.length; i++){
    console.log(todos[i].text);
}

// While
let i = 0;
while(i<10){
    console.log('While Loop Number: ${i}');
    i++;
}

//For of loop
for(let todo of todos){
    console.log(todo.text);
}

//foreach, filter
todos.forEach(function(todo){
    console.log(todo.text);
});

//map
const todoText = todos.map(function(todo){
    return todo.text;
});
console.log(todoText)

//filter + map
const todoCompleted = todos.filter(function(todo){
    return todo.isCompleted == true;
}).map(function(todo){
    return todo.text;
});

console.log(todoCompleted)