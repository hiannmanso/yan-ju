import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Home } from './pages/Home'
import ConfirmPresence from './pages/ConfirmPresence'
import Presents from './pages/Presents'
import { Infos } from './pages/Infos'



export default function App() {
	return (
		<>
			<BrowserRouter>
			

					<Routes>
						<Route path='/' element={<Home />} />
						<Route path='/confirmar-presenca' element={<ConfirmPresence/>} />
						<Route path='/lista-de-presentes' element={<Presents />} />
						<Route path='/informacoes' element={<Infos />} />
					</Routes>
	
		
			</BrowserRouter>
		</>
	)
}