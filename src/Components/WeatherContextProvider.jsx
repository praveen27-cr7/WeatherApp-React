import { createContext, useState } from "react";
import axios from "axios"
import { use } from "react";

const WeatherContext = createContext()

function WeatherContextProvider(data){

    const [city, setCity] = useState("")
    const [name, setName] = useState("")
    const [temp, setTemp] = useState("")
    const [weatherCondition, setWeatherContidion] = useState("")
    const [wind ,setWind] = useState("")
    const [humidity, setHumidity] = useState("")
    const [pressure, setPressure]  = useState("")
    const [forecast, setforecast] = useState([])
    const [icon , seticon] = useState("")


    function handleReport(){
        
        const weatherData = axios(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=6e7d0eeed4d3adc9399d3463e7a2f17c&units=metric`)

        weatherData.then((success) => {
           const data = success.data

           setName(data.name)
           setTemp(data.main.temp)
           seticon(data.weather[0].icon)

           let condition = data.weather[0].main

           if(condition === "Clear"){
             setWeatherContidion("Sunny")
           }
           else if(condition === "Rain")
           {
            setWeatherContidion("Rainy")
           }else if(condition === "Clouds"){
            setWeatherContidion("Cloudy")
           }

           setWind(data.wind.speed * 3.6)
           setHumidity(data.main.humidity)
           setPressure(data.main.pressure)

        }).catch((err => err))

        const ForecastWeatherdata = axios(`https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=6e7d0eeed4d3adc9399d3463e7a2f17c&units=metric`)

        ForecastWeatherdata.then((success)=>{
            const data = success.data

            setforecast(data.list)
        }).catch(err => err)
    }



   return(
     <WeatherContext.Provider value={{city, setCity, handleReport, name, temp, weatherCondition, wind, pressure, humidity, forecast, icon}}>
        {data.children}
     </WeatherContext.Provider>
   )
}

export default WeatherContextProvider
export {WeatherContext}