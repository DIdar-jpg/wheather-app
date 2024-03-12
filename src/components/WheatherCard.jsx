import React, { useState, useEffect } from 'react'

import Card from './Card.jsx';

export default function WheatherCard() {
    // const getData = async () => {

    //     // let get_conditions = await fetch("http://dataservice.accuweather.com/currentconditions/v1/317036?apikey=RUwxvtHRjUFC02JDedtcpHQdAAuqGgjL&details=true")
    //     let get_cities_cond = await fetch("http://dataservice.accuweather.com/currentconditions/v1/topcities/150?apikey=RUwxvtHRjUFC02JDedtcpHQdAAuqGgjL")
    //     let condition = get_cities_cond.json()
    //     condition.then(
    //         data => {
    //             console.log(data);
    //             const foo = (data) => data.filter(item => item.EnglishName == 'Ashgabat')
    //             console.log(foo(data));
    //             // const wheather_container = document.querySelector('#wheather_container')
                 
    //             // const wheatherValuesList = [
    //             //     {
    //             //         paramName: 'Wind',
    //             //         value: data[0].Wind.Speed.Metric.Value + data[0].Wind.Speed.Metric.Unit,
    //             //     },
    //             //     {
    //             //         paramName: 'Wind Gust',
    //             //         value: data[0].WindGust.Speed.Metric.Value + data[0].WindGust.Speed.Metric.Unit,

    //             //     },
    //             //     {
    //             //         paramName: 'Humidity',
    //             //         value: data[0].RelativeHumidity + '%',
    //             //     },
    //             //     {
    //             //         paramName: 'Indoor Humidity',
    //             //         value: data[0].IndoorRelativeHumidity + '%',
    //             //     },
    //             //     {
    //             //         paramName: 'Pressure',
    //             //         value: data[0].Pressure.Metric.Value + data[0].Pressure.Metric.Unit,
    //             //     },
    //             //     {
    //             //         paramName: 'Cloud Cover',
    //             //         value: data[0].CloudCover + '%',
    //             //     },
    //             //     {
    //             //         paramName: 'Visibility',
    //             //         value: data[0].Visibility.Metric.Value + data[0].Visibility.Metric.Unit,
    //             //     },
    //             //     {
    //             //         paramName: 'Cloud Ceiling',
    //             //         value: data[0].Ceiling.Metric.Value + data[0].Ceiling.Metric.Unit
    //             //     },
                    
                    
                    
    //             // ]
    //             // console.log(data);
    //             // wheather_container.innerHTML = `
    //             // <div className="relative">
    //             //     <div className="w-full flex justify-between">
    //             //         <span>Current Wheather</span>
    //             //         <span>Current Time</span>
    //             //     </div>
    //             //     <div className="w-[220px] h-[140px] relative">
    //             //         <div className="sunny"></div>
    //             //         <div className='absolute top-1/3 right-0 text-md text-center mt-3'>temprature</div>
    //             //     </div>
    //             // </div>

    //             // <div className="text-xl">
    //             //     <div className="w-full mb-5">
    //             //         wheatherType
    //             //     </div>
    //             //     <div className="w-full md:flex md:flex-wrap md:justify-between" id='cond-items'>
    //             //         ${paramItems(wheatherValuesList)}
    //             //     </div>
    //             // </div>
    //             // `
    //         }
    //     )
    // }
    // let geoUrl = `http://api.openweathermap.org/geo/1.0/direct?q=London&limit=5&appid=5635144112231f19fc2e1215464c4afd`


    let [wheather, setWheather] = useState({data: null})
    const coords = [
        {
            location: 'London',
            lat: '51.5073219',
            lon: '-0.1276474'
        }
    ]

    let url = `http://api.openweathermap.org/data/2.5/forecast?lat=${coords[0].lat}&lon=${coords[0].lon}&appid=5635144112231f19fc2e1215464c4afd&units=metric`
    const getWheather = async (url) => {
        const response = await fetch(url)
        const wheather =  await response.json()
        return wheather
    }

    useEffect( () => {
        getWheather(url).then( res => {
            setWheather({data: [res]} )
            
        })
    }, [])
    // console.log(wheather.data.city.name);
    

    console.log(wheather.data);
    return (
        <Card state={wheather}/>
    )
}
