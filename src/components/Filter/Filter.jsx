import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
//import { Input, Title } from './Filter.styled';
import { setFilter } from 'redux/filterSlice';
import { selectFilter } from 'redux/selectors';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

const Filter = () => {
  const dispatch = useDispatch();

  const changeFilter = event => {
    dispatch(setFilter(event.target.value.toLowerCase()));
  };

  return (
    <Box
      component="div"
      sx={{
        '& .MuiTextField-root': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField
        id="outlined-multiline-static"
        label="Filter by name"
        type="text"
        name="filter"
        onChange={changeFilter}
        value={useSelector(selectFilter)}
      />
    </Box>
  );
};

//{/* <div>
//    <Title>Filter by name</Title>
//    <Input
//      type="text"
//    name="filter"
//     onChange={changeFilter}
//    value={useSelector(selectFilter)}
//   pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
//    title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
//  />
// </div> */}

export default Filter;
