import React from 'react';
import Placeholder from '../images/7229022.png';

export default function Home() {
  return (
    <div className="p-5 mr-auto ml-auto mt-5">
      <h1>Phonebook welcome page</h1>
      <img width="50px" src={Placeholder} alt="name"></img>
    </div>
  );
}
