import { getMovieById, deleteMovie } from '../../actions/index';
import { NextPageContext } from 'next';
import { Movie as MovieType } from '../../types';
import { useRouter } from 'next/router';

interface MovieNextPageContext extends NextPageContext{
  query: {
    id: string,
  }
}

interface MovieProps {
  movie: MovieType,
}

export const getServerSideProps = async ({ query }: MovieNextPageContext) => {
  const movie = await getMovieById(query.id);

  return {
    props: { movie }
  };
}

export default function Movie({ movie }: MovieProps) {
  const router = useRouter();
  const deleteHandler = async () => {
    await deleteMovie(movie.id);
    router.push('/');
  };

  return (
    <section className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
          <p>{movie.genre}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg mr-2" href="#" role="button">Learn more</a>
          <button 
            className="btn btn-danger btn-lg" 
            role="button"
            onClick={deleteHandler}
          >Delete</button>
        </p>
      </div>
    </section>
  )
}
