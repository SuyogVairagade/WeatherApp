const baseUrl = "https://api.weatherapi.com/v1/current.json?key=f90fb371d6324079a1725817240301";


export const getWeatherDataForCity = async(city) =>{
    const response = await fetch(`${baseUrl}&q=${city}&aqi=yes`);
    return await response.json();
}