import { Formik } from 'formik';
import React, { useCallback, useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as Yup from 'yup';

import logo from '../../assets/images/logo.svg';
import Button from '../../components/Button';
import Input from '../../components/Input';
import useAuth from '../../hooks/useAuth';
import * as S from './styles';

const Login = () => {
  const { login } = useAuth();
  const location = useHistory();
  const [isProcessing, setIsProcessing] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const initialFormValues = { email: '', password: '' };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('E-mail inválido').required('Campo obrigatório'),
    password: Yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = useCallback((values) => {
    setIsProcessing(true);
    setErrorMessage('');
    login(values)
      .then(() => {
        location.push('/home');
      })
      .catch(() => {
        setErrorMessage('Erro no login, tente novamente');
      })
      .finally(() => {
        setIsProcessing(false);
      });
  }, [location, login]);

  return (
    <S.LoginContainer>
      <Formik
        initialValues={initialFormValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        <S.LoginForm>
          <S.LoginLogo>
            <img
              src={logo}
              alt="logo"
            />
          </S.LoginLogo>
          <Input
            id="email"
            name="email"
            placeholder="E-mail"
            label="E-mail"
          />
          <Input
            id="password"
            name="password"
            type="password"
            placeholder="Senha"
            label="Senha"
          />
          <Button type="submit" disabled={isProcessing}>
            {isProcessing ? 'Autenticando...' : 'Entrar'}
          </Button>
        </S.LoginForm>
      </Formik>
      <S.LoginErrorMessage>
        {errorMessage}
      </S.LoginErrorMessage>

    </S.LoginContainer>
  );
};

export default Login;
