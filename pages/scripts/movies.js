// Sample movie data (in a real app, this would come from an API)
const movies = [
    {
        title: "Sample Movie 1",
        genre: "Action",
        year: 2024,
        image: "https://via.placeholder.com/200x300"
    },
    // More movies would be added here
];

// Function to create movie cards
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    card.innerHTML = `
        <img src="${movie.image}" alt="${movie.title}" class="movie-image">
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <p class="movie-details">Genre: ${movie.genre}</p>
            <p class="movie-details">Year: ${movie.year}</p>
        </div>
    `;
    
    return card;
}

// Function to display movies in the grid
function displayMovies() {
    const movieGrid = document.querySelector('.movie-grid');
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        movieGrid.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayMovies);
