// Read about recoil: https://my-js.org/docs/guide/recoil/
// Атомы - это единицы состояния, на которые компоненты могут подписываться.
// Селекторы преобразуют состояние синхронным или асинхронным способом.
// Для чтения и записи в атом из компонента используется хук useRecoilState(). Это как useState(), но состояние может распределяться между несколькими компонентами
// Компоненты, использующие состояние Recoil должны быть обернуты в RecoilRoot.

import { atom } from 'recoil';
// Атомы создаются с помощью функции atom():
type Language = 'EN' | 'DE' | 'RU'
type Settlement = string

export const languageState = atom<Language>(
    {
        key: 'lang', // unique ID (with respect to other atoms/selectors)
        default: 'EN', // default value (aka initial value)
    }
);
export const settlementState = atom<Settlement>(
    {
        key: 'settlement', // unique ID (with respect to other atoms/selectors)
        default: 'London', // default value (aka initial value)
    }
);
// export const currentWheather = selector({
//     key: 'currentWheather',
//     get: async ({get}) => {
//         const coordsResponse = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${get(settlementState)}&appid=5635144112231f19fc2e1215464c4afd`)
//         const cityName = await coordsResponse.json()
//         console.log(cityName)
//         const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${cityName[0].lat}&lon=${cityName[0].lon}&appid=5635144112231f19fc2e1215464c4afd&units=metric`)
//         const wheather =  await response.json()
//         return [wheather]
//     }
// })
