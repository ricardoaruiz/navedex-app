import React from 'react';
import { useHistory } from 'react-router-dom';

import logo from '../../assets/images/logo.svg';
import useAuth from '../../hooks/useAuth';
import * as S from './styles';

const Header = () => {
  const location = useHistory();
  const { logout } = useAuth();
  return (
    <S.Header>
      <S.Logo>
        <img src={logo} alt="logo" />
      </S.Logo>
      <S.Nav>
        <S.NavItems>
          <S.NavItem>
            <S.NavItemLink
              to=""
              onClick={() => {
                logout();
                location.push('/');
              }}
            >
              Sair

            </S.NavItemLink>
          </S.NavItem>
        </S.NavItems>
      </S.Nav>
    </S.Header>
  );
};

export default Header;
