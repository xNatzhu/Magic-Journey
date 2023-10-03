import { useState, useEffect} from "react";
import { useParams } from 'react-router-dom';
import axios from "axios";
import CityCard from "../components/city/Card.jsx";
import Menu from "../components/city/Menu.jsx";
export default function Search() {
    const {keywords} = useParams();
    const [listCity, setListCity] = useState([]);
    const [filterCity, setFilterCity] = useState([])
    const [searchTerm, setSearchTerm] = useState('');
    useEffect(() => {
        const urlCityApi = "http://localhost:3000/api/citys";
        axios.get(urlCityApi) 
            .then(res => {
                setListCity(res.data); // Actualizar el estado con los datos obtenidos
                console.log(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });
    }, []); // Dejar el array de dependencias vacío para que se ejecute solo una vez

    useEffect(() => {
        setSearchTerm(keywords); // Actualizar el término de búsqueda con el valor de los parámetros
        if (keywords && listCity.length > 0) {
          const filteredCities = listCity.filter(city =>
            city.name.toLowerCase().includes(keywords.toLowerCase())
          );
          setFilterCity(filteredCities);
          console.log(filterCity);
          console.log("prueba", keywords);
        } else {
          setFilterCity([]);
        }
      }, [keywords, listCity]);
    return (

        <div className="w-full h-screen pt-[80px] bg-[#212121]">
        <Menu name={keywords}/>

            {filterCity.length === 0 ? (
                <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8 bg-[#212121] w-screen h-screen pt-[120px]">
                <div className="mx-auto max-w-lg">
                <h1 className="text-center text-2xl font-bold text-[#fff] sm:text-3xl">
                    No se encontraron ciudades que coincidan con: <span className="text-[#9DC08B]">{searchTerm}</span>
                </h1>
                <p className="mx-auto mt-4 max-w-md text-center text-gray-300">
                    Lo sentimos, no hemos encontrado resultados para la palabra buscada.
                </p>

                  </div>
                    
                </div>
            ) : (
                <div className="w-full h-screen pt-[80px] bg-[#212121]">
                    {filterCity.map((city) => (
                        <CityCard
                            key={city.id}
                            name={city.name}
                            description={city.description}
                            country={city.country}
                            img={city.img}
                            id={city._id}
                        />
                    ))}
                </div>
            )}

         </div>
    );
    
}