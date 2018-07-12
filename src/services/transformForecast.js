import moment from 'moment';
import 'moment/locale/es';
import transformWeather from './transformWeather';
const transformForecast = data => (
  data.list.filter(item => (
    //Filtramos por horas

    moment.unix(item.dt).utc().hour() === 6  ||
    moment.unix(item.dt).utc().hour() === 9  ||
    moment.unix(item.dt).utc().hour() === 12 ||
    moment.unix(item.dt).utc().hour() === 15 ||
    moment.unix(item.dt).utc().hour() === 18 ||
    moment.unix(item.dt).utc().hour() === 21
    
    //Mapeamos los items con los datos que deseamos
  )).map(item => (
    {
      weekDay: moment.unix(item.dt).format('ddd'),
      hour: moment.unix(item.dt).hour(),
      data: transformWeather(item)//shape
    }
  ))
);


export default transformForecast;