import PropTypes from 'prop-types';
import React, { useCallback } from 'react';
import { FaPen, FaTrash } from 'react-icons/fa';

import * as S from './styles';

const EmployeeCard = ({
  employee, onClick, onDeleteClick, onEditClick,
}) => {
  const handleCardClick = useCallback((event, selectedEmployee) => {
    event.stopPropagation();
    onClick(selectedEmployee);
  }, [onClick]);

  const handleDeleteClick = useCallback((event, employeeId) => {
    event.stopPropagation();
    onDeleteClick(employeeId);
  }, [onDeleteClick]);

  const handleEditClick = useCallback((event, employeeId) => {
    event.stopPropagation();
    onEditClick(employeeId);
  }, [onEditClick]);

  return (
    <S.EmployeeCard
      onClick={(event) => handleCardClick(event, employee)}
    >
      <S.EmployeeCardImage>
        <img src={employee.url} alt={employee.name} />
      </S.EmployeeCardImage>
      <S.EmployeeCardContent>
        <S.EmployeeCardName>{employee.name}</S.EmployeeCardName>
        <S.EmployeeCardJob>{employee.job_role}</S.EmployeeCardJob>
        <S.EmployeeCardActions>
          <FaTrash onClick={(event) => handleDeleteClick(event, employee.id)} />
          <FaPen onClick={(event) => handleEditClick(event, employee.id)} />
        </S.EmployeeCardActions>
      </S.EmployeeCardContent>
    </S.EmployeeCard>
  );
};

EmployeeCard.propTypes = {
  employee: PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    url: PropTypes.string,
    job_role: PropTypes.string,
  }).isRequired,
  onClick: PropTypes.func.isRequired,
  onDeleteClick: PropTypes.func.isRequired,
  onEditClick: PropTypes.func.isRequired,
};

export default EmployeeCard;
