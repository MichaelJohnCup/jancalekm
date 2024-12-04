document.getElementById('menu-icon').addEventListener('click', function () {
    document.querySelector('.navbar').classList.toggle('active');
});

// Konzole na Homu

const texts = [
    "Frontend developer",
    "Oprava...",
    "Začínající Frontend developer!"
];
let i = 0;
let j = 0;
let isDeleting = false;

function typeWriter() {
    const consoleElement = document.getElementById("console");

    if (!isDeleting && j < texts[i].length) {
        consoleElement.innerHTML += texts[i].charAt(j);
        j++;
        setTimeout(typeWriter, 100);
    } else if (isDeleting && j > 0) {
        consoleElement.innerHTML = texts[i].substring(0, j - 1);
        j--;
        setTimeout(typeWriter, 50);
    } else if (!isDeleting && j === texts[i].length) {
        setTimeout(() => {
            isDeleting = true;
            setTimeout(typeWriter, 100);
        }, 1000); // Pauza po dopsání textu před mazáním
    } else if (isDeleting && j === 0) {
        isDeleting = false;
        i = (i + 1) % texts.length; // Posun na další text
        setTimeout(typeWriter, 500); // Pauza před zahájením nového textu
    }
}

typeWriter();

// Rotace frame spinu

const frameSpins = document.querySelectorAll('.about-img .frame-spin, .about-img1 .frame-spin, .portfolio-img .frame-spin, .portfolio-img1 .frame-spin');

let angle = 0;

// Nastavení intervalu pro změnu rotace a barvy
setInterval(() => {
    // Zvyšujeme úhel rotace
    angle += 2; 

    // Projdeme všechny elementy a aplikujeme transformaci a barvy
    frameSpins.forEach(frameSpin => {
        // Nastavení rotace na každý element
        frameSpin.style.transform = `translate(-50%, -50%) rotate(${angle}deg)`;

        // Změna intenzity zelené barvy
        const greenIntensity = Math.floor(128 + 127 * Math.sin(angle * Math.PI / 180));

        const colorValue = `rgb(0, ${greenIntensity}, 0)`;

        // Nastavení barvy na element
        frameSpin.style.borderLeftColor = colorValue;
        frameSpin.style.borderRightColor = colorValue;
    });

}, 40); // každých 40ms rotace a změna barvy



// Procentuální hodnoty pro výplň overlaye (zelené vrstvy)
const fillPercentages = [80, 75, 25, 30, 40, 40]; // Procenta pro každý overlay (v procentech)

// Funkce pro vyplnění overlayů
function fillOverlays() {
    let overlays = document.querySelectorAll('.overlay');
    
    overlays.forEach((overlay, index) => {
        let percent = fillPercentages[index];  // Procenta z pole fillPercentages
        let scaleYValue = percent / 100;  // Převod procent na scaleY hodnotu
        overlay.style.transform = `scaleY(${scaleYValue})`;
    });
}

// Spusť funkci po načtení stránky
window.onload = fillOverlays;