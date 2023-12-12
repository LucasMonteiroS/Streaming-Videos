import React from 'react';
import './ListaFilme.css';

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
}

interface MovieListProps {
    movies: Movie[];
    onMovieClick: (id: number) => void;
  }
  
  const MovieList: React.FC<MovieListProps> = ({ movies, onMovieClick }) => {
    return (
      <div className="movie-list-container">
        {movies.map((movie) => (
          <div key={movie.id} className="movie-list-item" onClick={() => onMovieClick(movie.id)}>
            <img src={movie.posterUrl} alt={movie.title} />
            <p className='title'>{movie.title}</p>
          </div>
        ))}
      </div>
    );
  };
  
  export default MovieList;
