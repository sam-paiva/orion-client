import { Link } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 50px;
  width: 100%;
  padding-inline: 40px;
  background-color: #ff5500;
  align-items: center;
  justify-content: center;
  position: sticky;
  z-index: 2;
  top: 0;
  margin-bottom: 50px;
`;

export const TitleContent = styled.div`
  cursor: pointer;
`;

export const NavContent = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  height: 100%;
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;

  > div > h1 {
    color: var(--white);
    margin: 0px;
  }

  > div > p {
    color: var(--white);
    margin: 0px;
    cursor: pointer;

    &:hover {
      color: var(--primary);
    }
  }
`;

export const AnnouceLink = styled(Link)`
  color: var(--white);
  margin-right: 10px;
  font-weight: bold;
`;

export const ContainerItems = styled.div`
  display: flex;
  align-items: center;
  font-size: 17px;
`;
