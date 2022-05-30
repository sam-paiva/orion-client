import { Button, Input } from 'antd';
import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
`;

export const LoginCard = styled.div`
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

export const InputContainer = styled.div`
  margin-top: 5px;
`;

export const LoginButton = styled(Button)`
  width: 100%;
  border: 1px solid var(--primary);
  height: 40px;
  border-radius: 10px;

  &:hover {
    background-color: var(--primary);
    transition: 0.3s;
  }
`;

export const CardFooter = styled.div`
  margin-top: 10px;
  width: 100%;
  height: 100%;
  text-align: center;
  > p {
    margin-top: 10px;
    color: var(--grey);
    font-size: 15px;
    cursor: pointer;

    :hover {
      text-decoration: underline;
    }
  }
`;
