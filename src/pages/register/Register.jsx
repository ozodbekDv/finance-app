import "./Register.scss";

import { useRegister } from "../../hooks/useRegister";

import FormInput from "../../components/formInput/FormInput";
import { Link } from "react-router-dom";

function Register() {
  const { user, isPending, register } = useRegister();

  const handleRegister = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const email = formData.get("email");
    const displayName = formData.get("displayName");
    const password = formData.get("password");

    register(email, password, displayName);
  };
  return (
    <div className="login-page">
      <div className="login-left">
        <img src="./images/logo-large.svg" alt="register image" />
        <div>
          <h5 className="login-left-title">
            Keep track of your money and save for your future
          </h5>
          <p className="login-left-caption">
            Personal finance app puts you in control of your spending. Track
            transactions, set budgets, and add to savings pots easily.
          </p>
        </div>
      </div>
      <img
        className="login-image"
        src="/images/illustration-authentication.svg"
        alt="finance image"
      />
      <div className="login-form">
        <h1 className="login-title">Sign Up</h1>
        <form onSubmit={handleRegister}>
          <FormInput
            label="Name"
            name="displayName"
            placeholder="Type here..."
            type="text"
          />
          <FormInput
            label="Email"
            name="email"
            placeholder="Type here..."
            type="email"
          />
          <FormInput
            label="Create Password"
            name="password"
            placeholder="Type here..."
            type="password"
          />
          <button className="login-btn">
            {isPending ? "Loading..." : "Create Account"}
          </button>
        </form>
        <p className="register-caption">
          Already have an account?
          <Link className="link-register" to="/login">
            Login
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
