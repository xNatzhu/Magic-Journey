import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_itinerary = createAsyncThunk("get_itinerary", async () => {
    const urlItineraryApi = "http://localhost:3000/api/itinerary";
  
    try {
      console.log("Funcionando");
      const itinerary = await axios
        .get(urlItineraryApi)
        .then((res) => {
          console.log(res.data);
          return res.data;
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
          throw error; // Re-lanza el error para que Redux Toolkit lo maneje
        });
  
      return {
        itinerary, //se va mostrar
      };
    } catch (error) {
      console.log(error);
      throw error; // Re-lanza el error para que Redux Toolkit lo maneje
    }
  });  