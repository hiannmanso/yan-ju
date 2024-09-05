import { Header } from "../../components/Header"
import WeddingCountdown from "../../components/WeddingCountdown"
import WeddingInfo from "../../components/WeddingInfo"

export function Infos() {
	const weddingDetails = {
		date: '2024-10-26',
		location: 'Vila Monsaraz, Estr. do Lameirão Pequeno, 806- Campo Grande',
		time: '16:00',
		additionalInfo: 'Traje Esporte Fino'
	};
	
	const coupleImageUrl = 'https://cdn.alboompro.com/5f7e09ac8ef8cb000118b57e_623b314964c1930001437e36/original_size/20-ideias-de-decoracao-para-um-casamento-na-praia-c1f57853d363d37925d6.webp?v=1';
	return (
		<>
        <Header/>
		<WeddingCountdown weddingDate="2024-10-26T00:00:00" />
        <WeddingInfo info={weddingDetails} coupleImage={coupleImageUrl} />
		</>
	)
}