import { useState } from "react";

const Counter = () =>{
    const [counter, setcounter] = useState(0);

    const incrementCounter = () =>{
        setcounter(counter + 1);
    };

    const incrementCounterdeDos = () =>{
        setcounter(counter + 2);
    };

    const reiniciarCounter = () =>{
        setcounter(0);
    };

    return (
        <div>
            <p>Contador: { counter }</p>
            <button onClick={incrementCounter}>Incrementar - </button>
            <button onClick={incrementCounterdeDos}> Incrementar de 2 en 2 - </button>
            <button onClick={reiniciarCounter}> Reiniciar </button>
        </div>
    );
}

export default Counter;