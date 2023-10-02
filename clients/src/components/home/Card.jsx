import {Link } from "react-router-dom";
function Card(props) {
  return (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-[#303030]  bg-clip-border text-gray-50 shadow-md  mx-3 mt-3 mb-3">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={props.city.img} alt="" />


      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
            {props.city.name}
          </h5>
        </div>
        <p className="block font-sans text-base font-light leading-relaxed text-gray-100 antialiased">
          {props.city.description.replace(/\n/g, "").length > 150
            ? `${props.city.description.slice(0, 150)}...`
            : props.city.description}
        </p>
      </div>
      <div className="p-6 pt-3">
        <Link
          to={`/city/${props.city.id}`}
          className="block w-full select-none rounded-lg bg-[#9DC08B] py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md  transition-all hover:shadow-lg  focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          Ir a ciudad
        </Link>
      </div>
    </div>
  );
}

export default Card;
