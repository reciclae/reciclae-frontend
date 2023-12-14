import { Container } from "./style";

interface Props {
  children: string,
  variant?: "positive" | "negative",
  onClick?: React.MouseEventHandler<HTMLButtonElement>
}

export function Button({ children, onClick, variant = "positive" }: Props) {
  return (
    <Container
      onClick={onClick}
      variant={variant}
    >
      {children}
    </Container>
  );
}
