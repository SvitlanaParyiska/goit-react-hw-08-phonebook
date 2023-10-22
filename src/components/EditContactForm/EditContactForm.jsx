import React, { useState } from 'react';

const EditContactForm = ({ handleEdit, oldName, oldNumber, cancelEdit }) => {
  const [name, setName] = useState(oldName);
  const [number, setNumber] = useState(oldNumber);

  const handleChange = ({ target: { value, name } }) => {
    if (name === 'name') {
      setName(value);
      return;
    }
    if (name === 'number') {
      setNumber(value);
      return;
    } else {
      console.log('error');
    }
  };

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.target;
    handleEdit({ name, number });
    setName('');
    setNumber('');
    form.reset();
  };

  return (
    <div className="card p-2 mx-auto mt-2" style={{ maxWidth: 400 }}>
      <form className="mb-1" onSubmit={handleSubmit}>
        <div className="mb-1">
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
        </div>
        <div className="mb-1">
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
        </div>
        <button type="submit" className="btn btn-outline-primary">
          Edit contact
        </button>{' '}
        <button
          type="button"
          className="btn btn-outline-primary"
          onClick={cancelEdit}
        >
          Cancel
        </button>
      </form>
    </div>

    // <form onSubmit={handleSubmit}>
    //   <label>
    //     Name
    //     <input
    //       type="text"
    //       name="name"
    //       value={name}
    //       pattern="^[a-zA-Zа-яА-Я]+(([' \-][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
    //       title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    //       onChange={handleChange}
    //       required
    //     />
    //   </label>
    //   <label>
    //     Number
    //     <input
    //       type="tel"
    //       name="number"
    //       value={number}
    //       pattern="\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}"
    //       title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
    //       onChange={handleChange}
    //       required
    //     />
    //   </label>
    //   <button type="submit">Edit contact</button>
    //   <button type="button" onClick={cancelEdit}>
    //     Cancel
    //   </button>
    // </form>
  );
};

export default EditContactForm;
