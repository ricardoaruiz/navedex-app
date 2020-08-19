import React from 'react';
import { FaSpinner } from 'react-icons/fa';

import * as S from './styles';

const Load = () => (
  <S.Loading>
    <FaSpinner size={80} />
  </S.Loading>
);

export default Load;
