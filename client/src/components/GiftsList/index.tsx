import { useState, useEffect } from 'react';
import Modal from 'react-modal';
import { Present } from '../../interfaces/Present';
import axios from 'axios';
import { toast } from 'react-toastify';

Modal.setAppElement('#root'); // Necessário para acessibilidade

export function GiftsList() {
  const [presentList, setPresentList] = useState<Present[]>([]);
  const [selectedPresent, setSelectedPresent] = useState<Present | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // States for storing the input data
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [mensagem, setMensagem] = useState('');

  useEffect(() => {
    axios({
      method: "GET",
      url: `${import.meta.env.VITE_API_URL}/present`,
    }).then(response => {
      console.log(response)
      setPresentList(response.data);
    }).catch(error => {
      console.log(error);
    });
  }, [isModalOpen]);

  const openModal = (present: Present) => {
    setSelectedPresent(present);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setSelectedPresent(null);
    setIsModalOpen(false);
    setNome(''); // Clear the inputs when closing modal
    setEmail('');
    setMensagem('');
  };

  const confirmPix = () => {
    if (!nome || !email) {
      toast.error("Nome e email são necessários!");
      return;
    }
    axios({
      method: "POST",
      url: `${import.meta.env.VITE_API_URL}/present/history/${selectedPresent?.descricao}`,
      data: {
        nome, email, mensagem
      }
    }).then(response => {
      toast.success(`Seu presente foi registrado, muito obrigado!!`);
      axios({
        method: "GET",
        url: `${import.meta.env.VITE_API_URL}/present`,
      }).then(response => {
        console.log('responsee',response)
        setPresentList(response.data);
      }).catch(error => {
        console.log(error);
      });
      setIsModalOpen(!isModalOpen)
    }).catch(error => {
      console.log(error);
      
    });
    closeModal();
  };

  // Ordena a lista de presentes com base na quantidade (do maior para o menor)
  const sortedPresentList = [...presentList].sort((a, b) => b.quantidade - a.quantidade);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-cream p-4">
      <div className="w-full max-w-4xl">
        <h2 className="text-2xl font-bold mb-4 text-customBrown">Lista de Presentes</h2>
        <p className="mb-4 text-customBrown">Total de Presentes: {sortedPresentList.length}</p>
        {presentList.map((item, index) => (
          <div
            key={index}
            className={`bg-white p-4 rounded-lg shadow-lg mb-4 flex items-center`}
          >
            <img src={item.image} alt={item.descricao} className="w-20 h-20 rounded-full mr-4" />
            <div className="flex-1">
              <h3 className="text-lg font-bold text-customBrown">{item.descricao}</h3>
              <p className="text-customBrown">Valor: R${item.valor}</p>
              {/* <p className="text-customBrown">Disponíveis: {item.quantidade}</p> */}
            </div>
            <button
              onClick={() =>  openModal(item)}
              className={`py-2 px-4 rounded-md transition-colors duration-300 bg-customBrown text-white hover:bg-opacity-90`}
            
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
          <p className='text-customBrown'><b>PIX: </b></p>
            <p className="text-customBrown">
  <b>
    
    <a href={`${selectedPresent.chavePix}`} target="_blank" rel="noopener noreferrer">
      {selectedPresent.chavePix}
    </a>
  </b>
</p>

        
            <div className="mb-4">
              <label className="block text-customBrown mb-2" htmlFor="nome">
                Nome
              </label>
              <input
                id="nome"
                type="text"
                value={nome}
                onChange={(e) => setNome(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBrown"
                placeholder="Digite seu nome"
              />
            </div>
            <div className="mb-4">
              <label className="block text-customBrown mb-2" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBrown"
                placeholder="Digite seu email"
              />
            </div>
            <div className="mb-4">
              <label className="block text-customBrown mb-2" htmlFor="mensagem">
                Mensagem
              </label>
              <textarea
                id="mensagem"
                value={mensagem}
                onChange={(e) => setMensagem(e.target.value)}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBrown"
                placeholder="Escreva uma mensagem (opcional)"
              />
            </div>

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
