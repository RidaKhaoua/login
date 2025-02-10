import React from "react";
import { FieldValues, Path, UseFormRegister } from "react-hook-form";

type TInputProps<TFieldValues extends FieldValues> = {
  type: "text" | "password" | "email";
  name: Path<TFieldValues>;
  register: UseFormRegister<TFieldValues>;
  onBlur?: (e: React.FocusEvent<HTMLInputElement>) => void;
  error?: string;
  disabled?: boolean;
};

const Input = <TFieldValues extends FieldValues>({
  type,
  name,
  register,
  onBlur,
  error,
  disabled,
}: TInputProps<TFieldValues>) => {
  const onBlurHandler = (e: React.FocusEvent<HTMLInputElement>) => {
    if (onBlur) {
      onBlur(e);
      register(name).onBlur(e);
    } else {
      register(name).onBlur(e);
    }
  };

  return (
    <div>
      <input type={type} {...register(name)} onBlur={onBlurHandler}  style={{marginBottom:"10px"}}/>
      {error && <p style={{color:"red"}}>{error}</p>}
    </div>
  );
};

export default Input;
