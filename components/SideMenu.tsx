import { Category, Movie } from "../types";
import { createMovie } from '../actions';
import { Modal } from '../components/Modal';
import { MovieCreateForm } from '../components/MovieCreateForm';

interface SideMenuProps {
  categories: Category[],
}

export const SideMenu = ({categories}: SideMenuProps) => {
  const createMovieHandler = async(movie: Movie) => {
    const movies = await createMovie(movie);
    console.log(movies);
  }
  return (
    <>
      <Modal hasSubmit={false}>
        <MovieCreateForm createMovieHandler={createMovieHandler}/>
      </Modal>
      <h1 className="my-4">Movie App</h1>
      {categories.map(category => (
        <a
          key={category.id}
          id={category.id}
          href="#" 
          className="list-group-item"
        >{category.name}</a>
      ))}
    </>
  )
}
