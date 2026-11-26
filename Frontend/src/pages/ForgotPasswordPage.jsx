import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { forgotPassword } from "../api/authApi";
import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

const ForgotPasswordPage = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await forgotPassword(email);

      navigate(
        `/verify-reset-code?email=${encodeURIComponent(email)}`
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Unable to send the reset code."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Forgot your password?"
      description="Enter your email address and we'll send you a verification code."
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

        {error && <div className="error-message">{error}</div>}

        <AuthButton
          type="submit"
          loading={loading}
        >
          Send verification code
        </AuthButton>

      </form>

      <div className="auth-switch">
        Remember your password?
        <Link to="/login"> Back to login</Link>
      </div>
    </AuthLayout>
  );
};

export default ForgotPasswordPage;