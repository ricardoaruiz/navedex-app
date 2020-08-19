import PropTypes from 'prop-types';
import React from 'react';
import { Redirect, Route as RouteDOM } from 'react-router-dom';

import useAuth from '../hooks/useAuth';

const Route = ({
  isPrivate,
  component: Component,
  ...rest
}) => {
  const { data } = useAuth();
  const isSigned = !!data.token;

  return (
    <RouteDOM
      {...rest}
      render={({ location }) => {
        if (isPrivate === isSigned) {
          return <Component />;
        }
        return (
          <Redirect
            to={{
              pathname: isPrivate ? '/' : '/home',
              state: { from: location },
            }}
          />
        );
      }}
    />
  );
};

Route.defaultProps = {
  isPrivate: false,
};

Route.propTypes = {
  isPrivate: PropTypes.bool,
  component: PropTypes.elementType.isRequired,
};

export default Route;
