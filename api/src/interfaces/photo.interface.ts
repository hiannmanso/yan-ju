export interface Photo {
  id?: number;
  url: string;
  descricao?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface PhotoList {
  list: Photo[];
}
