document.getElementById('submit').addEventListener('click', function () {
    let image = document.getElementById('image');
    let cityName = document.getElementById('search-box').value;
    let API_key = "c995eadaef9f14a9fdf4956d5f570c38";
    let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_key}&units=metric`;

    fetch(url)
        .then(response => response.json())
        .then(data => {
            document.getElementById('city').innerHTML = data.name;
            document.getElementById('temp').innerHTML = Math.floor(data.main.temp)+"°C";
            document.getElementById('type').innerHTML = data.weather[0].main;

            if(type.innerHTML == "Clouds"){
                image.src = "clouds.png";
            }
            else if(type.innerHTML == "Clear"){
                image.src = "clearsky.png";
            }
            else if(type.innerHTML == "Rain"){
                image.src = "rain.webp";
            }
            else if(type.innerHTML == "Mist"){
                image.src = "haze.png";
            }
            else if(type.innerHTML == "Smoke"){
                image.src = "fog.avif";
            }
            else if(type.innerHTML == "Snow"){
                image.src = "snow.png";
            }
        })
        .catch(error => console.error('Error:', error));
});
