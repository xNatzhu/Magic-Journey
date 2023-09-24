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
  };

  return (
    <>
      <div className="carousel">
        <div className="item">
          {Array.isArray(carouselItem) &&
            carouselItem.map((city, index) => <Card key={index} city={city} />)}
        </div>
      </div>


      <div className="flex fixed left-1 top-0 z-5 h-full items-center">
  <ul className="bg-[#161616] px-[10px] pt-[10px] pb-[10px] rounded-lg">
    {uniqueKeys.map((country, index) => {
      const isSelected = index === selectedItemIndex;
      return (
        <li
          onClick={() => handleItem(index)}
          className="list-none pt-[5px] pb-[5px] text-[#9DC08B] mb-[10px]"
          key={index}
        >
          {isSelected ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-circle-fill"
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
              class="bi bi-circle"
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
