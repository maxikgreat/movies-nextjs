import { useState, useEffect, ChangeEvent } from 'react';
import { MovieForm, Genres, Movie } from '../types';

interface FormState {
  name: string,
  description: string,
  rating: string,
  image: string,
  cover: string,
  genre: Genres[]
}

interface MovieCreateFormProps {
  createMovieHandler?: (form: MovieForm) => void,
  movie?: Movie,
}

export const MovieCreateForm = ({createMovieHandler, movie}: MovieCreateFormProps) => {
  const [form, setForm] = useState<FormState>({
    name: '',
    description: '',
    rating: '',
    image: '',
    cover: '',
    genre: [],
  });

  const convertGenres = (genresString: string): Genres[] => {
    return genresString
    .split(', ')
    .map(genre => {
      return Genres[genre as Genres];
    })
    .filter(genre => genre);
  };

  useEffect(() => {
    if (movie) {
      setForm({
        ...movie,
        rating: movie.rating.toString(),
        genre: convertGenres(movie.genre)
      })
    }
  }, []);

  const onChangeHandler = (
    {target: {value, name}}: ChangeEvent<HTMLInputElement>
  ) => {
    setForm({
      ...form,
      [name]: value,
    });
  };

  const onSelectHandler = (
    {target: {options}}: ChangeEvent<HTMLSelectElement>
  ) => {
    let value: Genres[] = [];
    for (let i = 0; i < options.length; i++) {
      if (options[i].selected) {
        value.push(options[i].value as Genres);
      }
    }
    setForm({
      ...form,
      genre: value,
    })
  }

  const createHandler = () => {
    if (createMovieHandler) {
      createMovieHandler({...form});
    }
  }

  return (
    <form className="pt-5 pb-5">
      <div className="form-group">
        <label htmlFor="name">Name</label>
        <input 
          type="text" 
          className="form-control" 
          name="name" 
          value={form.name}
          onChange={onChangeHandler}
          aria-describedby="emailHelp" 
          placeholder="Lord of the Rings" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description</label>
        <input 
          type="text" 
          className="form-control" 
          name="description" 
          value={form.description}
          onChange={onChangeHandler}
          placeholder="Somewhere in Middle-earth..." 
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Rating</label>
        <input 
          type="number" 
          max="5" 
          min="0" 
          className="form-control" 
          name="rating" 
          value={form.rating}
          onChange={onChangeHandler}
          placeholder="3" 
        />
        <small id="emailHelp" className="form-text text-muted">Max: 5, Min: 0 </small>
      </div>
      <div className="form-group">
        <label htmlFor="image">Image</label>
        <input 
          type="text" 
          className="form-control" 
          name="image" 
          value={form.image}
          onChange={onChangeHandler}
          placeholder="http://....." 
        />
      </div>
      <div className="form-group">
        <label htmlFor="cover">Cover</label>
        <input 
          type="text" 
          className="form-control" 
          name="cover" 
          value={form.cover}
          onChange={onChangeHandler}
          placeholder="http://......" 
        />
      </div>
      <div className="form-group">
        <label htmlFor="genre">Genre</label>
        <select 
          multiple
          className="form-control" 
          id="genre" 
          name="genre"
          value={form.genre}
          onChange={e => onSelectHandler(e)}
        >
          <option>drama</option>
          <option>music</option>
          <option>adventure</option>
          <option>historical</option>
          <option>action</option>
        </select>
        <button 
          type="button" 
          className="btn btn-primary mt-3"
          onClick={createHandler}
        >Create</button>
      </div>
    </form>
  )
}
