import { useDispatch, useSelector } from 'react-redux';
import {get_city}  from "../store/actions/city.js"
import { useEffect, useState } from "react";
import CityCard from "../components/city/Card.jsx";
import Form from "../components/search/Form.jsx";

export default function Cities() {
    const [token, setToken] = useState(sessionStorage.getItem("token"));
    const dispatch = useDispatch();
    const listCity = useSelector((state) => state.citiesReducer.city);
    
    useEffect(() => {
        dispatch(get_city()) //vamos despachar la accion get City
    }, []); // Dejar el array de dependencias vacío para que se ejecute solo una vez

    console.log(token);
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
