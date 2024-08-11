import React from 'react'

import { WiShowers, WiDaySunny, WiCloudy } from "react-icons/wi";

import { useTranslation } from 'react-i18next'
import { UseWeather } from '../../hooks/UseWeather.js';

import { dayWeather } from './dayWeather.js'
import  { WeatherIcon }  from './weatherIcon.jsx'

import './DaysForcast.css'

export default function DaysForcast() {

    const [ t ] = useTranslation()
    
    const { data } = UseWeather()
    
    const dayWeatherResult = dayWeather(data.list)

    return (
        <div className="lg:w-[35%]">

            <h2 className="text-2xl font-bold mb-5">{dayWeatherResult.length}-{t('days_frt')}</h2>
            <div className="grid  grid-cols-1 gap-2">
            {dayWeatherResult.map( item => {
                const wType = item.weatherDescription
                return(
                    <div className='day-weather grid grid-rows-1 grid-cols-3 items-center text-base duration-200 p-2 md:py-2 md:px-3 rounded-md hover:text-lg hover:bg-blue-50'>
                        <span>{item.time}</span>
                        {(() => {
                            if(wType === 'Clouds') return <WeatherIcon iconProp={ {icon: <WiCloudy className='cloud'/>,  temp_min: item.minTemp, temp_max:item.maxTemp} }/>
                            if(wType === 'Clear sky') return <WeatherIcon iconProp={ {icon: <WiDaySunny className='sunny'/>,  temp_min: item.minTemp, temp_max:item.maxTemp} }/>
                            if(wType === 'Clouds/Rain') return <WeatherIcon iconProp={ {icon: <WiShowers className='rain'/>,  temp_min: item.minTemp, temp_max:item.maxTemp} }/>
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
