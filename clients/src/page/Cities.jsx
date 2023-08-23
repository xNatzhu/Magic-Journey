import axios from "axios";

import { useState, useEffect } from "react";
import CityCard from "../components/city/Card.jsx";
import Form from "../components/search/Form.jsx";

export default function Cities() {
    const [listCity, setListCity] = useState([]);
    
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

    return (
        <div className="pt-[80px] bg-[#212121]">
            <Form/>
            {listCity.map((city) => (
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
