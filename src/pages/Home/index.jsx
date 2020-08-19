import React, { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import Button from '../../components/Button';
import Load from '../../components/Load';
import ModalConfirm from '../../components/ModalConfirm';
import * as employessService from '../../services/employees.service';
import PageContainer from '../PageContainer';
import EmployeeList from './EmployeeList';
import Profile from './Profile';
import * as S from './styles';

const Home = () => {
  const location = useHistory();
  const [isLoading, setIsLoading] = useState(false);
  const [employees, setEmployees] = useState([]);
  const [profileEmployee, setProfileEmployee] = useState(undefined);
  const [idRemoveEmployee, setIdRemoveEmployee] = useState(undefined);
  const [isRemovedSuccessfuly, setIsRemovedSuccessfuly] = useState(false);
  const [isError, setIsError] = useState(false);

  const loadEmployess = useCallback(() => {
    setIsLoading(true);
    employessService.list()
      .then((response) => setEmployees(response.data))
      .catch((error) => {
        console.error(error);
        setIsError(true);
      })
      .finally(() => setIsLoading(false));
  }, []);

  const deleteEmployee = useCallback((employeeId) => {
    setIsRemovedSuccessfuly(false);
    employessService.remove(employeeId)
      .then(() => {
        loadEmployess();
        setIdRemoveEmployee(undefined);
        setIsRemovedSuccessfuly(true);
        setProfileEmployee(undefined);
      }).catch((error) => {
        console.error(error);
        setIsError(true);
      });
  }, [loadEmployess]);

  const handleAddNewEmployeeClick = useCallback(() => {
    location.push('/employee');
  }, [location]);

  const onCardHandleClick = useCallback((employee) => {
    setProfileEmployee(employee);
  }, []);

  const onCardHandleDeleteClick = useCallback((employeeId) => {
    setIdRemoveEmployee(employeeId);
  }, []);

  const onCardHandleEditClick = useCallback((employeeId) => {
    location.push(`/employee/${employeeId}`);
  }, [location]);

  const onProfileHandleDeleteClick = useCallback((employeeId) => {
    setIdRemoveEmployee(employeeId);
  }, []);

  const onProfileHandleEditClick = useCallback((employeeId) => {
    location.push(`/employee/${employeeId}`);
  }, [location]);

  const onHandleClickRemoveEmployee = useCallback((employeeId) => {
    deleteEmployee(employeeId);
  }, [deleteEmployee]);

  useEffect(() => {
    loadEmployess();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <S.Container>

        <S.ActionBar>
          <S.Title>Navers</S.Title>
          <S.Actions>
            <Button
              type="button"
              onClick={handleAddNewEmployeeClick}
            >
              Adicionar Naver
            </Button>
          </S.Actions>
        </S.ActionBar>

        {isLoading
          ? (
            <Load />
          )
          : (
            <>
              <EmployeeList
                employees={employees}
                onItemClick={onCardHandleClick}
                onItemDeleteClick={onCardHandleDeleteClick}
                onItemEditClick={onCardHandleEditClick}
              />

              <Profile
                profileEmployee={profileEmployee}
                onClose={() => setProfileEmployee(undefined)}
                onDelete={onProfileHandleDeleteClick}
                onEdit={onProfileHandleEditClick}
              />

              <ModalConfirm
                opened={!!idRemoveEmployee}
                cancelLabel="Cancelar"
                onCancel={() => setIdRemoveEmployee(undefined)}
                confirmLabel="Excluir"
                onConfirm={() => onHandleClickRemoveEmployee(idRemoveEmployee)}
                title="Excluir Naver"
                message="Tem certeza que deseja excluir esse Naver?"
              />

              <ModalConfirm
                opened={isRemovedSuccessfuly}
                confirmLabel="Ok"
                onConfirm={() => setIsRemovedSuccessfuly(false)}
                title="Naver excluído"
                message="Naver excluído com sucesso."
              />
            </>
          )}
        <ModalConfirm
          opened={isError}
          confirmLabel="Ok"
          onConfirm={() => setIsError(false)}
          title="Erro"
          message="Ocorreu um erro no processamento. Por favor tente novamente"
        />
      </S.Container>
    </PageContainer>
  );
};

export default Home;
