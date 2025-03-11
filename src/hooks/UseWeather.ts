// import axios from "axios"
// import { useEffect } from "react"
// import { Suspense } from 'react'
// import { useQuery } from "react-query"
// import { useRecoilState } from 'recoil'
// import { settlementState } from '../components/Atoms.ts'

// export function UseWeather(){

//     const [ settetState ] = useRecoilState(settlementState)
     

//     const { data, error, isFetching, isLoading, isSuccess, isError, refetch } = useQuery({
//         queryKey: 'posts',
//         queryFn: () => {
//           return axios.get(process.env.REACT_APP_SETTLEMENT_URL, { params: { 'q':settetState, 'appid':process.env.REACT_APP_WEATHER_APIKEY }})
//             .then( res => res.data[0])
//             .then( coords => axios.get(process.env.REACT_APP_WEATHER_URL, { params: { 'lat':coords.lat, 'lon':coords.lon, 'appid':process.env.REACT_APP_WEATHER_APIKEY, 'units':'metric', }}))
//         },
//         select: data => data.data,
//         // транслируем данные в нужный нам вид
        
//         enabled: !!settetState,
//         // устанавливает условие для запроса

//         refetchOnWindowFocus: false,
//         // устанавливает будет ли reactQuery делать refetch когда окно браузера сново получает фокус
        
//         staleTime: 1000 * 60 * 30
//         // Устанавливаем время за которое будет происходить refetch
//       })
    
//     // useEffect( () => { 
//     //   if (isFetching)  {<Suspense fallback={<div>Загрузка...</div>}></Suspense>}
//     // }, [isFetching])


//     useEffect( () => { 
//       if (isSuccess) console.log('Data fetched successefuly!')
//     }, [isSuccess,data])
  
//     useEffect( () => { 
//       if (isError) console.log(`Data fetched unsuccessefuly! ${error}`)
//     }, [isError])

//     useEffect( () => { 
//       console.log('isRefetching')
//       refetch()
//     }, [settetState])

//     return { data, isLoading, isSuccess, isError, error }
// }

import axios from "axios"
import { useEffect } from "react"
import { Suspense } from 'react'
import { useQuery } from "react-query"
import { useRecoilState } from 'recoil'
import { settlementState } from '../components/Atoms.ts'

interface SettlementLocation {
  name: 'string',
  lat: number,
  lon: number,
}
export function UseWeather(){

    const [ settetState ] = useRecoilState(settlementState)
     
    // const getRequest = (settlUrl: string, key: string, ) => { third }


    const { data, error, isFetching, isLoading, isSuccess, isError, refetch } = useQuery({
        queryKey: 'posts',
        queryFn: () => {
          const settlementUrl = process.env.REACT_APP_SETTLEMENT_URL as string,
                weatherUrl = process.env.REACT_APP_WEATHER_URL as string,
                apiKey = process.env.REACT_APP_WEATHER_APIKEY as string

          return axios.get(settlementUrl, { params: { 'q':settetState, 'appid':apiKey }})
            .then( res => res.data[0] as SettlementLocation)
            .then( coords => axios.get(weatherUrl, { params: { 'lat':coords.lat, 'lon':coords.lon, 'appid':apiKey, 'units':'metric', }}))
        },
        select: data => data.data,
        // транслируем данные в нужный нам вид
        
        enabled: !!settetState,
        // устанавливает условие для запроса

        refetchOnWindowFocus: false,
        // устанавливает будет ли reactQuery делать refetch когда окно браузера сново получает фокус
        
        staleTime: 1000 * 60 * 30
        // Устанавливаем время за которое будет происходить refetch
      })
    useEffect( () => { 
      if (isSuccess) console.log('Data fetched successefuly!')
    }, [isSuccess,data])
  
    useEffect( () => { 
      if (isError) console.log(`Data fetched unsuccessefuly! ${error}`)
    }, [isError])

    useEffect( () => { 
      console.log('isRefetching')
      refetch()
    }, [settetState])

    return { data, isLoading, isSuccess, isError, error }
}

