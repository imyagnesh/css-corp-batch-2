let httpStatus = [
    { type: 'UPDATE_TODO' },
    { type: 'UPDATE_TODO' },
    { type: 'DELETE_TODO' },
    { type: 'LOAD_TODO' }
];


let addTodoStats = [];
let loadTodoStats = [];
let updateOrDeleteTodoStats = [];
const [loadTodoStatus, addTodoStatus, updateOrDeleteTodoStatus] = httpStatus.reduce((previousValue, currentValue, index) => {
    console.log(index);
    switch (currentValue.type) {
        case 'LOAD_TODO':
            loadTodoStats.push(currentValue);
            break;
        case 'DELETE_TODO':
        case 'UPDATE_TODO':
            updateOrDeleteTodoStats.push(currentValue);
            break;
        case 'ADD_TODO':
            addTodoStats.push(currentValue);
            break;

    }

    if (index == (httpStatus.length - 1)) {
        return [loadTodoStats, addTodoStats, updateOrDeleteTodoStats];
    }
    return previousValue.concat(loadTodoStats, addTodoStats, updateOrDeleteTodoStats);
}, []);
console.log(loadTodoStatus);
console.log(addTodoStatus);
console.log(updateOrDeleteTodoStatus);