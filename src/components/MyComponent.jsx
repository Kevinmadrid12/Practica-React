import { useState } from "react";
import ChildComponent from "./ChildComponent";
import Counter from "./Counter";

const MyComponent = () =>{
    // const name = 'Jose Antonio Torrez';
    // const edad = 20;

    const [name, setName] = useState("Jose Antonio Torrez");
    const [edad, setEdad] = useState(20);

    const changeData = () =>{
        setName("Maria Campos Salazar");
        setEdad(19);
    }

    return(
        <>
        <div className="text-red-700">Soy el componente Padre</div>
        <div>Bienvenid@s</div>
        <ChildComponent name={name} edad={edad} />
        <button onClick={changeData}>Cambiar Nomnbre y Edad</button>
        <Counter/>
        </>
    );
}

export default MyComponent;