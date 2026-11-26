import { type ButtonHTMLAttributes } from "react";
import { LoaderCircle } from "lucide-react";

interface AuthButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  loading?: boolean;
  children: React.ReactNode;
}

const AuthButton = ({
  loading = false,
  children,
  disabled,
  ...props
}: AuthButtonProps) => {
  return (
    <button
      {...props}
      disabled={disabled || loading}
      className="auth-button"
    >
      {loading ? (
        <>
          <LoaderCircle className="spinner" size={20} />
          Processing...
        </>
      ) : (
        children
      )}
    </button>
  );
};

export default AuthButton;