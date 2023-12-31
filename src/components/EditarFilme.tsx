import React, { useState, useEffect } from "react";
import Modal from "react-modal";
import "./EditarFilme.css";

interface Movie {
  id: number;
  title: string;
  posterUrl: string;
  sinopse: string;
  elenco: string;
  classificacao: string;
}

interface MovieEditModalProps {
  movie: Movie;
  isOpen: boolean;
  onRequestClose: () => void;
  onSave: (editedMovie: Movie) => void;
}

const MovieEditModal: React.FC<MovieEditModalProps> = ({
  movie,
  isOpen,
  onRequestClose,
  onSave,
}) => {
  const [editedMovie, setEditedMovie] = useState<Movie>({ ...movie });

  useEffect(() => {
    setEditedMovie({ ...movie });
  }, [movie]);

  const handleSave = () => {
    onSave(editedMovie);
    onRequestClose();
  };

  return (
    <Modal
      className="MovieEditModal"
      isOpen={isOpen}
      onRequestClose={onRequestClose}
    >
      <h2>Editar Filme</h2>
      <label>Título:</label>
      <input
        style={{
          color: "#0000",
          backgroundColor: "#FFFFFF",
        }}
        type="text"
        value={editedMovie.title}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, title: e.target.value })
        }
      />
      <label>URL do Cartaz:</label>
      <input
        style={{
          color: "#0000",
          backgroundColor: "#FFFFFF",
        }}
        type="text"
        value={editedMovie.posterUrl}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, posterUrl: e.target.value })
        }
      />
      <label>Sinopse:</label>
      <input
        style={{
          color: "#0000",
          backgroundColor: "#FFFFFF",
        }}
        type="text"
        value={editedMovie.sinopse}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, sinopse: e.target.value })
        }
      />
      <label>Elenco:</label>
      <input
        style={{
          color: "#0000",
          backgroundColor: "#FFFFFF",
        }}
        type="text"
        value={editedMovie.elenco}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, elenco: e.target.value })
        }
      />
      <label>Classificação:</label>
      <input
        style={{
          color: "#0000",
          backgroundColor: "#FFFFFF",
        }}
        type="text"
        value={editedMovie.classificacao}
        onChange={(e) =>
          setEditedMovie({ ...editedMovie, classificacao: e.target.value })
        }
      />
      <div className="botoes">
        <button className="botao" onClick={handleSave}>
          Salvar
        </button>
        <button className="botao" onClick={onRequestClose}>
          Cancelar
        </button>
      </div>
    </Modal>
  );
};

export default MovieEditModal;
