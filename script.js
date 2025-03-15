// script.js

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
