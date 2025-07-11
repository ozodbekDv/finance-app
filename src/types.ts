export interface Balance {
  amount: number;
  currency: string;
  income: number;
  expenses: number;
  current: number;
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
  id?: string;
  theme: string;
  total: number;
}

export interface Transaction {
  amount: number;
  date?: string;
  category: string;
  name: string;
  avatar: string;
  id: number;
}
