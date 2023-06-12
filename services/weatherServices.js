const axios=require("axios");
const{getAsync,setAsync,expireAsync}=require("../config/redis")



exports.getCurrentWeather=async (city)=>{
    const cachedWeatherData=await getAsync(city);
    if(cachedWeatherData){
        return JSON.parse(cachedWeatherData);
    }

    const response=await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.OPENWEATHER_API_KEY}`)
    
    const weatherData=response.data;


    await setAsync(city,JSON.stringify(weatherData))
    await expireAsync(city,1800);
    return weatherData
};