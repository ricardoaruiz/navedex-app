import styled from 'styled-components';

export const Container = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;

  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;

  background: rgba(0,0,0,.3);
  z-index: 1;

  visibility: ${(props) => (props.opened ? 'visible' : 'hidden')};
`;

export const Modal = styled.div`
  position: relative;
  min-width: 15rem;
  box-shadow: 2px 4px 6px 2px rgba(0,0,0,.5);
  z-index: 3;
`;

export const CloseButton = styled.div`
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
  cursor: pointer;
`;
