import React, {useState} from "react";
import WeatherCard from "./WeatherCard.js";

function Location({data, location}) {
const city = data.find((city) => city.city === location) // This will find the city if the city input is true.

if(!city) {
    return <div>Location not found</div>
}

return <WeatherCard data={city}/>

}




export default Location;
