export interface Present {
  id?: number;
  descricao: string;
  valor: number;
  quemDeu?: string;
  status?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
export interface PresentList {
  list: Present[];
}
