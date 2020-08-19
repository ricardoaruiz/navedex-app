import { Formik } from 'formik';
import React, { useCallback, useEffect, useState } from 'react';
import { FiChevronLeft } from 'react-icons/fi';
import { useHistory, useParams } from 'react-router-dom';
import * as Yup from 'yup';

import { datePattern, formatDate } from '../../commons/utils/date.utils';
import Button from '../../components/Button';
import Input from '../../components/Input';
import Load from '../../components/Load';
import ModalConfirm from '../../components/ModalConfirm';
import { create, show, update } from '../../services/employees.service';
import PageContainer from '../PageContainer';
import * as S from './styles';

const EmployeeForm = () => {
  const location = useHistory();
  const { id } = useParams();
  const [isSaving, setIsSaving] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const [message, setMessage] = useState('');
  const [initialFormValues, setInitialFormValues] = useState(() => ({
    id: '',
    name: '',
    url: '',
    job_role: '',
    birthdate: '',
    admission_date: '',
    project: '',
  }));

  const validationSchema = Yup.object().shape({
    name: Yup.string().required('Campo obrigatório'),
    url: Yup.string().url('Não é uma url válida').required('Campo obrigatório'),
    job_role: Yup.string().required('Campo obrigatório'),
    birthdate: Yup.string().matches(datePattern, 'Data inválida, informar no formato dia/mês/ano').required('Campo obriatório'),
    admission_date: Yup.string().matches(datePattern, 'Data inválida, informar no formato dia/mês/ano').required('Campo obriatório'),
    project: Yup.string().required('Campo obrigatório'),
  });

  const handleSubmit = useCallback((values) => {
    setIsSaving(true);
    setMessage('');

    const { id: employeeId, ...employee } = values;

    const process = !values.id
      ? create(employee)
      : update(employeeId, employee);

    process
      .then(() => setMessage(!values.id ? 'Naver criado com sucesso' : 'Naver alterado com sucesso'))
      .catch(() => setMessage('Erro no cadastro do Naver'))
      .finally(() => setIsSaving(false));
  }, []);

  useEffect(() => {
    if (id) {
      setIsLoading(true);
      show(id)
        .then((result) => {
          const {
            id: employeeId,
            name,
            job_role: position,
            birthdate,
            admission_date: admission,
            project,
            url,
          } = result.data;

          setInitialFormValues({
            id: employeeId,
            name,
            job_role: position,
            birthdate: formatDate(birthdate),
            admission_date: formatDate(admission),
            project,
            url,

          });
        })
        .catch(() => setMessage('Erro ao carregar os dados do naver. Tente novamente.'))
        .finally(() => setIsLoading(false));
    } else {
      setIsLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <PageContainer>
      <S.Container>
        {isLoading
          ? (
            <Load />
          )
          : (
            <>
              <S.ActionBar>
                <FiChevronLeft
                  size={30}
                  onClick={() => location.push('/home')}
                />
                <h1>Adicionar Naver</h1>
              </S.ActionBar>

              <S.Content>
                <Formik
                  enableReinitialize
                  initialValues={initialFormValues}
                  validationSchema={validationSchema}
                  onSubmit={handleSubmit}
                >
                  <S.EmployeeForm>
                    <S.EmployeeFormFields>
                      <Input
                        id="name"
                        name="name"
                        placeholder="Nome"
                        label="Nome"
                      />
                      <Input
                        id="job_role"
                        name="job_role"
                        placeholder="Cargo"
                        label="Cargo"
                      />
                      <Input
                        type="mask"
                        mask="99/99/9999"
                        id="birthdate"
                        name="birthdate"
                        placeholder="Data de nascimento"
                        label="Data de nascimento"
                      />
                      <Input
                        type="mask"
                        mask="99/99/9999"
                        id="admission_date"
                        name="admission_date"
                        placeholder="Admissão"
                        label="Admissão"
                      />
                      <Input
                        id="project"
                        name="project"
                        placeholder="Projetos que participou"
                        label="Projetos que participou"
                      />
                      <Input
                        id="url"
                        name="url"
                        placeholder="URL da foto do Naver"
                        label="URL da foto do Naver"
                      />
                    </S.EmployeeFormFields>
                    <S.EmployeeFormActions>
                      <Button type="submit" disabled={isSaving}>
                        {isSaving ? 'Salvando...' : 'Salvar'}
                      </Button>
                    </S.EmployeeFormActions>
                  </S.EmployeeForm>
                </Formik>
              </S.Content>
            </>
          )}
        <ModalConfirm
          opened={!!message}
          confirmLabel="Ok"
          onConfirm={() => {
            setMessage('');
            location.push('/home');
          }}
          title="Alerta"
          message={message}
        />

      </S.Container>
    </PageContainer>
  );
};

export default EmployeeForm;
