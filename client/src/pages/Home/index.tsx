import { Header } from "../../components/Header"
import WeddingCountdown from "../../components/WeddingCountdown"
// import WeddingCountdown from "../../components/WeddingCountdown"

export function Home() {
	return (
		<>
        <Header/>
		<div className="flex items-center justify-center min-h-screenp-6" >
            <div className="max-w-2xl  p-8">
                <h1 className="text-3xl font-bold mb-4 text-center text-customBrown" style={{ fontFamily: '"Dancing Script", cursive', fontWeight: 600 }}>Nossa Historia</h1>
                <p className="text-lg text-gray-700 text-center mb-4">
                    jovens que se encontraram em um lugar bonito e conturbado, a UFRJ, ali no meio do caos de serem estudantes de engenharia, uma faísca de amor e carinho uniu um lindo casal com grandes sonhos e desejos.
                </p>
                <p className="text-lg text-gray-700 text-center mb-4">
                    O início não foi como os contos de fadas, mas ao longo do tempo o amor entre eles foi amadurecendo. A partir de muitas chopadas, provas unificadas e encontros entre blocos, veio a concretização do namoro.
                </p>
                <p className="text-lg text-gray-700 text-center mb-4">
                    Já são mais de 5 anos de namoro, deste amor suburbano, em que as viagens entre SG e Nilópolis criaram pontes indestrutíveis. Podem até pensar que eu estou falando da Ponte Rio-Niterói, mas não, este amor mesmo com todas as distâncias criou pontes, ligações de pessoas, almas que em conjunto estruturam alicerces fortes para a base deste amor.
                </p>
                <p className="text-lg text-gray-700 text-center mb-4">
                    E você faz parte desta estrutura de família e amigos, que está sendo convidado para mais uma concretização deste amor. O nosso casamento será a união de alma, corpo, espírito e mente de todos nós.
                </p>
            </div>
        </div>
		<WeddingCountdown weddingDate="2024-10-26T00:00:00" />
		{/* <WeddingCountdown weddingDate="2024-10-26T00:00:00" /> */}
		</>
	)
}