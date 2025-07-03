import { collection, getDocs } from "firebase/firestore";
import { db } from "../firebase/config";
import { useEffect, useState } from "react";
import type { Balance, Budget, Pot, Transaction } from "../types"; // interfeyslar shu yerda

interface CollectionsData {
  balance: Balance[];
  budgets: Budget[];
  pots: Pot[];
  transactions: Transaction[];
}

interface UseCollectionsDataReturn {
  data: CollectionsData | null;
  isPending: boolean;
}

export const useCollectionsData = (): UseCollectionsDataReturn => {
  const [data, setData] = useState<CollectionsData | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  useEffect(() => {
    const getCollections = async () => {
      setIsPending(true);
      try {
        const [balanceSnap, budgetsSnap, potsSnap, transactionsSnap] =
          await Promise.all([
            getDocs(collection(db, "balance")),
            getDocs(collection(db, "budgets")),
            getDocs(collection(db, "pots")),
            getDocs(collection(db, "transactions")),
          ]);

        const parseDocs = <T,>(docs: typeof balanceSnap.docs): T[] =>
          docs.map((doc) => ({ id: doc.id, ...doc.data() } as T));

        setData({
          balance: parseDocs<Balance>(balanceSnap.docs),
          budgets: parseDocs<Budget>(budgetsSnap.docs),
          pots: parseDocs<Pot>(potsSnap.docs),
          transactions: parseDocs<Transaction>(transactionsSnap.docs),
        });
      } catch (error) {
        console.error("Error fetching collections:", error);
        setData(null);
      } finally {
        setIsPending(false);
      }
    };

    getCollections();
  }, []);

  return { data, isPending };
};
