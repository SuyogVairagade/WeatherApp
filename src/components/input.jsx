import React from "react";
import { useWeather } from "../context/Weather";

export const Input = (props) =>{
    const weather = useWeather();
    console.log("weather ",weather);
    return(
        <input
            className="input-field"
            placeholder="search city"
            value={weather.city}
            onChange={(e)=>{weather.setCity(e.target.value)}}
        />
    )
}