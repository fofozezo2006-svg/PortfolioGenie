import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../api/authApi";
import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

const RegisterPage = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (form.password !== form.confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await register(form);

      localStorage.setItem("token", response.token);
      localStorage.setItem(
        "user",
        JSON.stringify(response.data)
      );

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Registration failed. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create an account"
      description="Start building your professional portfolio today."
    >
      <form onSubmit={handleSubmit}>

        <AuthInput
          label="Full name"
          id="name"
          name="name"
          type="text"
          placeholder="John Doe"
          value={form.name}
          onChange={handleChange}
          required
          minLength={3}
          maxLength={32}
        />

        <AuthInput
          label="Email address"
          id="email"
          name="email"
          type="email"
          placeholder="name@example.com"
          value={form.email}
          onChange={handleChange}
          required
        />

        <AuthInput
          label="Phone number (optional)"
          id="phone"
          name="phone"
          type="tel"
          placeholder="+20 100 000 0000"
          value={form.phone}
          onChange={handleChange}
        />

        <AuthInput
          label="Password"
          id="password"
          name="password"
          type="password"
          placeholder="At least 8 characters"
          value={form.password}
          onChange={handleChange}
          required
          minLength={8}
        />

        <AuthInput
          label="Confirm password"
          id="confirmPassword"
          name="confirmPassword"
          type="password"
          placeholder="Confirm your password"
          value={form.confirmPassword}
          onChange={handleChange}
          required
        />

        {error && <div className="error-message">{error}</div>}

        <AuthButton
          type="submit"
          loading={loading}
        >
          Create account
        </AuthButton>

      </form>

      <div className="auth-switch">
        Already have an account?
        <Link to="/login"> Sign in</Link>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;