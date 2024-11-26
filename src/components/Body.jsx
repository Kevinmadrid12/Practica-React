import Planta from '../images/1400x1400-plantas-1-768x771.jpg';

const Body = (props) =>{
    return(
        <main className="flex flex-wrap mb-20 mx-36">
        <aside className="w-full lg:w-1/4 px-5 py-5 font-semibold">
            <span className="py-5">Categorías</span>
            <div className="pt-5 text-sm">
                <ul className="text-gray-500">
                    <li className="pb-3"><a href="" className="hover:text-black">Árboles y Arbustos</a> (1)</li>
                    <li className="pb-3"><a href="" className="hover:text-black">Bonsáis</a> (1)</li>
                    <li className="pb-3"><a href="" className="hover:text-black">Cactus</a> (1)</li>
                    <li className="pb-3"><a href="" className="hover:text-black">Plantas de Exterior</a> (1)</li>
                    <li className="pb-3"><a href="" className="hover:text-black">Plantas de Interior</a> (1)</li>
                    <li className="pb-3"><a href="" className="hover:text-black">Plantas Florales</a> (1)</li>
                    <li className="font-bold text-xs"><a href="">See More</a></li>
                </ul>
            </div>
            <br/>
            <div className="border-t-2 border-gray-300 mb-5">
                <div className="pt-3 text-base">
                    <span>Precio</span>
                </div>
                <ul>
                    <li className="flex items-center text-gray-500 hover:text-black">
                        <input type="checkbox" className="w-5 h-5 text-black border-gray-300 mr-3"/> 0 - $100.00
                    </li>
                    <li className="flex items-center text-gray-500 hover:text-black">
                        <input type="checkbox" className="w-5 h-5 text-black border-gray-300 mr-3"/> $100.00 - $200.00
                    </li>
                    <li className="flex items-center text-gray-500 hover:text-black">
                        <input type="checkbox" className="w-5 h-5 text-black border-gray-300 mr-3"/> $250.00+
                    </li>
                </ul>
                <div className="mt-4 flex space-x-2">
                    <input type="text" placeholder="Min" className="w-14 h-10 border-2 border-gray-300 text-center"/>
                    <span className="text-gray-400">-</span>
                    <input type="text" placeholder="Max" className="w-14 h-10 border-2 border-gray-300 text-center"/>
                    <button className="bg-green-700 text-white w-20 h-10 text-center">Apply</button>
                </div>
            </div>
            <div className="border-t-2 border-gray-300 pb-4">
                <div className="pt-3 text-base">
                    <span>Color</span>
                </div>
                <div className="mt-4 flex space-x-2">
                    <input type="text" placeholder="Morado" className="w-24 h-10 border-2 border-gray-300 text-center"/>
                    <input type="text" placeholder="Rosa" className="w-20 h-10 border-2 border-gray-300 text-center"/>
                    <input type="text" placeholder="Verde" className="w-20 h-10 border-2 border-gray-300 text-center"/>
                </div>
            </div>
            <div className="border-t-2 border-gray-300 pb-6 border-b-2">
                <div className="pt-4 text-base">
                    <span>Valoración de los clientes</span>
                </div>
                <ul className="pt-3">
                    <li className="flex items-center text-gray-500 hover:text-black text-sm">
                        <input type="checkbox" className="w-5 h-5 text-black border-gray-300 mr-3"/>
                        <i className="text-xs text-yellow-500 fa-solid fa-star"></i>
                        <i className="text-xs text-yellow-500 fa-solid fa-star"></i>
                        <i className="text-xs text-yellow-500 fa-solid fa-star"></i>
                        <i className="text-xs text-yellow-500 fa-solid fa-star"></i>
                        <i className="text-xs text-yellow-500 fa-solid fa-star"></i>
                        5
                    </li>
                </ul>
            </div>
        </aside>
        <section className="px-2 py-2 w-full md:w-3/4">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4 mb-5">
                <div className="p-2 hover:border-2 hover:shadow-2xl">
                    <div className="bg-white rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img src={Planta} className="w-full h-48 object-cover" alt="Product image" />
                        </div>
                        <div className="py-3 px-4">
                            <h1 className="text-justify text-lg text-gray-600 font-semibold mb-1">1 Color</h1>
                            <p className="text-base text-justify mb-5">{props.name}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">${props.price}</span>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-white w-full bg-green-800 hover:bg-green-900">Añadir al carrito</button>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-green-700 border-2 border-green-900 w-full">Vista rápida</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 hover:border-2 hover:shadow-2xl">
                    <div className="bg-white rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img src={Planta} className="w-full h-48 object-cover" alt="Product image" />
                        </div>
                        <div className="py-3 px-4">
                            <h1 className="text-justify text-lg text-gray-600 font-semibold mb-1">1 Color</h1>
                            <p className="text-base text-justify mb-5">{props.name}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">${props.price}</span>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-white w-full bg-green-800 hover:bg-green-900">Añadir al carrito</button>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-green-700 border-2 border-green-900 w-full">Vista rápida</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 hover:border-2 hover:shadow-2xl">
                    <div className="bg-white rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img src={Planta} className="w-full h-48 object-cover" alt="Product image" />
                        </div>
                        <div className="py-3 px-4">
                            <h1 className="text-justify text-lg text-gray-600 font-semibold mb-1">1 Color</h1>
                            <p className="text-base text-justify mb-5">{props.name}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">${props.price}</span>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-white w-full bg-green-800 hover:bg-green-900">Añadir al carrito</button>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-green-700 border-2 border-green-900 w-full">Vista rápida</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 hover:border-2 hover:shadow-2xl">
                    <div className="bg-white rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img src={Planta} className="w-full h-48 object-cover" alt="Product image" />
                        </div>
                        <div className="py-3 px-4">
                            <h1 className="text-justify text-lg text-gray-600 font-semibold mb-1">1 Color</h1>
                            <p className="text-base text-justify mb-5">{props.name}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">${props.price}</span>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-white w-full bg-green-800 hover:bg-green-900">Añadir al carrito</button>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-green-700 border-2 border-green-900 w-full">Vista rápida</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 hover:border-2 hover:shadow-2xl">
                    <div className="bg-white rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img src={Planta} className="w-full h-48 object-cover" alt="Product image" />
                        </div>
                        <div className="py-3 px-4">
                            <h1 className="text-justify text-lg text-gray-600 font-semibold mb-1">1 Color</h1>
                            <p className="text-base text-justify mb-5">{props.name}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">${props.price}</span>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-white w-full bg-green-800 hover:bg-green-900">Añadir al carrito</button>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-green-700 border-2 border-green-900 w-full">Vista rápida</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 hover:border-2 hover:shadow-2xl">
                    <div className="bg-white rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img src={Planta} className="w-full h-48 object-cover" alt="Product image" />
                        </div>
                        <div className="py-3 px-4">
                            <h1 className="text-justify text-lg text-gray-600 font-semibold mb-1">1 Color</h1>
                            <p className="text-base text-justify mb-5">{props.name}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">${props.price}</span>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-white w-full bg-green-800 hover:bg-green-900">Añadir al carrito</button>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-green-700 border-2 border-green-900 w-full">Vista rápida</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="p-2 hover:border-2 hover:shadow-2xl">
                    <div className="bg-white rounded-lg">
                        <div className="overflow-hidden rounded-lg">
                            <img src={Planta} className="w-full h-48 object-cover" alt="Product image" />
                        </div>
                        <div className="py-3 px-4">
                            <h1 className="text-justify text-lg text-gray-600 font-semibold mb-1">1 Color</h1>
                            <p className="text-base text-justify mb-5">{props.name}</p>
                            <div className="flex justify-between items-center">
                                <span className="font-semibold">${props.price}</span>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-white w-full bg-green-800 hover:bg-green-900">Añadir al carrito</button>
                            </div>
                            <div className="pt-2">
                                <button type="button" className="px-3 py-2 font-semibold text-green-700 border-2 border-green-900 w-full">Vista rápida</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </main>
    );
}

export default Body;