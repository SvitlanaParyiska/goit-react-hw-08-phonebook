import React, { useState } from 'react';
//import { Button, Item } from './ContactItem.styled';
import { useDispatch } from 'react-redux';
import {
  deleteContact,
  fetchContacts,
  patchContact,
} from 'redux/contactsOperations';
import EditContactForm from 'components/EditContactForm/EditContactForm';
import { Button } from '@mui/material';
import { Avatar, Grid, Card, CardActions, CardHeader } from '@mui/material';
import { indigo } from '@mui/material/colors';

const ContactItem = ({ contact }) => {
  const [edit, setEdit] = useState(false);
  const dispatch = useDispatch();

  const handleDelete = async contactId => {
    try {
      await dispatch(deleteContact(contactId)).unwrap();
      dispatch(fetchContacts());
    } catch (error) {
      console.log(error);
    }
  };

  const editClick = () => {
    setEdit(true);
  };

  const handleEdit = async ({ name, number }) => {
    try {
      await dispatch(
        patchContact({ contactId: contact.id, name, number })
      ).unwrap();
      dispatch(fetchContacts());
      setEdit(false);
    } catch (error) {
      console.log(error);
    }
  };

  const cancelEdit = () => {
    setEdit(false);
  };

  return (
    <>
      <Grid item key={contact.id}>
        <Card sx={{ maxWidth: 500 }}>
          <CardHeader
            avatar={
              <Avatar sx={{ bgcolor: indigo[500] }} aria-label="contact">
                {contact.name?.at(0)?.toUpperCase()}
              </Avatar>
            }
            title={contact.name}
            subheader={contact.number}
          />
          <CardActions>
            <Button
              size="small"
              variant="outlined"
              type="button"
              sx={{ mr: 5 }}
              //variant="contained"
              color="primary"
              onClick={() => editClick()}
            >
              Edit
            </Button>
            <Button
              size="small"
              type="button"
              variant="contained"
              color="info"
              onClick={() => handleDelete(contact.id)}
            >
              Delete
            </Button>
          </CardActions>
        </Card>
      </Grid>

      {/* <Item>
        <p>
          {contact.name} : {contact.number}
        </p>
        <Button type="button" onClick={() => editClick()}>
          Edit
        </Button>
        <Button type="button" onClick={() => handleDelete(contact.id)}>
          Delete
        </Button>
      </Item> */}
      {edit && (
        <EditContactForm
          handleEdit={handleEdit}
          oldName={contact.name}
          oldNumber={contact.number}
          cancelEdit={cancelEdit}
        />
      )}
    </>
  );
};

export default ContactItem;
