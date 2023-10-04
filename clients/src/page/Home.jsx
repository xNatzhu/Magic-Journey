import Carrrusel from "../components/home/Carrusel.jsx";
import Slider from "../components/home/Slider.jsx";
import Loading from "../components/loading/Loading.jsx";
import "./css/Home.css"
export default function Home() {
    return(
        <>
        <Loading/>
        <div className="background-home">
            <Slider/>
            <Carrrusel/>
            <Loading/>
        </div>
      </>
    );
}