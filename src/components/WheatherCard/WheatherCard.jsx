import React, { useState, useEffect } from 'react'
import { wheatherState, currentWheather } from '../Atoms.js';
import { useRecoilState, useRecoilValue } from 'recoil';


export default function WheatherCard() {
    const getCurrTime = ( ) => {
        const time = new Date()
        const date = time.toLocaleDateString().slice(0,2)
        const hours = time.toLocaleTimeString().slice(0,5)
        return ` ${date}, ${hours}`
    }
    // const [wheather, setWheather] = useState(wheatherData)
    // const coords = [
    //     {
    //         location: 'London',
    //         lat: '51.5073219',
    //         lon: '-0.1276474'
    //     }
    // ]
    // const url = `http://api.openweathermap.org/data/2.5/forecast?lat=${coords[0].lat}&lon=${coords[0].lon}&appid=5635144112231f19fc2e1215464c4afd&units=metric`
    // const getWheather = async (url) => {
    //     const response = await fetch(url)
    //     const wheather =  await response.json()
    //     return wheather
    // }
    // useEffect( () => {
    //     getWheather(url).then( res => {
    //         setWheather({data: [res]} )
            
    //     })
    // }, [])
    // console.log(wheather.data);
    const cardData = useRecoilValue(currentWheather)
    console.log(cardData);
    const res = cardData != null ? cardData.map(
        (item) => {
            const mapUrl = `https://yandex.ru/map-widget/v1/?ll=${item.city.coord.lon}%2C${item.city.coord.lat}&z=8.0`
            getCurrTime(item.list[0].dt)
            return(
                <div className="mt-12 md:w-full">
                    <div className='my-6' id="wheather_container">
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
                                <iframe id="geo" width="100%" height="260" frameBorder="1" allowFullScreen="true" className='overflow-hidden rounded-2xl' src={mapUrl}></iframe>
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
