import styled from 'styled-components';

export const Container = styled.section`
  display: flex;
  flex-direction: column;
`;

export const ActionBar = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  align-self: stretch;
  padding: 0 1.5rem;
`;

export const Title = styled.h1`
  letter-spacing: .4rem;
  font-size: 2.5rem;
`;

export const Actions = styled.div`
  display: flex;
  align-items: center;

  & button {
    width: 7rem;
    font-size: 0.7rem;

    @media ${(props) => props.theme.medias.mobileL} {
      width: 10rem;
      font-size: 1rem;
    }
  }
`;
