import React from 'react';
import ProductField from './ProductField';

const Product = ({ name, cost, id, changeField, catg }) => {
  return (
    <tr>
      <td>
        <ProductField id={id} text={name} type="name" changeField={changeField} />
      </td>
      <td>
        <ProductField id={id} text={cost} type="cost" changeField={changeField} />
      </td>
      <td>
        <ProductField id={id} text={catg} type="catg" changeField={changeField} />
      </td>
    </tr>
  );
};

export default Product;
