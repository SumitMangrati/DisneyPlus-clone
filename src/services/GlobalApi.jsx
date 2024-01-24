import axios from "axios";


const movieBaseUrl = "https://api.themoviedb.org/3";
const api_key = "a8a9dc3b61800e58070e60da037a2e17";


const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=a8a9dc3b61800e58070e60da037a2e17';


// https://api.themoviedb.org/3/trending/all/day?api_key=a8a9dc3b61800e58070e60da037a2e17

const getTrendingVideos = axios.get(movieBaseUrl + "/trending/all/day?api_key=" + api_key);

const getMovieByGenreId=(id)=>axios.get(movieByGenreBaseURL+"&with_genres="+id);

export default{
     getTrendingVideos
     ,getMovieByGenreId
};