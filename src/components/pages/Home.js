import React, { Fragment } from 'react';
import Search from '../users/Search';
import Users from './../users/Users';
import { DiGithubBadge, DiReact } from 'react-icons/di';
import { FaTimes } from 'react-icons/fa';

const Home = () => (
  <Fragment>
    <div className="icons-wrapper">
      <DiGithubBadge className="react-icon" />
      <FaTimes className="react-icon times" />
      <DiReact className="react-icon" />
      <h2>My username: Takuya-H23</h2>
    </div>
    <Search />
    <Users />
  </Fragment>
);

export default Home;
