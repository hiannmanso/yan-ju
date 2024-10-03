export interface Present {
  id: number;
  descricao: string;
  valor: number;
  quantidade: number;
  image: string;
  createdAt: string; // ou Date, dependendo de como você lida com datas
  updatedAt: string; // ou Date, dependendo de como você lida com datas
  chavePix:string;
  disponiveis?: number; // Opcional, adicione conforme necessário
}
