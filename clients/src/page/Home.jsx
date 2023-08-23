import Carrrusel from "../components/home/Carrusel.jsx";
import Slider from "../components/home/Slider.jsx";
import "./css/Home.css"
export default function Home() {
    return(
        <>
        <div className="background-home">
            <Slider/>
            <Carrrusel/>
        </div>
      </>
    );
}