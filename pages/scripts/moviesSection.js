
// Movie data for different categories
// Each category corresponds to a data-tab in the main navigation

// Bollywood movies data
const bollywoodMovies = [
    {
        title: "3 Idiots",
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        releaseDate: "2009",
        genre: "Comedy, Drama"
    },
    {
        title: "Dangal",
        rating: 8.3,
        image: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
        releaseDate: "2016",
        genre: "Action, Biography, Drama"
    },
    {
        title: "Lagaan",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        releaseDate: "2001",
        genre: "Drama, Musical, Sport"
    },
    {
        title: "PK",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
        releaseDate: "2014",
        genre: "Comedy, Drama, Sci-Fi"
    },
    {
        title: "Bajrangi Bhaijaan",
        rating: 8.0,
        image: "https://m.media-amazon.com/images/M/MV5BMjE1NjQ5ODc2NV5BMl5BanBnXkFtZTgwOTM5ODIxNjE@._V1_.jpg",
        releaseDate: "2015",
        genre: "Action, Adventure, Comedy"
    },
    {
        title: "Raone",
        rating: 6.4,
        image: "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
        releaseDate: "2011",
        genre: "Action, Adventure, Sci-Fi"
    },{
        title: "3 Idiots",
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        releaseDate: "2009",
        genre: "Comedy, Drama"
    },
    {
        title: "Dangal",
        rating: 8.3,
        image: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
        releaseDate: "2016",
        genre: "Action, Biography, Drama"
    },
    {
        title: "Lagaan",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        releaseDate: "2001",
        genre: "Drama, Musical, Sport"
    },
    {
        title: "PK",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
        releaseDate: "2014",
        genre: "Comedy, Drama, Sci-Fi"
    },
    {
        title: "Bajrangi Bhaijaan",
        rating: 8.0,
        image: "https://m.media-amazon.com/images/M/MV5BMjE1NjQ5ODc2NV5BMl5BanBnXkFtZTgwOTM5ODIxNjE@._V1_.jpg",
        releaseDate: "2015",
        genre: "Action, Adventure, Comedy"
    },
    {
        title: "Raone",
        rating: 6.4,
        image: "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
        releaseDate: "2011",
        genre: "Action, Adventure, Sci-Fi"
    },{
        title: "3 Idiots",
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BNTkyOGVjMGEtNmQzZi00NzFlLTlhOWQtODYyMDc2ZGJmYzFhXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        releaseDate: "2009",
        genre: "Comedy, Drama"
    },
    {
        title: "Dangal",
        rating: 8.3,
        image: "https://m.media-amazon.com/images/M/MV5BMTQ4MzQzMzM2Nl5BMl5BanBnXkFtZTgwMTQ1NzU3MDI@._V1_.jpg",
        releaseDate: "2016",
        genre: "Action, Biography, Drama"
    },
    {
        title: "Lagaan",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BNDYxNWUzZmYtOGQxMC00MTdkLTkxOTctYzkyOGIwNWQxZjhmXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        releaseDate: "2001",
        genre: "Drama, Musical, Sport"
    },
    {
        title: "PK",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BMTYzOTE2NjkxN15BMl5BanBnXkFtZTgwMDgzMTg0MzE@._V1_.jpg",
        releaseDate: "2014",
        genre: "Comedy, Drama, Sci-Fi"
    },
    {
        title: "Bajrangi Bhaijaan",
        rating: 8.0,
        image: "https://m.media-amazon.com/images/M/MV5BMjE1NjQ5ODc2NV5BMl5BanBnXkFtZTgwOTM5ODIxNjE@._V1_.jpg",
        releaseDate: "2015",
        genre: "Action, Adventure, Comedy"
    },
    {
        title: "Raone",
        rating: 6.4,
        image: "https://m.media-amazon.com/images/M/MV5BMzcyMzU4MDUtM2JhOC00ZDg2LTg5MGMtZjc2OGMyMjhlMGE2XkEyXkFqcGdeQXVyNjQ2MjQ5NzM@._V1_.jpg",
        releaseDate: "2011",
        genre: "Action, Adventure, Sci-Fi"
    }
];

// Hollywood movies data
const hollywoodMovies = [
    {
        title: "The Shawshank Redemption",
        rating: 9.3,
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        releaseDate: "1994",
        genre: "Drama"
    },
    {
        title: "The Godfather",
        rating: 9.2,
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "1972",
        genre: "Crime, Drama"
    },
    {
        title: "The Dark Knight",
        rating: 9.0,
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        releaseDate: "2008",
        genre: "Action, Crime, Drama"
    },
    {
        title: "Pulp Fiction",
        rating: 8.9,
        image: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtYzVkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "1994",
        genre: "Crime, Drama"
    },
    {
        title: "Inception",
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        releaseDate: "2010",
        genre: "Action, Adventure, Sci-Fi"
    },
    {
        title: "Interstellar",
        rating: 8.6,
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        releaseDate: "2014",
        genre: "Adventure, Drama, Sci-Fi"
    },{
        title: "The Shawshank Redemption",
        rating: 9.3,
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        releaseDate: "1994",
        genre: "Drama"
    },
    {
        title: "The Godfather",
        rating: 9.2,
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "1972",
        genre: "Crime, Drama"
    },
    {
        title: "The Dark Knight",
        rating: 9.0,
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        releaseDate: "2008",
        genre: "Action, Crime, Drama"
    },
    {
        title: "Pulp Fiction",
        rating: 8.9,
        image: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtYzVkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "1994",
        genre: "Crime, Drama"
    },
    {
        title: "Inception",
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        releaseDate: "2010",
        genre: "Action, Adventure, Sci-Fi"
    },
    {
        title: "Interstellar",
        rating: 8.6,
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        releaseDate: "2014",
        genre: "Adventure, Drama, Sci-Fi"
    },{
        title: "The Shawshank Redemption",
        rating: 9.3,
        image: "https://m.media-amazon.com/images/M/MV5BNDE3ODcxYzMtY2YzZC00NmNlLWJiNDMtZDViZWM2MzIxZDYwXkEyXkFqcGdeQXVyNjAwNDUxODI@._V1_.jpg",
        releaseDate: "1994",
        genre: "Drama"
    },
    {
        title: "The Godfather",
        rating: 9.2,
        image: "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "1972",
        genre: "Crime, Drama"
    },
    {
        title: "The Dark Knight",
        rating: 9.0,
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        releaseDate: "2008",
        genre: "Action, Crime, Drama"
    },
    {
        title: "Pulp Fiction",
        rating: 8.9,
        image: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtYzVkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "1994",
        genre: "Crime, Drama"
    },
    {
        title: "Inception",
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        releaseDate: "2010",
        genre: "Action, Adventure, Sci-Fi"
    },
    {
        title: "Interstellar",
        rating: 8.6,
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        releaseDate: "2014",
        genre: "Adventure, Drama, Sci-Fi"
    }
];

// Action movies data
const actionMovies = [
    {
        title: "The Dark Knight",
        rating: 9.0,
        image: "https://m.media-amazon.com/images/M/MV5BMTMxNTMwODM0NF5BMl5BanBnXkFtZTcwODAyMTk2Mw@@._V1_.jpg",
        releaseDate: "2008",
        genre: "Action, Crime, Drama"
    },
    {
        title: "Mad Max: Fury Road",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
        releaseDate: "2015",
        genre: "Action, Adventure, Sci-Fi"
    },
    {
        title: "John Wick",
        rating: 7.4,
        image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwODI4MzE0MTI@._V1_.jpg",
        releaseDate: "2014",
        genre: "Action, Crime, Thriller"
    },
    {
        title: "Die Hard",
        rating: 8.2,
        image: "https://m.media-amazon.com/images/M/MV5BZjRlNDUxZjAtOGQ4OC00OTNlLTgxNmQtYTBmMDgwZmNmNjkxXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "1988",
        genre: "Action, Thriller"
    },
    {
        title: "Mission: Impossible - Fallout",
        rating: 7.7,
        image: "https://m.media-amazon.com/images/M/MV5BNjRlZmM0ODktY2RjNS00ZDdjLWJhZGYtNDljNWZkMGM5MTg0XkEyXkFqcGdeQXVyNjAwMjI5MDk@._V1_.jpg",
        releaseDate: "2018",
        genre: "Action, Adventure, Thriller"
    },
    {
        title: "Avengers: Endgame",
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_.jpg",
        releaseDate: "2019",
        genre: "Action, Adventure, Drama"
    }
];

// Comedy movies data
const comedyMovies = [
    {
        title: "The Grand Budapest Hotel",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDEzMzQ3MDI@._V1_.jpg",
        releaseDate: "2014",
        genre: "Adventure, Comedy, Crime"
    },
    {
        title: "Superbad",
        rating: 7.6,
        image: "https://m.media-amazon.com/images/M/MV5BMTc0NjIyMjA2OF5BMl5BanBnXkFtZTcwMzIxNDE1MQ@@._V1_.jpg",
        releaseDate: "2007",
        genre: "Comedy"
    },
    {
        title: "Shaun of the Dead",
        rating: 7.9,
        image: "https://m.media-amazon.com/images/M/MV5BMTg5Mjk2NDMtZTk0Ny00YTQ0LWIzYWEtMWI5MGQ0Mjg1OTNkXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "2004",
        genre: "Comedy, Horror"
    },
    {
        title: "Bridesmaids",
        rating: 6.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwODI4MzE0MTI@._V1_.jpg",
        releaseDate: "2011",
        genre: "Comedy, Romance"
    },
    {
        title: "The Hangover",
        rating: 7.7,
        image: "https://m.media-amazon.com/images/M/MV5BNGQwZjg5YmYtYzVkNC00NzliLTljYTctNzI5NmU3MjE2ODQzXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "2009",
        genre: "Comedy"
    },
    {
        title: "Anchorman: The Legend of Ron Burgundy",
        rating: 7.2,
        image: "https://m.media-amazon.com/images/M/MV5BMTQ2MzYwMzk5Ml5BMl5BanBnXkFtZTcwOTI4NzUyMw@@._V1_.jpg",
        releaseDate: "2004",
        genre: "Comedy"
    }
];

// Horror movies data
const horrorMovies = [
    {
        title: "The Shining",
        rating: 8.4,
        image: "https://m.media-amazon.com/images/M/MV5BZWFlYmY2MGEtZjVkYS00YzU4LTg0YjQtYzY1ZGE3NTA5NGQxXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_.jpg",
        releaseDate: "1980",
        genre: "Drama, Horror"
    },
    {
        title: "Hereditary",
        rating: 7.3,
        image: "https://m.media-amazon.com/images/M/MV5BOTU5MDg3OGItZWQ1Ny00ZGVmLTg2YTUtMzBkYzQ1YWIwZjlhXkEyXkFqcGdeQXVyNTAzMTY4MDA@._V1_.jpg",
        releaseDate: "2018",
        genre: "Drama, Horror, Mystery"
    },
    {
        title: "The Exorcist",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BYjhmMGMxZDYtMTkyNy00YWVmLTgyYmUtYTQ0NjY0MzIxZDYwXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_.jpg",
        releaseDate: "1973",
        genre: "Horror"
    },
    {
        title: "Get Out",
        rating: 7.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwODI4MzE0MTI@._V1_.jpg",
        releaseDate: "2017",
        genre: "Horror, Mystery, Thriller"
    },
    {
        title: "The Conjuring",
        rating: 7.5,
        image: "https://m.media-amazon.com/images/M/MV5BMTM3NjA1NDMyMV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_.jpg",
        releaseDate: "2013",
        genre: "Horror, Mystery, Thriller"
    },
    {
        title: "A Quiet Place",
        rating: 7.5,
        image: "https://m.media-amazon.com/images/M/MV5BMjI0MDMzNTQ0M15BMl5BanBnXkFtZTgwMTM5NzM3NDM@._V1_.jpg",
        releaseDate: "2018",
        genre: "Drama, Horror, Sci-Fi"
    }
];

// Romance movies data
const romanceMovies = [
    {
        title: "The Notebook",
        rating: 7.8,
        image: "https://m.media-amazon.com/images/M/MV5BMTk3OTM5Njg5M15BMl5BanBnXkFtZTYwMzA0ODI3._V1_.jpg",
        releaseDate: "2004",
        genre: "Drama, Romance"
    },
    {
        title: "Eternal Sunshine of the Spotless Mind",
        rating: 8.3,
        image: "https://m.media-amazon.com/images/M/MV5BMTY4NzcwODg3Nl5BMl5BanBnXkFtZTcwNTEwOTMyMw@@._V1_.jpg",
        releaseDate: "2004",
        genre: "Drama, Romance, Sci-Fi"
    },
    {
        title: "Pride & Prejudice",
        rating: 7.8,
        image: "https://m.media-amazon.com/images/M/MV5BMTA1NDQ3NTcyOTNeQTJeQWpwZ15BbWU3MDEzMzQ3MDI@._V1_.jpg",
        releaseDate: "2005",
        genre: "Drama, Romance"
    },
    {
        title: "La La Land",
        rating: 8.0,
        image: "https://m.media-amazon.com/images/M/MV5BMzUzNDM2NzM2MV5BMl5BanBnXkFtZTgwNTM3NTg4OTE@._V1_.jpg",
        releaseDate: "2016",
        genre: "Comedy, Drama, Music"
    },
    {
        title: "Before Sunrise",
        rating: 8.1,
        image: "https://m.media-amazon.com/images/M/MV5BZDdiZTAwYzAtMDI3Ni00OTRjLTkzN2UtMGE3MDMyZmU4NTU4XkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        releaseDate: "1995",
        genre: "Drama, Romance"
    },
    {
        title: "500 Days of Summer",
        rating: 7.7,
        image: "https://m.media-amazon.com/images/M/MV5BMTk5MjM4OTU1OV5BMl5BanBnXkFtZTcwODkzNDIzMw@@._V1_.jpg",
        releaseDate: "2009",
        genre: "Comedy, Drama, Romance"
    }
];

// Sci-Fi movies data
const scifiMovies = [
    {
        title: "Blade Runner 2049",
        rating: 8.0,
        image: "https://m.media-amazon.com/images/M/MV5BNzA1Njg4NzYxOV5BMl5BanBnXkFtZTgwODk5NjU3MzI@._V1_.jpg",
        releaseDate: "2017",
        genre: "Action, Drama, Mystery"
    },
    {
        title: "Interstellar",
        rating: 8.6,
        image: "https://m.media-amazon.com/images/M/MV5BZjdkOTU3MDktN2IxOS00OGEyLWFmMjktY2FiMmZkNWIyODZiXkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",
        releaseDate: "2014",
        genre: "Adventure, Drama, Sci-Fi"
    },
    {
        title: "Inception",
        rating: 8.8,
        image: "https://m.media-amazon.com/images/M/MV5BMjAxMzY3NjcxNF5BMl5BanBnXkFtZTcwNTI5OTM0Mw@@._V1_.jpg",
        releaseDate: "2010",
        genre: "Action, Adventure, Sci-Fi"
    },
    {
        title: "The Matrix",
        rating: 8.7,
        image: "https://m.media-amazon.com/images/M/MV5BNzQzOTk3OTAtNDQ0Zi00ZTVkLWI0MTEtMDllZjNkYzNjNTc4L2ltYWdlXkEyXkFqcGdeQXVyNjU0OTQ0OTY@._V1_.jpg",
        releaseDate: "1999",
        genre: "Action, Sci-Fi"
    },
    {
        title: "Arrival",
        rating: 7.9,
        image: "https://m.media-amazon.com/images/M/MV5BMjUxMDQwNjcyNl5BMl5BanBnXkFtZTgwODI4MzE0MTI@._V1_.jpg",
        releaseDate: "2016",
        genre: "Drama, Sci-Fi"
    },
    {
        title: "Dune",
        rating: 8.0,
        image: "https://m.media-amazon.com/images/M/MV5BN2FjNmEyNWMtYzM0ZS00NjIyLTg5YzYtYThlMGVjNzE1OGViXkEyXkFqcGdeQXVyMTkxNjUyNQ@@._V1_.jpg",
        releaseDate: "2021",
        genre: "Adventure, Drama, Sci-Fi"
    }
];

// Map tab IDs to their corresponding movie arrays
const tabMoviesMap = {
    'bollywood': bollywoodMovies,
    'hollywood': hollywoodMovies,
    'action': actionMovies,
    'comedy': comedyMovies,
    'horror': horrorMovies,
    'romance': romanceMovies,
    'sci-fi': scifiMovies
};

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

// Function to display movies based on the selected tab
function displayMoviesByTab(tabId) {
    // Get the section title element
    const sectionTitle = document.getElementById('section-title');
    
    // Get the movies grid element
    const moviesGrid = document.getElementById('movies-grid');
    
    // If the grid doesn't exist, log an error and return
    if (!moviesGrid) {
        console.error('Movies grid not found');
        return;
    }
    
    // Get the movies array for the selected tab
    const moviesArray = tabMoviesMap[tabId];
    
    // If no movies array is found for the tab, log an error and return
    if (!moviesArray) {
        console.error(`No movies found for tab: ${tabId}`);
        return;
    }
    
    // Update the section title based on the selected tab
    if (sectionTitle) {
        // Capitalize the first letter of the tab ID for the title
        sectionTitle.textContent = tabId.charAt(0).toUpperCase() + tabId.slice(1) + ' Movies';
    }
    
    // Generate the HTML for all movie cards
    const moviesHTML = moviesArray.map(movie => createMovieCard(movie)).join('');
    
    // Update the grid with the new movie cards
    moviesGrid.innerHTML = moviesHTML;
}

// Initialize the page when DOM content is loaded
document.addEventListener('DOMContentLoaded', function() {
    // Get the active tab button
    const activeTabButton = document.querySelector('.tab-button.active');
    
    // If an active tab button exists, get its tab ID and display the corresponding movies
    if (activeTabButton) {
        const tabId = activeTabButton.getAttribute('data-tab');
        if (tabId && tabId !== 'movies') {
            displayMoviesByTab(tabId);
        }
    }
});

// Export the displayMoviesByTab function to be used by other scripts
window.displayMoviesByTab = displayMoviesByTab;