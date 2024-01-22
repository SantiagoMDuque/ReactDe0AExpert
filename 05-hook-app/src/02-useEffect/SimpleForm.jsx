import { useEffect, useState } from "react"
import { Message } from "./Message";

export const SimpleForm = () => {

    const [formState, setFormState] = useState({
        username: 'strider',
        email: 'santiago@google.com'
    });

    const { username, email } = formState;

    const onInputChange = ({target}) => {
        const { name,value } = target
        setFormState( {
            ...formState,
            [name]: value 
        });
    };

    useEffect( () => {
        //console.log('useEffect called')
    },[]);

    useEffect( () => {
        //console.log('formState Changed')
    },[formState]);

    useEffect( () => {
        //console.log('email changed')
    },[email]);

    return(
        <>
            <h1> Formulario Simple </h1>
            <hr />

            <input 
                type="text"
                className="form-control"
                name="username" 
                placeholder="userName"
                value={ username }
                onChange={ onInputChange }
            />

            <input 
                type="email"
                className="form-control mt-2"
                name="email" 
                placeholder="santiago@google.com"
                email = { email }
                onChange={ onInputChange }
            />  

            {
                (username === 'strider2') && <Message />
            }
        </>
    )
}