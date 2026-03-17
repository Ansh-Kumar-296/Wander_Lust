async function loadWeather() {
    const city = document.getElementById("cityInput").value;

    if (!city) {
        alert("Please enter a city");
        return;
    }

    const res = await fetch(`/weather/${city}`);
    const data = await res.json();

    if (data.error) {
        document.getElementById("temp").innerText = "City not found";
        return;
    }

    document.getElementById("temp").innerText = "Temp: " + data.temp + "°C";
    document.getElementById("condition").innerText = "Weather: " + data.condition;
    document.getElementById("suggestion").innerText = "Clothes: " + data.suggestion;
}
