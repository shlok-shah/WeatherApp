
const weatherAPI = () => {
    let cityname = document.getElementsByClassName("cityname")[0];
    let region = document.getElementsByClassName("regionname")[0];
    let latitude = document.getElementsByClassName("latitude")[0];
    let longitude = document.getElementsByClassName("longitude")[0];
    let localtime = document.getElementsByClassName("localtime")[0];
    let temp = document.getElementsByClassName("temp")[0];
    let visibility = document.getElementsByClassName("visibility")[0];
    let wind = document.getElementsByClassName("wind")[0];
    let humidity = document.getElementsByClassName("humidity")[0];
    let pressure = document.getElementsByClassName("pressure")[0];
    let precip = document.getElementsByClassName("precip")[0];
    let cityweather = document.getElementById("cityweather");
    let geninfo = document.getElementById("geninfo");
    let icon = document.getElementsByClassName("icon")[0];
    
    let area = document.getElementById("city").value;
    fetch(`https://api.weatherapi.com/v1/current.json?key=a5734f426b354ff9aab61937230203&q=${area}&aqi=no`).then(response => {
        console.log('response', response)
        return response.json()
    }).then(data => {
        console.log(data);
        console.log(data.current.condition.text);
        console.log(cityname);
        cityname.innerText = "City: " + data.location.name;
        region.innerText = "Region: " + data.location.region;
        latitude.innerText = "Latitude: " + data.location.lat;
        longitude.innerText = "Longitude: " +data.location.lon;
        localtime.innerText = "Local Time: " + data.location.localtime;
        temp.innerHTML = 
        `<i class="wi wi-thermometer"></i> Temperature: ${data.current.temp_c} deg C`
        visibility.innerHTML = 
        `<i class="wi wi-dust"></i> Visibility: ${data.current.vis_km} KM`
        wind.innerHTML = 
        `<i class="wi wi-strong-wind"></i> ${data.current.wind_kph} Kmph`
        precip.innerHTML = 
        `<i class="wi wi-umbrella"></i> Precipitation: ${data.current.precip_mm} mm`
        humidity.innerHTML = 
        `<i class="wi wi-humidity"></i> Humidity: ${data.current.humidity} %`
        pressure.innerHTML = 
        `<i class="wi wi-barometer"></i> Pressure: ${data.current.pressure_mb} mbar`
        geninfo.innerText = `The weather in ${data.location.name} is ${data.current.condition.text} right now.`
        icon.innerHTML = `<img src="${data.current.condition.icon}" width=80px>`
        cityweather.innerText = `City: ${data.location.name}`
    }).catch(err => {
        console.log('Cannot Find Area');
        
    })
    
    return false

    
}; 

