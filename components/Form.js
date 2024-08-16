import React, {useState} from "react";
import WeatherCard from "./WeatherCard.js";


function Form({location, setLocation}) {
const [typedLocation, setTypedLocation] = useState('')

function handleSubmit (event) {
 event.preventDefault();
 setLocation(typedLocation);
 setTypedLocation('')
}


return (

<div className = "form">
    <form onSubmit={handleSubmit}>
        <label className = "city">City:
            <input type="text" value={typedLocation} onChange={event => setTypedLocation(event.target.value)}/>
        </label>
        <button 
            className = "btn btn-primary" 
            type="submit"
        >Submit</button>
    </form>
</div>


)





}


















export default Form;