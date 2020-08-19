import React from 'react';
import { Switch } from 'react-router-dom';

import EmployeeForm from '../pages/EmployeeForm';
import Home from '../pages/Home';
import Login from '../pages/Login';
import Route from './Route';

const Routes = () => (
  <Switch>
    <Route path="/" exact component={Login} />
    <Route path="/home" component={Home} isPrivate />
    <Route path="/employee" exact component={EmployeeForm} isPrivate />
    <Route path="/employee/:id" component={EmployeeForm} isPrivate />
    <Route path="*" exact component={() => (<h1>404</h1>)} />
  </Switch>
);

export default Routes;
