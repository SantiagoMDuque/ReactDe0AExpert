import React from 'react';
import ReactDOM  from 'react-dom/client';
import './styles.css'
import { App } from './App';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp';
import { TodoApp } from './TodoApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    // <React.StrictMode>
        <Provider store={store}>
            <TodoApp/>
        </Provider>
    /* </React.StrictMode> */
) 
