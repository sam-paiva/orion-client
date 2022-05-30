import { LockOutlined, UserOutlined } from '@ant-design/icons';
import { Form } from 'antd';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userIsLogged } from '../../../infra/services/auth.service';
import { RootState } from '../../store/store';
import { loginSagaAction } from '../../store/users/users.saga';
import { loading } from '../../store/users/users.slice';
import {
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  CustomInput,
  InputContainer,
  LoginButton,
  LoginCard,
} from './styles';

interface LoginProps {
  email: string;
  password: string;
}

const Login: React.FC = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const isLoading = useSelector<RootState, boolean>(
    (state) => state.user.isLoading
  );

  const onSubmit = (values: LoginProps) => {
    dispatch(loading());
    setTimeout(() => {
      dispatch(loginSagaAction(values));
    }, 3000);
  };

  const navigateToSignUp = () => {
    navigate('/sign-up');
  };

  useEffect(() => {
    if (userIsLogged()) navigate('/home');
  }, []);

  return (
    <Container>
      <Form onFinish={onSubmit}>
        <LoginCard>
          <CardTitle>Imóvel App</CardTitle>
          <CardBody>
            <InputContainer>
              <Form.Item
                name="email"
                rules={[{ required: true, message: 'Email obrigatório' }]}
              >
                <CustomInput
                  type="email"
                  prefix={<UserOutlined />}
                  placeholder="E-mail"
                />
              </Form.Item>
            </InputContainer>
            <InputContainer>
              <Form.Item
                name="password"
                rules={[{ required: true, message: 'Senha Obrigatória' }]}
              >
                <CustomInput
                  prefix={<LockOutlined />}
                  placeholder="Senha"
                  type="password"
                />
              </Form.Item>
            </InputContainer>
          </CardBody>
          <CardFooter>
            <LoginButton
              disabled={isLoading}
              loading={isLoading}
              htmlType="submit"
            >
              Entrar
            </LoginButton>
            <p onClick={navigateToSignUp}>Não tem conta ainda? Criar grátis</p>
            <p>Esqueci minha senha</p>
          </CardFooter>
        </LoginCard>
      </Form>
    </Container>
  );
};

export default Login;
