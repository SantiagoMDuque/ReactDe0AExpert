import { useCallback, useState } from "react"
import { ShowIncrement } from "./ShowIncrement"

export const CallBackHook = () => {

    const [ counter, setCounter] = useState(10);

    const incrementFather = useCallback((value) =>{
        setCounter((counter) => counter + value);
    },[])

    return (
        <>
            <h1>useCallback hook: { counter }</h1>
            <br />

            <ShowIncrement increment={ incrementFather }/>
        </>
    )
}
