import { Form } from 'antd';
import React from 'react';
import { useDispatch } from 'react-redux';
import { CreateUserRequest } from '../../../shared/requests/create-user.request';
import { createAccountSagaAction } from '../../store/users/users.saga';
import {
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  CustomInput,
  SignUpButton,
  SignUpCard,
} from './styles';

interface FormProps {
  email: string;
  firstName: string;
  lastName: string;
  password: string;
  confirmPassword: string;
}

const SignUp: React.FC = () => {
  const dispatch = useDispatch();

  const onSubmit = (data: FormProps) => {
    const request: CreateUserRequest = {
      email: data.email,
      firstName: data.firstName,
      lastName: data.lastName,
      password: data.password,
    };

    dispatch(createAccountSagaAction(request));
  };

  return (
    <Container>
      <Form onFinish={onSubmit}>
        <SignUpCard>
          <CardTitle>Criar Conta</CardTitle>
          <CardBody>
            <Form.Item
              name="email"
              rules={[
                {
                  required: true,
                  message: 'Campo obrigatório',
                  type: 'email',
                },
              ]}
            >
              <CustomInput type="email" placeholder="E-mail" />
            </Form.Item>

            <Form.Item
              name="firstName"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <CustomInput type="text" placeholder="Nome" />
            </Form.Item>

            <Form.Item
              name="lastName"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <CustomInput type="text" placeholder="Sobrenome" />
            </Form.Item>

            <Form.Item
              name="password"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <CustomInput placeholder="Senha" type="password" />
            </Form.Item>

            <Form.Item
              name="confirmPassword"
              rules={[{ required: true, message: 'Campo obrigatório' }]}
            >
              <CustomInput placeholder="Confirmar Senha" type="password" />
            </Form.Item>
          </CardBody>
          <CardFooter>
            <SignUpButton type="submit">Criar conta</SignUpButton>
          </CardFooter>
        </SignUpCard>
      </Form>
    </Container>
  );
};

export default SignUp;
