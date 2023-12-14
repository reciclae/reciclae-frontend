import styled from "styled-components";
import { Link as RouterLink } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  padding: 1rem;
  color: var(--primary);
  background-color: var(--secondary);
`;

export const Logo = styled.img``;

export const List = styled.ul`
  display: flex;
  align-items: center;
  gap: 2rem;
  font-weight: bold;
`;

export const Item = styled.li``;

export const Link = styled(RouterLink)`
  &:hover {
    text-decoration: underline;
  }
`;

export const UserContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
`;

export const UserTextContainer = styled.div`
  text-align: right;
`;

export const Username = styled.h4`
  font-weight: bold;
`;

export const Logout = styled.button`
  cursor: pointer;
`;

export const UserPicture = styled.img``;

export const Signup = styled(RouterLink)``;

export const Login = styled(RouterLink)`
  padding: .5em 1em;
  border-radius: 2em;
  color: var(--dark);
  background-color: var(--primary);
`;
