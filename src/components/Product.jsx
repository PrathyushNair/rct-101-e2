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
        <img style={{width:"100%"}} src="https://picsum.photos/seed/picsum2/421/261" data-cy="product-image" />
        <h3 data-cy="product-category">{el.category}</h3>
        <div>
          <h3 data-cy="product-gender">{el.gender}</h3>
        </div>
        <h3 data-cy="product-title">{el.title}</h3>
        <h3 data-cy="product-price">Rs{el.price}/unit</h3>
    </div>
  );
};

export default Product;
