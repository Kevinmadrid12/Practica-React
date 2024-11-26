const Menu = () =>{
    return(
        <div className="flex flex-col pb-4 pt-4 mt-20"> 
        <div className="w-full text-center flex items-center justify-center font-semibold pb-2">
            <h3>Ver por Categoría</h3>
        </div>
        <div className="w-full flex flex-wrap justify-center items-center">
            <a href="" className="bg-black w-40 pt-2 text-center h-12 text-white mb-2 md:mb-0">
                <span>Ver todo</span>
            </a>
            <a href="" className="bg-gray-300 w-40 pt-2 text-center h-12 hover:bg-black hover:text-white mb-2 md:mb-0 md:ml-6">
                <span>Árboles y Arbustos</span>
            </a>
            <a href="" className="bg-gray-300 w-40 pt-2 text-center h-12 hover:bg-black hover:text-white mb-2 md:mb-0 md:ml-6">
                <span>Bonsáis</span>
            </a>
            <a href="" className="bg-gray-300 w-40 pt-2 text-center h-12 hover:bg-black hover:text-white mb-2 md:mb-0 md:ml-6">
                <span>Cactus</span>
            </a>
            <a href="" className="bg-gray-300 w-40 pt-2 text-center h-12 hover:bg-black hover:text-white mb-2 md:mb-0 md:ml-6">
                <span>Plantas de Exterior</span>
            </a>
            <a href="" className="bg-gray-300 w-40 pt-2 text-center h-12 hover:bg-black hover:text-white mb-2 md:mb-0 md:ml-6">
                <span>Plantas de Interior</span>
            </a>
        </div>
    </div>
    );
}

export default Menu;