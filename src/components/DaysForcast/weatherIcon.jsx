import React from 'react'

import { IconContext } from "react-icons";


export function WeatherIcon({iconProp}) {
    const {icon, temp_max, temp_min} = iconProp
    return(
        <span className='flex items-center justify-center text-center'>
            <IconContext.Provider value={{ size: '35px' }}>
                {icon}
            </IconContext.Provider>
            {temp_max} / {temp_min}°C
        </span>
    )
}
