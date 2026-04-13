const API_KEY = "29261b44cb2f64c2ec5544d4763bc62e";
const BASE_IMAGE_URL = "https://image.tmdb.org/t/p/original";

const icons = {
  home: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M11.47 3.841a.75.75 0 0 1 1.06 0l8.69 8.69a.75.75 0 1 0 1.06-1.061l-8.689-8.69a2.25 2.25 0 0 0-3.182 0l-8.69 8.69a.75.75 0 1 0 1.061 1.06l8.69-8.689Z"/><path d="m12 5.432 8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 0 1-.75-.75v-4.5a.75.75 0 0 0-.75-.75h-3a.75.75 0 0 0-.75.75V21a.75.75 0 0 1-.75.75H5.625a1.875 1.875 0 0 1-1.875-1.875v-6.198a2.29 2.29 0 0 0 .091-.086L12 5.432Z"/></svg>`,
  search: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.5 3.75a6.75 6.75 0 1 0 0 13.5 6.75 6.75 0 0 0 0-13.5ZM2.25 10.5a8.25 8.25 0 1 1 14.59 5.28l4.69 4.69a.75.75 0 1 1-1.06 1.06l-4.69-4.69A8.25 8.25 0 0 1 2.25 10.5Z" clip-rule="evenodd"/></svg>`,
  plus: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z" clip-rule="evenodd"/></svg>`,
  star: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z" clip-rule="evenodd"/></svg>`,
  play: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M2.25 12c0-5.385 4.365-9.75 9.75-9.75s9.75 4.365 9.75 9.75-4.365 9.75-9.75 9.75S2.25 17.385 2.25 12Zm14.024-.983a1.125 1.125 0 0 1 0 1.966l-5.603 3.113A1.125 1.125 0 0 1 9 15.113V8.887c0-.857.921-1.4 1.671-.983l5.603 3.113Z" clip-rule="evenodd"/></svg>`,
  tv: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path d="M19.5 6h-15v9h15V6Z"/><path fill-rule="evenodd" d="M3.375 3C2.339 3 1.5 3.84 1.5 4.875v11.25C1.5 17.16 2.34 18 3.375 18H9.75v1.5H6a.75.75 0 0 0 0 1.5h12a.75.75 0 0 0 0-1.5h-3.75V18h6.375c1.035 0 1.875-.84 1.875-1.875V4.875C22.5 3.839 21.66 3 20.625 3H3.375Zm0 13.5h17.25a.375.375 0 0 0 .375-.375V4.875a.375.375 0 0 0-.375-.375H3.375A.375.375 0 0 0 3 4.875v11.25c0 .207.168.375.375.375Z" clip-rule="evenodd"/></svg>`,
  dots: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor"><path fill-rule="evenodd" d="M10.5 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Zm0 6a1.5 1.5 0 1 1 3 0 1.5 1.5 0 0 1-3 0Z" clip-rule="evenodd"/></svg>`,
};

const menuItems = [
  { name: "Home", icon: "home" },
  { name: "Search", icon: "search" },
  { name: "Watchlist", icon: "plus" },
  { name: "Originals", icon: "star" },
  { name: "Movies", icon: "play" },
  { name: "Series", icon: "tv" },
];

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

function buildHeader() {
  const navDesktop = document.getElementById("nav-desktop");
  const navMobile = document.getElementById("nav-mobile");
  const menuToggle = document.getElementById("menu-toggle");
  const dropdown = document.getElementById("dropdown-menu");

  menuItems.forEach(function (item) {
    navDesktop.appendChild(createNavItem(item, true));
  });

  menuItems.slice(0, 3).forEach(function (item) {
    navMobile.appendChild(createNavItem(item, false));
  });

  menuToggle.innerHTML = icons.dots;

  menuItems.slice(3).forEach(function (item) {
    dropdown.appendChild(createNavItem(item, true));
  });

  menuToggle.addEventListener("click", function (e) {
    e.stopPropagation();
    dropdown.classList.toggle("hidden");
  });

  document.addEventListener("click", function () {
    dropdown.classList.add("hidden");
  });
}

function buildSlider() {
  let sliderTrack = document.getElementById("slider-track");
  let leftBtn = document.getElementById("slider-left");
  let rightBtn = document.getElementById("slider-right");
  let screenWidth = window.innerWidth;

  fetch(
    "https://api.themoviedb.org/3/trending/movie/day?api_key=" + API_KEY
  )
    .then(function (res) {
      return res.json();
    })
    .then(function (data) {
      let results = data.results;
      results.forEach(function (movie) {
        let img = document.createElement("img");
        img.src = BASE_IMAGE_URL + movie.backdrop_path;
        img.alt = movie.title || movie.name || "Trending Movie";
        img.loading = "lazy";
        sliderTrack.appendChild(img);
      });
    })
    .catch(function (err) {
      console.error("Failed to fetch trending movies:", err);
    });

  leftBtn.addEventListener("click", function () {
    sliderTrack.scrollLeft -= screenWidth - 110;
  });

  rightBtn.addEventListener("click", function () {
    sliderTrack.scrollLeft += screenWidth - 110;
  });
}

const genresList = [
  { "id": 28, "name": "Action" },
  { "id": 12, "name": "Adventure" },
  { "id": 16, "name": "Animation" },
  { "id": 35, "name": "Comedy" },
  { "id": 80, "name": "Crime" },
  { "id": 99, "name": "Documentary" },
  { "id": 18, "name": "Drama" },
  { "id": 10751, "name": "Family" },
  { "id": 14, "name": "Fantasy" },
  { "id": 36, "name": "History" },
  { "id": 27, "name": "Horror" },
  { "id": 10402, "name": "Music" },
  { "id": 9648, "name": "Mystery" },
  { "id": 10749, "name": "Romance" },
  { "id": 878, "name": "Science Fiction" },
  { "id": 10770, "name": "TV Movie" },
  { "id": 53, "name": "Thriller" },
  { "id": 10752, "name": "War" },
  { "id": 37, "name": "Western" }
];

const DISCOVER_MOVIE_URL = "https://api.themoviedb.org/3/discover/movie?api_key=2ec0d66f5bdf1dd12eefa0723f1479cf&with_genres=";

function buildGenreMovieList() {
  let container = document.getElementById("genre-movie-section");
  if (!container) return;
  
  
  for (let i = 0; i < genresList.length; i++) {
    let genre = genresList[i];
    
   
    let sectionDiv = document.createElement("div");
    sectionDiv.className = "genre-section";
    
    
    sectionDiv.innerHTML = `
      <h2 class="genre-title">${genre.name}</h2>
      <div class="movie-list-container">
        <!-- Passing 'this' lets the function know exactly which button was clicked -->
        <button class="movie-list-btn movie-btn-left" onclick="slideLeft(this)">&#10094;</button>
        
        <div class="movie-list"></div>
        
        <button class="movie-list-btn movie-btn-right" onclick="slideRight(this)">&#10095;</button>
      </div>
    `;
    
    
    container.appendChild(sectionDiv);
    
    
    let trackElement = sectionDiv.querySelector(".movie-list");
    
    
    fetch(DISCOVER_MOVIE_URL + genre.id)
      .then(function(res) {
        return res.json();
      })
      .then(function(data) {
        let movies = data.results;
        
        
        for (let j = 0; j < movies.length; j++) {
          let movie = movies[j];
          let movieName = movie.title || movie.name;
          
          if (!movie.backdrop_path && !movie.poster_path) {
             continue; 
          }
          
          
          if (i % 3 === 0) {
            let card = document.createElement("div");
            card.className = "hr-movie-card-container";
            card.dataset.title = movieName.toLowerCase();
            card.dataset.rating = movie.vote_average || 0;
            card.dataset.index = j;
            card.innerHTML = `
              <img src="${BASE_IMAGE_URL + movie.backdrop_path}" class="hr-movie-card" loading="lazy" />
              <h2 class="hr-movie-title">${movieName}</h2>
            `;
            trackElement.appendChild(card);
          } else {
            let card = document.createElement("img");
            card.src = BASE_IMAGE_URL + movie.poster_path;
            card.className = "movie-card";
            card.loading = "lazy";
            card.alt = movieName;
            card.dataset.title = movieName.toLowerCase();
            card.dataset.rating = movie.vote_average || 0;
            card.dataset.index = j;
            trackElement.appendChild(card);
          }
        }
      })
      .catch(function(err) {
        console.log("Error loading movies:", err);
      });
  }
}


function slideLeft(clickedButton) {
  let track = clickedButton.nextElementSibling;
  track.scrollLeft -= 500;
}

function slideRight(clickedButton) {
  let track = clickedButton.previousElementSibling;
  track.scrollLeft += 500;
}

function searchMovies() {
  let query = document.getElementById("search-input").value.toLowerCase().trim();
  let allSections = document.querySelectorAll(".genre-section");

  allSections.forEach(function (section) {
    let cards = section.querySelectorAll(".movie-card, .hr-movie-card-container");
    let anyVisible = false;

    cards.forEach(function (card) {
      let title = card.dataset.title || "";
      if (query === "" || title.includes(query)) {
        card.style.display = "";
        anyVisible = true;
      } else {
        card.style.display = "none";
      }
    });

    section.style.display = anyVisible || query === "" ? "" : "none";
  });
}

function sortMovies() {
  let sortValue = document.getElementById("sort-select").value;
  let allLists = document.querySelectorAll(".movie-list");

  for (let i = 0; i < allLists.length; i++) {
    let list = allLists[i];

    let cards = [];
    for (let j = 0; j < list.children.length; j++) {
      cards.push(list.children[j]);
    }

    for (let a = 0; a < cards.length; a++) {
      for (let b = 0; b < cards.length - a - 1; b++) {
        let shouldSwap = false;

        if (sortValue === "az") {
          let titleA = cards[b].dataset.title || "";
          let titleB = cards[b + 1].dataset.title || "";
          if (titleA > titleB) {
            shouldSwap = true;
          }

        } else if (sortValue === "rating") {
          let ratingA = parseFloat(cards[b].dataset.rating) || 0;
          let ratingB = parseFloat(cards[b + 1].dataset.rating) || 0;
          if (ratingA < ratingB) {
            shouldSwap = true;
          }

        } else {
          let indexA = parseInt(cards[b].dataset.index) || 0;
          let indexB = parseInt(cards[b + 1].dataset.index) || 0;
          if (indexA > indexB) {
            shouldSwap = true;
          }
        }

        if (shouldSwap) {
          let temp = cards[b];
          cards[b] = cards[b + 1];
          cards[b + 1] = temp;
        }
      }
    }

    for (let k = 0; k < cards.length; k++) {
      list.appendChild(cards[k]);
    }
  }
}

document.addEventListener("DOMContentLoaded", function () {
  buildHeader();
  buildSlider();
  buildGenreMovieList();

  document.getElementById("search-input").addEventListener("input", searchMovies);
  document.getElementById("sort-select").addEventListener("change", sortMovies);
});
