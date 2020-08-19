import api from '../api';

const version = '/v1';
const loginUrl = '/users/login';

const login = ({ email, password }) => api.post(
  `${version}${loginUrl}`, { email, password },
);

export { login };
