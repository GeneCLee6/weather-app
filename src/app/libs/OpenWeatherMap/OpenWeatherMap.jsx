import axios from "axios";

const BASE_URL = "https://api.openweathermap.org/data/2.5";
const APP_ID = "c9a65ed262c400b201a350bb60440450";
//2466213f21b4b723d341e00a430a7673
const UNIT = "metric";

// AxiosInstance
// OOP

// Axios create instance

const OpenWeatherMap = axios.create({
  baseURL: BASE_URL,
  params: {
    appid: APP_ID,
    units: UNIT,
  },
});

export default OpenWeatherMap;
