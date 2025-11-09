const slider = document.getElementById("yearSlider");
const eventName = document.getElementById("eventName");
const eventImage = document.getElementById("eventImage");
const menuBtn = document.getElementById("menuBtn");
const closeBtn = document.getElementById("closeBtn");
const sideMenu = document.getElementById("sideMenu");

const events = [
  { name: "La Conquête de la Gaule et la Bataille d'Alésia", img: "images/alesia.jpg", link: "pages/alesia.html" },
  { name: "La Guerre de Cent Ans et Jeanne d’Arc", img: "images/joanofarc.jpg", link: "pages/joan.html" },
  { name: "La Renaissance et l’Humanisme", img: "images/renaissance.jpg", link: "pages/renaissance.html" },
  { name: "Louis XIV et l’Âge d’Or", img: "images/louisxiv.jpg", link: "pages/louis.html" },
  { name: "Napoléon et la Bataille de Waterloo", img: "images/napoleon.jpg", link: "pages/napoleon.html" },
  { name: "Colonisation et Décolonisation", img: "images/colonisation.jpg", link: "pages/colonisation.html" },
  { name: "La France pendant la Première Guerre mondiale", img: "images/ww1.jpg", link: "pages/ww1.html" },
  { name: "La France pendant la Seconde Guerre mondiale", img: "images/ww2.jpg", link: "pages/ww2.html" },
  { name: "Les Révoltes étudiantes de mai 1968", img: "images/1968.jpg", link: "pages/may1968.html" }
];

// Update event display on input
slider.addEventListener("input", () => {
  const value = parseFloat(slider.value);
  const index = Math.round(value);

  eventName.style.opacity = 0;
  eventImage.style.opacity = 0;

  setTimeout(() => {
    eventName.textContent = events[index].name;
    eventImage.src = events[index].img;
    eventName.style.opacity = 1;
    eventImage.style.opacity = 1;
  }, 100);
});

// Snap slider smoothly when released
slider.addEventListener("pointerup", snapSlider);
slider.addEventListener("touchend", snapSlider);

function snapSlider() {
  const value = parseFloat(slider.value);
  const snappedValue = Math.round(value);
  
  slider.classList.add("snapping");
  slider.value = snappedValue;
  
  setTimeout(() => {
    slider.classList.remove("snapping");
  }, 300);
}

// Click image → go to page
eventImage.addEventListener("click", () => {
  const index = Math.round(parseFloat(slider.value));
  window.location.href = events[index].link;
});

// Shrink hero title on scroll
window.addEventListener("scroll", () => {
  if (window.scrollY > 100) document.body.classList.add("scrolled");
  else document.body.classList.remove("scrolled");
});

// Menu open/close - toggle on button click
menuBtn.addEventListener("click", () => {
  sideMenu.classList.toggle("active");
});

closeBtn.addEventListener("click", () => {
  sideMenu.classList.remove("active");
});

// Close menu when clicking outside of it
document.addEventListener("click", (e) => {
  if (!sideMenu.contains(e.target) && !menuBtn.contains(e.target)) {
    sideMenu.classList.remove("active");
  }
});
