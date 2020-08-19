import styled from 'styled-components';

// Profile
export const ProfileContainer = styled.div`
  display: flex;
  flex-direction: column;
  background: ${(props) => props.theme.colors.white};

  @media ${(props) => props.theme.medias.tablet} {
    flex-direction: row;
  }
`;
export const ProfileImage = styled.div`
  & img {
    width: 100%;
  }

  @media ${(props) => props.theme.medias.tablet} {
    margin-right: 2rem;
    & img {
      min-width: 20rem;
      height: 100%;
    }
  }

`;
export const ProfileData = styled.div`
  display: flex;
  flex-direction: column;

  padding: 1rem;
  min-width: 20rem;

  @media ${(props) => props.theme.medias.tablet} {
    padding: 1rem 0;
  }
`;

export const ProfileDataItems = styled.div`
  margin-bottom: 1rem;

  @media ${(props) => props.theme.medias.tablet} {
    margin-bottom: 4rem;
  }
`;

export const ProfileDataItem = styled.div`
  & p:first-child {
    font-weight: 700;
    font-size: 1rem;
    margin-bottom: 0.5rem;
  }

  & p:last-child {
    font-size: 0.8rem;
    margin-bottom: 1rem;
  }
`;

export const ProfileDataActions = styled.div`
  flex: 1;
  align-self: flex-end;
  width: 100%;
  display: flex;
  align-items: flex-end;

  & svg {
    cursor: pointer;
    & + svg {
      margin-left: 1rem;
    }
  }
`;
