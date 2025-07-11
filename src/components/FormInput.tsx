import React from "react";

interface FormProps {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}

function FormInput({ label, name, type, placeholder }: FormProps) {
  return (
    <label className="formInput">
      <span className="formInput-label">{label}</span>
      <input type={type} name={name} placeholder={placeholder} required />
    </label>
  );
}

export default React.memo(FormInput);
