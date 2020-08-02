import { Movie, Category, MovieForm } from './../types';
import axios, { AxiosPromise } from 'axios';

const baseUrl = 'http://localhost:3000';

const MOVIE_DATA: Movie[] = [];

const CATEGORY_DATA: Category[] = [
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

export const getMovies = (): AxiosPromise<Movie[]> => {
  return axios.get(`${baseUrl}/api/v1/movies/`).then(({data}) => data);
}

export const createMovie = (movieForm: MovieForm) => {
  return axios.post(`${baseUrl}/api/v1/movies`, {movieForm}).then(({data}) => data);
}

export const getMovieById = (id: string): AxiosPromise<Movie> => {
  return axios.get(`${baseUrl}/api/v1/movies/${id}`).then(({data}) => data);
}
