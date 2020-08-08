import { Component } from 'react';
import { MovieCreateForm } from '../../../components/MovieCreateForm';
import { MovieNextPageContext } from '../[id]';
import { getMovieById, updateMovie } from '../../../actions';
import { Movie } from '../../../types';
import Router from 'next/router';

interface EditMovieProps {
  movie: Movie
};

export const getServerSideProps = async ({query}: MovieNextPageContext) => {
  const movie = await getMovieById(query.id);

  return {props: { movie }};
}

export default class EditMovie extends Component<EditMovieProps> {

  editMovieHandler = async (movie: Movie) => {
    await updateMovie(movie);
    Router.push('/movie/[id]', `/movie/${movie.id}`);
  }

  render() {
    return (
      <div className="container">
        <h1>Edit the movie</h1>
        <MovieCreateForm 
          movie={this.props.movie}
          createMovieHandler={this.editMovieHandler}
        />
      </div>
    );
  }
}