import React from 'react';

interface WeddingInfoProps {
  info: {
    date: string;
    location: string;
    time: string;
    additionalInfo: string;
  };
  coupleImage: string; // URL da imagem do casal
}

const WeddingInfo: React.FC<WeddingInfoProps> = ({ info, coupleImage }) => {
  return (
    <div className="flex items-center justify-center min-h-screen p-4 bg-cream">
      <div className="w-full max-w-3xl bg-white rounded-lg shadow-lg overflow-hidden md:flex">
        {/* Informações do Casamento */}
        <div className="w-full md:w-1/2 p-6">
          <h2 className="text-3xl font-bold mb-4 text-customBrown">Informações do Casamento</h2>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-customBrown">Data</h3>
            <p className="text-lg">{info.date}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-customBrown">Local</h3>
            <p className="text-lg">{info.location}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-customBrown">Hora</h3>
            <p className="text-lg">{info.time}</p>
          </div>
          <div className="mb-4">
            <h3 className="text-xl font-semibold text-customBrown">Informações Adicionais</h3>
            <p className="text-lg">{info.additionalInfo}</p>
          </div>
        </div>

        {/* Barra Vertical */}
        <div className="hidden md:block w-px bg-customBrown h-full"></div>

        {/* Imagem do Casal */}
        <div className="w-full md:w-1/2">
          <img
            src={coupleImage}
            alt="Casal"
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </div>
  );
};

export default WeddingInfo;
