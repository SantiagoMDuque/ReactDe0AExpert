import { useGetTodosQuery } from "./store/apis/todosApi"

export const TodoApp = () => {

    const { data, isLoading } = useGetTodosQuery();

    return (
        <>
        <h1>Todos - RTK Query</h1>
        <hr />
        <h4>isLoading...</h4>

        <pre>...</pre>

        <button>
            Next Todo
        </button>
        </>
    )
}
