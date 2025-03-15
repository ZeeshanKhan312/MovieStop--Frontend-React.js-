// Sample events data (in a real app, this would come from an API)
const events = [
    {
        title: "Sample Event 1",
        date: "2024-03-20",
        time: "19:00",
        location: "Event Center",
        description: "An amazing event you won't want to miss!",
        image: "https://via.placeholder.com/300x200"
    },
    // More events would be added here
];

// Function to format date
function formatDate(dateString) {
    const options = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString('en-US', options);
}

// Function to create event cards
function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    
    card.innerHTML = `
        <img src="${event.image}" alt="${event.title}" class="event-image">
        <div class="event-info">
            <h3 class="event-title">${event.title}</h3>
            <p class="event-date">${formatDate(event.date)} at ${event.time}</p>
            <p class="event-details">${event.description}</p>
            <p class="event-location">📍 ${event.location}</p>
        </div>
    `;
    
    return card;
}

// Function to display events in the grid
function displayEvents() {
    const eventsGrid = document.querySelector('.events-grid');
    events.forEach(event => {
        const card = createEventCard(event);
        eventsGrid.appendChild(card);
    });
}

// Initialize the page
document.addEventListener('DOMContentLoaded', displayEvents);
