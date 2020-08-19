import styled, { css } from 'styled-components';
import { lighten } from 'polished';

export default styled.button`
  background: ${(props) => props.theme.colors.primary};
  color: ${(props) => props.theme.colors.white};
  border: none;
  outline: none;
  padding: 0.8rem 1rem;
  width: ${(props) => props.width || '100%'};
  cursor: pointer;

  &: hover {
    background: ${(props) => lighten(0.1, props.theme.colors.primary)};
  }

  ${(props) => props.outlined && css`
    background: ${props.theme.colors.white};
    border: 1px solid ${props.theme.colors.primary};
    color: ${props.theme.colors.primary};

    &: hover {
      background: ${props.theme.colors.white};
    }

  `};


`;
