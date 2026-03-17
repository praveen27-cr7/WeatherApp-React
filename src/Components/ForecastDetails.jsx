import { WeatherContext } from "./WeatherContextProvider"
import { useContext } from "react"



function ForecastDetails(){
     const {forecast} = useContext(WeatherContext)
     const nextFiveDays = forecast.filter((item, index) => index % 8 === 0)

     
    return(
       <div className="my-10">
        <ul className="flex justify-around font-medium">
            {
                nextFiveDays.map((item, index) => {
                    const date = new Date(item.dt_txt)
                    const day = date.toLocaleDateString("en-US",{weekday:"long"})

                    return (
                        <li key={index}className="bg-white/20 p-3 rounded-xl text-center text-lg" >
                            <h1>{day}</h1>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                            <p>{item.main.temp}&deg;C</p>
                        </li>
                    )
                })
            }
        </ul>
       </div>
    ) 
}

export default ForecastDetails