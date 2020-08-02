import { Component } from 'react';
import { MovieCreateForm } from '../../../components/MovieCreateForm';
import { MovieNextPageContext } from '../[id]';
import { getMovieById } from '../../../actions';
import { Movie } from '../../../types';

interface EditMovieProps {
  movie: Movie
};

export const getServerSideProps = async ({query}: MovieNextPageContext) => {
  const movie = await getMovieById(query.id);

  return {props: { movie }};
}

export default class EditMovie extends Component<EditMovieProps> {

  render() {
    return (
      <div className="container">
        <h1>Edit the movie</h1>
        <MovieCreateForm movie={this.props.movie}/>
      </div>
    );
  }
}