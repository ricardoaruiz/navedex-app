import styled from 'styled-components';
import { lighten } from 'polished';
import InputMask from 'react-input-mask';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  height: 5rem;
`;

export const Label = styled.label`
  margin-bottom: 0.225rem;
`;

export const Input = styled.input`
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 0.5rem;
  font-size: 1.1rem;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => lighten(0.5, props.theme.colors.primary)};
  }
`;

export const Mask = styled(InputMask)`
  border: 1px solid ${(props) => props.theme.colors.primary};
  padding: 0.5rem;
  font-size: 1.1rem;
  outline: none;

  &:focus {
    border: 1px solid ${(props) => lighten(0.5, props.theme.colors.primary)};
  }
`;

export const Error = styled.div`
  font-size: 0.8rem;
  color: ${(props) => props.theme.colors.error};
  margin-top: 0.225rem;
`;
