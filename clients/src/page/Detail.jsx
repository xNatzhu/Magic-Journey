import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { get_itinerary } from "../store/actions/itinerary.js";

import "./css/Detail.css";

export default function Detail() {
  const { id } = useParams();
  const [city, setCity] = useState([]);
  const [itinerary, setItinerary] = useState([])
  const dispatch = useDispatch();
  const listItinerary = useSelector(
    (state) => state.itineraryReducer.itinerary || []
  );

  console.log("dd", listItinerary);
  useEffect(() => {
    const urlCityApi = "http://localhost:3000/api/city/" + id;
    axios
      .get(urlCityApi)
      .then((res) => {
        setCity(res.data); 
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);


  useEffect(() => {
    dispatch(get_itinerary(id));
  }, []);

  useEffect(()=>{
    setItinerary(listItinerary)
  },[listItinerary])


  return (
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
                <span className="mb-4 text-xs font-bold tracking-widest text-[#9DC08B] uppercase">
                  {" "}
                  {city.country}{" "}
                </span>
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
      <div className="bg-[#212121] pb-[20px] pt-[10px] flex items-center justify-center ">
        {itinerary.map((element) => (
          <article
            key={element._id}
            className="rounded-lg border border-[#303030] bg-[#303030] p-4 shadow-sm transition hover:shadow-lg sm:p-6 mx-[40px]"
          >
            <div className="flex justify-between item-center">
              <span className="inline-block rounded items-center justify-center ">
                <img
                  className="w-[60px] h-[60px] rounded-full"
                  src={element.authorImg}
                  alt=""
                />
              </span>
              <div className="text-[#9DC08B] flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  fill="currentColor"
                  className="bi bi-heart-fill mr-2"
                  viewBox="0 0 16 16"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z"
                  />
                </svg>
                <p className="mx-auto">{element.like}</p>
              </div>
            </div>
            <h6 className="text-gray-300 text-[14px] mt-2">{element.author}</h6>
            <h3 className="mt-3 text-lg font-medium  text-gray-100">
              {element.name}
            </h3>

            <p className="mt-2 line-clamp-3 text-sm/relaxed text-gray-300">
              {element.description}
            </p>
            <div className="mt-3">
              <span className="inline-flex items-center justify-center rounded-full bg-[#9DC08B] px-2.5 py-0.5 text-[#fff] mt-[10px]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-currency-exchange"
                  viewBox="0 0 16 16"
                >
                  <path d="M0 5a5.002 5.002 0 0 0 4.027 4.905 6.46 6.46 0 0 1 .544-2.073C3.695 7.536 3.132 6.864 3 5.91h-.5v-.426h.466V5.05c0-.046 0-.093.004-.135H2.5v-.427h.511C3.236 3.24 4.213 2.5 5.681 2.5c.316 0 .59.031.819.085v.733a3.46 3.46 0 0 0-.815-.082c-.919 0-1.538.466-1.734 1.252h1.917v.427h-1.98c-.003.046-.003.097-.003.147v.422h1.983v.427H3.93c.118.602.468 1.03 1.005 1.229a6.5 6.5 0 0 1 4.97-3.113A5.002 5.002 0 0 0 0 5zm16 5.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0zm-7.75 1.322c.069.835.746 1.485 1.964 1.562V14h.54v-.62c1.259-.086 1.996-.74 1.996-1.69 0-.865-.563-1.31-1.57-1.54l-.426-.1V8.374c.54.06.884.347.966.745h.948c-.07-.804-.779-1.433-1.914-1.502V7h-.54v.629c-1.076.103-1.808.732-1.808 1.622 0 .787.544 1.288 1.45 1.493l.358.085v1.78c-.554-.08-.92-.376-1.003-.787H8.25zm1.96-1.895c-.532-.12-.82-.364-.82-.732 0-.41.311-.719.824-.809v1.54h-.005zm.622 1.044c.645.145.943.38.943.796 0 .474-.37.8-1.02.86v-1.674l.077.018z" />
                </svg>
                <p className="whitespace-nowrap text-sm px-[10px]">
                  Precio: ${element.price}
                </p>
              </span>
              <span className="inline-flex items-center justify-center rounded-full border border-[#9DC08B] px-2.5 py-0.5 text-[#9DC08B] mt-[5px] mb-[5px] item-itinerario-duration">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-clock"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 3.5a.5.5 0 0 0-1 0V9a.5.5 0 0 0 .252.434l3.5 2a.5.5 0 0 0 .496-.868L8 8.71V3.5z" />
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm7-8A7 7 0 1 1 1 8a7 7 0 0 1 14 0z" />
                </svg>
                <p className="whitespace-nowrap text-sm px-[10px]">
                  Duracion: {element.duration} hs
                </p>
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
  );
}
