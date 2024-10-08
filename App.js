import React, {useState} from 'react';
// Import data and WeatherCard here
import WeatherCard from './components/WeatherCard.js'
import cities from './data.js';
import Location from './components/Location.js'
import Form from './components/Form.js'



function App() {
const [location, setLocation] = useState('London')

    return (
        <>
            <h1 className = "title">REACTIVE WEATHER</h1>
            <h3 className = "subtitle">Up to the minute weather news</h3>
            <div className = "app">
                {/* Render components here */}
            <Location data={cities} location={location} />
            <Form location={location} setLocation={setLocation} />
            </div>
            
        </>
    );
}

export default App;