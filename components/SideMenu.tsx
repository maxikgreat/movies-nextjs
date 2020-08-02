
import { Category, MovieForm } from '../types';
import { createMovie } from '../actions';
import Modal from '../components/Modal';
import { MovieCreateForm } from '../components/MovieCreateForm';
import { useRef } from 'react';

interface SideMenuProps {
  categories: Category[],
}

export const SideMenu = ({categories}: SideMenuProps) => {
  let modalRef = useRef<Modal>(null);

  const createMovieHandler = async (movie: MovieForm) => {
    const movies = await createMovie(movie);
    console.log(movies);
    if (modalRef && modalRef.current) {
      modalRef.current.closeHandler();
    }
  }

  return (
    <>
      <Modal 
        hasSubmit={false}
        ref={modalRef}
      >
        <MovieCreateForm 
          createMovieHandler={createMovieHandler}
        />
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
