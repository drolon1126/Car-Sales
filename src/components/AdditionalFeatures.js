import React from 'react';
import AdditionalFeature from './AdditionalFeature';
import { useSelector, useDispatch } from 'react-redux';
import {buyItem} from '../actions/actions';

const AdditionalFeatures = () => {

  const store = useSelector(state=>state.store);
  const dispatch = useDispatch();

  return (
    <div className="content">
      <h4>Additional Features</h4>
      {store.length ? (
        <ol type="1">
          {store.map(item => (
            <AdditionalFeature key={item.id} feature={item} buyItem={(i)=>{dispatch(buyItem(i))}} />
          ))}
        </ol>
      ) : (
        <p>Nice looking car!</p>
      )}
    </div>
  );
};

export default AdditionalFeatures;

