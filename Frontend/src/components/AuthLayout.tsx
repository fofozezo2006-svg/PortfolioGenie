import { type ReactNode } from "react";
import { ShieldCheck } from "lucide-react";

interface AuthLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
}

const AuthLayout = ({
  title,
  description,
  children,
}: AuthLayoutProps) => {
  return (
    <div className="auth-container">
      <div className="auth-card">

        <div className="auth-brand">
          <div className="brand-icon">
            <ShieldCheck size={26} />
          </div>
          <span>PortfolioGenie</span>
        </div>

        <div className="auth-heading">
          <h1>{title}</h1>
          <p>{description}</p>
        </div>

        {children}

      </div>

      <p className="auth-footer">
        © 2026 PortfolioGenie. All rights reserved.
      </p>
    </div>
  );
};

export default AuthLayout;