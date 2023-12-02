import React from "react";
import "./WeatherApp.css";

const WeatherApp = () => {

    let api_key="8aa5d5a7659d0c764daa113aa4a61108"
    const search= async()=>{
        const ele=document.getElementsByClassName('cityInput')
    
    let url=`https://api.openweathermap.org/data/2.5/weather?q=${ele[0].value}&appid=${api_key}`
    const temp=document.getElementById('weather-temp')
    const loc=document.getElementById('weather-location')
    let response=await fetch(url);
    console.log(response)
    let data=await response.json();
    temp.innerHTML=(data.main.temp-273.15).toFixed(2)+"\u00B0"+"C";
    loc.innerHTML=data.name
    }
  return (
    <>
    <div className="container">
      <div className="top-bar">
        <input type="text" className="cityInput" placeholder="Search" ></input>
        <div className="search-icon" onClick={()=>{search()}}>
          <button>search</button>
        </div>
      </div>
      <div id="weather-temp"></div>
      <div id="weather-location"></div>
    </div>
    </>
  );
};

export default WeatherApp;
