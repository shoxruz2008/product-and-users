import React from 'react';
import UserField from './UserField';

const User = ({ name, surname, age, isBan, id, onAddToBan, isEdit, onTogleMode, onEditUser }) => {
  return (
    <li className={isBan ? 'block' : ''}>
      Name :<UserField id={id} text={name} type={'name'} onEditUser={onEditUser} onIsEdit={isEdit} />
      <br />
      Surname:
      <UserField id={id} text={surname} type={'surname'} onEditUser={onEditUser} onIsEdit={isEdit} />
      <br />
      Age:
      <UserField id={id} text={age} type={'age'} onEditUser={onEditUser} onIsEdit={isEdit} />
      <br />
      Is ban? <span>{isBan ? 'Blocked' : 'Not blocked'}</span>
      <button onClick={() => onAddToBan(id)}>{!isBan ? 'Block' : 'Unblock'}</button>
      <br />
      Change the User <button onClick={() => onTogleMode(id)}>{isEdit ? 'save' : 'edit'}</button>
    </li>
  );
};

export default User;
