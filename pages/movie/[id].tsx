import { useRouter } from 'next/router';
import { getMovieById } from '../../actions/index';
import { NextPageContext } from 'next';
import { Movie as MovieType } from '../../types';

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
  return (
    <section className="container">
      <div className="jumbotron">
        <h1 className="display-4">{movie.name}</h1>
        <p className="lead">{movie.description}</p>
        <hr className="my-4" />
          <p>{movie.genre}</p>
        <p className="lead">
          <a className="btn btn-primary btn-lg" href="#" role="button">Learn more</a>
        </p>
      </div>
    </section>
  )
}
