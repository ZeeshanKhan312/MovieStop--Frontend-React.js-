// Global state to track if scripts are loaded
let moviesScriptLoaded = false;
let moviesSectionScriptLoaded = false;

/* ===== DOM Element References ===== */
// Modal elements
const signupModal = document.getElementById("signupModal");
const signinModal = document.getElementById("signinModal");
const openSignupModalBtn = document.querySelectorAll("#openSignupModalBtn");
const openSigninModalBtn = document.querySelectorAll("#openSigninModalBtn");
const closeButtons = document.querySelectorAll(".close");

// Search functionality elements
const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');

// Store current search query
let searchQuery = '';

/* ===== Modal Management ===== */
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

// Close modals when clicking the 'X' button
closeButtons.forEach(button => {
    button.onclick = function() {
        signupModal.style.display = "none";
        signinModal.style.display = "none";
    }
});

// Close modals when clicking outside the modal content
window.onclick = function(event) {
    if (event.target === signupModal) {
        signupModal.style.display = "none";
    }
    if (event.target === signinModal) {
        signinModal.style.display = "none";
    }
}

/* ===== Search Functionality ===== */
// Add event listeners for search button and Enter key
searchButton.addEventListener('click', handleSearch);
searchInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
        handleSearch();
    }
});

// Handle search input and clear search field
function handleSearch() {
    searchQuery = searchInput.value.trim();
    console.log('Search query:', searchQuery);
    searchInput.value = '';
}

/* ===== Tab Navigation ===== */
const tabButtons = document.querySelectorAll('.tab-button');
const tabContent = document.getElementById('tabContent');

// Map tab IDs to their corresponding HTML files
const tabPages = {
    'movies': './pages/movies.html',
    'bollywood': './pages/moviesSection.html',
    'hollywood': './pages/moviesSection.html',
    'action': './pages/moviesSection.html',
    'comedy': './pages/moviesSection.html',
    'horror': './pages/moviesSection.html',
    'romance': './pages/moviesSection.html',
    'sci-fi': './pages/moviesSection.html',
    'stream': './pages/stream.html',
    'events': './pages/events.html',
    'plays': './pages/plays.html',
    'sports': './pages/sports.html',
    'activities': './pages/activities.html'
};

// Load movies.js script only once
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

// Load moviesSection.js script only once
async function loadMoviesSectionScript() {
    if (moviesSectionScriptLoaded) {
        return Promise.resolve();
    }

    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = './pages/scripts/moviesSection.js';
        script.onload = () => {
            moviesSectionScriptLoaded = true;
            resolve();
        };
        script.onerror = () => reject(new Error('Failed to load moviesSection script'));
        document.body.appendChild(script);
    });
}

// Load content for selected tab
async function loadTabContent(tabId) {
    try {
        // First load the HTML content
        const response = await fetch(tabPages[tabId]);
        const html = await response.text();
        tabContent.innerHTML = html;
        
        // For movies tab, ensure script is loaded and display movies
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
        // For category tabs (bollywood, hollywood, action, etc.), load moviesSection script
        else if (['bollywood', 'hollywood', 'action', 'comedy', 'horror', 'romance', 'sci-fi'].includes(tabId)) {
            if (!moviesSectionScriptLoaded) {
                await loadMoviesSectionScript();
            }
            // Short delay to ensure DOM is updated
            setTimeout(() => {
                if (typeof displayMoviesByTab === 'function') {
                    displayMoviesByTab(tabId);
                } else {
                    console.error('displayMoviesByTab function not found');
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
        // Update active tab styling
        tabButtons.forEach(btn => btn.classList.remove('active'));
        button.classList.add('active');
        
        // Load the selected tab's content
        const tabId = button.getAttribute('data-tab');
        loadTabContent(tabId);
    });
});

/* ===== Carousel Functionality ===== */
document.addEventListener('DOMContentLoaded', function() {
    // Get carousel elements
    const track = document.querySelector('.carousel-track');
    const slides = Array.from(document.querySelectorAll('.carousel-slide'));
    const nextButton = document.querySelector('.carousel-button.next');
    const prevButton = document.querySelector('.carousel-button.prev');
    const dotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    let autoAdvanceInterval;

    // Create navigation dots for each slide
    slides.forEach((_, index) => {
        const dot = document.createElement('button');
        dot.classList.add('dot');
        if (index === 0) dot.classList.add('active');
        dot.addEventListener('click', () => goToSlide(index));
        dotsContainer.appendChild(dot);
    });

    const dots = Array.from(document.querySelectorAll('.dot'));

    // Update carousel position and active dot
    function updateCarousel() {
        track.style.transform = `translateX(-${currentIndex * 100}%)`;
        dots.forEach((dot, index) => {
            dot.classList.toggle('active', index === currentIndex);
        });
    }

    // Navigate to specific slide
    function goToSlide(index) {
        currentIndex = index;
        updateCarousel();
        resetAutoAdvance();
    }

    // Navigate to next slide
    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        updateCarousel();
    }

    // Navigate to previous slide
    function prevSlide() {
        currentIndex = (currentIndex - 1 + slides.length) % slides.length;
        updateCarousel();
    }

    // Start auto-advance timer
    function startAutoAdvance() {
        autoAdvanceInterval = setInterval(nextSlide, 5000);
    }

    // Reset auto-advance timer
    function resetAutoAdvance() {
        clearInterval(autoAdvanceInterval);
        startAutoAdvance();
    }

    // Add event listeners for navigation buttons
    nextButton.addEventListener('click', () => {
        nextSlide();
        resetAutoAdvance();
    });

    prevButton.addEventListener('click', () => {
        prevSlide();
        resetAutoAdvance();
    });

    // Pause auto-advance on hover
    track.addEventListener('mouseenter', () => clearInterval(autoAdvanceInterval));
    track.addEventListener('mouseleave', startAutoAdvance);

    // Initialize carousel and load default tab
    updateCarousel();
    startAutoAdvance();
    loadTabContent('movies');
});
