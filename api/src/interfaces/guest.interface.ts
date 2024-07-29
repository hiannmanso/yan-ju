export interface Guest {
  id?: number;
  nomeCompleto: string;
  status?: string;
  acompanhante?: string;
  createdAt?: Date;
  updatedAt?: Date;
}

export interface GuestList {
  list: Guest[];
}
