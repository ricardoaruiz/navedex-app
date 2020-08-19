import PropTypes from 'prop-types';
import React from 'react';

import EmployeeCard from '../EmployeeCard';
import * as S from './styles';

const EmployeeList = ({
  employees, onItemClick, onItemDeleteClick, onItemEditClick,
}) => (
    <S.EpmployeeList>
      {!employees.length
        ? (
          <h1>Colaboradores não encontrados</h1>
        )
        : employees.map((employee) => (
          <EmployeeCard
            key={employee.id}
            employee={employee}
            onClick={onItemClick}
            onDeleteClick={onItemDeleteClick}
            onEditClick={onItemEditClick}
          />
        ))}
    </S.EpmployeeList>
  );

EmployeeList.defaultProps = {
  employees: [],
};

EmployeeList.propTypes = {
  employees: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string,
      name: PropTypes.string,
      url: PropTypes.string,
      job_role: PropTypes.string,
      birthdate: PropTypes.string,
      admission_date: PropTypes.string,
      project: PropTypes.string,
    }).isRequired,
  ),
  onItemClick: PropTypes.func.isRequired,
  onItemDeleteClick: PropTypes.func.isRequired,
  onItemEditClick: PropTypes.func.isRequired,
};

export default EmployeeList;
