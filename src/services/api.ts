import axios from 'axios';


export const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/movie/'
});
export const IMG_URL = 'https://image.tmdb.org/t/p/w500';
export const API_KEY = '5086322b61f14af980a45d3318e1bdc2';
