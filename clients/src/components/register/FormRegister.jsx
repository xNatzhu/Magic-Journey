import { useForm } from "react-hook-form";
import axios from "axios";
import { useNavigate, Link } from "react-router-dom";
import Swal from "sweetalert2";
import { useState, useEffect } from "react";

function FormRegister() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));
  const [country, setCountry] = useState([]);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const navigate = useNavigate();

  useEffect(() => {
    axios.get("https://restcountries.com/v3.1/all").then((data) => {
      let dataCountry = data.data;
      const collectionCountry = dataCountry.map(
        (country) => country.name.common
      );
      collectionCountry.sort();
      setCountry(collectionCountry);
    });
  }, []);

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);

  const onSubmit = (data) => {
    const { name, password, email, country } = data;
    axios
      .post("http://localhost:3000/api/signup", {
        name,
        email,
        country,
        password,
      })
      .then((data) => {
        console.log("Cuenta creada perfecto");

        Swal.fire({
          title: "¡Registro Exitoso!",
          text: "Por favor, inicie sesión para acceder a la plataforma.",
          icon: "success",
          iconColor: "#9DC08B",
          confirmButtonText: "Ok",
          confirmButtonColor: "#9DC08B",
        });

        navigate("/login");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          background: "#161616",
          color: "#fff",
          title: "Error!",
          text: "Este usuario ya está registrado en la plataforma.",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#9DC08B",
        });
        reset();
      });
  };
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      action=""
      className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
    >
      <div className="pb-2 pt-4">
        <input
          {...register("name", { required: true })}
          className={`${
            errors.name && errors.name.type === "required"
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-[#9DC08B]"
          } bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
          
          type="text"
          placeholder="Nombre"
        />

      </div>
      <div className="pb-2 pt-4">
        <input
          type="email"
          name="email"
          id="email"
          {...register("email", { required: true })}

          placeholder="Correo electronico"
          className={`${
            errors.email && errors.email.type === "required"
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-[#9DC08B]"
          } bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
          
        />
      </div>

      <div className="pb-2 pt-4">
        <select
          type="country"
          name="country"
          id="country"
          {...register("country")}
          className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-[#9DC08B]"
        >
          {country.map((country) => (
            <option value={country} selected>
              {country}
            </option>
          ))}
        </select>
      </div>

      <div className="pb-2 pt-4">
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", { required: true, minLength: {
            value: 6, 
            message: 'Mínimo 6 carácteres'
            } })}
          placeholder="Contraseña"
          className={`${
            (errors.password && errors.password.type === "required") || 
            (errors.password && errors.password.type === "minLength")
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-[#9DC08B]"
          } bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
        />
        {errors.password && errors.password.type === "minLength" && (
        <span role="alert">La contraseña debe contener al menos 6 caracteres.</span>
      )}
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#9DC08B] hover:bg-[#7E9E68] focus:outline-none focus:border-purple-700 focus:shadow-outline-purple active:bg-purple-700 transition duration-150 ease-in-out"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-100 transition ease-in-out duration-150"
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-person-fill"
              viewBox="0 0 16 16"
            >
              <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z" />
            </svg>
          </span>
          Registrar
        </button>
      </div>
      <p className="mt-4 text-center">
        <span className="text-gray-100">¿Ya tienes una cuenta creada? </span>
        <Link to="/login" className="text-[#9DC08B] hover:text-[#7E9E68]">
          Iniciar Seccion
        </Link>
      </p>
    </form>
  );
}

export default FormRegister;
