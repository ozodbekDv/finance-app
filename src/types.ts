export interface Balance {
  amount: number;
  currency: string;
}

export interface Budget {
  name: string;
  limit: number;
  id?: string;
  theme: string;
  category: string;
  maximum: number;
}

export interface Pot {
  name: string;
  value: number;
}

export interface Transaction {
  amount: number;
  date?: string;
  category: string;
  name: string;
  avatar: string;
  id: number;
}
