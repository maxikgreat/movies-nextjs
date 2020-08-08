
import { Category, Movie } from '../types';
import { createMovie } from '../actions';
import Modal from '../components/Modal';
import { MovieCreateForm } from '../components/MovieCreateForm';
import { useRef } from 'react';
import { useRouter } from 'next/router';

interface SideMenuProps {
  activeCategory: string,
  changeCategory: (category: Category) => void,
  categories: Category[],
}

export const SideMenu = ({activeCategory, changeCategory, categories}: SideMenuProps) => {
  let modalRef = useRef<Modal>(null);
  const router = useRouter();

  const createMovieHandler = async (movie: Movie) => {
    await createMovie(movie);
    if (modalRef && modalRef.current) {
      modalRef.current.closeHandler();
      router.push('/');
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
          onClick={(e) => changeCategory(category)}
          key={category.id}
          id={category.id}
          href="#" 
          className={`list-group-item ${activeCategory === category.name ? 'active' : ''}`}
        >{category.name}</a>
      ))}
    </>
  )
}
