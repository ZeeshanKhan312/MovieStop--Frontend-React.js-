// Global state
let moviesScriptLoaded = false;

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
openSignupModalBtn.forEach(button => {
    button.onclick = function() {
        signinModal.style.display = "none";
        signupModal.style.display = "flex";
    }
});

// Open Sign-In modal and close Sign-Up modal if open
openSigninModalBtn.forEach(button => {
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
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

function handleSearch() {
    searchQuery = searchInput.value.trim();
    console.log('Search query:', searchQuery);
    searchInput.value = '';
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

// Function to load the movies script once
async function loadMoviesScript() {
    if (moviesScriptLoaded) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = './pages/scripts/movies.js';
        script.onload = () => {
            moviesScriptLoaded = true;
            resolve();
        };
        script.onerror = () => reject(new Error('Failed to load movies script'));
        document.body.appendChild(script);
    });
}

// Function to load tab content
async function loadTabContent(tabId) {
    try {
        // First load the HTML content
        const response = await fetch(tabPages[tabId]);
        const html = await response.text();
        tabContent.innerHTML = html;
        
        // If this is the movies tab, ensure the script is loaded and display movies
        if (tabId === 'movies') {
            if (!moviesScriptLoaded) {
                await loadMoviesScript();
            }
            // Short delay to ensure DOM is updated
            setTimeout(() => {
                if (typeof displayMovies === 'function') {
                    displayMovies();
                } else {
                    console.error('displayMovies function not found');
                }
            }, 50);
        }
    } catch (error) {
        console.error('Error loading tab content:', error);
        tabContent.innerHTML = '<p>Error loading content...</p>';
    }
}

// Add click event listeners to tab buttons
tabButtons.forEach(button => {
    button.addEventListener('click', () => {
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        const tabId = button.getAttribute('data-tab');
        loadTabContent(tabId);
    });
});

// Load default tab (Movies) on page load
document.addEventListener('DOMContentLoaded', () => {
    loadTabContent('movies');
});
