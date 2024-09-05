import React, { useEffect, useState } from 'react';
import flower1 from '../../assets/flower1.png'
import flower2 from '../../assets/flower2.png'
import flower3 from '../../assets/flower3.png'
interface WeddingCountdownProps {
  weddingDate: string; // Formato ISO, ex: '2024-12-31T00:00:00'
}

const WeddingCountdown: React.FC<WeddingCountdownProps> = ({ weddingDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(weddingDate) - +new Date();
    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        dias: Math.floor(difference / (1000 * 60 * 60 * 24)),
        horas: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutos: Math.floor((difference / 1000 / 60) % 60),
        segundos: Math.floor((difference / 1000) % 60),
      };
    }

    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearInterval(timer);
  }, [weddingDate]);

  const timerComponents: JSX.Element[] = [];

  Object.keys(timeLeft).forEach((interval) => {
    if (!timeLeft[interval as keyof typeof timeLeft]) {
      return;
    }

    timerComponents.push(
      <div key={interval} className="flex flex-col items-center mx-2 sm:mx-4">
        <div className="text-customBrown text-3xl sm:text-4xl font-bold">
          {timeLeft[interval as keyof typeof timeLeft]}
        </div>
        <span className="text-customBrown text-sm sm:text-lg font-semibold">{interval}</span>
      </div>
    );
  });

  return (
    <div className="relative sm:static bg-cream p-6 sm:p-8 rounded-lg shadow-lg text-center max-w-screen-lg mx-auto">
      <h2 className="text-2xl sm:text-3xl font-bold text-customBrown mb-4" style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 600 }}>Juliana & Yan</h2>
      <div className="flex items-center justify-center flex-wrap">
        {timerComponents.length ? (
          timerComponents.map((component, index) => (
            <React.Fragment key={index}>
              {component}
              {index < timerComponents.length - 1 && (
                <img
                  src={flower3} // Substitua pelo URL da imagem de flor que desejar
                  alt="flower"
                  className="mx-2 sm:mx-4 w-8 h-8 sm:w-10 sm:h-10"
                />
              )}
            </React.Fragment>
          ))
        ) : (
          <span>Evento já ocorreu!</span>
        )}
      </div>
    </div>
  );
};

export default WeddingCountdown;
