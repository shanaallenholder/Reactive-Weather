import React, {useState} from "react";
import sunny from "../assets/Sunny.svg"
import Cloudy from "../assets/Cloudy.svg"
import PartlyCloudy from "../assets/partlyCloudy.svg"
import Rainy from "../assets/Rainy.svg"

const icons = {
  Sunny: sunny,
  Rainy: Rainy,
 'Partly cloudy': PartlyCloudy, //In javascript if we have a two words we put them in ''  
  Cloudy: Cloudy

}

function WeatherCard(props) {
  const [isRaining, setIsRaining] = useState(props.data.forecast === 'Rainy')
 
  function handleClick () {
    setIsRaining (!isRaining)
  }

  return (
    <div className = "card">
        <div className = "img-container">
            <img className="card-img-top" src = {icons[props.data.forecast]} alt="Card image cap" id = "icon"/>
        </div>
        <div class="card-body">
            <h3 className="card-title">{props.data.city}</h3>
            <h5 className="card-text">{props.data.temperature}</h5>
            <h5 className="card-text">
            {props.data.forecast}
            </h5> 
        </div>
    </div>
  );
};

// Export the WeatherCard
module.exports = WeatherCard;


