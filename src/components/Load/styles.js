import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from { transform: rotate(0deg);}
  to { transform: rotate(359deg);}
`;

export const Loading = styled.div`
  text-align: center;
  & svg {
    animation-name: ${rotation};
    animation-duration: 2.5s;
    animation-iteration-count: infinite;
  }
`;
