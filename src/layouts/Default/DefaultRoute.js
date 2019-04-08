import React from 'react';
import { Route, Redirect } from 'react-router-dom'
import DefaultLayout from './DefaultLayout';

const DefaultRoute = ({ component: Component, ...rest }) => {
  console.log("RouteLayout");
  //todo: logic for validate user 

  return (
    <Route {...rest} render={matchProps => (
      <DefaultLayout>
        <Component {...matchProps} />
      </DefaultLayout>
    )} />
  )
};

export default DefaultRoute;