import React from 'react'
import { currentWheather } from './Atoms.js';
import { useRecoilValue } from 'recoil';
import { WiDayCloudy } from "react-icons/wi";
import { IconContext } from "react-icons";

export default function WheatherCard() {
    const cardData = useRecoilValue(currentWheather)
    console.log(cardData);
    return (   
        <section className="">
            {cardData != null ? cardData.map(
                item => {
                    // Убери ссылку из кода и сделай envoriment vars
                    const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${item.city.coord.lon}%2C${item.city.coord.lat}&z=8.0`
                    return(
                        <div className="mt-12 md:w-full">
                            <div className='my-6' id="wheather_container">
                                <section className='text-black sm:flex sm:justify-between'>
                                    <div className="sm:w-[48%]">
                                        <div>
                                            <div className='text-sm text-blue-400'>
                                                {new Date().toLocaleDateString('en', { month: 'short', day:'numeric', hour:'numeric', minute:'numeric'})}
                                            </div>
                                            <div className='text-2xl font-bold uppercase mb-2'>{item.city.name}, {item.city.country}</div>
                                        </div>
                                        <div className="text-sm font-bold mb-5">Feels like {item.list[0].main.feels_like}°C. {item.list[0].weather[0].description}.</div>
        
                                        <div className="flex flex-row justify-between xl:flex-col">
                                            <div className="flex flex-nowraps items-center items-start xl:w-full">
                                                <IconContext.Provider value={{ className:'w-14 h-14 sm:w-9 sm:h-9 md:w-14 md:h-14 lg:w-16 lg:h-16' }}>
                                                    <WiDayCloudy />
                                                </IconContext.Provider>
                                                <span className='text-4xl ml-2 sm:text-3xl sm:ml-0 md:text-4xl lg:text-6xl'>{item.list[0].main.temp}&deg;C</span>
                                            </div>
                                            <div className="text-2xl font-bold mt-3 hidden xl:block">Feels like {item.list[0].main.feels_like}°C. {item.list[0].weather[0].description}.</div>
                                            <ul className='max-w-[400px] gap-4 pl-5 border-l border-blue-400 
                                            xl:max-w-[100%] xl:w-full xl:grid xl:grid-cols-2 xl:text-2xl xl:mt-5 xl:border-l-2'>
                                                <li className=''>&#10148; {item.list[0].wind.speed}m/s 
                                                    {(() => { 
                                                        if (item.list[0].wind.deg >= 0 && item.list[0].wind.deg <= 30) return ' N' 
                                                        else if (item.list[0].wind.deg > 30 && item.list[0].wind.deg <= 60) return ' NE' 
                                                        else if (item.list[0].wind.deg > 60 && item.list[0].wind.deg <= 120) return ' E' 
                                                        else if (item.list[0].wind.deg > 160 && item.list[0].wind.deg <= 150) return ' SE' 
                                                        else if (item.list[0].wind.deg > 150 && item.list[0].wind.deg <= 210) return ' S' 
                                                        else if (item.list[0].wind.deg > 210 && item.list[0].wind.deg <= 240) return ' SW'
                                                        else if (item.list[0].wind.deg > 240 && item.list[0].wind.deg <= 300) return ' W'
                                                        else if (item.list[0].wind.deg > 300 && item.list[0].wind.deg <= 330) return ' NW'
                                                        else if (item.list[0].wind.deg > 330 && item.list[0].wind.deg <= 360) return ' N'
                                                    })()}
                                                </li>
                                                <li className=''>&hearts; {item.list[0].main.pressure}hPa</li>
                                                <li className=''><span className='xl:font-medium'>Humidity: </span>{item.list[0].main.humidity}%</li>
                                                <li className=''><span className='xl:font-medium'>Сlouds: </span>{item.list[0].clouds.all}%</li>
                                                <li className=''><span className='xl:font-medium'>Min Temp: </span>{item.list[0].main.temp_min}°C</li>
                                                <li className=''><span className='xl:font-medium'>Visibility: </span>{item.list[0].visibility /1000}km</li>
                                            </ul>
                                        </div> 
                                    </div>
                                    <div className='mt-7 flex relative overflow-hidden sm:w-[45%]'>
                                        <iframe id="geo" width="100%" height="260" frameBorder="1" allowFullScreen="true" className='overflow-hidden rounded-2xl self-end' src={mapUrl}></iframe>
                                    </div>
                                </section>
        
                            </div>
                        </div>
                    )
                }
            ) : null}
        </section>
    )
}
