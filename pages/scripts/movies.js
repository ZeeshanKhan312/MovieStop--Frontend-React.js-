// Sample movie data with images
const movies = [
    {
        title: "The Dark Knight",
        genre: "Action/Drama",
        releaseDate: "July 18, 2024",
        rating: 9.3,
        votes: "2.5M",
        image: "https://images.pexels.com/photos/2304204/pexels-photo-2304204.jpeg"
    },
    {
        title: "Inception Returns",
        genre: "Sci-Fi/Thriller",
        releaseDate: "August 5, 2024",
        rating: 8.9,
        votes: "1.8M",
        image: "https://lh3.googleusercontent.com/pw/AP1GczNYf0uUuSpJeY40lzFaZnyxP11zqYLGydnPw9-L5sX-uqd5HIMNlFqM4bOJVYIGpRr_8vVXtUal7sDKuFkeNHzxVCbuXBgY9CWmhieC7dBBpH7FVTrbsYBaeM3LXRqIKVTnQ7JFP1GP59Ump95f5lJK8A=w689-h919-s-no-gm"
    },
    {
        title: "Ocean's Legacy",
        genre: "Crime/Comedy",
        releaseDate: "June 12, 2024",
        rating: 8.5,
        votes: "950K",
        image: "https://images.pexels.com/photos/2304204/pexels-photo-2304204.jpeg"
    },
    {
        title: "The Last Stand",
        genre: "Action/Adventure",
        releaseDate: "September 3, 2024",
        rating: 8.7,
        votes: "1.2M",
        image: "https://images.pexels.com/photos/2304204/pexels-photo-2304204.jpeg"
    },
    {
        title: "Eternal Sunshine",
        genre: "Romance/Drama",
        releaseDate: "May 28, 2024",
        rating: 8.8,
        votes: "750K",
        image: "https://images.pexels.com/photos/2304204/pexels-photo-2304204.jpeg"
    }
];

/**
 * Creates a movie card element with image and details
 * @param {Object} movie - Movie object containing title, genre, releaseDate, rating, votes, and image
 * @returns {HTMLElement} Card element with movie details
 */
function createMovieCard(movie) {
    const card = document.createElement('div');
    card.className = 'movie-card';
    
    card.innerHTML = `
        <div class="movie-image">
            <img src="${movie.image}" alt="${movie.title}" loading="lazy">
        </div>
        <div class="movie-info">
            <h3 class="movie-title">${movie.title}</h3>
            <div class="movie-genre">${movie.genre}</div>
            <div class="movie-release">${movie.releaseDate}</div>
            <div class="movie-rating">
                <span class="rating-value">${movie.rating}</span>
                <span class="rating-star"><i class="fas fa-star"></i></span>
                <span class="rating-votes">${movie.votes} votes</span>
            </div>
        </div>
    `;
    
    return card;
}

/**
 * Displays all movies in the grid layout
 * Called when the Movies tab is loaded
 */
function displayMovies() {
    // Wait for DOM to be ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', displayMoviesGrid);
    } else {
        displayMoviesGrid();
    }
}

/**
 * Helper function to actually display the movies in the grid
 * This ensures we have access to DOM elements
 */
function displayMoviesGrid() {
    const movieGrid = document.querySelector('.movie-grid');
    if (!movieGrid) {
        console.error('Movie grid not found');
        return;
    }
    
    movieGrid.innerHTML = '';
    movies.forEach(movie => {
        const card = createMovieCard(movie);
        movieGrid.appendChild(card);
    });
}

// Make displayMovies available globally
window.displayMovies = displayMovies;

// Initialize movies if we're on the movies page
if (document.querySelector('.movie-grid')) {
    displayMovies();
}
