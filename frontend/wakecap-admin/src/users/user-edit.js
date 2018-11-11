import React from 'react';
import {
  Edit,
  SimpleForm,
  DisabledInput,
  TextInput,
} from 'react-admin';

export const UserEdit = (props) => (
  <Edit {...props}>
    <SimpleForm>
      <DisabledInput source="id" />
      <TextInput source="name" />
    </SimpleForm>
  </Edit>
);
