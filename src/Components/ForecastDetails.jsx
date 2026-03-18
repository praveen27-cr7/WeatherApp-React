import { WeatherContext } from "./WeatherContextProvider"
import { useContext } from "react"



function ForecastDetails(){
     const {forecast} = useContext(WeatherContext)
     const nextFiveDays = forecast.filter((item, index) => index % 8 === 0)

     
    return(


       <div className="my-10">
        <hr className="my-5" />
        <ul className="flex md:justify-around justify-between font-medium gap-1">
            {
                nextFiveDays.map((item, index) => {
                    const date = new Date(item.dt_txt)
                    const day = date.toLocaleDateString("en-US",{weekday:"short"})

                    return (
                        <li key={index}className="bg-white/10 md:p-3 p-1 rounded-xl text-center md:text-lg hover:scale-105 transition" >
                            <h1 className="text-sm">{day}</h1>
                            <img src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`} />
                            <p className="font-semibold">{item.main.temp}&deg;C</p>
                        </li>
                    )
                })
            }
        </ul>
       </div>
    ) 
}

export default ForecastDetails