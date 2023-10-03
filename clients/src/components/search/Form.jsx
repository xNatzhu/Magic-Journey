import "./css/Form.css"
export default function Form({onSearch}) {
    
    return(
      <div className="background-form">
        <div className="effect-form">
            <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-lg">
              <h1 className="text-center text-2xl font-bold text-[#9DC08B]  sm:text-3xl">
              ¡Descubre tu ciudad favorita!
              </h1>
      
              <p className="mx-auto mt-4 max-w-md text-center text-gray-300">
                Embárcate en un emocionante viaje a través de las maravillas urbanas mientras exploras y te sumerges en la esencia de tu ciudad favorita. 
              </p>
      
              <form
                action=""
                className="mb-0 mt-6 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
              >
                <div>
                  <label htmlFor="text" className="sr-only">Search</label>
      
                  <div className="relative">
                    <input
                      type="text"
                      className="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                      placeholder="Cordoba"
                      name="keyword"
                      onChange={(event) => onSearch(event.target.value)}
                    />
      
                    <span className="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-search" viewBox="0 0 16 16">
                            <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                        </svg>
                    </span>
                  </div>
                </div>
                <button
                  type="submit"
                  className="block w-full rounded-lg bg-[#9DC08B] px-5 py-3 text-sm font-medium text-white"
                >
                  Buscar
                </button>
              </form>
            </div>
          </div>
      </div>
    </div>
    )
}