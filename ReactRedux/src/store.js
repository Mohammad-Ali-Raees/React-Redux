
import { configureStore } from '@reduxjs/toolkit'
import  AllReducers  from './Reducers'

//* Define A Complete Store  -- We have get root redcer from All Reducer
const store = configureStore({
    reducer: {
        AllReducers
    }

});

export default store