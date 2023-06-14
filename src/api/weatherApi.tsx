// /current.json?key=9a80d73833534788984105002230505&q=28.7041,77.1025&aqi=yes
import axios from "axios";
import { WEATHER_API_KEY } from "@env";
 
const baseUrl = "https://api.weatherapi.com/v1";

export const getCurrentWeather = async (lat:string, lng: string) => {
console.log(baseUrl + `/current.json?key=${WEATHER_API_KEY}&q=${lat},${lng}&aqi=yes`)
  const { data } = await axios.get(baseUrl + `/current.json?key=${WEATHER_API_KEY}&q=${lat},${lng}&aqi=yes`);
  console.log('weather data : ',data);
};

export const getForecast = async () => {
  const data = await axios.get(baseUrl + "/people");
  console.log(data);
};

 