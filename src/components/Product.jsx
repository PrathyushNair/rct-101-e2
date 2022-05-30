import React from "react";

const Product = ({el}) => {
  // TODO: Remove below const and instead import them from chakra
  // const Text = () => <div />;
  // const Image = () => <div />;
  // const Box = () => <div />;
  // const Stack = () => <div />;
  // const Heading = () => <div />;
  // const Tag = () => <div />;
  // const TagLabel = () => <div />;
  return (
    <div key ={el.id}data-cy="product">
        <img data-cy="product-image" />
        <p data-cy="product-category">{el.category}</p>
        <div>
          <p data-cy="product-gender">{el.gender}</p>
        </div>
        <h2 data-cy="product-title">{el.title}</h2>
        <h2 data-cy="product-price">{el.price}</h2>
    </div>
  );
};

export default Product;
