import { Context, createContext, useContext, useState } from "react";
import { getWeatherDataForCity } from "../api";

const WeatherContext = createContext(null);

export const useWeather = ()=>{return useContext(WeatherContext)};

export const WeatherProvider = (props) =>{
    const [data, setData] = useState();
    const [city, setCity] = useState();

    const fetchData = async ()=>{
        const response = await getWeatherDataForCity(city);
        setData(response);
    }
    return(
        <WeatherContext.Provider value={{data, city, setCity,fetchData }}>
            {props.children}
        </WeatherContext.Provider>
    )
}