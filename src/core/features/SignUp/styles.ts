import { Input } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  width: 100%;
`;

export const SignUpCard = styled.div`
  height: 500px;
  width: 500px;
  display: flex;
  flex-direction: column;
  padding: 20px;
  align-items: center;
`;

export const CardTitle = styled.h1`
  font-size: 22px;
`;

export const CardBody = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10px;
  width: 100%;
`;

export const CustomInput = styled(Input)`
  width: 100%;
  height: 40px;
  border-radius: 10px;
`;

export const SignUpButton = styled.button`
  width: 100%;
  border: 1px solid var(--primary);
  height: 40px;
  border-radius: 10px;

  &:hover {
    background-color: var(--primary);
    transition: 0.3s;
    color: var(--white);
  }
`;

export const CardFooter = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
`;
