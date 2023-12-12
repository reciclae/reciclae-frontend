import { Content } from "./style";

interface Props {
  children: string,
  to: string
}

export function Link({ children, to }: Props) {
  return (
    <Content to={to}>{children}</Content>
  );
}
