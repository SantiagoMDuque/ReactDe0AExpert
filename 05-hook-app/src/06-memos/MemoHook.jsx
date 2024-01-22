import { useMemo, useState } from 'react';
import { useCounter } from '../Hooks'


const heavyStuff = ( iterationNumber = 100 ) => {
    for( let i = 0; i< iterationNumber; i++){
        console.log('ahí vamos...')
    }
    return `${iterationNumber} iteraciones Realizadas`
}

export const MemoHook = () => {

    const { counter, increment} = useCounter(500);
    const [ show, setShow] = useState(true);

    // useMemo(()=>{
        
    // })

    const memorizedValue = useMemo(() => heavyStuff(counter), [counter])

    return (
        <>
        <h1>Counter: <small> {counter} </small></h1>

        <hr />
        <h4>{memorizedValue}</h4>

        <button
            className='btn btn-primary'
            onClick={ () => increment() }
        >
            +1
        </button>
        <button 
            className='btn btn-outline-primary'
            onClick={ ()=> setShow(!show)}
        > 
            Show/hide { JSON.stringify(show)}
        </button>
        </>
    )
}
