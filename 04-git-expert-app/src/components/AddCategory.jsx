import { useState } from "react";
import PropTypes from 'prop-types';

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); 
        if(inputValue.trim().length <= 0) return;

        onNewCategory( inputValue.trim() )
        setInputValue('');
    }

    return(
        <form onSubmit={ onSubmit } aria-label="form">
            <input 
                type="text" 
                value={inputValue} 
                placeholder="Buscar Gifs"
                onChange={ ({target}) => setInputValue(target.value) }
            />
        </form>
       
    )
}

AddCategory.prototype = {
    onNewCategory: PropTypes.func.isRequired
}