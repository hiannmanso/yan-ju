import { ConfirmationPresence } from "../../components/ConfirmationPresence";
import { Header } from "../../components/Header";
import WeddingCountdown from "../../components/WeddingCountdown";


function confirmPresence() {
  return (
    <div>
      <Header/>
      <div className="">

      <ConfirmationPresence />
      <WeddingCountdown weddingDate="2024-10-26T00:00:00" />
      </div>
    </div>
  );
}

export default confirmPresence;
