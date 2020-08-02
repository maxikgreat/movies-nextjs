import { useState, ChangeEvent } from 'react';
import { MovieForm, Genres } from '../types';

interface FormState {
  name: string,
  description: string,
  rating: string,
  image: string,
  cover: string,
  genre: Genres[]
}

interface MovieCreateFormProps {
  createMovieHandler: (form: MovieForm) => void,
}

export const MovieCreateForm = ({createMovieHandler}: MovieCreateFormProps) => {
  const [form, setForm] = useState<FormState>({
    name: '',
    description: '',
    rating: '',
    image: '',
    cover: '',
    genre: [],
  });

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
    createMovieHandler({...form});
  }

  return (
    <form>
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
