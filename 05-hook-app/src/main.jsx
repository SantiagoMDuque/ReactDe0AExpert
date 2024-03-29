import React from 'react';
import ReactDOM  from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import './index.css'
import { HooksApp } from './HooksApp';
import { CounterApp } from './01-useState/CounterApp';
import { CounterWithCustomHook } from './01-useState/CounterWithCustomHook';
import { SimpleForm } from './02-useEffect/SimpleForm';
import { FormWithCustomHook } from './02-useEffect/FormWithCustomHook';
import { MultipleCustomHooks } from './03-examples/MultipleCustomHooks';
import { FocusScreen } from './04-useRef/FocusScreen';
import { Layout } from './05-useLayautEffect/Layout';
import { Memorize } from './06-memos/Memorize';
import { MemoHook } from './06-memos/MemoHook';
import { CallBackHook } from './06-memos/CallBackHook';
import { } from './08-reducer/intro-reducer'
import { TodoApp } from './08-reducer/TodoApp';
import { MainApp } from './09-useContext/MainApp';

ReactDOM.createRoot(document.getElementById('root')).render(
    <BrowserRouter>
         {/* <React.StrictMode> */}
            <MainApp/>
        {/* </React.StrictMode> */}
    </BrowserRouter>
) 