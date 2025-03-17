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
    },
    {
        title: "Raone",
        rating: 7.8,
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        releaseDate: "2004",
        genre: "Action, Romance, Sci-Fi"
    }
];

// Sample trending movies data
// This array contains a collection of trending movies with their details
// Each movie object has the same structure as the movies array above for consistency
const trendingMovies = [
    {
        title: "Joker",
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        releaseDate: "2019",
        genre: "Crime, Drama, Thriller"
    },
    {
        title: "Parasite",
        rating: 8.5,
        image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        releaseDate: "2019",
        genre: "Comedy, Drama, Thriller"
    },
    {
        title: "Avengers: Endgame",
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        releaseDate: "2019",
        genre: "Action, Adventure, Sci-Fi"
    },
    {
        title: "1917",
        rating: 8.3,
        image: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
        releaseDate: "2019",
        genre: "Drama, War"
    },
    {
        title: "Dune",
        rating: 8.0,
        image: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        releaseDate: "2021",
        genre: "Adventure, Drama, Sci-Fi"
    },
    {
        title: "No Time to Die",
        rating: 7.3,
        image: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
        releaseDate: "2021",
        genre: "Action, Adventure, Thriller"
    }
];

// Sample recommended movies data
const recommendedMovies = [
    {
        title: "The Dark Knight",
        rating: 9.0,
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        releaseDate: "2008",
        genre: "Action, Crime, Drama"
    },
    {
        title: "The Shawshank Redemption",
        rating: 9.3,
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        releaseDate: "1994",
        genre: "Drama"
    },
    {
        title: "Inception",
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        releaseDate: "2010",
        genre: "Action, Adventure, Sci-Fi"
    },
    {
        title: "Dune",
        rating: 8.0,
        image: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        releaseDate: "2021",
        genre: "Adventure, Drama, Sci-Fi"
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
        title: "Joker",
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BNGVjNWI4ZGUtNzE0MS00YTJmLWE0ZDctN2ZiYTk2YmI3NTYyXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        releaseDate: "2019",
        genre: "Crime, Drama, Thriller"
    },
    {
        title: "Parasite",
        rating: 8.5,
        image: "https://m.media-amazon.com/images/M/MV5BYWZjMjk3ZTItODQ2ZC00NTY5LWE0ZDYtZTI3MjcwN2Q5NTVkXkEyXkFqcGdeQXVyODk4OTc3MTY@._V1_.jpg",
        releaseDate: "2019",
        genre: "Comedy, Drama, Thriller"
    },
    {
        title: "Avengers: Endgame",
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        releaseDate: "2019",
        genre: "Action, Adventure, Sci-Fi"
    },
    {
        title: "1917",
        rating: 8.3,
        image: "https://m.media-amazon.com/images/M/MV5BOTdmNTFjNDEtNzg0My00ZjkxLTg1ZDAtZTdkMDc2ZmFiNWQ1XkEyXkFqcGdeQXVyNTAzNzgwNTg@._V1_.jpg",
        releaseDate: "2019",
        genre: "Drama, War"
    },
    {
        title: "No Time to Die",
        rating: 7.3,
        image: "https://m.media-amazon.com/images/M/MV5BYWQ2NzQ1NjktMzNkNS00MGY1LTgwMmMtYTllYTI5YzNmMmE0XkEyXkFqcGdeQXVyMjM4NTM5NDY@._V1_.jpg",
        releaseDate: "2021",
        genre: "Action, Adventure, Thriller"
    }
];


// Function to create a movie card element
// This function takes a movie object and returns HTML markup for a movie card
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

// Function to display all movies in grid layouts
// This function has been updated to handle both Latest Movies and Trending Movies sections
function displayMovies() {
    // Display latest movies in the first grid
    // This targets the default movie grid without an ID
    const movieGrid = document.querySelector('.movie-grid');
    if (movieGrid) {
        const movieCardsHTML = movies.map(movie => createMovieCard(movie)).join('');
        movieGrid.innerHTML = movieCardsHTML;
    }
    
    // Display trending movies in the second grid
    // This targets the trending-grid by its specific ID to populate it with trending movies
    const trendingGrid = document.getElementById('trending-grid');
    if (trendingGrid) {
        const trendingCardsHTML = trendingMovies.map(movie => createMovieCard(movie)).join('');
        trendingGrid.innerHTML = trendingCardsHTML;
    }

    // Display recommended movies in the third grid
    // This targets the recommended-grid by its specific ID to populate it with recommended movies
    const recommendedGrid = document.getElementById('recommended-grid');
    if (recommendedGrid) {
        const recommendedCardsHTML = recommendedMovies.map(movie => createMovieCard(movie)).join('');
        recommendedGrid.innerHTML = recommendedCardsHTML;
    }
}

// Initialize the page when DOM content is loaded
// This ensures that the movie grids are populated as soon as the page loads
document.addEventListener('DOMContentLoaded', function() {
    displayMovies();
});

// Export the displayMovies function for use in other files
window.displayMovies = displayMovies;
