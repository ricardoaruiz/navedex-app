import React from 'react';
import PropTypes from 'prop-types';

import Modal from '../Modal';
import Button from '../Button';

import * as S from './styles';

const ModalConfirm = ({
  cancelLabel,
  onCancel,
  confirmLabel,
  onConfirm,
  title,
  message,
  opened,
}) => (
    <Modal opened={opened}>
      <S.Container>
        <S.Content>
          <p>{title}</p>
          <p>{message}</p>
        </S.Content>

        <S.Actions>
          {cancelLabel && (
            <Button
              outlined
              onClick={onCancel}
            >
              {cancelLabel}
            </Button>
          )}
          <Button
            onClick={onConfirm}
          >
            {confirmLabel}
          </Button>
        </S.Actions>
      </S.Container>
    </Modal>
  );

ModalConfirm.defaultProps = {
  cancelLabel: undefined,
  onCancel: () => { },
  opened: false,
};

ModalConfirm.propTypes = {
  cancelLabel: PropTypes.string,
  onCancel: PropTypes.func,
  confirmLabel: PropTypes.string.isRequired,
  onConfirm: PropTypes.func.isRequired,
  title: PropTypes.string.isRequired,
  message: PropTypes.string.isRequired,
  opened: PropTypes.bool,
};

export default ModalConfirm;
