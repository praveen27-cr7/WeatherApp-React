import WeatherContextProvider from "./Components/WeatherContextProvider"
import Header from "./Components/Header"
import ReportDetails from "./Components/ReportDetails"
import Temp from "./Components/Temp"
import ForecastDetails from "./Components/ForecastDetails"
function App(){
    
  return(
  <div className="min-h-screen bg-gradient-to-br from-gray-900 via-purple-900 to-black md:p-10 flex justify-center items-center ">

<div className="bg-white/10 backdrop-blur-lg border border-white/20backdrop-blur-lg p-4 md:p-8 rounded-3xl w-[90%] max-w-4xl text-white/90 shadow-2xl ">   <WeatherContextProvider>
      <Header/>
      <Temp />
      <ReportDetails /> 
      <ForecastDetails />                         
    </WeatherContextProvider>
     </div>
     </div>
  )
}

export default App