import styled from 'styled-components';

export const EmployeeCard = styled.li`
  width: 17.5rem;
  height: 23.5rem;
  margin: 0.8rem auto;
  padding: 0.225rem;
  border: 2px solid ${(props) => props.theme.colors.primary};
  cursor: pointer;
  transition: all .3s;

  @media ${(props) => props.theme.medias.tablet} {
    border: 2px solid transparent;
    margin: 0.8rem;
  }
  &:hover {
    border: 2px solid ${(props) => props.theme.colors.primary};
  }

`;
export const EmployeeCardImage = styled.div`
  & img {
    width: 100%;
  }
`;

export const EmployeeCardContent = styled.div``;

export const EmployeeCardName = styled.p`
  margin-top: 1rem;
  font-weight: 700;
`;

export const EmployeeCardJob = styled.p`
  margin-top: 0.5rem;
`;

export const EmployeeCardActions = styled.div`
  margin-top: 0.5rem;
  & svg {
    cursor: pointer;

    & + svg {
      margin-left: 1rem;
    }
  }
`;
