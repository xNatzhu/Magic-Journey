import "./css/Carrusel.css";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Carrrusel() {
  const [carouselData, setcarouselData] = useState([]);
  const [carouselIndex, setCarruselIndex] = useState([]);
  const [uniqueKeys, setUniqueKeys] = useState([]);

  /*Mock data */
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/getCityImgSlider")
      .then((data) => {
        setcarouselData(data.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    const keys = Object.keys(carouselData);
    const uniqueKeys = [...new Set(keys)]; // Esta línea guarda los valores devueltos por el método map() en una nueva matriz.
    console.log("uniqueKeys", uniqueKeys);
    setUniqueKeys(uniqueKeys);
    setCarruselIndex(uniqueKeys); // Esta línea reemplaza el contenido de la matriz carouselIndex con los identificadores únicos de los elementos del carrusel.
  }, [carouselData]);

  const handleItem = (index) => {
    const data = uniqueKeys[index]
    console.log("data", data);
    const carruselData = carouselData[data];
    console.log("Agustin", carruselData);

  };

   /* const handleNext = () => {
      //const nuevoItem = (activeItem + 1) % Object.keys(carouselData).length;
      setActiveItem(nuevoItem);
      const guardar = carruselIndex[nuevoItem];
      console.log(nuevoItem); // Muestra el valor actualizado
      console.log(carruselIndex);
      console.log("probando", carouselData[Argentina]);
    };*/
    

    return(
      <>
      <ul className="mx-[10px]">
        {uniqueKeys.map((country, index)=>{
          return <li onClick={()=>handleItem(index)}  className= "list-none pt-[10px] pb-[10px] text-[#9DC08B]" key={index}>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-circle" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
          </svg>
          </li>
        })}
      </ul>
      </>
      
    );
}