import { Genre } from "../models/Genre";

const options = {
    method: 'GET',
    headers: {
        'X-RapidAPI-Host': 'movies-app1.p.rapidapi.com',
        'X-RapidAPI-Key': '4ab44b9a0cmsha5c3d9ca48435edp15fb74jsn343d4a6e8492'
    }
};

export const getGenres = () => {
    return fetch('https://movies-app1.p.rapidapi.com/api/genres', options)
        .then(response => response.json())
        .then(genres => genres.results.map(genre => new Genre(genre.uuid, genre.name)))
        .catch(err => console.error(err));
}