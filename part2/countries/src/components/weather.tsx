import axios from 'axios'
import { useState, useEffect } from 'react'
import { WeatherData } from '../weather'

export default function Weather ({ lat, lon }: {
  lat: number
  lon: number
}) {
  const [weather, setWeather] = useState<WeatherData>()

  useEffect(() => {
    axios.get(`https://api.openweathermap.org/data/3.0/onecall?lat=${lat}&lon=${lon}&appid=${import.meta.env.VITE_WEATHER_KEY}&units=metric`)
    .then(res => {
      setWeather(res.data)
    }).catch(console.error)
  }, [lat, lon])

  return (
    <>
      <p>Temperature {weather?.current.temp} Celcius</p>

      <img src={`https://openweathermap.org/img/wn/${weather?.current.weather[0].icon}@2x.png`} alt={`Weather icon`} />

      <p>Wind {weather?.current.wind_speed} m/s</p>
    </>
  )
}
