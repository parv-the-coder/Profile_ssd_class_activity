import { logPageView, logClickEvents } from '../Q6/script.js'; // adjust path as needed

// Attach listeners
window.addEventListener("load", logPageView);
document.addEventListener("click", logClickEvents);