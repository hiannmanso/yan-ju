import React, { useState } from 'react';
import { Guest } from '../../interfaces/Guest';
import axios from 'axios';
import { toast } from 'react-toastify';
import photo from '../../assets/JY-2.jpg'
export function ConfirmationPresence() {
  const [guest, setGuest] = useState<Guest>({ nomeCompleto: '', acompanhante: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setGuest({ ...guest, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    axios({
      method:"POST",
      url:`${import.meta.env.VITE_API_URL}/guest`,
      data:guest
    }).then(response=>{
      console.log(response)
      toast.success(`Sua presença foi confirmada! esperamos você ${guest.nomeCompleto} no grande dia!`);
      setGuest({ nomeCompleto: '', acompanhante: '' })
    }).catch(error=>{
      console.log(error)
    })
  };

  return (
    <div className="relative flex items-center justify-center min-h-screen bg-cover bg-center p-4" style={{ backgroundImage: `url(${photo})` }}>
      <div className="absolute inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center">
        <div className="w-full max-w-md overflow-auto bg-white p-4 sm:p-6 md:p-8 rounded-lg shadow-lg flex flex-col justify-center">
          <h2 className="text-xl sm:text-2xl font-bold mb-4 text-customBrown" style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 600 }}>
            Confirmar Presença
          </h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-customBrown mb-2 text-sm sm:text-base" htmlFor="nomeCompleto">
                Nome Completo*
              </label>
              <input
                type="text"
                id="nomeCompleto"
                name="nomeCompleto"
                value={guest.nomeCompleto}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBrown text-sm sm:text-base"
                required
              />
            </div>
  
            <div className="mb-4">
              <label className="block text-customBrown mb-2 text-sm sm:text-base" htmlFor="acompanhante">
                Acompanhante
              </label>
              <input
                type="text"
                id="acompanhante"
                name="acompanhante"
                value={guest.acompanhante}
                onChange={handleChange}
                className="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-customBrown text-sm sm:text-base"
              />
            </div>
            <button
              type="submit"
              className="w-full bg-customBrown text-white py-2 px-4 rounded-md hover:bg-opacity-90 transition-colors duration-300 text-sm sm:text-base" style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 600 }}
            >
              Confirmar
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
