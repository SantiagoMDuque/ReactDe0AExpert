import { useEffect, useState } from "react"
import { useForm } from "../Hooks/useForm";

export const FormWithCustomHook = () => {
    const { formState, onInputChange, username , email, password, onResetForm } = useForm({
        username: '',
        email: '',
        password: ''
    });

    useEffect( () => {
        //console.log('useEffect called')
    },[]);

    useEffect( () => {
    },[formState]);

    useEffect( () => {
        //console.log('email changed')
    },[email]);

    return(
        <>
            <h1> FormWithCustomHook </h1>
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
                value = { email }
                onChange={ onInputChange }
            />  

            <input 
                type="password"
                className="form-control mt-2"
                name="password" 
                placeholder="contraseña"
                value = { password }
                onChange={ onInputChange }
            />

            <button onClick={ onResetForm } className="btn btn-primary mt-2" > Borrar </button>
        </>
    )
}