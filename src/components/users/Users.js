import React, { useState } from 'react';
import uuid from 'react-uuid';
import User from './User';
const initUsers = [
  { id: uuid(), name: 'Shoxruz', surname: 'Otamurodov', age: 30, isBan: false, isEdit: false },
  { id: uuid(), name: 'Dinora', surname: 'Amrullayeva', age: 22, isBan: true, isEdit: false },
  { id: uuid(), name: 'Shaxlo', surname: 'Doniyorova', age: 52, isBan: false, isEdit: false },
];

const Users = () => {
  const [users, setUsers] = useState(initUsers);

  function addToBan(id) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user.isBan = !user.isBan;
          user.isEdit = false;
        }
        return user;
      })
    );
  }

  function togleMode(id) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          if (user.isBan) {
            return user;
          }
          user.isEdit = !user.isEdit;
        }
        return user;
      })
    );
  }

  function editUser(id, field, event) {
    setUsers(
      users.map((user) => {
        if (user.id === id) {
          user[field] = event.target.value;
        }
        return user;
      })
    );
  }
  const resultUser = users.map((user) => {
    return (
      <User
        key={user.id}
        name={user.name}
        surname={user.surname}
        age={user.age}
        isBan={user.isBan}
        id={user.id}
        isEdit={user.isEdit}
        onAddToBan={addToBan}
        onTogleMode={togleMode}
        onEditUser={editUser}
      />
    );
  });

  return (
    <div>
      <ul>{resultUser}</ul>
    </div>
  );
};

export default Users;
