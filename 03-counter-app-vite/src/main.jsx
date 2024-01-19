import React from 'react';
import ReactDOM  from 'react-dom/client';
//import HelloWorldApp from './HelloWorldApp';
import FistApp from './FistApp';
import CounterApp from './CounterApp';
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
    <React.StrictMode>
        <CounterApp value={5}/>
        {/* <FistApp title={"hola, soy vegeta"}/> */}
    </React.StrictMode>
) 