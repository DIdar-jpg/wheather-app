import React from 'react'

export default function Card({ state }) {
    const wheatherIcon = (wheatherType) => {
        
    }
    const res = state.data != null ? state.data.map(
        (item) => {
            const map_url = `https://yandex.ru/map-widget/v1/?ll=${item.city.coord.lon}%2C${item.city.coord.lat}&z=8.0`
            return(
                <div className="mt-12 md:w-full">
                    {/* <h2 className="w-full text-center text-4xl">City</h2> */}
                    <div className='mt-6' id="wheather_container">
                        <section className='text-black md:flex md:justify-between'>
                            <div className="md:w-2/5 md">
                                <div>
                                    <div className='text-sm text-orange'>Jan 24, 11:50am</div>
                                    <div className='text-2xl font-bold uppercase mb-2'>{item.city.name}, {item.city.country}</div>
                                </div>
                                <div className="text-sm font-bold mb-5">Feels like {item.list[0].main.feels_like}°C. {item.list[0].weather[0].description}.НАПИШИ формулу скорости ветра Moderate breeze</div>

                                <div className="flex flex-row items-center justify-between">
                                    <div className="flex flex-nowrap items-center justify-between">
                                        <span className='text-4xl'>{item.list[0].main.temp}&deg;C</span>
                                    </div>
                                    <ul className='max-w-[400px] items-center px-5 border-l border-orange'>
                                        <li><img src="" alt="" /> &#10148; {item.list[0].wind.speed}m/s WSW</li>
                                        <li><img src="" alt="" /> &hearts; {item.list[0].main.pressure}hPa</li>
                                        <li>Humidity: {item.list[0].main.humidity}%</li>
                                        <li>Сlouds: {item.list[0].clouds.all}%</li>
                                        <li>Min Temp: {item.list[0].main.temp_min}</li>
                                        <li>Visibility:{item.list[0].visibility /1000}km</li>
                                    </ul>
                                </div> 
                            </div>
                            <div className='mt-7 relative overflow-hidden md:w-1/2'>
                                <iframe id="geo" width="100%" height="260" frameBorder="1" allowFullScreen="true" className='overflow-hidden rounded-2xl' src={map_url}></iframe>
                            </div>
                        </section>

                    </div>
                </div>
            )
        }
    ) : null
    return (
        res
    )
}
