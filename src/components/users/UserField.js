import React from 'react';

const UserField = ({ id, type, text, onIsEdit, onEditUser }) => {
  return (
    <>{onIsEdit ? <input value={text} onChange={(event) => onEditUser(id, type, event)} /> : <span>{text}</span>}</>
  );
};

export default UserField;
