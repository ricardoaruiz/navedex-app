import styled from 'styled-components';
import { Form } from 'formik';

export const LoginContainer = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  padding: 0 1rem;
`;

export const LoginLogo = styled.div`
  display: flex;
  justify-content: center;
  margin: 2.5rem 0 2.5rem 0;

  & img {
    width: 100%;
    height: auto;
    max-width: 14.75rem;
  }
`;

export const LoginForm = styled(Form)`
  width: 100%;
  border: none;
  padding: 0 2rem;

  & .inputContainer {
    margin-bottom: 1rem;
  }

  & button {
    margin-bottom: 2.5rem;
  }

  @media ${(props) => props.theme.medias.laptopS} {
    max-width: 28rem;
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

export const LoginErrorMessage = styled.div`
  margin-top: 1rem;
  font-size: 0.8rem;
  height: 2rem;
  color: ${(props) => props.theme.colors.error};
`;
