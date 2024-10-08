import { useEffect, useState } from "react";
import { Header } from "../../components/Header";
import WeddingCountdown from "../../components/WeddingCountdown";
import axios from "axios";

interface Presente {
    id: number;
    nomeCompleto: string;
    status: string;
    createdAt: string;
    updatedAt: string;
    acompanhante?: string; // Acompanhante é opcional
}

export function ListaPresentes() {
    const [presentes, setPresentes] = useState<Presente[]>([]);

    useEffect(() => {
        axios({
            method: "GET",
            url: `${import.meta.env.VITE_API_URL}/guest`,
        })
        .then(response => {
            // Asserção de tipo para os dados recebidos
            const uniquePresentes = Array.from(
                new Map((response.data as Presente[]).map((item: Presente) => [item.nomeCompleto, item])).values()
            );
            setPresentes(uniquePresentes);
        })
        .catch(error => {
            console.error(error);
        });
    }, []);

    return (
        <>
            <Header />
            <WeddingCountdown weddingDate="2024-10-26T00:00:00" />
            <div className="max-w-2xl mx-auto mt-6">
                <ul className="bg-white shadow-md rounded-lg">
                    {presentes.map(item => (
                        <li key={item.id} className="p-4 border-b last:border-b-0 hover:bg-gray-100">
                            <div className="flex justify-between">
                                <span className="font-semibold">{item.nomeCompleto}</span>
                                <span className={`text-sm ${item.status === 'pendente' ? 'text-red-500' : 'text-green-500'}`}>
                                    {item.status}
                                </span>
                            </div>
                            {item.acompanhante && (
                                <div className="text-gray-500 text-sm">
                                    Acompanhante: {item.acompanhante}
                                </div>
                            )}
                            <div className="text-gray-500 text-sm">
                                Criado em: {new Date(item.createdAt).toLocaleDateString()}
                            </div>
                        </li>
                    ))}
                </ul>
            </div>
        </>
    );
}
