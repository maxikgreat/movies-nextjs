export interface Movie {
  id: string,
  name: string,
  releaseYear: number,
  description: string,
  rating: number,
  genre: string,
  image: string,
  cover: string,
};

export interface Category {
  id: string,
  name: string,
};
export interface Image {
  id: string,
  url: string,
  title: string,
};

export interface MovieForm {
  name: string,
  description: string,
  rating: string,
  genre: Genres[],
  image: string,
  cover: string,
}

export enum Genres {
  drama = 'drama',
  music = 'music',
  adventure = 'adventure',
  historical = 'historical',
  action = 'action',
}