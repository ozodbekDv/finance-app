import { createUserWithEmailAndPassword, updateProfile } from "firebase/auth";
import { useState } from "react";
import { auth } from "../firebase/config";
import { useDispatch } from "react-redux";
import { login } from "../app/features/userSlice";
import { FirebaseError } from "firebase/app";
import type { User } from "firebase/auth";

export const useRegister = () => {
  const dispatch = useDispatch();
  const [user, setUser] = useState<User | null>(null);
  const [isPending, setIsPending] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const register = async (
    email: string,
    password: string,
    displayName: string
  ) => {
    setIsPending(true);
    setError(null);

    try {
      const req = await createUserWithEmailAndPassword(auth, email, password);
      const user = req.user;

      // Update display name and photo
      await updateProfile(user, {
        displayName,
        photoURL:
          "https://api.dicebear.com/9.x/croodles/svg?seed=" + displayName,
      });

      // Reload user to sync updated profile
      await auth.currentUser?.reload();

      const currentUser = auth.currentUser;

      if (currentUser) {
        dispatch(login(currentUser));
        setUser(currentUser);
      } else {
        throw new Error("User reload failed.");
      }
    } catch (err) {
      if (err instanceof FirebaseError) {
        console.error("Firebase error:", err.code, err.message);
        setError(err.message);
      } else {
        console.error("Unknown error:", err);
        setError("Noma’lum xatolik yuz berdi.");
      }
    } finally {
      setIsPending(false);
    }
  };

  return { user, register, isPending, error };
};
