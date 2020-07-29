// import { useState, useEffect } from 'react';
import { SideMenu } from '../components/SideMenu';
import { Carousel } from '../components/Carousel';
import { MoveList } from '../components/MoveList';
import { getMovies } from '../actions/index';
import { Movie } from '../types';

interface MovieState {
  data: Movie[] | [],
  error: string,
}
interface HomeProps {
  movies: Movie[] | [],
}

export async function getServerSideProps() {
  const movies = await getMovies();

  return { props: { movies } }
}

export default function Home({ movies }: HomeProps) {
  // const [movies, setMovies] = useState<MovieState>({
  //   data: [],
  //   error: '',
  // });

  // useEffect(() => {
  //   const fetchMovies = async () => {
  //     try {
  //       const resMovies = await getMovies();
  //       setMovies({ ...movies, data: resMovies });
  //     } catch (error) {
  //       setMovies({ ...movies, error });
  //     }
  //   };
  //   fetchMovies();
  // }, []);

  return (
    <section>
      <div className="container">
        <div className="row">
          <div className="col-lg-3">
            <SideMenu />
          </div>
          <div className="col-lg-9">
            <Carousel />
            <div className="row">
              <MoveList
                movies={movies}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
