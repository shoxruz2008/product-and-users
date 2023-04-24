import React, { useState } from 'react';

const ProductField = ({ id, text, type, changeField }) => {
  const [isEdit, setIsEdit] = useState(false);
  return (
    <>
      {isEdit ? (
        <input value={text} onChange={(event) => changeField(id, type, event)} onBlur={() => setIsEdit(false)} />
      ) : (
        <span onClick={() => setIsEdit(true)}>{text}</span>
      )}
      ,
    </>
  );
};

export default ProductField;
