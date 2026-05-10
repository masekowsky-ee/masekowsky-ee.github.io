const translations = {
    de: {
        nav_general: "Generell",
        nav_projects: "Projekte",
        nav_qualifications: "Qualifikationen",

        german: "Deutsch",
        english: "Englisch",
    },
    en: {
        nav_general: "General",
        nav_projects: "Projects",
        nav_qualifications: "Qualifications",

        german: "German",
        english: "English",
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
    })
);