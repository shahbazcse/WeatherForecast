import './App.css';

import NavBar from "./components/NavBar";
import CurrentWeather from "./components/widgets/CurrentWeather";
import TenDayForecast from "./components/widgets/TenDayForecast";
import WeatherWidgets from "./components/widgets/WeatherWidgets";
import HourlyForecast from "./components/widgets/HourlyForecast";
import Map from "./components/widgets/Map";
import OtherLargeCities from "./components/widgets/OtherLargeCities";

function App() {
  return (
    <div className="App container mx-auto max-w-[72rem] flex min-h-screen flex-col py-4 px-[1rem] antialiased selection:bg-black selection:text-white md:px-[2rem] font-[raleway]">
      {/* <NavBar /> */}
      <div className='flex-grow'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='flex w-full min-w-[18rem] flex-col gap-4 md:w-1/2'>
            <CurrentWeather />
            <TenDayForecast />
          </div>
          <div className='grid h-full grid-cols-2 gap-4 lg:grid-cols-3 xl:grid-cols-2'>
            <WeatherWidgets data={""}
              city={""}
              airQuality={""}
              uvIndexForToday={""} />
            <HourlyForecast data={""} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
