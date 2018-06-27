import convert from 'convert-units';
import { SUN } from './../constants/weathers';

const getTemp = kelvin => {
    return Number(convert(kelvin).from('K').to('C').toFixed(2));
}
const getWeatherState = (weather) => {
    return SUN;
}
const transforWeather = (weather_data) => {
    const { humidity, temp } = weather_data.main;
    const { speed } = weather_data.wind;
    const weatherState = getWeatherState(this.weather);
    const temperature = getTemp(temp);
    const data = {
        humidity: humidity,
        temperature: temperature,
        weatherState: weatherState,
        wind: `${speed} m/s`,
    }
    return data;
}

export default transforWeather;