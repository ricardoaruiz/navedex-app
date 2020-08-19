import styled from 'styled-components';

export const Container = styled.div`
  background: ${(props) => props.theme.colors.white};
  width: 20rem;
  padding: 2rem;

  @media ${(props) => props.theme.medias.tablet} {
    min-width: 40rem;
  }
`;

export const Content = styled.div`
  & p:first-child {
    font-weight: 700;
    font-size: 1.5rem;
    margin-bottom: 1rem;
  }

  & p:last-child {
    font-size: 1.2rem;
    margin-bottom: 2rem;
  }
`;

export const Actions = styled.div`
  display: flex;
  justify-content: flex-end;

  & button {
    max-width: 10rem;

    & + button {
      margin-left: 1rem;
    }
  }
`;
