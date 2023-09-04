import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_city = createAsyncThunk("get_city", async () => {
    const urlCityApi = "http://localhost:3000/api/citys";
  
    try {
      const city = await axios
        .get(urlCityApi)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          throw error; // Re-lanza el error para que Redux Toolkit lo maneje
        });
  
      return {
        city, //se va mostrar
      };
    } catch (error) {
      console.log(error);
      throw error; // Re-lanza el error para que Redux Toolkit lo maneje
    }
  });  
// va tener una palabra clave para identificar la accion, y el otro parametro lo que va realizar esa accion