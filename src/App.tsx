import React, { useState, useEffect, useMemo, useCallback, useRef } from 'react';
import ListaFilme from './components/ListaFilme';
import DetalhesFilme from './components/DetalhesFilme';
import EditarFilme from './components/EditarFilme';
import CadastrarFilme from './components/CadastrarFilme';
import './App.css';

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  sinopse: string;
  elenco: string;
  classificacao: string;
}

const App: React.FC = () => {
  const [movies, setMovies] = useState<Movie[]>([]);
  const [selectedMovie, setSelectedMovie] = useState<Movie | null>(null);
  const [isDetailsModalOpen, setDetailsModalOpen] = useState(false);
  const [isEditModalOpen, setEditModalOpen] = useState(false);
  const [isAddModalOpen, setAddModalOpen] = useState(false);

  const sortedMovies = useMemo(() => {
    return movies.sort((a, b) => a.title.localeCompare(b.title));
  }, [movies]);

  const handleMovieClick = useCallback((id: number) => {
    const selected = movies.find((movie) => movie.id === id);
    setSelectedMovie(selected || null);
    setDetailsModalOpen(true);
  }, [movies]);

  const handleEditClick = useCallback(() => {
    setEditModalOpen(true);
  }, []);

  const handleEditSave = useCallback((editedMovie: Movie) => {
    setMovies((prevMovies) =>
      prevMovies.map((movie) => (movie.id === editedMovie.id ? editedMovie : movie))
    );
  }, []);

  const handleRemoveClick = useCallback(() => {
    if (selectedMovie) {
      setMovies((prevMovies) => prevMovies.filter((movie) => movie.id !== selectedMovie.id));
      setDetailsModalOpen(false);
    }
  }, [selectedMovie]);

  const handleRemoveModalClose = useCallback(() => {
    setDetailsModalOpen(false);
  }, []);

  const handleEditModalClose = useCallback(() => {
    setEditModalOpen(false);
  }, []);

  const handleAddClick = useCallback(() => {
    setAddModalOpen(true);
  }, []);

  const handleAddSave = useCallback((newMovie: Movie) => {
    setMovies([...movies, newMovie]);
  }, [movies]);

  const scrollToTopButtonRef = useRef<HTMLButtonElement | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      if (scrollToTopButtonRef.current) {
        if (window.scrollY > 100) {
          scrollToTopButtonRef.current.style.display = 'block';
        } else {
          scrollToTopButtonRef.current.style.display = 'none';
        }
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="AppContainer">
      <div className="header">
        <h1>Streaming de Videos</h1>
      </div>
      <div className='centralizar'>
        <h2>Catálogo de Filmes</h2>  
      </div>
      <button className='botaoADD' onClick={handleAddClick}>Adicionar Filme</button>
      <div className="lista">
        <ListaFilme movies={sortedMovies} onMovieClick={handleMovieClick} />
      </div>
      <DetalhesFilme
        movie={selectedMovie || { id: 0, title: '', posterUrl: '', sinopse: '', elenco: '', classificacao: '' }}
        isOpen={isDetailsModalOpen}
        onRequestClose={handleRemoveModalClose}
        onEditClick={handleEditClick}
        onRemoveClick={handleRemoveClick}
      />
      <EditarFilme
        movie={selectedMovie || { id: 0, title: '', posterUrl: '', sinopse: '', elenco: '', classificacao: '' }}
        isOpen={isEditModalOpen}
        onRequestClose={handleEditModalClose}
        onSave={handleEditSave}
      />
      <CadastrarFilme isOpen={isAddModalOpen}
        onRequestClose={() => setAddModalOpen(false)}
        onAdd={handleAddSave}
      />
      
      <button className="botaoTopo" ref={scrollToTopButtonRef} onClick={() => window.scrollTo(0, 0)}>
        Voltar ao Topo
      </button>
    </div>
  );
};

export default App;
