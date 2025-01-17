import React from 'react';
import { useSelector } from 'react-redux';

const Total = () => {
  const {car, additionalPrice} = useSelector(state=>({car:state.car, additionalPrice:state.additionalPrice}));
  return (
    <div className="content">
      <h4>Total Amount: ${car.price + additionalPrice}</h4>
    </div>
  );
};

export default Total;
