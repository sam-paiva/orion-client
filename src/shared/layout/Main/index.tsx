import React from 'react';
import { AppRouter } from '../../../infra/routes';
import Navbar from '../Navbar';
import { Wrapper } from './styles';

const Main: React.FC = () => {
  return (
    <>
      <Navbar />
      <Wrapper>
        <AppRouter />
      </Wrapper>
    </>
  );
};

export default Main;
