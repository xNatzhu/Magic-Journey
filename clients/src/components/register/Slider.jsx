function Slider() {
    return(
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1563663170139-88d80d6387ac?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1965&q=80)" }}>
            <div className="absolute bg-black opacity-80 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
                <h1 className="text-5xl font-bold text-left tracking-wide">Forma Parte de Nuestra Comunidad</h1>
                <p className="text-3xl my-4">Regístrate hoy y sé parte de nuestras aventuras únicas en todo el planeta.</p>
            </div>
        </div>
    )
}

export default Slider