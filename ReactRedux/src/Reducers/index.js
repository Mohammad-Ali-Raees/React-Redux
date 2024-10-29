

import { combineReducers }  from '@reduxjs/toolkit';
import MyReducer  from './MyReducers';


//* Combine All Reducers
 const AllReducers = combineReducers({
    MyReducer
})

export default AllReducers;



