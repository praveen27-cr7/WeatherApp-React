import { useContext } from "react"
import { WeatherContext } from "./WeatherContextProvider"
import windimg from '../assets/icons/wind.png'
import humidityimg from '../assets/icons/humidity.png'
import pressureimg from '../assets/icons/pressure.png'


function ReportDetails(){

    const {wind, humidity, pressure} = useContext(WeatherContext)

    return(
      <div className="grid grid-cols-3 gap-6 mt-6 text-center">
        <div className="flex flex-col items-center gap-5 bg-white/10 p-4 rounded-xl">
            <div className="flex gap-2">
                  <h1 className="text-white/70">Humidity</h1>
                  <img src={humidityimg}  />
            </div>
            <div className="font-bold text-lg">
              {humidity ? <p>{humidity}%</p> : <p>--</p>}
            </div>
             
        </div>
        <div className="flex flex-col items-center gap-5 bg-white/10 p-4 rounded-xl">
            <div className="flex gap-2">
                  <h1 className="text-white/70">Wind</h1>
                  <img src={windimg}  />
            </div>
          <div className="font-bold text-lg">
            {wind ? <p>{wind.toFixed(0)}km/h</p> : <p>--</p>}
          </div>
            
        </div>
        <div className="flex flex-col items-center gap-5 bg-white/10 p-4 rounded-xl">
            <div className="flex gap-2">
                  <h1 className="text-white/70">Pressure</h1>
                  <img src={pressureimg}  />
            </div>
            <div className="font-bold text-lg">
               {pressure ? <p>{pressure}mb</p> : <p>--</p>}
            </div>
          
        </div>
      </div>
    )
}

export default ReportDetails