import './App.css';

import { useContext } from 'react';
import { AppContext } from '.';

import NavBar from "./components/NavBar";
import CurrentWeather from "./components/widgets/CurrentWeather";
import ThreeHourForecast from "./components/widgets/ThreeHourForecast";
import WeatherWidgets from "./components/widgets/WeatherWidgets";

function App() {
  const { state } = useContext(AppContext);
  return (
    <div className="App container mx-auto max-w-[72rem] flex min-h-screen flex-col pb-4 px-[1rem] antialiased selection:bg-black selection:text-white md:px-[2rem] font-[raleway]">
      <NavBar />
      <div className='flex-grow'>
        <div className='flex flex-col gap-4 md:flex-row'>
          <div className='flex w-full min-w-[18rem] lg:min-w-[28rem] flex-col gap-4 md:w-1/2'>
            <CurrentWeather data={state.hourly_data} />
            <ThreeHourForecast data={state.three_hour_forecast} />
          </div>
          <div className='grid h-full grid-cols-2 gap-4 lg:grid-cols-2'>
            <WeatherWidgets data={state.hourly_data}
              airQuality={state.air_pollution}
              uvIndexForToday={state.uv_index?.daily.uv_index_max[0]} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
