const WeatherForecasts = (props) => {
    const {day, img, imgAlt, conditions, time} = props;
    return (
             <div className="weather">
                <h2>{props.weatherForecast.day}</h2>
                <img src={props.weatherForecast.img} alt={props.weatherForecast.imgAlt} />
                <p>{props.weatherForecast.conditions} </p>
                <p><span>{props.weatherForecast.time} </span></p>
            </div>
    )
}

export default WeatherForecasts;