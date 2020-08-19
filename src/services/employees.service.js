import api from '../api';

const version = '/v1';
const employeesUrl = '/navers';
const url = `${version}${employeesUrl}`;

const list = () => api.get(url);

const remove = (id) => api.delete(`${url}/${id}`);

const show = (id) => api.get(`${url}/${id}`);

const create = (employee) => api.post(url, employee);

const update = (employeeId, employee) => api.put(`${url}/${employeeId}`, employee);

export {
  list,
  remove,
  show,
  create,
  update,
};
