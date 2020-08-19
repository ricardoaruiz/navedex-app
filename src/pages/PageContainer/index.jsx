import React from 'react';
import PropTypes from 'prop-types';

import Header from '../../components/Header';

import * as S from './styles';

const PageContainer = ({ children }) => (
  <S.Container>
    <Header />
    <S.Content>
      {children}
    </S.Content>
  </S.Container>
);

PageContainer.propTypes = {
  children: PropTypes.element.isRequired,
};

export default PageContainer;
