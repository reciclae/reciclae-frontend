import React from "react";

import { Container, Label, Content } from "./style";

interface Props {
  name?: string,
  type: string,
  label?: string,
  placeholder?: string,
  onChange?: React.ChangeEventHandler<HTMLInputElement>,
  value?: string
}

export function Input({
  name,
  type,
  label,
  placeholder,
  onChange,
  value
}: Props) {
  return (
    <Container>
      { label && <Label htmlFor={name}>{label}</Label> }
      <Content
        id={name}
        name={name}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
      />
    </Container>
  );
}
