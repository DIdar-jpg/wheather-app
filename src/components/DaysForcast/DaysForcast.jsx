import React from 'react'
import { useRecoilValue } from 'recoil';
import { currentWheather } from '../Atoms';
import { WiShowers, WiDaySunny, WiCloudy } from "react-icons/wi";
import { IconContext } from "react-icons";

import './DaysForcast.css'
export default function DaysForcast() {
    const weatherArr = useRecoilValue(currentWheather)[0].list
    const dayWeather = weatherData => {
        let dates = weatherData.map( item => new Date(item.dt * 1000).getDate())
        // get an array with dates
        dates = dates.filter((item, index, arr) => arr.indexOf(item) === index)
        // remove duplicate elements
        return dates.map( item => {
            const weatherItem = weatherData.filter( element => new Date(element.dt * 1000).getDate() === item)
            // filter arr by dates
            const getWeatherType = weatherItem => {
                const hasRain = weatherItem.filter( item => item.rain).length > 0 ? 'Rain' : false
                let clouds = weatherItem.map( item => item.clouds.all).reduce( (acc, item) => acc += item, 0) / weatherItem.length
                clouds = clouds < 30 ? 'Clear sky' : 'Clouds'
                return hasRain ? `${clouds}/${hasRain}` : `${clouds}`
            }

            return {
                time: (() => {
                    const dateElement = new Date(weatherItem[1].dt * 1000) 
                    return `${dateElement.toLocaleString('en', {weekday: 'short'})}, ${dateElement.toLocaleString('en', {month: 'short'})} ${dateElement.toLocaleString('en', {day: 'numeric'})}`
                })(),
                minTemp: Math.round(weatherItem.reduce((min, currentValue) => Math.min(min, currentValue.main.temp), +Infinity)),
                maxTemp: Math.round(weatherItem.reduce((max, currentValue) => Math.max(max, currentValue.main.temp), -Infinity)),
                weatherDescription: getWeatherType(weatherItem)
            }
        })
    }

    const weatherIcon = (icon, temp_min, temp_max) => {

        return(
            <span className='flex items-center justify-center text-center'>
                <IconContext.Provider value={{ size: '35px' }}>
                    {icon}
                </IconContext.Provider>
                {temp_max} / {temp_min}°C
            </span>
        )
    }
    return (
        <div className="md:w-[33%]">

            <h2 className="text-2xl font-bold mb-5">{dayWeather(weatherArr).length}-days forecast</h2>
            <div className="grid  grid-cols-1 gap-2">
            {dayWeather(weatherArr).map( item => {
                const wType = item.weatherDescription
                return(
                    <div className='day-weather grid grid-rows-1 grid-cols-3 items-center text-base duration-200 p-2 md:py-2 md:px-3 rounded-md hover:text-lg hover:bg-blue-50'>
                        <span>{item.time}</span>
                        {(() => {
                            if(wType === 'Clouds') return weatherIcon(<WiCloudy className='cloud'/>, item.minTemp, item.maxTemp)
                            else if(wType === 'Clear sky') return weatherIcon(<WiDaySunny className='sunny'/>, item.minTemp, item.maxTemp)
                            else if(wType === 'Clouds/Rain') return weatherIcon(<WiShowers className='rain'/>, item.minTemp, item.maxTemp)
                        })()}
                        <span className='text-right'>
                            {wType}
                        </span>
                    </div>
                )})}
            </div>
        </div>
    )
}
