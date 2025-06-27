import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useLogin } from "../hooks/useLogin";

function Login() {
  const [showPassword, setShowPassword] = useState(false);

  const { login } = useLogin();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const formData = new FormData(form);

    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    login(email, password);

    form.reset();
  };
  return (
    <div className="flex justify-center items-center gap-[140px] mt-[100px] md:w-[1150px] mx-auto">
      <div className="text-white h-[95vh] w-[460px] hidden md:block ">
        <img
          className="absolute top-0 -z-10 h-[94vh] my-5 rounded-[12px]"
          src="../images/illustration-authentication.svg"
          alt="hero image"
        />
        <div className="p-10 mt-2.5 flex flex-col justify-between items-start h-full">
          <img src="../images/logo-large.svg" alt="site logo" className="" />
          <div>
            <h2 className="heading text-[28px] mb-6">
              Keep track of your money and save for your future
            </h2>
            <p className="text-[14px]">
              Personal finance app puts you in control of your spending. Track
              transactions, set budgets, and add to savings pots easily.
            </p>
          </div>
        </div>
      </div>
      <form
        onSubmit={handleSubmit}
        className="flex flex-col gap-8 p-8 rounded-[12px] bg-white w-full mx-10 sm:w-[560px]"
      >
        <h2 className="font-bold text-[32px] text-gray-900">Login</h2>
        <div>
          <div className="grid w-full items-center gap-3 mb-4">
            <Label htmlFor="email">Email</Label>
            <Input
              type="email"
              id="email"
              name="email"
              placeholder="Enter Your Email"
              autoComplete="email"
            />
          </div>
          <div className="relative grid w-full items-center gap-3">
            <Label htmlFor="password">Password</Label>
            <Input
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Your password"
              autoComplete="current-password"
            />
            <img
              onClick={() => setShowPassword((prev) => !prev)}
              className="absolute right-5 top-[37px] cursor-pointer hover:shadow-2xl active:scale-85 transition-transform duration-100"
              src="../images/icon-show-password.svg"
              alt=""
            />
          </div>
        </div>
        <Button>Login</Button>
        <p className="mx-auto">
          Need to create an account?
          <Link className="underline font-bold ml-2" to="/register">
            Sign Up
          </Link>
        </p>
      </form>
    </div>
  );
}

export default Login;
