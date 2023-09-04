import { useDispatch, useSelector } from 'react-redux';
import {get_city}  from "../store/actions/city.js"
import { useEffect } from "react";
import CityCard from "../components/city/Card.jsx";
import Form from "../components/search/Form.jsx";

export default function Cities() {

    const dispatch = useDispatch();
    const listCity = useSelector((state) => state.citiesReducer.city);
    useEffect(() => {
        dispatch(get_city()) //vamos despachar la accion get City

        /*const urlCityApi = "http://localhost:3000/api/citys";
        axios.get(urlCityApi) 
            .then(res => {
                setListCity(res.data); // Actualizar el estado con los datos obtenidos
                console.log(res.data);
            })
            .catch(error => {
                console.error("Error fetching data:", error);
            });*/

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
