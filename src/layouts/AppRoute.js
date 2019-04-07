import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import AppLayout from './AppLayout';

const AppRoute = ({ component: Component, ...rest }) => {
  console.log("RouteLayout");
  //todo: logic for validate user 

  return (
    <Route {...rest} render={matchProps => (
      <AppLayout>
        <Component {...matchProps} />
      </AppLayout>
    )} />
  )
};

export default AppRoute;