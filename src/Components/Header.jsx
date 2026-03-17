import { WeatherContext } from "./WeatherContextProvider"
import { useContext } from "react"

function Header(){

    const {city, setCity, handleReport, name } = useContext(WeatherContext)
   
    function handleCity(e){
        setCity(e.target.value)
 }

    return(
        <div className="text-white p-10 flex justify-between">
            <h1 className="font-medium text-3xl">City : {name}</h1>
            <div className="flex gap-3">
                <input type="text" placeholder="Enter City!" value={city} onChange={handleCity} 
                className="text-black p-1 rounded-md w-72 outline-none"/>
            <button onClick={handleReport} className="bg-yellow-500 px-1 py-2 w-36 rounded-md font-medium">Get Report</button>
            </div>
            
        </div>
    )
}

export default Header