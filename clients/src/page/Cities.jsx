import { useDispatch, useSelector } from 'react-redux';
import {get_city}  from "../store/actions/city.js"
import { useEffect, useState } from "react";
import CityCard from "../components/city/Card.jsx";
import Form from "../components/search/Form.jsx";

export default function Cities() {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const dispatch = useDispatch();
    const listCity = useSelector((state) => state.citiesReducer.city);
    const [cities, setCities] = useState([]);
    const [filteredCities, setFilteredCities] = useState([]); // Estado para las ciudades filtradas
  
    useEffect(() => {
      dispatch(get_city()); // Despacha la acción get_city para obtener las ciudades
    }, []);
  
    useEffect(() => {
      setCities(listCity);
      setFilteredCities(listCity); // Inicializa las ciudades filtradas con la lista completa
    }, [listCity]);
  
    const onSearch = (keywords) => {
        console.log(keywords);
        const filtered = listCity.filter((city) => {
          const cityName = city.name.toLowerCase();
          return cityName.includes(keywords.toLowerCase()) && cityName.startsWith(keywords.toLowerCase());
        });
        setFilteredCities(filtered); // Actualiza las ciudades filtradas
      };
  
    const clearSearch = () => {
      setFilteredCities(cities); // Restaura la lista completa al borrar la búsqueda
    };
    return (
        <div className="pt-[80px] bg-[#212121]">
            <Form onSearch={onSearch} onClear={clearSearch}/>
            {filteredCities.map((city) => (
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
    );
}
