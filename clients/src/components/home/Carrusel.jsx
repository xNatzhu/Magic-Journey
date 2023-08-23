import "./css/Carrusel.css"

import { useState } from "react";


export default function Carrrusel(){
    const [activeItem, setActiveItem] = useState(0);
    const [urlImg, setUrlImg] = useState("../../../../public/img/Item/")
    /*Mock data */
    const carouselData = [
        {
          country: 'Argentina',
          images: [
            `${urlImg}Argentina/argentina_iguasu.jpg`,
            `${urlImg}Argentina/argentina_glaciar.jpg`,
            `${urlImg}Argentina/argentina_bariloche.jpg`,
            `${urlImg}Argentina/argentina_patagonia.jpg`
          ]
        },
        {
          country: 'España',
          images: [
            `${urlImg}España/españa_camino_de_roca_en_san_juan.jpeg`,
            `${urlImg}España/españa_lago_san_pedro.jpeg`,
            `${urlImg}España/españa_medulas_leon.jpeg`,
            `${urlImg}España/españa_playa_las_catedrales.jpeg`,
          ]
        },
        {
            country: 'Chile',
            images: [
              `${urlImg}Chile/chile_laguna_san_rafael.jpg`,
              `${urlImg}Chile/chile_parque_nacional_conguillio.jpg`,
              `${urlImg}Chile/chile_torres_del_paine.jpg`,
              `${urlImg}Chile/chile_valdivia.jpeg`,
            ]
          },
          {
            country: 'Australia',
            images: [
              `${urlImg}Australia/australia_whitehaven_beach.jpg`,
              `${urlImg}Australia/australia_los_doce_apostoles.jpg`,
              `${urlImg}Australia/australia_uluru.jpg`,
              `${urlImg}Australia/australia_ blue_mountains.jpg`,
            ]
          }
      ];

      const handleNext = () => {
        setActiveItem((prevItem) => (prevItem + 1) % carouselData.length);
      };
    
      const handlePrev = () => {
        setActiveItem((prevItem) => (prevItem - 1 + carouselData.length) % carouselData.length);
      };


    return(
        <div className="carousel">
      <div className="item">
        {carouselData[activeItem].images.map((image, index) => (
          <div className="item_img_carrusel" key={index}>
            <img src={image} alt={image} />
          </div>
        ))}
      </div>
      <div className="flex justify-center mt-[30px]">
        <button className="border border-[#9DC08B] py-3 px-5 rounded hover:bg-[#9DC08B] text-white hover:border-transparent mx-[10px]" onClick={handlePrev}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-left" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M9.224 1.553a.5.5 0 0 1 .223.67L6.56 8l2.888 5.776a.5.5 0 1 1-.894.448l-3-6a.5.5 0 0 1 0-.448l3-6a.5.5 0 0 1 .67-.223z"/>
        </svg>
        </button>
        <button className="border border-[#9DC08B] py-3 px-5 rounded hover:bg-[#9DC08B] text-white hover:border-transparent mx-[10px]" onClick={handleNext}>
        <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-chevron-compact-right" viewBox="0 0 16 16">
          <path fillRule="evenodd" d="M6.776 1.553a.5.5 0 0 1 .671.223l3 6a.5.5 0 0 1 0 .448l-3 6a.5.5 0 1 1-.894-.448L9.44 8 6.553 2.224a.5.5 0 0 1 .223-.671z"/>
        </svg>
        </button>
      </div>
    </div>
    );
}
