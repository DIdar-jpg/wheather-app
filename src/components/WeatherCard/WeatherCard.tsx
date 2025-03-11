// import React from 'react'

// import { WiDayCloudy } from "react-icons/wi";
// import { IconContext } from "react-icons";

// import { useTranslation } from 'react-i18next'

// import { getWindDirection } from './getWindDirection.js'

// export default function WheatherCard({ weather }) {

//     const currWeather = weather.list[0]

//     const [ t ] = useTranslation()

//     const mapUrl = new URL(process.env.REACT_APP_MAP_URL)
//     mapUrl.searchParams.set('ll', `${weather.city.coord.lon} ${weather.city.coord.lat}`)
//     console.log(mapUrl)
//     return (   
//         <section className="">
//             <div className="mt-12 md:w-full">
//                 <div className='my-6' id="wheather_container">
//                     <section className='text-black sm:flex sm:justify-between'>
//                         <div className="sm:w-[48%]">
//                             <div>
//                                 <div className='text-sm text-blue-400'>
//                                     {new Date().toLocaleDateString('en', { month: 'short', day:'numeric', hour:'numeric', minute:'numeric'})}
//                                 </div>
//                                 <div className='text-2xl font-bold uppercase mb-2'>{weather.city.name}, {weather.city.country}</div>
//                             </div>
//                             <div className="text-sm font-bold mb-5">{t("feels_like")} {currWeather.main.feels_like}°C. {currWeather.weather[0].description}.</div>

//                             <div className="flex flex-row justify-between xl:flex-col">
//                                 <div className="flex flex-nowraps items-center items-start xl:w-full">
//                                     <IconContext.Provider value={{ className:'w-14 h-14 sm:w-9 sm:h-9 md:w-14 md:h-14 lg:w-16 lg:h-16' }}>
//                                         <WiDayCloudy />
//                                     </IconContext.Provider>
//                                     <span className='text-4xl ml-2 sm:text-3xl sm:ml-0 md:text-4xl lg:text-6xl'>{currWeather.main.temp}&deg;C</span>
//                                 </div>
//                                 {/* <div className="text-2xl font-bold mt-3 hidden xl:block">Feels like {currWeather.main.feels_like}°C. {currWeather.weather[0].description}.</div> */}
//                                 <ul className='max-w-[400px] gap-4 pl-5 border-l border-blue-400 
//                                 xl:max-w-[100%] xl:w-full xl:grid xl:grid-cols-2 xl:text-2xl xl:mt-5 xl:border-l-2'>
//                                     <li className=''>&#10148; {currWeather.wind.speed}m/s {getWindDirection(currWeather.wind.deg)}</li>
//                                     <li className=''>&hearts; {currWeather.main.pressure}hPa</li>
//                                     <li className=''><span className='xl:font-medium'>{t("humidity")}: </span>{currWeather.main.humidity}%</li>
//                                     <li className=''><span className='xl:font-medium'>{t("clouds")}: </span>{currWeather.clouds.all}%</li>
//                                     <li className=''><span className='xl:font-medium'>{t("min_temp")}: </span>{currWeather.main.temp_min}°C</li>
//                                     <li className=''><span className='xl:font-medium'>{t("visibility")}: </span>{currWeather.visibility /1000}km</li>
//                                 </ul>
//                             </div> 
//                         </div>
//                         <div className='mt-7 flex relative overflow-hidden sm:w-[45%]'>
//                             <iframe id="geo" width="100%" height="260" frameBorder="1" allowFullScreen={true} className='overflow-hidden rounded-2xl self-end' src={mapUrl}></iframe>
//                         </div>
//                     </section>
//                 </div>
//             </div>
//         </section>
//     )
// }
import React from "react";
import { WiDayCloudy } from "react-icons/wi";
import { IconContext } from "react-icons";
import { useTranslation } from "react-i18next";
import { getWindDirection } from "./getWindDirection.ts";

interface Weather {
  list: {
    main: {
      temp: number;
      feels_like: number;
      pressure: number;
      humidity: number;
      temp_min: number;
    };
    weather: {
      description: string;
    }[];
    wind: {
      speed: number;
      deg: number;
    };
    clouds: {
      all: number;
    };
    visibility: number;
  }[];
  city: {
    name: string;
    country: string;
    coord: {
      lon: number;
      lat: number;
    };
  };
}

interface WeatherCardProps {
  weather: Weather;
}

export default function WeatherCard({ weather }: WeatherCardProps): JSX.Element {
  const currWeather = weather.list[0];
  const [t] = useTranslation();

  const mapUrl = new URL(process.env.REACT_APP_MAP_URL || "");
  mapUrl.searchParams.set("ll", `${weather.city.coord.lon} ${weather.city.coord.lat}`);

  return (
    <section className="">
      <div className="mt-12 md:w-full">
        <div className="my-6" id="weather_container">
          <section className="text-black sm:flex sm:justify-between">
            <div className="sm:w-[48%]">
              <div>
                <div className="text-sm text-blue-400">
                  {new Date().toLocaleDateString("en", {
                    month: "short",
                    day: "numeric",
                    hour: "numeric",
                    minute: "numeric",
                  })}
                </div>
                <div className="text-2xl font-bold uppercase mb-2">
                  {weather.city.name}, {weather.city.country}
                </div>
              </div>
              <div className="text-sm font-bold mb-5">
                {t("feels_like")} {currWeather.main.feels_like}°C. {currWeather.weather[0].description}.
              </div>

              <div className="flex flex-row justify-between xl:flex-col">
                <div className="flex flex-nowrap items-center items-start xl:w-full">
                  <IconContext.Provider
                    value={{
                      className:
                        "w-14 h-14 sm:w-9 sm:h-9 md:w-14 md:h-14 lg:w-16 lg:h-16",
                    }}
                  >
                    <WiDayCloudy />
                  </IconContext.Provider>
                  <span className="text-4xl ml-2 sm:text-3xl sm:ml-0 md:text-4xl lg:text-6xl">
                    {currWeather.main.temp}&deg;C
                  </span>
                </div>
                <ul
                  className="max-w-[400px] gap-4 pl-5 border-l border-blue-400 
                  xl:max-w-[100%] xl:w-full xl:grid xl:grid-cols-2 xl:text-2xl xl:mt-5 xl:border-l-2"
                >
                  <li>
                    &#10148; {currWeather.wind.speed}m/s {getWindDirection(currWeather.wind.deg)}
                  </li>
                  <li>&hearts; {currWeather.main.pressure}hPa</li>
                  <li>
                    <span className="xl:font-medium">{t("humidity")}: </span>
                    {currWeather.main.humidity}%
                  </li>
                  <li>
                    <span className="xl:font-medium">{t("clouds")}: </span>
                    {currWeather.clouds.all}%
                  </li>
                  <li>
                    <span className="xl:font-medium">{t("min_temp")}: </span>
                    {currWeather.main.temp_min}°C
                  </li>
                  <li>
                    <span className="xl:font-medium">{t("visibility")}: </span>
                    {currWeather.visibility / 1000}km
                  </li>
                </ul>
              </div>
            </div>
            <div className="mt-7 flex relative overflow-hidden sm:w-[45%]">
              <iframe
                id="geo"
                width="100%"
                height="260"
                frameBorder="1"
                allowFullScreen={true}
                className="overflow-hidden rounded-2xl self-end"
                src={mapUrl.toString()}
              ></iframe>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
}
