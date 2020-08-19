import { useField } from 'formik';
import PropTypes from 'prop-types';
import React from 'react';

import * as S from './styles';

const Input = (props) => {
  const [field, meta] = useField(props);
  const {
    id, label, type, mask,
  } = props;

  return (
    <S.Container className="inputContainer">
      <S.Label htmlFor={id}>{label}</S.Label>
      {type !== 'mask'
        ? (
          <S.Input
            {...field}
            {...props}
            autoComplete="off"
          />
        )
        : (
          <S.Mask
            mask={mask}
            {...field}
            {...props}
          />
        )}
      {meta.touched && meta.error
        ? <S.Error>{meta.error}</S.Error> : null}
    </S.Container>
  );
};

Input.defaultProps = {
  label: '',
  type: 'text',
  mask: '',
};

Input.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string,
  type: PropTypes.string,
  mask: PropTypes.string,
};

export default Input;
