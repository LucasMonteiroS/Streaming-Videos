import React from "react";
import Modal from "react-modal";
import "./DetalhesFilme.css";

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  sinopse: string;
  elenco: string;
  classificacao: string;
}

interface MovieDetailsModalProps {
  movie: Movie;
  isOpen: boolean;
  onRequestClose: () => void;
  onEditClick: () => void;
  onRemoveClick: () => void;
}

const MovieDetailsModal: React.FC<MovieDetailsModalProps> = ({
  movie,
  isOpen,
  onRequestClose,
  onEditClick,
  onRemoveClick,
}) => {
  return (
    <Modal
      className="MovieDetailsModal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Detalhes do Filme</h2>
      <p className="texts-item">Título: {movie.title}</p>
      <p className="texts-item">Cartaz:</p>
      <img src={movie.posterUrl} alt={movie.title} />
      <p className="texts-item">Sinopse: {movie.sinopse}</p>
      <p className="texts-item">Elenco: {movie.elenco}</p>
      <p className="texts-item">Classificação: {movie.classificacao}</p>
      <button onClick={onEditClick}>Editar</button>
      <button onClick={onRemoveClick}>Remover</button>
      <button onClick={onRequestClose}>Fechar</button>
    </Modal>
  );
};

export default MovieDetailsModal;
