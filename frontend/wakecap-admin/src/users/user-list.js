import React from 'react';
import {
  List,
  Datagrid,
  TextField,
} from 'react-admin';
import { UserFilter } from './user-filter';

export class UserList extends React.Component {

  render() {
    const { props } = this;

    return (
      <List {...props} filters={<UserFilter />} title="Workers Overview ">
        <Datagrid rowClick="show">
          <TextField source="id" />
          <TextField source="name" />
        </Datagrid>
      </List>
    )
  }
}
