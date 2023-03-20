let cityNameInput = document.querySelector("#cityName")
let iconImg = document.querySelector("#icon")
let pressureText = document.querySelector(".pressure")
let windSpeedText = document.querySelector(".wind-speed") 
let tempText = document.querySelector(".temp")
let humidityText = document.querySelector(".humidity")
let loadingImg = document.querySelector("#loading")
cityNameInput.addEventListener("keydown", (event) => {
    if (event.key == "Enter") {
        loadingImg.style.display = "block"
        iconImg.style.display = "inline"
        let url = "https://api.openweathermap.org/data/2.5/weather?q="+cityNameInput.value+"&appid=aa57a53f55a1f4baa176f8d5974fccfe&units=metric&lang=ru"
        fetch(url)
            .then((response) => {
                return response.json()
            })
            .then((data) => {
                let temp = data.main.temp
                let windSpeed = data.wind.speed
                let pressure = data.main.pressure
                let humidity = data.main.humidity
                let icon = data.weather[0].icon
                tempText.textContent = temp + "°C"
                windSpeedText.textContent = "Скорость ветра:" + windSpeed + "м/c"
                pressureText.textContent = "Давление:" + Math.round(pressure/1.333) + "мм рт ст"
                humidityText.textContent = "Влажность:" + humidity + "%"
                iconImg.src = "https://openweathermap.org/img/wn/" + icon + "@4x.png"
            })
            .catch((error)=>{
                tempText.textContent = "Город не существует"
                windSpeedText.textContent = ""
                pressureText.textContent = ""
                humidityText.textContent = ""
                iconImg.src = "err0r.png"
            })
            .finally(()=>{
                loadingImg.style.display = "none"
            })
    }
})

