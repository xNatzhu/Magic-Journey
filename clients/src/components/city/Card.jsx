import { Link} from "react-router-dom";

export default function CityCard(props) {
    return (
            <Link to={`/city/${props.id}`}  className="group relative block bg-black">
                <img
                    src={props.img}
                    className="absolute inset-0 h-full w-full object-cover opacity-75 transition-opacity group-hover:opacity-50"
                />

                <div className="relative p-4 sm:p-6 lg:p-8">
                    <p className="text-sm font-medium uppercase tracking-widest text-[#9DC08B]">
                        {props.country}
                    </p>

                    <p className="text-xl font-bold text-white sm:text-2xl">{props.name}</p>

                    <div className="mt-32 sm:mt-48 lg:mt-64">
                        <div
                            className="translate-y-8 transform opacity-0 transition-all group-hover:translate-y-0 group-hover:opacity-100"
                        >
                        </div>
                    </div>
                </div>
            </Link>
    );
}

