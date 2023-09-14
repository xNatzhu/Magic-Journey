import "./css/Login.css"

function Slider() {
    return(
        <div className="lg:flex w-1/2 hidden bg-gray-500 bg-no-repeat bg-cover relative items-center" style={{ backgroundImage: "url(https://images.unsplash.com/photo-1671767054785-e9bee988f6cf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1773&q=80)" }}>
            <div className="absolute bg-black opacity-10 inset-0 z-0"></div>
            <div className="w-full px-24 z-10">
                <h1 className="text-5xl font-bold text-left tracking-wide">Explora, sueña y descubre</h1>
                <p className="text-3xl my-4">Únete a nosotros para vivir experiencias únicas en todo el mundo.</p>
            </div>
        </div>
    )
}

export default Slider