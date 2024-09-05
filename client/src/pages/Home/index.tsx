import { Header } from "../../components/Header"
import WeddingCountdown from "../../components/WeddingCountdown"
// import WeddingCountdown from "../../components/WeddingCountdown"

export function Home() {
	return (
		<>
        <Header/>
		<WeddingCountdown weddingDate="2024-10-26T00:00:00" />
		{/* <WeddingCountdown weddingDate="2024-10-26T00:00:00" /> */}
		</>
	)
}