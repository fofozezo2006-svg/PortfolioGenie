import { type InputHTMLAttributes } from "react";

interface AuthInputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

const AuthInput = ({
  label,
  id,
  ...props
}: AuthInputProps) => {
  return (
    <div className="form-group">
      <label htmlFor={id}>{label}</label>

      <input
        id={id}
        {...props}
      />
    </div>
  );
};

export default AuthInput;