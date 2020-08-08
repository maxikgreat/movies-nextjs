import { useState } from 'react';
import { SideMenu } from '../components/SideMenu';
import { Carousel } from '../components/Carousel';
import { MoveList } from '../components/MoveList';
import { getMovies, getCategories } from '../actions/index';
import { Movie, Image, Category } from '../types';

interface MovieState {
  data: Movie[] | [],
  error: string,
};
interface HomeProps {
  movies: Movie[] | [],
  images: Image[] | [],
  categories: Category[] | [],
};

export const getServerSideProps = async () => {
  const movies = await getMovies();
  const categories = await getCategories();
  const images = movies.map(movie => ({
    id: `image-${movie.id}`,
    url: movie.cover,
    title: movie.name,
  }));

  return { props: { movies, images, categories } };
}

export default function Home({ movies, images, categories }: HomeProps) {

  const [filter, setFilter] = useState<string>('all');

  const changeCategory = ({ name }: Category) => {
    setFilter(name);
  }

  const filterMovies = (movies: Movie[]) => {
    if (filter === 'all') {
      return movies;
    }
    return movies.filter(movie => movie.genre && movie.genre.includes(filter));
  }

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu
              activeCategory={filter}
              changeCategory={changeCategory}
              categories={categories}
            />
          </div>
          <div className="col-lg-9">
            <h1>Category: {filter} movies</h1>
            <Carousel
              images={images}
            />
            <div className="row">
              <MoveList
                movies={filterMovies(movies)}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
