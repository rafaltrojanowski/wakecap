import React from 'react';
import './App.css';
import { Admin, Resource } from 'react-admin';
import { UserList } from './user-list';
import { UserShow } from './user-show';
import { UserEdit } from './user-edit';
import authProvider from './authProvider';
import dataProvider from './dataProvider';

const App = () => (
  <Admin authProvider={authProvider} dataProvider={dataProvider}>
    <Resource name="users" list={UserList} show={UserShow} edit={UserEdit} options={{ label: 'Workers' }} />
    <Resource name="helmets" />
  </Admin>
);

export default App;
