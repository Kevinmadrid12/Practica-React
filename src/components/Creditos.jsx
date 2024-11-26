import Logo from '../images/images.png'

const Creditos = () =>{
    return(
        <section className="flex flex-col md:flex-row mx-5 md:mx-36">
        <div className="border-t-2 border-gray-300 flex-1 mb-4 md:mb-0">
            <div>
                <img src={Logo} className="w-40" alt=""/>
            </div>
            <div className="text-xl font-semibold">
                <h5>MasVerde</h5>
            </div>
            <div className="text-gray-500">
                <i className="pr-5 pl-3 fa-brands fa-square-facebook fa-lg"></i>
                <i className="pr-5 fa-brands fa-linkedin fa-lg"></i>
                <i className="pr-5 fa-brands fa-instagram fa-lg"></i>
                <i className="pr-5 fa-brands fa-whatsapp fa-lg"></i>
            </div>
        </div>
        <div className="border-t-2 border-gray-300 flex-1 mb-4 md:mb-0">
            <div className="text-lg">
                <h3 className="font-semibold">Guía de Compra</h3>
            </div>
            <div className="pt-2">
                <ul>
                    <li className="pb-2 text-sm">Inicio</li>
                    <li className="pb-2 text-sm">Tienda</li>
                    <li className="pb-2 text-sm">Emprendedores</li>
                    <li className="pb-2 text-sm">Inicio de Sesión</li>
                </ul>
            </div>
        </div>
        <div className="border-t-2 border-gray-300 flex-1 mb-4 md:mb-0">
            <div className="text-lg">
                <h3 className="font-semibold">Conócenos</h3>
            </div>
            <div className="pt-2">
                <ul>
                    <li className="pb-2 text-sm">Sobre Nosotros</li>
                    <li className="pb-2 text-sm">Contáctenos</li>
                    <li className="pb-2 text-sm">Tienda</li>
                    <li className="pb-2 text-sm">Legal</li>
                </ul>
            </div>
        </div>
        <div className="border-t-2 border-gray-300 flex-1 mb-4 md:mb-0">
            <div className="text-lg">
                <h3 className="font-semibold">Términos y Condiciones</h3>
            </div>
            <div className="pt-2">
                <ul>
                    <li className="pb-2 text-sm">Condiciones de uso</li>
                    <li className="pb-2 text-sm">Política de Privacidad</li>
                    <li className="pb-2 text-sm">Política de cookies</li>
                </ul>
            </div>
        </div>
    </section>
    );
}
export default Creditos;