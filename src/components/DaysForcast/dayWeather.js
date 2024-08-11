export const dayWeather = weatherData => {
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
                if (weatherItem[1].dt) {
                    const dateElement = new Date(weatherItem[1].dt * 1000) 
                    return `${dateElement.toLocaleString('en', {weekday: 'short'})}, ${dateElement.toLocaleString('en', {month: 'short'})} ${dateElement.toLocaleString('en', {day: 'numeric'})}`
                } else{
                    return ' '
                }
            })(),
            minTemp: Math.round(weatherItem.reduce((min, currentValue) => Math.min(min, currentValue.main.temp), +Infinity)),
            maxTemp: Math.round(weatherItem.reduce((max, currentValue) => Math.max(max, currentValue.main.temp), -Infinity)),
            weatherDescription: getWeatherType(weatherItem)
        }
    })
}