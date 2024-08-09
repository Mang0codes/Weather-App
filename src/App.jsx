import { useState } from 'react'
import './App.css'


function App() {
  const [weather, setWeather] = useState(null);
  const[location, setLocation] = useState('');
  const[loading, setLoading] = useState(true);
  const API_KEY = '15cac912a0eca4539ed43cf41d2495d7';

  const fetchWeather = async () => {
    setLoading(true);
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}&units=metric`);
    const data = await response.json();
    setWeather(data);
    if(location != ''){
      setLoading(false);
    }
    setLoading(true);
  }
  return (
    <div>
      <h1>Weather App</h1>
      <input placeholder='Enter your city...'
      value={location}
      type='text'
      onChange={(e) => setLocation(e.target.value)}></input>
      <button onClick={fetchWeather}>Search</button>
      {
        loading ? (
          <p>Loading...</p>
        ) : weather ? (
          <div>
            <h2>{weather.name}</h2>
            <p>{weather.weather[0].description}</p>
            <p>{weather.main.temp}°C </p>
            <p>Humidity: {weather.main.humidity}%</p>
          </div>
        ) : (
          <p>unknown location...No data found</p>
        )
      }
    </div>
  );

}

export default App;
