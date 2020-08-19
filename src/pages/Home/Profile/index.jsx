import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

import { getYearsFromDate } from '../../../commons/utils/date.utils';
import Modal from '../../../components/Modal';
import * as S from './styles';

const Profile = ({
  profileEmployee, onClose, onDelete, onEdit,
}) => {
  const handleDeleteClick = useCallback((event, employeeId) => {
    event.stopPropagation();
    onDelete(employeeId);
  }, [onDelete]);

  const handleEditClick = useCallback((event, employeeId) => {
    event.stopPropagation();
    onEdit(employeeId);
  }, [onEdit]);

  return (
    <Modal
      closable
      opened={!!profileEmployee}
      onClose={onClose}
    >
      <div>
        {profileEmployee ? (
          <S.ProfileContainer>
            <S.ProfileImage>
              <img src={profileEmployee.url} alt={profileEmployee.name} />
            </S.ProfileImage>

            <S.ProfileData>

              <S.ProfileDataItems>
                <S.ProfileDataItem>
                  <p>{profileEmployee.name}</p>
                  <p>{profileEmployee.job_role}</p>
                </S.ProfileDataItem>
                <S.ProfileDataItem>
                  <p>Idade</p>
                  <p>{`${getYearsFromDate(profileEmployee.birthdate)} anos`}</p>
                </S.ProfileDataItem>
                <S.ProfileDataItem>
                  <p>Tempo de casa</p>
                  <p>
                    {getYearsFromDate(profileEmployee.admission_date) === 0
                      ? 'menos de um ano'
                      : `${getYearsFromDate(profileEmployee.admission_date)} anos`}

                  </p>
                </S.ProfileDataItem>
                <S.ProfileDataItem>
                  <p>Projetos que participou</p>
                  <p>{profileEmployee.project}</p>
                </S.ProfileDataItem>
              </S.ProfileDataItems>

              <S.ProfileDataActions>
                <FaTrash onClick={(event) => handleDeleteClick(event, profileEmployee.id)} />
                <FaPen onClick={(event) => handleEditClick(event, profileEmployee.id)} />
              </S.ProfileDataActions>

            </S.ProfileData>
          </S.ProfileContainer>
        ) : (<></>)}
      </div>
    </Modal>
  );
};

Profile.defaultProps = {
  profileEmployee: undefined,
};

Profile.propTypes = {
  profileEmployee: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    job_role: PropTypes.string,
    birthdate: PropTypes.string,
    admission_date: PropTypes.string,
    project: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
  onDelete: PropTypes.func.isRequired,
  onEdit: PropTypes.func.isRequired,
};

export default Profile;
