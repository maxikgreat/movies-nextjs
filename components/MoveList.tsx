import { Movie } from '../types';

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
    return movies.map((movie: Movie): JSX.Element => (
      <div className="col-lg-4 col-md-6 mb-4" key={movie.id}>
        <div className="card h-100">
          <a href="#"><img className="card-img-top" src={movie.image} alt="" /></a>
          <div className="card-body">
            <h4 className="card-title">
              <a href="#">{movie.name}</a>
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
