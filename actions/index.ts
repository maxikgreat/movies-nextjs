import { Movie, Category, Post } from './../types';
import axios from 'axios';

const baseUrl = 'http://localhost:3000';

const MOVIE_DATA: Movie[] = [];

const CATEGORY_DATA: Category[] = [
  {id: '0', name: 'all'},
  {id: '1', name: 'drama'},
  {id: '2', name: 'action'},
  {id: '3', name: 'adventure'},
  {id: '4', name: 'historical'},
];

export const getCategories = (): Promise<Category[]> => {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve(CATEGORY_DATA);
    }, 50);
  });
}

export const getMovies = (): Promise<Movie[]> => {
  return axios.get(`${baseUrl}/api/v1/movies/`).then(({data}) => data);
}

export const createMovie = (movieForm: Movie): Promise<string> => {
  return axios.post(`${baseUrl}/api/v1/movies`, {movieForm}).then(({data}) => data);
}

export const getMovieById = (id: string): Promise<Movie[]> => {
  return axios.get(`${baseUrl}/api/v1/movies/${id}`).then(({data}) => data);
}

export const deleteMovie = (id: string): Promise<string> => {
  return axios.delete(`${baseUrl}/api/v1/movies/${id}`).then(({data}) => data);
}

export const updateMovie = (movie: Movie): Promise<string> => {
  return axios.patch(`${baseUrl}/api/v1/movies/${movie.id}`, {movie}).then(({data}) => data);
}

export const getPosts = (): Promise<Post[]> => {
  return axios.get(`${baseUrl}/api/v1/posts`).then(({ data }) => data);
}