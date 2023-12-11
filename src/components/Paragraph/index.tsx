import { Text } from "./style";

interface Props {
  children: string
}

export function Paragraph({ children }: Props) {
  return (
    <Text>{children}</Text>
  );
}
