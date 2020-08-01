import { Movie } from '../types';
import Link from 'next/link';

interface MoveListProps {
  movies: Movie[],
};

export const MoveList = ({ movies }: MoveListProps) => {

  const shortlen = (description: string, maxLength: number) => {
    if (description && description.length > maxLength) {
      return `${description.substr(0, maxLength)}...`;
    }
    return description;
  }

  const renderMovies = () => {
    return movies.map((movie): JSX.Element => (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <div className="card h-100">
          <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
            <a><img className="card-img-top" src={movie.image} alt="" /></a>
          </Link>
          <div className="card-body">
            <h4 className="card-title">
              <Link href="/movie/[id]" as={`/movie/${movie.id}`}>
                <a>{movie.name}</a>
              </Link>
            </h4>
            <h5>$24.99</h5>
            <p className="card-text">{shortlen(movie.description, 100)}</p>
          </div>
          <div className="card-footer">
            <small className="text-muted">{movie.rating}</small>
          </div>
        </div>
      </div>
    ))
  };

  return <>{renderMovies()}</>;
}
