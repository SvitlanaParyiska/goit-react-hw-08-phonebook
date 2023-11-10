import React from 'react';
import Placeholder from '../images/phonebook-isolated-icon-design-vector-9660504.jpg';
import { useAuth } from 'hooks';
import { Link } from 'react-router-dom';

export default function Home() {
  const { isLoggedIn } = useAuth();
  return (
    <div className="p-5 mr-auto ml-auto mt-5">
      {isLoggedIn ? (
        <>
          <h3>Welcome!</h3>
          <h4>
            You are already logged in. Go to your{' '}
            <Link to="/contacts">{'PhoneBook'}</Link> to add new friends!
          </h4>
        </>
      ) : (
        <h3>
          Please log in or if you don't have an account yet kindly register
        </h3>
      )}
      <img width="300px" src={Placeholder} alt="name"></img>
    </div>
  );
}
