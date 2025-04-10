import { useContext } from "react";

import logo from "../../assets/logo.png";

import { AuthContext } from "../../context/AuthContext";

import {
  Container,
  Logo,
  List,
  Item,
  Link,
  UserContainer,
  UserTextContainer,
  Username,
  Logout,
  UserPicture,
  Signup,
  Login
} from "./style";

export function Header() {
  const { user, logout } = useContext(AuthContext);

  return (
    <Container>
      <Logo src={logo} alt="Logotipo do ReciclaAE" title="Logotipo do ReciclaAE" />
      <List>
        <Item><Link to="/">Home</Link></Item>
        <Item><Link to="/map">Mapa</Link></Item>
        <Item><Link to="/about">Sobre Nós</Link></Item>
      </List>
      <UserContainer>
        {
          user ?
            <>
              <UserTextContainer>
                <Username>{user.username}</Username>
                <Logout onClick={logout}>Logout</Logout>
              </UserTextContainer>
              <Link to="/user">
                <UserPicture
                  src={`${process.env.REACT_APP_API_URL}/upload/${user.avatar}`}
                  alt="Foto do usuário"
                  title="Foto do usuário"
                />
              </Link>
            </> :
            <>
              <Signup to="/signup">Cadastrar</Signup>
              <Login to="/login">Login</Login>
            </>
        }
      </UserContainer>
    </Container>
  )
}
