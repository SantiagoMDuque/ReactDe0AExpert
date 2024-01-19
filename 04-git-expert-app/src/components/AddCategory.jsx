import { useState } from "react";

export const AddCategory = ({onNewCategory}) => {

    const [inputValue, setInputValue] = useState('');

    const onSubmit = (event) => {
        event.preventDefault(); 
        if(inputValue.trim().length <= 0) return;
        // setCategories((categorie) => [
        //     inputValue,
        //     ...categorie,
        // ])
        onNewCategory( inputValue.trim() )
        setInputValue('');
    }

    return(
        <form onSubmit={ onSubmit }>
            <input 
                type="text" 
                value={inputValue} 
                placeholder="Buscar Gifs"
                onChange={ ({target}) => setInputValue(target.value) }
            />
        </form>
       
    )
}