const urlParams = new URLSearchParams(window.location.search);
const invite = urlParams.get('host');
let girlName = "Swapnali Dhanmeher";
let daughterOf = "D/O Mrs. Jyoti Dhanmeher & Mr. Nitin Dhanmeher";
let boyName = "Vaibhav Arekar";
let sonOf = "S/O Mrs. Sangeeta Arekar & Mr. Kantaram Arekar";

// Set the date of the engagement
const engagementDate = new Date('2024-04-21T09:00:00');
let countdownInterval;

if (invite === "Swapnali") {
    girlName = "Vaibhav Arekar";
    daughterOf = "S/O Mrs. Sangeeta Arekar & Mr. Kantaram Arekar";
    boyName = "Swapnali Dhanmeher";
    sonOf = "D/O Mrs. Jyoti Dhanmeher & Mr. Nitin Dhanmeher";
}

function updateCountdown() {
    const now = new Date().getTime();
    const distance = engagementDate - now;

    if (distance <= 0) {
        clearInterval(countdownInterval);
        return;
    }

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    updateElement('days', days);
    updateElement('hours', hours);
    updateElement('minutes', minutes);
    updateElement('seconds', seconds);

    countdownInterval = setTimeout(updateCountdown, 1000);
}

function updateElement(id, value) {
    const element = document.getElementById(id).getElementsByClassName('value')[0];
    element.textContent = value < 10 ? `0${value}` : value;
}

function updateNames() {
    const boyNameElement = document.getElementById('boyName');
    const girlNameElement = document.getElementById('girlName');
    const sonOfElement = document.getElementById('sonOf');
    const daughterOfElement = document.getElementById('daughterOf');
    
    boyNameElement.textContent = boyName;
    girlNameElement.textContent = girlName;
    sonOfElement.textContent = sonOf;
    daughterOfElement.textContent = daughterOf;
}

updateNames();
updateCountdown();