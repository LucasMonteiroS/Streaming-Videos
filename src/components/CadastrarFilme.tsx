import React, { useState } from 'react';
import Modal from 'react-modal';
import './CadastrarFilme.css';

interface Movie {
    id: number;
    title: string;
    posterUrl: string;
    sinopse: string;
    elenco: string;
    classificacao: string;
}

interface MovieAddModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    onAdd: (newMovie: Movie) => void;
  }
  
  const MovieAddModal: React.FC<MovieAddModalProps> = ({ isOpen, onRequestClose, onAdd }) => {
    const [title, setTitle] = useState('');
    const [posterUrl, setPosterUrl] = useState('');
    const [sinopse, setSinopse] = useState('');
    const [elenco, setElenco] = useState('');
    const [classificacao, setClassificacao] = useState('');
  
    const handleAdd = () => {
      const newMovie: Movie = {
        id: Date.now(),
        title,
        posterUrl,
        sinopse,
        elenco,
        classificacao,
      };
      onAdd(newMovie);
      // Limpar o formulário após a adição, se necessário
      setTitle('');
      setPosterUrl('');
      setSinopse('');
      setElenco('');
      setClassificacao('');
      onRequestClose();
    };
  
    return (
      <Modal className="MovieAddModal" isOpen={isOpen} onRequestClose={onRequestClose}>
        <h2>Adicionar Filme</h2>
        <label>Título:</label>
        <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} />
        <label>URL do Cartaz:</label>
        <input type="text" value={posterUrl} onChange={(e) => setPosterUrl(e.target.value)} />
        <label>Sinopse:</label>
        <input type="text" value={sinopse} onChange={(e) => setSinopse(e.target.value)} />
        <label>Elenco:</label>
        <input type="text" value={elenco} onChange={(e) => setElenco(e.target.value)} />
        <label>Classificação:</label>
        <input type="text" value={classificacao} onChange={(e) => setClassificacao(e.target.value)} />
        <div className="botoes">
        <button className="botao" onClick={handleAdd}>Adicionar Filme</button>
        <button className="botao" onClick={onRequestClose}>Cancelar</button>
        </div>
      </Modal>
    );
  };
  
  export default MovieAddModal;