import { atom, selector } from 'recoil';
export const wheatherState = atom(
    {
        key: 'wheatherState', // unique ID (with respect to other atoms/selectors)
        default: [], // default value (aka initial value)
    }
);
export const currentWheather = selector({
    key: 'currentWheather',
    get: async () => {
        const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=51.5073219&lon=-0.1276474&appid=5635144112231f19fc2e1215464c4afd&units=metric`)
        const wheather =  await response.json()
        return [wheather]
    },
})