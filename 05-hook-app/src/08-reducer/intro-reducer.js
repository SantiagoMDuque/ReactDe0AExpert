

const initialState = [{
    id:1,
    todo: 'recoletar la piedra del alma',
    done: false
}];

const todoReducer = (state = initialState, action = {}) => {
    if( action.type === '[TODO] add todo'){
        return [...state, action.payload];
    }
    return state;
}

let todos = todoReducer();

const newTodo = {
    id:2,
    todo: 'recoletar la piedra del almaReculectar la piedra del poder',
    done: false
}

const addTodoActcion = {
    type: '[TODO] add todo',
    payload: newTodo
}

todos = todoReducer( todos, addTodoActcion);

console.log({state: todos});