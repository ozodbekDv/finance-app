import { auth } from "../firebase/config";
import { signInWithEmailAndPassword } from "firebase/auth";

import { useState } from "react";

import { login as _login } from "../app/features/userSlice";
import { useDispatch } from "react-redux";

import type { User } from "firebase/auth";
import { toast } from "sonner";

export const useLogin = () => {
  const dispatch = useDispatch();

  const [user, setUser] = useState<User | null>(null);
  const [isPending, setIsPending] = useState<boolean>(false);

  const login = async (email: string, password: string): Promise<void> => {
    setIsPending(true);
    try {
      const req = await signInWithEmailAndPassword(auth, email, password);
      const user = req.user;

      dispatch(_login(user));
      setUser(user);
      toast.success("Seccessfully logged in");
    } catch (err: any) {
      const errorMessage =
        err instanceof Error ? err.message : "Noma'lum xatolik";
      console.error("Login error:", errorMessage);
      toast.error(err.message);
    } finally {
      setIsPending(false);
    }
  };

  return { user, login, isPending };
};
