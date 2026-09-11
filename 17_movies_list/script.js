let movies = JSON.parse(localStorage.getItem("bollywoodMovies")) || [

    // Emotional Drama
    {id:1,name:"Taare Zameen Par",year:2007,genre:"Emotional Drama",watched:false},
    {id:2,name:"Masaan",year:2015,genre:"Emotional Drama",watched:false},
    {id:3,name:"Swades",year:2004,genre:"Emotional Drama",watched:false},
    {id:4,name:"Bajrangi Bhaijaan",year:2015,genre:"Emotional Drama",watched:false},
    {id:5,name:"Black",year:2005,genre:"Emotional Drama",watched:false},
    {id:6,name:"Udaan",year:2010,genre:"Emotional Drama",watched:false},
    {id:7,name:"Piku",year:2015,genre:"Emotional Drama",watched:false},

    // Action
    {id:8,name:"Gadar: Ek Prem Katha",year:2001,genre:"Action",watched:false},
    {id:9,name:"Lagaan",year:2001,genre:"Action",watched:false},
    {id:10,name:"Border",year:1997,genre:"Action",watched:false},
    {id:11,name:"Lakshya",year:2004,genre:"Action",watched:false},
    {id:12,name:"The Legend of Bhagat Singh",year:2002,genre:"Action",watched:false},
    {id:13,name:"Rang De Basanti",year:2006,genre:"Action",watched:false},
    {id:14,name:"Baby",year:2015,genre:"Action",watched:false},

    // Thriller
    {id:15,name:"Kahaani",year:2012,genre:"Thriller",watched:false},
    {id:16,name:"Drishyam",year:2015,genre:"Thriller",watched:false},
    {id:17,name:"Gupt: The Hidden Truth",year:1997,genre:"Thriller",watched:false},
    {id:18,name:"Baazigar",year:1993,genre:"Thriller",watched:false},
    {id:19,name:"A Wednesday!",year:2008,genre:"Thriller",watched:false},
    {id:20,name:"Special 26",year:2013,genre:"Thriller",watched:false},
    {id:21,name:"Ek Hasina Thi",year:2004,genre:"Thriller",watched:false},

    // Romance
    {id:22,name:"Dilwale Dulhania Le Jayenge",year:1995,genre:"Romance",watched:false},
    {id:23,name:"Kuch Kuch Hota Hai",year:1998,genre:"Romance",watched:false},
    {id:24,name:"Hum Aapke Hain Koun",year:1994,genre:"Romance",watched:false},
    {id:25,name:"Maine Pyar Kiya",year:1989,genre:"Romance",watched:false},
    {id:26,name:"Veer-Zaara",year:2004,genre:"Romance",watched:false},
    {id:27,name:"Rockstar",year:2011,genre:"Romance",watched:false},
    {id:28,name:"Aashiqui 2",year:2013,genre:"Romance",watched:false},
    {id:29,name:"Kabhi Khushi Kabhie Gham",year:2001,genre:"Romance",watched:false},

    // Comedy
    {id:30,name:"Hera Pheri",year:2000,genre:"Comedy",watched:false},
    {id:31,name:"Andaz Apna Apna",year:1994,genre:"Comedy",watched:false},
    {id:32,name:"3 Idiots",year:2009,genre:"Comedy",watched:false},
    {id:33,name:"Munna Bhai M.B.B.S.",year:2003,genre:"Comedy",watched:false},
    {id:34,name:"Welcome",year:2007,genre:"Comedy",watched:false},
    {id:35,name:"Chup Chup Ke",year:2006,genre:"Comedy",watched:false},
    {id:36,name:"Dhamaal",year:2007,genre:"Comedy",watched:false},

    // Bollywood Masala
    {id:37,name:"Om Shanti Om",year:2007,genre:"Romance",watched:false},
    {id:38,name:"Main Hoon Na",year:2004,genre:"Action",watched:false},
    {id:39,name:"Kabhi Alvida Naa Kehna",year:2006,genre:"Romance",watched:false},
    {id:40,name:"Kal Ho Naa Ho",year:2003,genre:"Emotional Drama",watched:false},
    {id:41,name:"Omkara",year:2006,genre:"Realistic Cinema",watched:false},
    {id:42,name:"Devdas",year:2002,genre:"Romance",watched:false},

    // Realistic Cinema
    {id:43,name:"Gangs of Wasseypur",year:2012,genre:"Realistic Cinema",watched:false},
    {id:44,name:"Rang De Basanti",year:2006,genre:"Realistic Cinema",watched:false},
    {id:45,name:"Rock On!!",year:2008,genre:"Realistic Cinema",watched:false},
    {id:46,name:"Queen",year:2014,genre:"Realistic Cinema",watched:false},
    {id:47,name:"Vicky Donor",year:2012,genre:"Realistic Cinema",watched:false},
    {id:48,name:"Paan Singh Tomar",year:2012,genre:"Realistic Cinema",watched:false},

    // Historical
    {id:49,name:"Jodhaa Akbar",year:2008,genre:"Historical",watched:false},
    {id:50,name:"Bajirao Mastani",year:2015,genre:"Historical",watched:false},
    {id:51,name:"Mangal Pandey: The Rising",year:2005,genre:"Historical",watched:false},
    {id:52,name:"Sardar",year:1994,genre:"Historical",watched:false},

    // Additional Great Movies
    {id:53,name:"Munna Bhai M.B.B.S.",year:2003,genre:"Emotional Drama",watched:false},
    {id:54,name:"Zindagi Na Milegi Dobara",year:2011,genre:"Realistic Cinema",watched:false},
    {id:55,name:"Barfi!",year:2012,genre:"Emotional Drama",watched:false},
    {id:56,name:"Rockstar",year:2011,genre:"Realistic Cinema",watched:false},
    {id:57,name:"Bhaag Milkha Bhaag",year:2013,genre:"Action",watched:false},
    {id:58,name:"Chak De! India",year:2007,genre:"Action",watched:false},
    {id:59,name:"Fashion",year:2008,genre:"Realistic Cinema",watched:false},
    {id:60,name:"Wake Up Sid",year:2009,genre:"Realistic Cinema",watched:false}

];


// DOM Elements

const container = document.getElementById("movieContainer");

const totalMovies = document.getElementById("totalMovies");
const watchedMovies = document.getElementById("watchedMovies");
const remainingMovies = document.getElementById("remainingMovies");

const searchInput = document.getElementById("searchInput");
const filterGenre = document.getElementById("filterGenre");
const filterWatched = document.getElementById("filterWatched");


// Save to LocalStorage

function saveMovies() {
    localStorage.setItem("bollywoodMovies", JSON.stringify(movies));
}


// Display Movies

function displayMovies() {

    container.innerHTML = "";

    let searchText = searchInput.value.toLowerCase();
    let genreFilter = filterGenre.value;
    let watchedFilter = filterWatched.value;

    let filteredMovies = movies.filter(movie => {

        let matchesSearch = movie.name.toLowerCase().includes(searchText);

        let matchesGenre =
            genreFilter === "all" || movie.genre === genreFilter;

        let matchesWatched =
            watchedFilter === "all" ||
            (watchedFilter === "watched" && movie.watched) ||
            (watchedFilter === "unwatched" && !movie.watched);

        return matchesSearch && matchesGenre && matchesWatched;

    });


    filteredMovies.forEach(movie => {

        const card = document.createElement("div");

        card.className = `movie-card ${movie.watched ? "watched" : ""}`;

        card.innerHTML = `

            <button class="delete-btn" onclick="deleteMovie(${movie.id})">
                Delete
            </button>

            <h3>${movie.name}</h3>

            <p><strong>Release Year:</strong> ${movie.year}</p>

            <span class="genre">${movie.genre}</span>

            <div class="watch-box">

                <input type="checkbox"
                    ${movie.watched ? "checked" : ""}
                    onchange="toggleWatched(${movie.id})">

                <label>${movie.watched ? "Watched ✓" : "Not Watched"}</label>

            </div>

        `;

        container.appendChild(card);

    });

    updateStats();

}


// Toggle Watched Status

function toggleWatched(id) {

    movies = movies.map(movie => {

        if (movie.id === id) {
            movie.watched = !movie.watched;
        }

        return movie;

    });

    saveMovies();

    displayMovies();

}


// Delete Movie

function deleteMovie(id) {

    if (confirm("Are you sure you want to delete this movie?")) {

        movies = movies.filter(movie => movie.id !== id);

        saveMovies();

        displayMovies();

    }

}


// Add Movie

function addMovie() {

    const name = document.getElementById("movieName").value.trim();
    const year = document.getElementById("movieYear").value;
    const genre = document.getElementById("movieGenre").value;

    if (name === "" || year === "") {

        alert("Please fill all details!");

        return;

    }

    const newMovie = {

        id: Date.now(),

        name: name,

        year: parseInt(year),

        genre: genre,

        watched: false

    };

    movies.push(newMovie);

    saveMovies();

    displayMovies();

    closeModal();

    document.getElementById("movieName").value = "";
    document.getElementById("movieYear").value = "";

}


// Update Statistics

function updateStats() {

    const total = movies.length;

    const watched = movies.filter(movie => movie.watched).length;

    const remaining = total - watched;

    totalMovies.textContent = total;

    watchedMovies.textContent = watched;

    remainingMovies.textContent = remaining;

    const percentage = total === 0 ? 0 : Math.round((watched / total) * 100);

    document.getElementById("progressBar").style.width = percentage + "%";

    document.getElementById("progressText").textContent =
        percentage + "% Completed";

}


// Search & Filters

searchInput.addEventListener("input", displayMovies);
filterGenre.addEventListener("change", displayMovies);
filterWatched.addEventListener("change", displayMovies);


// Modal Functions

function openModal() {
    document.getElementById("movieModal").style.display = "flex";
}

function closeModal() {
    document.getElementById("movieModal").style.display = "none";
}


// Close Modal Outside Click

window.onclick = function(event) {

    const modal = document.getElementById("movieModal");

    if (event.target === modal) {
        closeModal();
    }

};


// Initial Load

displayMovies();