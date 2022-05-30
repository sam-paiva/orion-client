import React from 'react';
import { useNavigate } from 'react-router-dom';
import { logout, userIsLogged } from '../../../infra/services/auth.service';
import {
  AnnouceLink,
  Container,
  ContainerItems,
  NavContent,
  TitleContent,
} from './styles';

const Navbar: React.FC = () => {
  const navigator = useNavigate();

  const logoff = () => {
    logout();
    navigator('/sign-in');
  };

  return (
    <>
      {userIsLogged() && (
        <Container>
          <NavContent>
            <TitleContent onClick={() => navigator('/home')}>
              <h1>Imóvel App</h1>
            </TitleContent>
            <ContainerItems>
              <AnnouceLink to="/announce">Anuncie grátis</AnnouceLink>
              {userIsLogged() && <p onClick={logoff}>Sair</p>}
            </ContainerItems>
          </NavContent>
        </Container>
      )}
    </>
  );
};

export default Navbar;
