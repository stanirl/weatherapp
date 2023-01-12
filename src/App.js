import React,{useState} from "react";
import axios from 'axios'

function App() {

  const [data, setData] = useState(null)
  const [location, setLocation] = useState('')

  const url=`https://api.openweathermap.org/data/2.5/weather?q=${location}&units=metric&appid=57eace08b826402a29fb51e1e1830c31`
  
  const searchLocation =(e)=>{
    if(e.key ==='Enter'){
      axios.get(url).then((response)=>{
        setData(response.data)
        console.log(response.data)
      })
      setLocation('')
    }
    
  }

  return (
    <div className="app">
        <div className="search">
            <input type='text' value={location} onChange={(e)=> setLocation(e.target.value)} placeholder='Enter location'  onKeyDown={searchLocation}/>
        </div>
        {data&&(
          <div className="container">
          <div className="top">
            <div className="location">
                  <p>{data.name}</p>
            </div>
            <div className="temp">
                  <h1>{data.main.temp} ℃</h1>
            </div>
            <div className="description">
                <p>{data.weather[0].main}</p>
            </div>
          </div>
          <div className="bottom">
              <div className="feels">
                  <p className="bold">{data.main.feels_like}℃</p>
                  <p>Feels like</p>
              </div>
              <div className="humidity">
                  <p className="bold">{data.main.humidity}%</p>
                  <p>Humidity</p>
              </div>
              <div className="wind">
                  <p className="bold">{data.wind.speed}</p>
                  <p>Wind Speed</p>
              </div>
          </div>
        </div>
        )}
        
    </div>
  );
}

export default App;
