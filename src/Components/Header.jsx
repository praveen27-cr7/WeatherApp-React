import { WeatherContext } from "./WeatherContextProvider"
import { useContext } from "react"

function Header(){

    const {city, setCity, handleReport, name } = useContext(WeatherContext)
   
    function handleCity(e){
        setCity(e.target.value)
 }

    return(
        <div className="text-white p-10 md:flex justify-between gap-3">
            <h1 className="font-medium text-3xl mb-5 md:mb-0">City : {name}</h1>
            <div className="flex gap-3">
                <input type="text" placeholder="Enter City!" value={city} onChange={handleCity} 
                className="bg-white/20 text-black p-1 rounded-md outline-none placeholder-white/60" style={{width: "70%"}}/>
            <button onClick={handleReport} className="bg-yellow-400 text-black px-1 py-2 rounded-md font-medium hover:scale-105 transition hover:bg-yellow-500" style={{width : '50%'}}>Get Report</button>
            </div>
            
        </div>
    )
}

export default Header