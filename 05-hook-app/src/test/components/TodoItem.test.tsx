import React from 'react';
import { fireEvent, render, screen } from "@testing-library/react";
import { TodoItem } from "../../components/TodoItem";

describe('pruebas en <todoItem/>', () => {

    const todo = {
        id: 1,
        description: 'Piedra del alma',
        done: false
    };

    const onDeleteTodoMock = jest.fn();
    const onToggleTodoMock = jest.fn();
    
    beforeEach( ()=> jest.clearAllMocks() );

    test('debe de mostrar el todo pendiente de completar', () => {

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock }
            /> )
        const liElement = screen.getByRole('listitem');
        
        expect( liElement.className ).toBe('list-group-item d-flex justify-content-between');

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('align-self-center')
    })
    
    test('debe de mostrar el todo completado', () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock }
            /> )
        

        const spanElement = screen.getByLabelText('span');
        expect( spanElement.className ).toContain('text-decoration-line-through')
    })

    test('span debe de llamar el toggle cuando se hace click', () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock }
            /> )
        

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id);
    })

    test('span debe de llamar el toggle cuando se hace click', () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock }
            /> )
        

        const spanElement = screen.getByLabelText('span');
        fireEvent.click( spanElement );
        expect( onToggleTodoMock ).toHaveBeenCalledWith( todo.id);
    })

    test('span debe de llamar el delete cuando se hace click', () => {

        todo.done = true;

        render( 
            <TodoItem 
                todo={ todo } 
                onToggleTodo={ onToggleTodoMock} 
                onDeleteTodo={ onDeleteTodoMock }
            /> )
        

        const deletebutton = screen.getByRole('button');
        fireEvent.click( deletebutton );
        expect( onDeleteTodoMock ).toHaveBeenCalledWith( todo.id);
    })
  
})
