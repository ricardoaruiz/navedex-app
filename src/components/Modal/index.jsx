import React from 'react';
import PropTypes from 'prop-types';

import { MdClose } from 'react-icons/md';

import * as S from './styles';

const Modal = ({
  children,
  closable,
  opened,
  onClose,
}) => (
    <S.Container opened={opened}>
      <S.Modal>
        {closable && (
          <S.CloseButton onClick={onClose}>
            <MdClose size={24} />
          </S.CloseButton>
        )}
        {children}
      </S.Modal>
    </S.Container>
  );

Modal.defaultProps = {
  closable: false,
  opened: false,
  onClose: () => { },
};

Modal.propTypes = {
  children: PropTypes.elementType.isRequired,
  closable: PropTypes.bool,
  opened: PropTypes.bool,
  onClose: PropTypes.func,
};

export default Modal;
