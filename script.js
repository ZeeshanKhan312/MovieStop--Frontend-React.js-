// script.js

// Sample movie data with images from Pexels
const movies = [
    {
        title: "The Dark Knight",
        genre: "Action/Drama",
        releaseDate: "July 18, 2024",
        rating: 9.3,
        votes: "2.5M",
        image: "https://lh3.googleusercontent.com/pw/AP1GczNYf0uUuSpJeY40lzFaZnyxP11zqYLGydnPw9-L5sX-uqd5HIMNlFqM4bOJVYIGpRr_8vVXtUal7sDKuFkeNHzxVCbuXBgY9CWmhieC7dBBpH7FVTrbsYBaeM3LXRqIKVTnQ7JFP1GP59Ump95f5lJK8A=w689-h919-s-no-gm"
    },
    {
        title: "Inception Returns",
        genre: "Sci-Fi/Thriller",
        releaseDate: "August 5, 2024",
        rating: 8.9,
        votes: "1.8M",
        image: "https://images.pexels.com/photos/2304204/pexels-photo-2304204.jpeg"
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
    
    // Structure: Image on top, followed by movie info in a separate div
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
    const movieGrid = document.querySelector('.movie-grid');
    if (movieGrid) {
        movieGrid.innerHTML = '';
        movies.forEach(movie => {
            const card = createMovieCard(movie);
            movieGrid.appendChild(card);
        });
    }
}

// Get DOM elements for modals
const signupModal = document.getElementById("signupModal");
const signinModal = document.getElementById("signinModal");
const openSignupModalBtn = document.querySelectorAll("#openSignupModalBtn");
const openSigninModalBtn = document.querySelectorAll("#openSigninModalBtn");
const closeButtons = document.querySelectorAll(".close");

// Get DOM elements for search functionality
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Variable to store the current search query
let searchQuery = '';

// Open Sign-Up modal and close Sign-In modal if open
openSignupModalBtn.forEach(button=>{
  button.onclick = function() {
    signinModal.style.display = "none";
    signupModal.style.display = "flex";
  }
});

// Open Sign-In modal and close Sign-Up modal if open
openSigninModalBtn.forEach(button=>{
  button.onclick = function() {
    signupModal.style.display = "none";
    signinModal.style.display = "flex";
  }
});

// Close modals when the 'X' button is clicked
closeButtons.forEach(button => {
  button.onclick = function() {
    signupModal.style.display = "none";
    signinModal.style.display = "none";
  }
});

// Close modals when clicking outside of them
window.onclick = function(event) {
  if (event.target === signupModal) {
    signupModal.style.display = "none";
  }
  if (event.target === signinModal) {
    signinModal.style.display = "none";
  }
}

// Search functionality
// Add click event listener to search button
searchButton.addEventListener('click', handleSearch);

// Add Enter key press event listener to search input
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

/**
 * Handles the search functionality
 * - Gets the search input value and trims whitespace
 * - Stores it in searchQuery variable
 * - Logs the search query to console
 * - Clears the search input field
 */
function handleSearch() {
    searchQuery = searchInput.value.trim();
    console.log('Search query:', searchQuery);
    searchInput.value = ''; // Clear the search bar
}

// Tab Navigation
const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.getElementById('tabContent');

// Map of tab IDs to their corresponding HTML files
const tabPages = {
    'movies': './pages/movies.html',
    'stream': './pages/stream.html',
    'events': './pages/events.html',
    'plays': './pages/plays.html',
    'sports': './pages/sports.html',
    'activities': './pages/activities.html'
};

// Function to load tab content
async function loadTabContent(tabId) {
    try {
        const response = await fetch(tabPages[tabId]);
        const html = await response.text();
        tabContent.innerHTML = html;

        // If this is the movies tab, display the movies
        if (tabId === 'movies') {
            displayMovies();
        }

        // Execute any scripts in the loaded content
        const scripts = tabContent.getElementsByTagName('script');
        Array.from(scripts).forEach(script => {
            const newScript = document.createElement('script');
            if (script.src) {
                newScript.src = script.src;
            } else {
                newScript.textContent = script.textContent;
            }
            document.body.appendChild(newScript);
        });
    } catch (error) {
        console.error('Error loading tab content:', error);
        tabContent.innerHTML = '<p>Content coming soon...</p>';
    }
}

// Add click event listeners to tab buttons
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        // Remove active class from all buttons
        tabButtons.forEach(btn => btn.classList.remove('active'));
        // Add active class to clicked button
        button.classList.add('active');
        // Load the corresponding content
        const tabId = button.getAttribute('data-tab');
        loadTabContent(tabId);
    });
});

// Load default tab (Movies) on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTabContent('movies');
});
