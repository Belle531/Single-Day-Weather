<div className="forecast-container">
  {forecastData.map((item) => (
    <div key={item.dt} className="forecast-card">
      <p><strong>{new Date(item.dt_txt).toLocaleDateString()}</strong></p>
      <p>Temp: {item.main.temp} °F</p>
      <p>{item.weather[0].description}</p>
      <img
        src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
        alt="weather icon"
      />
    </div>
  ))}
</div>
