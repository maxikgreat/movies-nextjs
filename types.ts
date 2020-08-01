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
