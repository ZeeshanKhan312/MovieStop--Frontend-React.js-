// Sample movie data with titles, ratings, and image URLs
const movies = [
    {
        title: "The Dark Knight",
        rating: 9.0,
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        releaseDate: "2008",
        genre: "Action, Crime, Drama"
    },
    {
        title: "Inception",
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        releaseDate: "2010",
        genre: "Action, Adventure, Sci-Fi"
    },
    {
        title: "Ocean's Eleven",
        rating: 7.7,
        image: "https://m.media-amazon.com/images/M/MV5BYzVmYzVkMmUtOGRhMi00MTNmLThlMmUtZTljYjlkMjNkMjJkXkEyXkFqcGdeQXVyNDk3NzU2MTQ@._V1_.jpg",
        releaseDate: "2001",
        genre: "Crime, Thriller"
    },
    {
        title: "Black Panther",
        rating: 7.3,
        image: "https://m.media-amazon.com/images/M/MV5BMTg1MTY2MjYzNV5BMl5BanBnXkFtZTgwMTc4NTMwNDI@._V1_.jpg",
        releaseDate: "2018",
        genre: "Action, Adventure"
    },
    {
        title: "Eternal Sunshine of the Spotless Mind",
        rating: 8.3,
        image: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
        releaseDate: "2004",
        genre: "Drama, Romance, Sci-Fi"
    },
    {
        title: "The Shawshank Redemption",
        rating: 9.3,
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        releaseDate: "1994",
        genre: "Drama"
    }
];

// Function to create a movie card element
function createMovieCard(movie) {
    return `
        <div class="movie-card">
            <img src="${movie.image}" alt="${movie.title}" class="movie-image">
            <div class="movie-info">
                <h3 class="movie-title">${movie.title}</h3>
                <div class="movie-rating">
                    <span class="rating-number">${movie.rating.toFixed(1)}</span>
                    <i class="fas fa-star"></i>
                </div>
                <p class="movie-metadata">${movie.releaseDate} • ${movie.genre}</p>
            </div>
        </div>
    `;
}

// Function to display all movies in a grid layout
function displayMovies() {
    const movieGrid = document.querySelector('.movie-grid');
    if (!movieGrid) return; // Exit if grid not found

    const movieCardsHTML = movies.map(movie => createMovieCard(movie)).join('');
    movieGrid.innerHTML = movieCardsHTML;
}

// Export the displayMovies function for use in other files
window.displayMovies = displayMovies;
