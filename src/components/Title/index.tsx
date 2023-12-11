import { Text } from "./style";

interface Props {
  children: string
}

export function Title({ children }: Props) {
  return (
    <Text>{children}</Text>
  );
}
