import React from 'react';
import { useDispatch, useSelector } from 'react-redux';

import AddedFeature from './AddedFeature';
import {removeFeature} from '../actions/actions';

const AddedFeatures = () => {
  const car = useSelector(state=>state.car);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h6>Added features:</h6>
      {car.features.length ? (
        <ol type="1">
          {car.features.map(item => (
            <AddedFeature key={item.id} feature={item} removeFeature={(i)=>{dispatch(removeFeature(i))}} />
          ))}
        </ol>
      ) : (
        <p>You can purchase items from the store.</p>
      )}
    </div>
  );
};

export default AddedFeatures;

