import  { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Present } from '../../interfaces/Present';

const mockPresents: Present[] = [
  {
    descricao: 'Jogo de Panelas',
    valor: 200,
    quemDeu: 'Maria',
    disponiveis: 3,
    image: 'https://via.placeholder.com/150',
  },
  {
    descricao: 'Aspirador de Pó',
    valor: 300,
    quemDeu: 'João',
    disponiveis: 0,
    image: 'https://via.placeholder.com/150',
  },
  {
    descricao: 'Faqueiro',
    valor: 150,
    quemDeu: 'Ana',
    disponiveis: 1,
    image: 'https://via.placeholder.com/150',
  },
];

Modal.setAppElement('#root'); // Necessário para acessibilidade

export function GiftsList() {
  const [presentList, setPresentList] = useState<Present[]>([]);
  const [selectedPresent, setSelectedPresent] = useState<Present | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  useEffect(() => {
    // Simula uma requisição GET para buscar os dados de presentes
    setTimeout(() => {
      setPresentList(mockPresents);
    }, 1000);
  }, []);

  const openModal = (present: Present) => {
    setSelectedPresent(present);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPresent(null);
    setIsModalOpen(false);
  };

  const confirmPix = () => {
    alert('PIX confirmado!');
    // Aqui você pode adicionar a lógica para confirmar o PIX
    closeModal();
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream p-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-customBrown">Lista de Presentes</h2>
        <p className="mb-4 text-customBrown">Total de Presentes: {presentList.length}</p>
        {presentList.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg shadow-lg mb-4 flex items-center ${item.disponiveis === 0 ? 'opacity-50' : ''
              }`}
          >
            <img src={item.image} alt={item.descricao} className="w-20 h-20 rounded-full mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-customBrown">{item.descricao}</h3>
              <p className="text-customBrown">Valor: R${item.valor}</p>
              <p className="text-customBrown">Disponíveis: {item.disponiveis}</p>
            </div>
            <button
              onClick={() => item.disponiveis > 0 && openModal(item)}
              className={`py-2 px-4 rounded-md transition-colors duration-300 ${item.disponiveis > 0 ? 'bg-customBrown text-white hover:bg-opacity-90' : 'bg-gray-400 text-gray-700 cursor-not-allowed'
                }`}
              disabled={item.disponiveis === 0}
            >
              Escolher Presente
            </button>
          </div>
        ))}
      </div>

      <Modal
        isOpen={isModalOpen}
        onRequestClose={closeModal}
        contentLabel="Detalhes do Presente"
        className="modal"
        overlayClassName="modal-overlay"
      >
        {selectedPresent && (
          <div className="p-4">
            <h2 className="text-2xl font-bold text-customBrown mb-4">Detalhes do Presente</h2>
            <img src={selectedPresent.image} alt={selectedPresent.descricao} className="w-40 h-40 rounded-full mb-4" />
            <h3 className="text-lg font-bold text-customBrown">{selectedPresent.descricao}</h3>
            <p className="text-customBrown">Valor: R${selectedPresent.valor}</p>
            <p className="text-customBrown">Disponíveis: {selectedPresent.disponiveis}</p>
            {selectedPresent.quemDeu && <p className="text-customBrown">Quem Deu: {selectedPresent.quemDeu}</p>}
            <p className="text-customBrown">PIX: chavepix</p>
            <button
              onClick={confirmPix}
              className="bg-customBrown text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 mt-4"
            >
              Confirmar PIX
            </button>
            <button
              onClick={closeModal}
              className="bg-customBrown text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 mt-4 ml-2"
            >
              Fechar
            </button>
          </div>
        )}
      </Modal>
    </div>
  );
}
