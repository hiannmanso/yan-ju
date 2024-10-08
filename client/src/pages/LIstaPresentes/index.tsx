import { useEffect } from "react"
import { Header } from "../../components/Header"
import WeddingCountdown from "../../components/WeddingCountdown"
import axios from "axios"

export function LIstaPresentes() {

	
    useEffect(() => {
		console.log('teste')
		axios({
			method: "GET",
			url: `${import.meta.env.VITE_API_URL}/guest`,
		}).then(response => {
			console.log(response)
		}).catch(error => {
			console.log(error);
		})
	},[])
	return (
		<>
        <Header/>
		<WeddingCountdown weddingDate="2024-10-26T00:00:00" />
            <li>teste</li>
		</>
	)
}