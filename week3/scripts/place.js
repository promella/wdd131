// FOOTER DATES
const year = document.querySelector("#year");
const lastModified = document.querySelector("#lastModified");

year.textContent = new Date().getFullYear();
lastModified.textContent = "Last Modified: " + document.lastModified;


// WEATHER VALUES (STATIC for now)
const temperature = 8; // °C
const windSpeed = 10; // km/h

const windChillElement = document.querySelector("#windChill");

// FUNCTION (ONE LINE RETURN)
function calculateWindChill(temp, speed) {
    return 13.12 + (0.6215 * temp) - (11.37 * speed**0.16) + (0.3965 * temp * speed**0.16);
}

// CONDITIONS
if (temperature <= 10 && windSpeed > 4.8) {
    const chill = calculateWindChill(temperature, windSpeed);
    windChillElement.textContent = chill.toFixed(1) + " °C";
} else {
    windChillElement.textContent = "N/A";
}