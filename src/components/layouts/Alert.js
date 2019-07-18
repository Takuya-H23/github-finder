import React, { useContext } from 'react';
import { FaExclamation } from 'react-icons/fa';
import AlertContext from './../../context/alert/alertContext';

const Alert = () => {
  const alertContext = useContext(AlertContext);
  const { alert } = alertContext;
  return (
    alert !== null && (
      <div className={`alert alert-${alert.type}`}>
        <FaExclamation />
        {alert.msg}
      </div>
    )
  );
};

export default Alert;
