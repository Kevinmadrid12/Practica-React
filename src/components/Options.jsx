

const Options = () =>{
    return (
         <div className="flex flex-col md:flex-row justify-between items-center mx-36 pb-4 border-t-2 border-b-2 border-gray-300 px-4 md:px-48 pt-3">
        <div className="flex items-center mb-2 md:mb-0">
            <p className="text-gray-500 mr-1">
                <i className="fa-solid fa-arrow-right-arrow-left"></i>
                Filtro
            </p>
        </div>
        <div className="mb-2 md:mb-0">
            <p className="text-gray-500 mx-2">
                11 Resultados
            </p>
        </div>
        <div className="flex items-center mb-2 md:mb-0">
            <p className="text-gray-500 mr-1">Ordenar por:</p>
            <select className=" border-gray-300 w-full md:w-56 border-0">
                <option value="">Predeterminado</option>
                <option value="">Popularidad</option>
                <option value="">Calificación promedio</option>
                <option value="">Más reciente</option>
                <option value="">Precio: de menor a mayor</option>
                <option value="">Precio: de mayor a menor</option>
            </select>
        </div>
    </div>
    );
}

export default Options;