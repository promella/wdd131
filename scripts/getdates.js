// Get current year
const year = new Date().getFullYear();
document.getElementById("currentyear").textContent = year;

// Get last modified date
const lastModified = document.lastModified;
document.getElementById("last-modified").textContent = "Last Modified: " + lastModified;