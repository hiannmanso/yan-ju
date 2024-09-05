
export interface Present {
  id?: number;
  descricao: string;
  valor: number;
  image: string;
  quantidade:number;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface PresentList {
  list: Present[];
}
export interface HistoricoPresente {
  nome: string;
  email: string;
  mensagem?: string; // Campo opcional
}