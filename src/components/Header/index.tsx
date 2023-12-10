import logo from "../../assets/logo.png";
import userPic from "../../assets/user.png";

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
  const user = null;

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
              <Username>Username</Username>
              <Logout>Logout</Logout>
            </UserTextContainer>
            <UserPicture src={userPic} alt="Foto do usuário" title="Foto do usuário" />
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
