import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 4rem;
  max-width: 82rem;
  padding: 0 2.5rem;
`;

export const Logo = styled.div`
  & img {
    width: 8rem;
  }
`;

export const Nav = styled.nav`

`;

export const NavItems = styled.ul`
  list-style: none;
  display: flex;
`;

export const NavItem = styled.li`

`;

export const NavItemLink = styled(Link)`
  text-decoration: none;
  color: ${(props) => props.theme.colors.primary};
`;
