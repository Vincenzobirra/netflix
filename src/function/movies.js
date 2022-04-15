import { Movie } from "../models/Movie";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
        'X-RapidAPI-Key': '4ab44b9a0cmsha5c3d9ca48435edp15fb74jsn343d4a6e8492'
    },
};

export const getMovies = (genre = "") => {

    return fetch((genre === "" ? 'https://movies-app1.p.rapidapi.com/api/movies' :
            `https://movies-app1.p.rapidapi.com/api/movies?genres=${genre}`), options)
        .then(response => response.json())
        .then(movies => movies.results.map(movie => new Movie(movie._id, movie.image, movie.title, movie.year, movie.description, movie.genres[0].name)))
        .catch(err => console.error(err));

};

export const getMovieId = (movieId) => {
    return fetch(`https://movies-app1.p.rapidapi.com/api/movie/${movieId}`, options)
        .then(response => response.json())
        .then(movie => new Movie(movie.result._id, movie.result.image, movie.result.title, movie.result.year, movie.result.description, movie.result.genres[0].name))
        .catch(err => console.error(err));

};