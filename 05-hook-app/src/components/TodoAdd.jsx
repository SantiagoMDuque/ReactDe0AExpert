import { useState } from 'react';
import { useForm } from '../Hooks/useForm';

export const TodoAdd = ( {onNewTodo} ) => {

    const { onInputChange, onResetForm, description } = useForm({
        description: '',
    });

    const onClick = (event) => {
        event.preventDefault();
        if(description.length <= 0) return; 

        const newTodo = {
            id: new Date().getTime()*100,
            description: description,
            done: false,
        };

        onNewTodo(newTodo);
        onResetForm();
    }

    return (
        <>
            <form action="">
                
                <input 
                    type="text"
                    className="form-control"
                    name="description" 
                    placeholder="¿Que hay que hacer?"
                    value={ description }
                    onChange={ onInputChange }
                />
                <button
                    type="submit"
                    className="btn btn-outline-primary mt-1"
                    onClick={ (event) => onClick(event) }
                >
                    Agregar
                </button>
            </form>
        </>
    )
};
