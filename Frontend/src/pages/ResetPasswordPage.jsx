import { useState} from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { resetPassword } from "../api/authApi";
import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

const ResetPasswordPage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const email = searchParams.get("email") || "";

  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (password !== confirmPassword) {
      setError("Passwords do not match.");
      return;
    }

    setLoading(true);

    try {
      const response = await resetPassword(email, password);

      if (!response.token) {
        throw new Error("Password reset failed.");
      }

      localStorage.setItem("token", response.token);

      navigate("/dashboard");
    } catch (err) {
      setError(
        err.response?.data?.message ||
        err.message ||
        "Unable to reset your password."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Create new password"
      description="Your new password must be different from your previous password."
    >
      <form onSubmit={handleSubmit}>

        <AuthInput
          label="New password"
          id="password"
          type="password"
          placeholder="Enter your new password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          minLength={8}
        />

        <AuthInput
          label="Confirm new password"
          id="confirmPassword"
          type="password"
          placeholder="Confirm your new password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
          required
        />

        {error && <div className="error-message">{error}</div>}

        <AuthButton
          type="submit"
          loading={loading}
          disabled={!email}
        >
          Reset password
        </AuthButton>

      </form>

      <div className="auth-switch">
        Remember your password?
        <Link to="/login"> Sign in</Link>
      </div>
    </AuthLayout>
  );
};

export default ResetPasswordPage;