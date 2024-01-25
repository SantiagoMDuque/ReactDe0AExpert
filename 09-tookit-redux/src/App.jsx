import { useDispatch, useSelector } from "react-redux";
import { useState } from "react"
import { decrement, increment, incrementBy2 } from "./store/slices/counter/counterSlices";

export const App = () => {
    
    const dispatch = useDispatch();
    const { counter } = useSelector( state => state.counter)



    const [ count, setCount] =useState(0);
    return (
        <div className="App">
            <p> Hello vite + React!</p>
            <p>count is: {counter}</p>
            <p>
                <button type="button" onClick={()=> dispatch( increment() )}>
                    increment
                </button>
                <button type="button" onClick={()=> dispatch( decrement() )}>
                    decrement
                </button>
                <button type="button" onClick={()=> dispatch( incrementBy2(2) )}>
                    increment by 2
                </button>
            </p>
        </div>
    )
}
