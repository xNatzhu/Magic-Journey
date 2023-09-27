import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import Swal from "sweetalert2";
export const post_user = createAsyncThunk("post_user", async ({ email, password }) => {
  const urlLogin = "http://localhost:3000/api/signin";

  try {
    const response = await axios.post(urlLogin, {
      email,
      password
    });
    const data = response.data;
    sessionStorage.setItem("token",data.token.token)
    
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


    return data;
  } catch (error) {
    console.error("Error fetching data:", error);
    Swal.fire({
      background: "#161616",
      color: "#fff",
      title: "Error!",
      text: "Los datos ingresados son incorrectos",
      icon: "error",
      confirmButtonText: "Ok",
      confirmButtonColor: "#9DC08B",
    });

    throw error; // Re-lanza el error para que Redux Toolkit lo maneje
  }
}
)
