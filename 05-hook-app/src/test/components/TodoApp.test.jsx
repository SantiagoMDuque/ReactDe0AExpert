import { render, screen } from "@testing-library/react"
import { TodoApp } from "../../08-reducer/TodoApp"
import { useTodos } from './../../Hooks/useTodos'
jest.mock('./../../Hooks/useTodos')

describe('pruebas en todoApp', () => {

    useTodos.mockReturnValue({
        todos: [
            { id: 1, description: 'Todo #1', done: false},
            { id: 2, description: 'Todo #2', done: true},
        ],
        handleNewTodo: jest.fn(),
        handleDeleteTodo: jest.fn(),
        handleToggleTodo: jest.fn(),
        pedingTodosCount: 1,
        todosCount: 2
    })

    test('debe de mostrar el compoenente correctamente', () => {
        render( <TodoApp/>);

        expect( screen.getByText('Todo #1') ).toBeTruthy();
        expect( screen.getByText('Todo #2') ).toBeTruthy();
        expect( screen.getByRole('textbox') ).toBeTruthy();
    })
  
})
