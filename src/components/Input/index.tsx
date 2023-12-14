import { FieldValues, FieldPath, UseFormRegister, FieldError } from "react-hook-form";

import { Container, Label, Content, Warning } from "./style";

interface Props<FormData extends FieldValues> {
  name: FieldPath<FormData>,
  type: string,
  label?: string,
  placeholder?: string,
  register: UseFormRegister<FormData>,
  error?: FieldError
}

export function Input<FormData extends FieldValues>({
  name,
  type,
  label,
  placeholder,
  register,
  error
}: Props<FormData>) {
  return (
    <Container>
      { label && <Label htmlFor={name}>{label}</Label> }
      <Content
        id={name}
        type={type}
        placeholder={placeholder}
        {...register(name)}
      />
      { error && <Warning>{error.message}</Warning> }
    </Container>
  );
}
