import styled from 'styled-components';
import { Form } from 'formik';

export const Container = styled.section`
  max-width: 45rem;
  margin: 3rem auto 0 auto;
`;

export const ActionBar = styled.div`
  display: flex;
  margin-bottom: 2rem;

  svg {
    margin-right: 2rem;
    cursor: pointer;
  }
`;

export const Content = styled.div`

`;

export const EmployeeForm = styled(Form)`


`;

export const EmployeeFormFields = styled(Form)`
  & .inputContainer {
    & + .inputContainer {
      margin-top: 1rem;
    }
  }
  margin-bottom: 1rem;

  @media ${(props) => props.theme.medias.laptopS} {
    display: flex;
    flex-wrap: wrap;

    & .inputContainer {
      flex: 1;
      margin: 0.5rem;

      & + .inputContainer {
        margin-top: 0.5rem;
      }
    }
  }
`;

export const EmployeeFormActions = styled.div`
  margin-bottom: 1rem;

  @media ${(props) => props.theme.medias.laptopS} {
    display: flex;
    justify-content: flex-end;

    & button {
      width: 11rem;
    }
  }
`;
