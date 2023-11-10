import React from 'react';
//import { useDispatch } from 'react-redux';
import RegisterForm from 'components/RegisterForm/RegisterForm';
//import { register } from 'redux/authOperations';

const Register = () => {
  // const dispatch = useDispatch;
  // const registration = body => {
  //   dispatch(register(body));

  //  registration = { registration };
  // };

  return (
    <div className="p-2">
      <RegisterForm />
    </div>
  );
};

export default Register;
