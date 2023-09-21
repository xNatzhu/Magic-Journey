import "./css/Login.css";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
function FormLogin() {
  const [token, setToken] = useState(sessionStorage.getItem("token"));

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm()
  const navigate = useNavigate();

  const onSubmit = (data) => {
    const { password, email } = data;
    console.log(errors);
    axios
      .post("http://localhost:3000/api/signin", {
        email,
        password,
      })
      .then((data) => {
        console.log("Cuenta creada perfecto");
        console.log(data);
        Swal.fire({
          background: "#161616",
          color: "#fff",
          title: "¡Bienvenido!",
          text: "Disfruta de tu estancia",
          icon: "success",
          iconColor: "#9DC08B",
          confirmButtonText: "Ok",
          confirmButtonColor: "#9DC08B",
        });
        sessionStorage.setItem("token", data.data.token);
        console.log(data.data.token);
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
        Swal.fire({
          background: "#161616",
          color: "#fff",
          title: "Error!",
          text: "Los datos ingresados son incorrectos",
          icon: "error",
          confirmButtonText: "Ok",
          confirmButtonColor: "#9DC08B",
        });
        reset();
      });
  };

  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, []);
  
  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="sm:w-2/3 w-full px-4 lg:px-0 mx-auto"
    >
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
        <input
          type="password"
          name="password"
          id="password"
          {...register("password", { required: true })}
          placeholder="Contraseña"
          className={`${
            errors.password && errors.password.type === "required"
              ? "border-red-500 focus:border-red-500"
              : "border-gray-200 focus:border-[#9DC08B]"
          } bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white`}
          
        />
      </div>
      <div className="flex items-center justify-between mt-6">
        <div className="flex items-center">
          <input
            type="checkbox"
            id="remember"
            className="text-purple-500 cursor-pointer"
          />
          <label htmlFor="remember" className="ml-2 text-gray-100">
            Recuérdame
          </label>
        </div>
        <div>
          <a
            href="#"
            className="inline-block align-baseline text-sm text-gray-100 hover:text-[#9DC08B]"
          >
            ¿Has olvidado tu contraseña?
          </a>
        </div>
      </div>
      <div className="mt-6">
        <button
          type="submit"
          className="group relative w-full flex justify-center py-3 px-4 border border-transparent text-sm font-medium rounded-md text-white bg-[#9DC08B] hover:bg-[#7E9E68]  transition duration-150 ease-in-out"
        >
          <span className="absolute left-0 inset-y-0 flex items-center pl-3">
            <svg
              className="h-5 w-5 text-gray-100 group-hover:text-gray-100 transition ease-in-out duration-150 text-gray-100 "
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
          Ingresar
        </button>
      </div>
      {/*
      <div className="flex items-center justify-center w-full pt-[20px]">
        <div className="h-1 w-[30%] bg-[#9DC08B]"></div>
        <p className="text-gray-100 font-bold mx-2">O</p>
        <div className="h-1 w-[30%] bg-[#9DC08B]"></div>
      </div>
      <div className="py-3 space-x-2">
        <span className="items-center justify-center inline-flex font-bold text-lg rounded-full border-2 border-white w-full pt-[5px] pb-[5px] ">
          <p>G+ Accede a google</p>
        </span>
      </div>
  */}
      <p className="mt-4 text-center">
        <span className="text-gray-100">¿No tienes una cuenta? </span>
        <Link to="/register" className="text-[#9DC08B] hover:text-[#7E9E68]">
          Registrate
        </Link>
      </p>
    </form>
  );
}

export default FormLogin;
