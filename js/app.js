// ===== Configuration =====
const API_KEY = "29261b44cb2f64c2ec5544d4763bc62e";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

// ===== SVG Icons =====
const icons = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"/><path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd"/></svg>`,
  tv: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 6h-15v9h15V6Z"/><path fill-rule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z" clip-rule="evenodd"/></svg>`,
  dots: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"/></svg>`,
};

// Menu items configuration
const menuItems = [
  { name: "Home", icon: "home" },
  { name: "Search", icon: "search" },
  { name: "Watchlist", icon: "plus" },
  { name: "Originals", icon: "star" },
  { name: "Movies", icon: "play" },
  { name: "Series", icon: "tv" },
];

// ===== Helper: Create nav item element =====
function createNavItem(item, showName) {
  const div = document.createElement("a");
  div.className = "nav-item";
  div.href = "#";
  div.innerHTML = icons[item.icon];
  if (showName) {
    const span = document.createElement("span");
    span.textContent = item.name;
    div.appendChild(span);
  }
  return div;
}

// ===== Build Header Navigation =====
function buildHeader() {
  const navDesktop = document.getElementById("nav-desktop");
  const navMobile = document.getElementById("nav-mobile");
  const menuToggle = document.getElementById("menu-toggle");
  const dropdown = document.getElementById("dropdown-menu");

  // Desktop: all items with names
  menuItems.forEach(function (item) {
    navDesktop.appendChild(createNavItem(item, true));
  });

  // Mobile: first 3 icons only
  menuItems.slice(0, 3).forEach(function (item) {
    navMobile.appendChild(createNavItem(item, false));
  });

  // 3-dot toggle icon
  menuToggle.innerHTML = icons.dots;

  // Dropdown: remaining items (index > 2)
  menuItems.slice(3).forEach(function (item) {
    dropdown.appendChild(createNavItem(item, true));
  });

  // Toggle dropdown on click
  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("hidden");
  });

  // Close dropdown when clicking outside
  document.addEventListener("click", function () {
    dropdown.classList.add("hidden");
  });
}

// ===== Fetch and Render Slider =====
function buildSlider() {
  var sliderTrack = document.getElementById("slider-track");
  var leftBtn = document.getElementById("slider-left");
  var rightBtn = document.getElementById("slider-right");
  var screenWidth = window.innerWidth;

  fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      var results = data.results;
      results.forEach(function (movie) {
        var img = document.createElement("img");
        img.src = BASE_IMAGE_URL + movie.backdrop_path;
        img.alt = movie.title || movie.name || "Trending Movie";
        img.loading = "lazy";
        sliderTrack.appendChild(img);
      });
    })
    .catch(function (err) {
      console.error("Failed to fetch trending movies:", err);
    });

  // Scroll left
  leftBtn.addEventListener("click", function () {
    sliderTrack.scrollLeft -= screenWidth - 110;
  });

  // Scroll right
  rightBtn.addEventListener("click", function () {
    sliderTrack.scrollLeft += screenWidth - 110;
  });
}

// ===== Initialize =====
document.addEventListener("DOMContentLoaded", function () {
  buildHeader();
  buildSlider();
});
