import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

export const get_itinerary  = createAsyncThunk("itineraries/fetch", async (id) => {
    const urlItineraryApi = `http://localhost:3000/api/itineraryforcity/${id}`;
    const response = await axios.get(urlItineraryApi);
    console.log(response.data);
    return response.data;
});
