import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  location: null,
  current: null,
};

export const climaSlice = createSlice({
  name: "clima",
  initialState,
  reducers: {
    setClima: (state, action) => {
      state.location = action.payload.location;
      state.current = action.payload.current;
    },
  },
});

const { setClima } = climaSlice.actions;
export default climaSlice.reducer;

const fetchClima = async (dispatch, city) => {
  const url = `https://weatherapi-com.p.rapidapi.com/forecast.json?q=${city}`;
  const response = await fetch(url, {
    method: "GET",
    headers: {
      "X-RapidAPI-Key": "a0eb0126c2msh73decf39a65ef3ap136c38jsn20577f00b999",
      "X-RapidAPI-Host": "weatherapi-com.p.rapidapi.com",
    },
  });
  const jsonData = await response.json();
  dispatch(setClima(jsonData));
};
