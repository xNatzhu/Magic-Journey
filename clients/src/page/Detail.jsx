import { useState, useEffect} from "react";
import {useParams}  from "react-router-dom"
import axios from "axios";
import { useDispatch, useSelector } from 'react-redux';
import { get_itinerary } from "../store/actions/itinerary";
export default function Detail() {
    const {id} = useParams();
    const [city, setCity] = useState([]);
    const [filteredItinerary, setFilteredItinerary] = useState([]);
    


    const dispatch = useDispatch();
    const listItinerary = useSelector((state) => state.itineraryReducer.itinerary);


    useEffect(() => {
        const urlCityApi = "http://localhost:3000/api/city/"+id;
        axios.get(urlCityApi) 
            .then(res => {
                setCity(res.data); // Actualizar el estado con los datos obtenidos
                console.log(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []);

    useEffect(() => {
        // Dispatch de la acción para obtener los itinerarios
        dispatch(get_itinerary());

        // Filtrar los itinerarios cuando se obtengan los datos
        const filterItinerary = listItinerary.filter((itinerary) => {
            return itinerary.city._id === id;
        });
        console.log("Probando", filterItinerary);
        setFilteredItinerary(filterItinerary)
        console.log("Estado:  ", filteredItinerary);
    }, [id, dispatch]);


    return(
        <>
            <div style={{ backgroundImage: `url(${city.img})` }}>
            <div className="background-slider pt-[30px]">
            <div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 md:px-12 lg:px-24 lg:py-24">
            <div className="flex flex-wrap items-center mx-auto max-w-7xl">
                <div className="w-full lg:max-w-lg lg:w-1/2 rounded-xl">
                <div>
                    <div className="relative w-full max-w-lg">
                    <div className="absolute top-0 rounded-full -left-4 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob"></div>

                    <div className="absolute rounded-full  -bottom-24 right-20 w-72 h-72 mix-blend-multiply filter blur-xl opacity-70 animate-blob animation-delay-4000"></div>
                    <div className="relative">
                        <img
                        className="object-cover object-center mx-auto rounded-lg shadow-2xl"
                        alt="hero"
                        src={city.img}
                        />
                    </div>
                    </div>
                </div>
                </div>
                <div className="flex flex-col items-start mt-12 mb-16 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
                <span className="mb-4 text-xs font-bold tracking-widest text-[#9DC08B] uppercase"> {city.country} </span>
                <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-neutral-200 md:text-7xl lg:text-5xl">
                {city.name}
                </h1>
                <p className="mb-8 text-base leading-relaxed text-left text-gray-300">
                {city.description}
                </p>
                </div>
            </div>
            </div>
            </div>
            </div>
        <div className="bg-[#212121] pb-[20px] flex items-center justify-center ">
            
            
    {filteredItinerary.map((element) => (
        <article
          key={element._id}
          className="rounded-lg border border-gray-100 bg-white p-4 shadow-sm transition hover:shadow-lg sm:p-6 w-[300px]"
        >
    <span className="inline-block rounded p-2">
    <img className="w-[60px] h-[60px] rounded-full" src={element.authorImg} alt="" />
    </span>

          <a href="#">
            <h3 className="mt-0.5 text-lg font-medium text-gray-900">
              {element.name}
            </h3>
          </a>

          <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-500">
            {element.description}
          </p>
            <div>
            
            <span className="inline-flex items-center justify-center rounded-full bg-[#9DC08B] px-2.5 py-0.5 text-[#fff] mt-[10px] mb-[10px]">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-currency-exchange" viewBox="0 0 16 16">
                <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z"/>
            </svg>
            <p className="whitespace-nowrap text-sm px-[10px]">Precio: ${element.price}</p>
            </span>
            </div>

          <a
            href="#"
            className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-[#9DC08B]"
          >
            Ver mas

            <span
              aria-hidden="true"
              className="block transition-all group-hover:ms-0.5 rtl:rotate-180"
            >
              &rarr;
            </span>
          </a>
        </article>
      ))}
            </div>
        </>
    )
}