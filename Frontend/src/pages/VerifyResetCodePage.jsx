import { useState} from "react";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import { verifyResetCode } from "../api/authApi";
import AuthLayout from "../components/AuthLayout";
import AuthInput from "../components/AuthInput";
import AuthButton from "../components/AuthButton";

const VerifyResetCodePage = () => {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const email = searchParams.get("email") || "";

  const [resetCode, setResetCode] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    setError("");
    setLoading(true);

    try {
      await verifyResetCode(email, resetCode);

      navigate(
        `/reset-password?email=${encodeURIComponent(email)}`
      );
    } catch (err) {
      setError(
        err.response?.data?.message ||
        "Invalid or expired verification code."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <AuthLayout
      title="Verify your email"
      description={`Enter the six-digit code we sent to ${email}.`}
    >
      <form onSubmit={handleSubmit}>

        <AuthInput
          label="Verification code"
          id="resetCode"
          type="text"
          inputMode="numeric"
          placeholder="000000"
          value={resetCode}
          onChange={(e) =>
            setResetCode(e.target.value.replace(/\D/g, "").slice(0, 6))
          }
          required
          minLength={6}
          maxLength={6}
        />

        {error && <div className="error-message">{error}</div>}

        <AuthButton
          type="submit"
          loading={loading}
          disabled={resetCode.length !== 6 || !email}
        >
          Verify code
        </AuthButton>

      </form>

      <div className="auth-switch">
        Didn't receive the code?
        <Link to="/forgot-password"> Try again</Link>
      </div>
    </AuthLayout>
  );
};

export default VerifyResetCodePage;