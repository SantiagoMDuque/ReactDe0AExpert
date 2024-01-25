import React from 'react';
import ReactDOM  from 'react-dom/client';
import './styles.css'
import { App } from './App';
import { store } from './store/store'
import { Provider } from 'react-redux'
import { PokemonApp } from './PokemonApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <Provider store={store}>
            <PokemonApp/>
        </Provider>
    </React.StrictMode>
) 
