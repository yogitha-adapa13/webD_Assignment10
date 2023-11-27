/* eslint-disable no-unused-vars */
import { useCallback, useState } from "react";
import "./Tiles.css";
import classNames from 'classnames'
import { Link, NavLink } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const Tiles = (props) => {

    const [weatherData, setWeatherData] = useState(props)
    const navigate = useNavigate();
    console.log({ weatherData });
    const handleOnClick = (routePath) =>{ navigate(routePath,{state:weatherData})};
    return (
        <>
                <div className="tiles-container" onClick={()=>handleOnClick("details/" + weatherData.date.split("/").join("-"))}>
            {/* <Link to={"details/" + weatherData.date.split("/").join("-")}   state={weatherData}> */}
    
            {/* <div className='imageDiv'> */}
                <img src={"https://openweathermap.org/img/w/"+weatherData.data[0].weather[0].icon+".png"} width={200} alt="" >
</img>
{/* </div> */}
                <div className="overlay">
                <h3>{weatherData.date}</h3>
                    <p className="maxT">{(((weatherData.data[0].main.temp_max) - 273.15) * 9 / 5).toFixed(2)}* F </p>
                    <p className="minT"> {(((weatherData.data[0].main.temp_min) - 273.15) * 9 / 5).toFixed(2)}* F</p>
                    {/* <p className="date"> <img src={"https://openweathermap.org/img/w/"+weatherData.data[0].weather[0].icon+".png"} alt="" srcSet="" /></p> */}
                </div>
                
            {/* </Link> */}
                
            </div>
        </>
    )
}

export default Tiles;