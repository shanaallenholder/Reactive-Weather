import React, {useState} from "react";
import WeatherCard from "./WeatherCard.js";

function Location({data, location}) {
const city = data.find((city) => city.city === location) // This will find one of the locations if true.

return <WeatherCard data={city}/>

}




export default Location;
