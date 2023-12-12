import styled from "styled-components";
import { Link } from "react-router-dom";

export const Content = styled(Link)`
  font-weight: bold;
  text-decoration: underline;
  transition: 250ms;

  &:hover {
    filter: brightness(150%);
  }
`;
