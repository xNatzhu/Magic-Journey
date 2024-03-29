import "./css/Carrusel.css";
import axios from "axios";
import { useState, useEffect } from "react";
import Card from "./Card.jsx";

export default function Carrrusel() {
  const [carouselData, setcarouselData] = useState([]);
  const [uniqueKeys, setUniqueKeys] = useState([]);
  const [carouselItem, setCarouselItem] = useState([]);
  const [selectedItemIndex, setSelectedItemIndex] = useState(0);

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
    const uniqueKeys = [...new Set(keys)];
    setUniqueKeys(uniqueKeys);
    setCarouselItem(carouselData[uniqueKeys[selectedItemIndex]]);
  }, [carouselData, selectedItemIndex]);

  const handleItem = (index) => {
    setSelectedItemIndex(index);
    console.log(carouselItem);
    console.log(uniqueKeys[selectedItemIndex]);
  };

  return (
    <>
      <div className="carousel">
      <div className="px-4  mx-auto w-full sm:px-6 md:px-12 lg:px-24  flex justify-center items-center">
      <div className="flex justify-center items-center flex-col  mt-0 mb-0 text-left lg:flex-grow lg:w-1/2 lg:pl-6 xl:pl-24 md:mb-0 xl:mt-0">
            <h1 className="mb-8 text-4xl font-bold leading-none tracking-tighter text-[#9DC08B] md:text-7xl lg:text-5xl">
            {uniqueKeys[selectedItemIndex]}
            </h1>
            <p className="mb-8 text-base leading-relaxed text-center text-gray-300">
            Explora las ciudades más top de {uniqueKeys[selectedItemIndex]}, donde la cultura, la belleza y la diversión se unen en un emocionante viaje
            </p>
          </div>
          </div>
        <div className="item">
          {Array.isArray(carouselItem) &&
            carouselItem.map((city, index) => <Card key={index} city={city}/>)}
        </div>
      </div>
      <div className="flex md:fixed pb-[10px] md:pb-[0px]  bg-[#212121] md:bg-transparent w-full  md:w-[30px]  md:left-1 md:top-0 z-5 h-full items-center justify-center cursor-pointer relative">
  <ul className="bg-transparent  px-[10px] pt-[10px] pb-[10px] rounded-lg text-center flex md:flex-col">
    
    
    {uniqueKeys.map((country, index) => {
      const isSelected = index === selectedItemIndex;
      return (
        <li
          onClick={() => handleItem(index)}
          className="list-none px-[10px]  md:px-[0px] md:pt-[5px] md:pb-[5px] text-[#9DC08B] mb-[10px]"
          key={index}
        >
          {isSelected ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-circle-fill"
              viewBox="0 0 16 16"
            >
              <circle cx="8" cy="8" r="8" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-circle"
              viewBox="0 0 16 16"
            >
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
            </svg>
          )}
        </li>
      );
    })}
  </ul>
</div>





    </>
  );
}
