const navSettings = document.getElementById("nav_settings");
const settingsDiv = document.getElementById("settings");

navSettings.addEventListener('click', (event)=>{
    settingsDiv.classList.toggle("hidden");
});

