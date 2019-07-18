import React, { Fragment } from 'react';

const About = () => {
  return (
    <Fragment>
      <h1 className="welcome-msg">Welcome to Github Finder!</h1>
      <p>You can search for Github users and visit their accounts!</p>

      <p>
        This app was developed to learn how to use React hooks such as useState,
        useContext, useReducer
      </p>
    </Fragment>
  );
};

export default About;
