import React, { useState } from 'react';
import uuid from 'react-uuid';
import Product from './Product';
const initProds = [
  { id: uuid(), name: 'product1', cost: 100, catg: 'catg1' },
  { id: uuid(), name: 'product2', cost: 200, catg: 'catg2' },
  { id: uuid(), name: 'product3', cost: 300, catg: 'catg3' },
];

const Products = () => {
  const [prods, setProds] = useState(initProds);

  function changeField(id, field, event) {
    setProds(
      prods.map((prod) => {
        if (prod.id === id) {
          prod[field] = event.target.value;
        }

        return prod;
      })
    );
  }

  const rows = prods.map((prod) => {
    return (
      <Product
        key={prod.id}
        name={prod.name}
        cost={prod.cost}
        id={prod.id}
        catg={prod.catg}
        changeField={changeField}
      />
    );
  });
  return (
    <div>
      <table>
        <tbody>{rows}</tbody>
      </table>
    </div>
  );
};

export default Products;
