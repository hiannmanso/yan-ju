import { Header } from "../../components/Header"
import WeddingCountdown from "../../components/WeddingCountdown"
import WeddingInfo from "../../components/WeddingInfo"

export function Infos() {
	const weddingDetails = {
		date: '2024-12-31',
		location: 'Igreja São João',
		time: '17:00',
		additionalInfo: 'Traje formal, estacionamento disponível no local.'
	};
	
	const coupleImageUrl = 'https://cdn.alboompro.com/5f7e09ac8ef8cb000118b57e_623b314964c1930001437e36/original_size/20-ideias-de-decoracao-para-um-casamento-na-praia-c1f57853d363d37925d6.webp?v=1';
	return (
		<>
        <Header/>
        <WeddingInfo info={weddingDetails} coupleImage={coupleImageUrl} />
		<WeddingCountdown weddingDate="2024-10-26T00:00:00" />
		</>
	)
}