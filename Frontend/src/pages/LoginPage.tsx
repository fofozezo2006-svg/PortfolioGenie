 import { useState} from "react";
import { Link, useNavigate } from "react-router-dom";
import { login } from "../api/authApi";
import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

const LoginPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      const response = await login({
        email,
        password,
      });

      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      navigate("/dashboard");
    } catch (err: any) {
      setError(
        err.response?.data?.message ||
        "Invalid email or password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Welcome back"
      description="Enter your credentials to access your account."
    >
      <form onSubmit={handleSubmit}>

        <AuthInput
          label="Email address"
          id="email"
          type="email"
          placeholder="name@example.com"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <AuthInput
          label="Password"
          id="password"
          type="password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        <div className="forgot-link">
          <Link to="/forgot-password">
            Forgot password?
          </Link>
        </div>

        {error && <div className="error-message">{error}</div>}

        <AuthButton
          type="submit"
          loading={loading}
        >
          Sign in
        </AuthButton>

      </form>

      <div className="auth-switch">
        Don't have an account?
        <Link to="/register"> Create account</Link>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;