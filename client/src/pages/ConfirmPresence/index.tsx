import { ConfirmationPresence } from "../../components/ConfirmationPresence";
import { Header } from "../../components/Header";
import WeddingCountdown from "../../components/WeddingCountdown";


function confirmPresence() {
  return (
    <div>
      <Header/>
      <div className="">

      <WeddingCountdown weddingDate="2024-10-26T00:00:00" />
      <ConfirmationPresence />
      </div>
    </div>
  );
}

export default confirmPresence;
