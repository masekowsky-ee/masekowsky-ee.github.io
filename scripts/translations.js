const translations = {
    de: {
        nav_general: "Generell",
        nav_projects: "Projekte",
        nav_qualifications: "Qualifikationen",
        nav_settings: "Einstellungen",

        german: "Deutsch",
        english: "Englisch",

        tag_student: "Schüler",
        tag_coding: "Programmieren",
        tag_development: "Entwicklung",

        me_intro: "Ich bin Eesge Masekowsky. Aktuell als Schüler an einem deutschen Gymnasium, strebe ich mein Abitur im Jahr 2028 an. Das Schuljahr 2025/26 habe ich als Juniorbotschafter mit dem PPP/CBYX Stipendium in den USA verbracht. Aktuell lerne ich das Programmieren von Web Applikationen und mehr.",
    
        my_projects_h2: "Meine Projekte",

        quidey_intro: "Quidey ist eine Anwendung zur Organisation und Strukturierung von Lernen und Projekten. Es passt sich an den Benutzer an und erleichtert Entscheidungen um das Lernen leichter und direkter zu machen.",
        features_h4: "Eigenschaften",
        plan_and_adjust: "Erstelle Pläne, die sich an dich anpassen",
        structured_studying: "Lerne strukturiert und gezielt",
        customizable: "Passe die Anwendung auf dich an",
        get_to_quidey: "Zu Quidey",
        learn_more_quidey: "Mehr über Quidey",

        qualifications_h2: "Qualifikationen",
    },
    en: {
        nav_general: "General",
        nav_projects: "Projects",
        nav_qualifications: "Qualifications",
        nav_settings: "Settings",

        german: "German",
        english: "English",

        tag_student: "Student",
        tag_coding: "Coding",
        tag_development: "Development",

        me_intro: "I am Eesge Masekowsky. Currently a student at a German Gymnasium, I am working towards my Abitur in 2028. I spent the 2025/26 school year in the USA as a Junior Ambassador through the PPP/CBYX scholarship. I am currently learning to develop web applications and more.",
    
        my_projects_h2: "My Projects",

        quidey_intro: "Quidey is an application designed to organize and structure learning and projects. It adapts to the user and facilitates decision-making, making the learning process easier and more direct.",
        features_h4: "Features",
        plan_and_adjust: "Create plans that adjust to your needs and habits",
        structured_studying: "Study structured and specific",
        customizable: "Adjust the App to your liking",
        get_to_quidey: "To Quidey",
        learn_more_quidey: "Learn more about Quidey",
    
        qualifications_h2: "Qualifications",
    }
}

//recognize language
function normalizeLang (lang) {
    console.log(lang);
    //default if no lang set
    if(!lang) return "en";
    //otherwise
    if(lang.startsWith("de")){
        return "de";
    } else if(lang.startsWith("en")){
        return "en";
    } else {
        return "en";
    }
}

function setLang(lang){
    lang = normalizeLang(lang);

    localStorage.setItem("lang", lang);

    //text content
    document.querySelectorAll("[data-i18n]").forEach(el=> {
            const key = el.dataset.i18n;
            const text = translations[lang]?.[key];

            if(!text){
                console.warn("Missing translation: ", key);
            }

            el.textContent = text || key;
        }
    )
    //placeholder
    document.querySelectorAll("[data-i18n-placeholder]").forEach(el=> {
            const key = el.dataset.i18nPlaceholder;
            const text = translations[lang]?.[key];

            if(!text){
                console.warn("Missing translation: ", key);
            }

            el.placeholder = text || key;
        }
    )
    //value
    document.querySelectorAll("[data-i18n-value]").forEach(el=> {
            const key = el.dataset.i18nValue;
            const text = translations[lang]?.[key];

            if(!text){
                console.warn("Missing translation: ", key);
            }

            el.value = text || key;
        }
    )
    //title (tooltip etc)
    document.querySelectorAll("[data-i18n-title]").forEach(el=> {
            const key = el.dataset.i18nTitle;
            const text = translations[lang]?.[key];

            if(!text){
                console.warn("Missing translation: ", key);
            }

            el.title = text || key;
        }
    )
}

function applyTranslations() {
    let lang = localStorage.getItem("lang");

    if(!lang){
        lang = navigator.lang;
    }

    setLang(lang);
}

document.addEventListener("DOMContentLoaded", applyTranslations);

const langRadio = document.querySelectorAll('.langRadio');
const en = document.querySelector('#en');
const de = document.querySelector('#de');

langRadio.forEach(radioInput =>
    radioInput.addEventListener('change', ()=>{
        if(en.checked){
            setLang('en');
        } else if (de.checked){
            setLang('de');
        }
        settingsDiv.classList.add("hidden");
    })
);