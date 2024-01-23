import { TodoList, TodoAdd } from "../components";
import { useTodos } from "../Hooks";

export const TodoApp = () => {

    const { todos, todosCount, pedingTodosCount, handleDeleteTodo, handleToggleTodo, handleNewTodo } = useTodos()

    return (
        <>
            <h1> TodoApp { todosCount } <small>pendientes: { pedingTodosCount }</small></h1>
            <hr />
            <div className="row">
                <div className="col-7">
                    <TodoList 
                        todos={ todos } 
                        onDeleteTodo={ handleDeleteTodo }
                        onToggleTodo={ handleToggleTodo }
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={ handleNewTodo }/>
                </div>
            </div>     
        </>
    )
}

