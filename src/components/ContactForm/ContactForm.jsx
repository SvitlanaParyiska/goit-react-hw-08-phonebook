import { useState } from 'react';
//import { Form, Button, Label, Input } from './ContactForm.styled';
import { useDispatch, useSelector } from 'react-redux';
import { addContact, fetchContacts } from 'redux/contactsOperations';
import { selectContacts } from 'redux/selectors';
import Notiflix from 'notiflix';

export const ContactForm = ({ createContact }) => {
  const dispatch = useDispatch();
  const [name, setName] = useState('');
  const [number, setNumber] = useState('');
  const contactList = useSelector(selectContacts);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
    } else {
      setNumber(value);
    }
  };

  const handleSubmit = async e => {
    e.preventDefault();
    const form = e.target;
    const isAlreadyExist = contactList.find(
      el => el.name.toLowerCase() === name.toLowerCase()
    );
    if (isAlreadyExist) {
      Notiflix.Notify.warning(`${name} is already in contacts.`);
      return;
    }

    try {
      await dispatch(addContact({ name, number })).unwrap();
      dispatch(fetchContacts());
      setName('');
      setNumber('');
      form.reset();
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="card p-5 mx-auto mt-5" style={{ width: 400 }}>
      <form className="mb-3" onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="exampleInputName" className="form-label">
            Name
          </label>
          <input
            name="name"
            type="text"
            onChange={handleChange}
            className={`form-control && 'is-invalid'}`}
            id="exampleInputName"
            value={name}
            required
          />
          <div className="invalid-feedback">Please input contact name</div>
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputContactNumber" className="form-label">
            Number
          </label>
          <input
            name="number"
            type="tel"
            onChange={handleChange}
            className={`form-control  && 'is-invalid'}`}
            id="exampleInputContactNumber"
            value={number}
            required
          />
          <div className="invalid-feedback">Please input contact number</div>
        </div>
        <button type="submit" className="btn btn-info">
          Add contact
        </button>
      </form>
    </div>
  );
};
