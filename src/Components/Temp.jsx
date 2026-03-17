import { WeatherContext } from "./WeatherContextProvider"
import { useContext } from "react"

function Temp(){

    const {temp, weatherCondition , icon} = useContext(WeatherContext)

    return(
        <div className="flex flex-col items-center my-5 text-5xl font-bold">
            <div className= "text-6xl font-bold mb-2">
                {temp ? <h1>{temp.toFixed(1)}&deg;C</h1> : <h1>0&deg;C</h1>}

            </div>
            <div className="flex gap-1 items-center">
              {weatherCondition ? <h1>{weatherCondition}</h1> : <h1>--</h1>}
              <img src={`https://openweathermap.org/img/wn/${icon}@2x.png`} />
            </div>
            
        </div>
    )
}

export default Temp